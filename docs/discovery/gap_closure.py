"""Bounded Phase 0 supplement; public GETs only, never execute source code.

Collect only unchecked PDF references, three homepage variants and the evidenced
careers destination. Keep metadata/hashes, discard bodies/cookies, and never
overwrite the original audit or an existing supplemental collection.
"""
import concurrent.futures
import argparse
import csv
import datetime as dt
import hashlib
import json
import re
import subprocess
import tempfile
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUT = ROOT / 'evidence' / '2026-10-07-gap-closure-01'


def now():
    return dt.datetime.now(dt.timezone.utc).isoformat(timespec='seconds')


class Metadata(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = []
        self.in_title = False
        self.meta = {}
        self.canonicals = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'title':
            self.in_title = True
        elif tag == 'meta':
            key = attrs.get('name') or attrs.get('property')
            if key and key.lower() in ('description', 'robots', 'og:title', 'og:description', 'og:image'):
                self.meta[key.lower()] = attrs.get('content', '')
        elif tag == 'link' and 'canonical' in attrs.get('rel', '').split():
            self.canonicals.append(attrs.get('href', ''))

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False

    def handle_data(self, data):
        if self.in_title:
            self.title.append(data)


def collect(item):
    url, kind, source = item
    started = now()
    with tempfile.TemporaryDirectory(prefix='sterling-public-gap-') as tmp:
        body, headers = Path(tmp) / 'body', Path(tmp) / 'headers'
        command = ['curl.exe', '--globoff', '--silent', '--show-error', '--noproxy', '*',
                   '--location', '--max-redirs', '5', '--proto', '=http,https',
                   '--proto-redir', '=http,https', '--connect-timeout', '10',
                   '--max-time', '30', '--max-filesize', '12000000',
                   '--dump-header', str(headers), '--output', str(body),
                   '--write-out', '%{json}', url]
        proc = subprocess.run(command, capture_output=True, text=True, timeout=40)
        info = json.loads(proc.stdout or '{}')
        data = body.read_bytes() if body.exists() else b''
        public_headers = [line for line in headers.read_text(encoding='utf-8', errors='replace').splitlines()
                          if line.startswith('HTTP/') or re.match(
                              r'(?i)(date|location|content-type|content-length|last-modified|x-robots-tag):', line)] if headers.exists() else []
        record = dict(source_url=url, kind=kind, discovered_from=source,
                      observed_at=started, completed_at=now(),
                      access_method='curl.exe bounded public GET; bodies discarded; no site code executed',
                      http_status=info.get('http_code', 0), effective_url=info.get('url_effective', ''),
                      content_type=info.get('content_type', ''), curl_exit_code=proc.returncode,
                      error=proc.stderr.strip(), response_headers=public_headers,
                      size_bytes=len(data), sha256=hashlib.sha256(data).hexdigest() if data else '',
                      body_complete=proc.returncode == 0, pdf_signature=data.startswith(b'%PDF-'))
        if kind != 'pdf' and 'html' in (record['content_type'] or '') and proc.returncode == 0:
            parser = Metadata()
            parser.feed(data.decode('utf-8', errors='replace'))
            record['html_metadata'] = dict(title=''.join(parser.title).strip(), meta=parser.meta, canonicals=parser.canonicals)
    path = OUT / (hashlib.sha256(url.encode()).hexdigest()[:16] + '.json')
    path.write_text(json.dumps(record, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
    return record


def write_csv(name, fields, rows):
    with (ROOT / name).open('w', encoding='utf-8', newline='') as handle:
        writer = csv.DictWriter(handle, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)


def apply_evidence():
    records = [json.loads(p.read_text(encoding='utf-8')) | {'evidence': p.relative_to(ROOT.parent.parent).as_posix()}
               for p in sorted(OUT.glob('*.json')) if p.name != 'summary.json' and p.name != 'verification.json']
    assert len(records) == 25 and len({r['source_url'] for r in records}) == 25
    pdfs = {r['source_url']: r for r in records if r['kind'] == 'pdf'}
    with (ROOT / 'assets.csv').open(encoding='utf-8-sig', newline='') as handle:
        reader = csv.DictReader(handle)
        fields, rows = list(reader.fieldnames), list(reader)
    for field in ('availability_checked_at', 'availability_evidence'):
        if field not in fields:
            fields.append(field)
    for row in rows:
        if row['source_url'] not in pdfs:
            continue
        record = pdfs[row['source_url']]
        assert record['body_complete'] and record['http_status'] == 200 and record['pdf_signature']
        row.update(size_bytes=str(record['size_bytes']), sha256=record['sha256'], http_status='200',
                   validation_status='HTTP 200; PDF signature and byte hash only; decode/content/malware validation pending',
                   availability_checked_at=record['observed_at'], availability_evidence=record['evidence'])
        refs = row['evidence'].split('; ')
        row['evidence'] = '; '.join(dict.fromkeys(refs + [record['evidence']]))
    write_csv('assets.csv', fields, rows)
    variants = [r for r in records if r['kind'] == 'homepage-variant']
    variant_refs = '; '.join(r['evidence'] for r in variants)
    for name, key in (('routes.csv', 'old_url'), ('seo.csv', 'page_url')):
        with (ROOT / name).open(encoding='utf-8-sig', newline='') as handle:
            reader = csv.DictReader(handle)
            fields, rows = list(reader.fieldnames), list(reader)
        for field in ('variant_checked_at', 'variant_evidence'):
            if field not in fields:
                fields.append(field)
        home = next(row for row in rows if row[key] == 'https://sterlingandwilsondc.com/')
        home.update(variant_checked_at=max(r['observed_at'] for r in variants), variant_evidence=variant_refs)
        write_csv(name, fields, rows)
    variant_rows = []
    for r in variants:
        statuses = [line for line in r['response_headers'] if line.startswith('HTTP/')]
        variant_rows.append(dict(source_url=r['source_url'], observed_at=r['observed_at'],
                                 access_method=r['access_method'], redirect_chain=' -> '.join(statuses),
                                 effective_url=r['effective_url'], final_status=r['http_status'],
                                 canonical='; '.join(r['html_metadata']['canonicals']), evidence=r['evidence'],
                                 status='Observed homepage alias only; deep paths and cutover configuration unverified'))
    write_csv('url_variants.csv', list(variant_rows[0]), variant_rows)
    with (ROOT / 'interactions.csv').open(encoding='utf-8-sig', newline='') as handle:
        reader = csv.DictReader(handle)
        fields, rows = list(reader.fieldnames), list(reader)
    portal = next(r for r in records if r['kind'] == 'careers-destination')
    rows = [r for r in rows if r['element'] != 'careers-destination-public-availability']
    rows.append(dict(page_url='https://sterlingandwilsondc.com/careers/',
                     element='careers-destination-public-availability', trigger='Read-only GET of evidenced Apply Now URL',
                     expected_behavior='HTTP 200 HTML shell; title Sterling & Wilson Data Centre Private Limited; does not verify jobs/application behavior',
                     mobile_behavior='Not browser tested in this supplement', keyboard_behavior='Not tested in this supplement',
                     integration=portal['source_url'], evidence=portal['evidence'],
                     status='Public availability observed; portal ownership and end-to-end flow pending',
                     observed_at=portal['observed_at'], access_method=portal['access_method']))
    write_csv('interactions.csv', fields, rows)
    print('Applied 25 supplemental checks; original source dates and approval fields preserved')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--apply', action='store_true', help='Merge existing supplement into manifests offline; no network')
    args = parser.parse_args()
    if args.apply:
        apply_evidence()
        return
    assets = list(csv.DictReader((ROOT / 'assets.csv').open(encoding='utf-8-sig', newline='')))
    targets = [(r['source_url'], 'pdf', r['used_on']) for r in assets
               if r['media_type'] == 'pdf' and not r['sha256']]
    assert len(targets) == 21, 'Expected original 21 unchecked PDFs; do not silently change scope'
    targets += [(url, 'homepage-variant', 'Owner-requested HTTP/www evidence gap') for url in (
        'http://sterlingandwilsondc.com/', 'http://www.sterlingandwilsondc.com/',
        'https://www.sterlingandwilsondc.com/')]
    careers = json.loads((ROOT / 'evidence/2026-10-07/22fce228e9571e0b.json').read_text(encoding='utf-8'))
    portals = {r['url'] for r in careers['html']['links'] if r['url'].startswith('https://sterlingone.darwinbox.in/')}
    assert len(portals) == 1
    targets.append((portals.pop(), 'careers-destination', careers['source_url']))
    OUT.mkdir(exist_ok=False)
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
        records = list(pool.map(collect, targets))
    summary = dict(observed_at=now(), objective='21 unchecked PDFs, three homepage variants, one careers destination',
                   request_count=len(records), pdf_count=sum(r['kind'] == 'pdf' for r in records),
                   completed=sum(r['curl_exit_code'] == 0 for r in records),
                   limits='12 MB/body, 30 seconds/request, five redirects; no document decoding, malware scan, ownership, browser behavior or application submissions verified',
                   outcomes=[{k: r[k] for k in ('source_url', 'kind', 'http_status', 'effective_url', 'curl_exit_code', 'pdf_signature')} for r in records])
    (OUT / 'summary.json').write_text(json.dumps(summary, indent=2) + '\n', encoding='utf-8')
    print(json.dumps(summary))


if __name__ == '__main__':
    main()
