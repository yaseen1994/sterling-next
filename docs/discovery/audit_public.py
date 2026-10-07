"""Phase 0 only: bounded read-only public crawl via curl; never execute site code.

Run --fetch with authorized network access. Run --summarize offline.
Extracted evidence omits hidden input values, cookies and inline executable code.
"""
import argparse
import concurrent.futures
import datetime as dt
import hashlib
import json
import re
import subprocess
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, urlunsplit
import xml.etree.ElementTree as ET

BASE = 'https://sterlingandwilsondc.com/'
HOST = urlsplit(BASE).netloc
ROOT = Path(__file__).resolve().parent
OUT = ROOT / 'evidence' / '2026-10-07'
NS = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}

def now():
    return dt.datetime.now(dt.timezone.utc).isoformat(timespec='seconds')

def save(path, value):
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

def normalize(url):
    p = urlsplit(url)
    return urlunsplit((p.scheme, p.netloc, p.path or '/', p.query, ''))

def page_url(url):
    p = urlsplit(url)
    return (p.scheme == 'https' and p.netloc == HOST and not p.query
            and not p.path.startswith(('/wp-', '/feed', '/author/'))
            and not re.search(r'\.(pdf|jpe?g|png|gif|svg|webp|mp4|zip|css|js|woff2?|ttf|ico)$', p.path, re.I))

class Extract(HTMLParser):
    def __init__(self, url):
        super().__init__(convert_charrefs=True)
        self.url = url
        self.stack = []
        self.items = []
        self.meta = {}
        self.canonical = []
        self.resources = []
        self.fields = []
        self.forms = []
        self.widgets = []
        self.iframes = []
        self.text = []
        self.ld = []
        self.script = None
        self.settings_resources = []

    def handle_starttag(self, tag, pairs):
        a = dict(pairs)
        if a.get('data-settings'):
            try:
                settings = json.loads(a['data-settings'])
                def references(value):
                    if isinstance(value, dict):
                        for child in value.values():
                            references(child)
                    elif isinstance(value, list):
                        for child in value:
                            references(child)
                    elif isinstance(value, str) and value.startswith('https://'):
                        self.settings_resources.append({'url': value, 'kind': 'data-settings-reference'})
                references(settings)
            except ValueError:
                pass
        if tag == 'meta':
            key = a.get('name') or a.get('property')
            if key:
                self.meta[key.lower()] = a.get('content', '')
        if tag == 'link':
            rel = a.get('rel', '')
            if 'canonical' in rel:
                self.canonical.append(urljoin(self.url, a.get('href', '')))
            if 'stylesheet' in rel or 'icon' in rel:
                self.resources.append({'url': urljoin(self.url, a.get('href', '')), 'kind': rel})
        if tag in ('img', 'video', 'source'):
            for key in ('src', 'data-src', 'poster'):
                if a.get(key):
                    self.resources.append({'url': urljoin(self.url, a[key]), 'kind': tag + ':' + key, 'alt': a.get('alt', ''), 'width': a.get('width', ''), 'height': a.get('height', '')})
            for key in ('srcset', 'data-srcset'):
                for part in a.get(key, '').split(','):
                    if part.strip():
                        self.resources.append({'url': urljoin(self.url, part.strip().split()[0]), 'kind': tag + ':' + key})
        if tag == 'iframe':
            self.iframes.append({k: a[k] for k in ('src', 'title', 'loading') if k in a})
        if tag == 'form':
            self.forms.append({k: a[k] for k in ('action', 'method', 'enctype', 'class', 'id', 'name') if k in a})
        if tag in ('input', 'select', 'textarea') and a.get('type') != 'hidden':
            self.fields.append({'tag': tag, **{k: a[k] for k in ('name', 'type', 'id', 'placeholder', 'required', 'accept', 'multiple', 'aria-label') if k in a}})
        if a.get('data-widget_type'):
            self.widgets.append({'type': a['data-widget_type'], 'id': a.get('data-id', '')})
        if tag == 'script':
            self.script = {'type': a.get('type', ''), 'data': []}
            if a.get('src'):
                self.resources.append({'url': urljoin(self.url, a['src']), 'kind': 'script-reference-only'})
        node = {'tag': tag, 'text': [], 'attrs': {k: a[k] for k in ('href', 'class', 'id', 'role', 'aria-label', 'tabindex') if k in a}}
        if tag not in ('img', 'input', 'meta', 'link', 'br', 'hr', 'source', 'wbr', 'area', 'embed', 'param'):
            self.stack.append(node)

    def handle_endtag(self, tag):
        if tag == 'script' and self.script:
            if self.script['type'] == 'application/ld+json':
                try:
                    self.ld.append(json.loads(''.join(self.script['data'])))
                except ValueError:
                    self.ld.append({'parse_error': True})
            self.script = None
        index = next((i for i in range(len(self.stack)-1, -1, -1) if self.stack[i]['tag'] == tag), None)
        if index is None:
            return
        nodes = self.stack[index:]
        del self.stack[index:]
        for n in nodes:
            text = re.sub(r'\s+', ' ', ''.join(n['text'])).strip()
            if n['tag'] in ('title', 'h1', 'h2', 'h3', 'h4', 'a', 'button', 'label', 'option', 'p', 'li', 'summary'):
                self.items.append({'tag': n['tag'], 'text': text, **n['attrs']})

    def handle_data(self, data):
        if self.script:
            self.script['data'].append(data)
            return
        if any(n['tag'] in ('style', 'noscript') for n in self.stack):
            return
        for n in self.stack:
            n['text'].append(data)
        clean = re.sub(r'\s+', ' ', data).strip()
        if clean:
            self.text.append(clean)

    def result(self, html):
        for value in re.findall(r'url\(\s*[\"\']?([^\)\"\']+)', html):
            if not value.startswith(('data:', '#')):
                self.resources.append({'url': urljoin(self.url, value.strip()), 'kind': 'css-url-literal'})
        links = []
        for item in self.items:
            if item['tag'] == 'a' and item.get('href'):
                links.append({**item, 'url': urljoin(self.url, item['href'])})
        resources = list({(x['url'], x['kind']): x for x in self.resources + self.settings_resources if not x['url'].startswith('data:')}.values())
        return {'title': next((x['text'] for x in self.items if x['tag'] == 'title'), ''),
                'meta': self.meta, 'canonicals': self.canonical,
                'headings': [x for x in self.items if re.fullmatch('h[1-4]', x['tag'])],
                'links': links, 'content_blocks': [x for x in self.items if x['tag'] in ('p', 'li')],
                'text_nodes': self.text, 'controls': [x for x in self.items if x['tag'] in ('button', 'label', 'option', 'summary')],
                'forms': self.forms, 'fields': self.fields, 'widgets': self.widgets,
                'resources': resources, 'iframes': self.iframes, 'structured_data': self.ld}

def fetch(url, discoveries):
    key = hashlib.sha256(url.encode()).hexdigest()[:16]
    head = OUT / (key + '.headers.tmp')
    body = OUT / (key + '.body.tmp')
    observed = now()
    command = ['curl.exe', '--silent', '--show-error', '--location', '--max-redirs', '5',
               '--proto', '=https', '--proto-redir', '=https', '--connect-timeout', '10', '--max-time', '30',
               '--max-filesize', '12000000', '--dump-header', str(head), '--output', str(body),
               '--write-out', '%{json}', url]
    try:
        proc = subprocess.run(command, capture_output=True, text=True, timeout=40)
        try:
            info = json.loads(proc.stdout)
        except ValueError:
            info = {}
        headers = head.read_text(encoding='utf-8', errors='replace') if head.exists() else ''
        payload = body.read_bytes() if body.exists() else b''
        # Keep only non-sensitive response evidence, never cookies.
        public_headers = [x for x in headers.splitlines() if x.startswith('HTTP/') or re.match(r'(?i)(date|content-type|location|x-robots-tag|last-modified|content-length|link):', x)]
        record = {'source_url': url, 'observed_at_utc': observed, 'completed_at_utc': now(),
                  'access_method': 'curl.exe public HTTPS GET; no site code executed',
                  'discovered_from': sorted(discoveries), 'http_status': info.get('http_code', 0),
                  'effective_url': info.get('url_effective', ''), 'content_type': info.get('content_type', ''),
                  'curl_exit_code': proc.returncode, 'error': proc.stderr.strip(),
                  'response_headers': public_headers, 'size_bytes': len(payload),
                  'response_sha256': hashlib.sha256(payload).hexdigest() if payload else ''}
        content_type = record['content_type'] or ''
        if payload and ('html' in content_type):
            html = payload.decode('utf-8', errors='replace')
            parser = Extract(record['effective_url'] or url)
            parser.feed(html)
            record['html'] = parser.result(html)
        elif payload and ('xml' in content_type or url.endswith('.xml')):
            record['xml_text'] = payload.decode('utf-8', errors='replace')
        elif payload and url.endswith('robots.txt'):
            record['text'] = payload.decode('utf-8', errors='replace')
        elif payload and '.css' in urlsplit(url).path:
            record['text'] = payload.decode('utf-8', errors='replace')
        elif payload:
            record['first_16_bytes_hex'] = payload[:16].hex()
        save(OUT / (key + '.json'), record)
        return record
    finally:
        head.unlink(missing_ok=True)
        body.unlink(missing_ok=True)

def crawl():
    OUT.mkdir(parents=True, exist_ok=True)
    pending = {BASE: {'audit seed'}, urljoin(BASE, 'robots.txt'): {'audit seed'},
               urljoin(BASE, 'sitemap_index.xml'): {'common endpoint probe'}}
    seen = set()
    # Four requests at a time, 250-request hard limit; no WP APIs/admin/login or submissions.
    while pending and len(seen) < 250:
        batch = [(u, src) for u, src in sorted(pending.items()) if u not in seen][:min(4, 250-len(seen))]
        if not batch:
            break
        with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
            records = list(pool.map(lambda x: fetch(*x), batch))
        for record in records:
            url = record['source_url']
            seen.add(url)
            pending.pop(url, None)
            candidates = []
            if record.get('text') and url.endswith('robots.txt'):
                candidates += re.findall(r'(?im)^Sitemap:\s*(\S+)', record['text'])
            if record.get('xml_text') and record['http_status'] == 200:
                xml = ET.fromstring(record['xml_text'])
                candidates += [x.text for x in xml.findall('.//s:loc', NS) if x.text]
            if record.get('html') and record['http_status'] == 200:
                candidates += [x['url'] for x in record['html']['links']]
            for candidate in candidates:
                candidate = normalize(candidate)
                is_sitemap = candidate.startswith(BASE + 'wp-sitemap') and candidate.endswith('.xml')
                if (page_url(candidate) or is_sitemap) and candidate not in seen:
                    pending.setdefault(candidate, set()).add(url)
            print(f"{record['http_status']} {url}", flush=True)
    save(OUT / 'crawl-boundary.json', {'completed_at_utc': now(), 'limit': 250,
         'attempted': len(seen), 'unfetched_at_limit': {k: sorted(v) for k,v in pending.items() if k not in seen},
         'scope': 'sitemap + recursive same-host HTTPS anchor links without queries; no admin/API/author/feed crawl; references do not establish legitimacy'})

def summarize():
    records = [json.loads(p.read_text(encoding='utf-8')) for p in sorted(OUT.glob('*.json')) if p.name != 'crawl-boundary.json']
    records = [r for r in records if isinstance(r, dict) and 'source_url' in r and 'http_status' in r]
    print(json.dumps({'requests': len(records), 'statuses': {str(code): sum(r['http_status'] == code for r in records) for code in sorted({r['http_status'] for r in records})},
          'pages': [{'url':r['source_url'], 'status':r['http_status'], 'title':r.get('html',{}).get('title',''), 'headings':[h['text'] for h in r.get('html',{}).get('headings',[]) if h['tag']=='h1'], 'forms':len(r.get('html',{}).get('forms',[]))} for r in records if r.get('html')],
          'sitemaps': [{'url':r['source_url'],'xml':r['xml_text']} for r in records if r.get('xml_text')]},ensure_ascii=False,indent=2))

def resource_checks():
    urls = [
        BASE + 'wp-content/uploads/2026/06/SWDC-1.jpg',
        BASE + 'wp-content/uploads/2025/08/Our-Company.jpg',
        BASE + 'wp-content/uploads/2026/02/mobile-menu1.webp',
        BASE + 'wp-content/uploads/2025/12/SW-HSE-Policy-June-2025.pdf',
        BASE + 'wp-content/uploads/2026/10/Corporate-Social-Responsibility-CSR-Policy.pdf',
        BASE + 'wp-content/uploads/2026/10/FY-2024-25.pdf',
        BASE + 'wp-content/uploads/2026/10/FY-2023-24-1.pdf',
        BASE + 'wp-content/uploads/elementor/google-fonts/css/livvic.css?ver=1742385286',
    ]
    for url in urls:
        source_pages = []
        for p in OUT.glob('*.json'):
            record = json.loads(p.read_text(encoding='utf-8'))
            if not isinstance(record, dict) or not record.get('html'):
                continue
            refs = record['html']['links'] + record['html']['resources']
            if any(x['url'] == url for x in refs):
                source_pages.append(record['source_url'])
        if not source_pages:
            raise ValueError('Resource must have a recorded public source: ' + url)
        record = fetch(url, source_pages)
        print(f"{record['http_status']} {url} {record['size_bytes']} bytes", flush=True)

if __name__ == '__main__':
    args = argparse.ArgumentParser()
    args.add_argument('--fetch', action='store_true')
    args.add_argument('--summarize', action='store_true')
    args.add_argument('--resource-checks', action='store_true')
    options = args.parse_args()
    if options.fetch:
        crawl()
    if options.summarize:
        summarize()
    if options.resource_checks:
        resource_checks()
