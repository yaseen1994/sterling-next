"""Generate discovery CSVs offline from dated source evidence; no network access."""
import collections
import csv
import hashlib
import json
from pathlib import Path
import re
from urllib.parse import urlsplit
import xml.etree.ElementTree as ET
from audit_public import BASE, HOST, OUT, ROOT, normalize

PREFIX = 'docs/discovery/evidence/2026-10-07/'
records = {}
paths = {}
for path in OUT.glob('*.json'):
    record = json.loads(path.read_text(encoding='utf-8'))
    if isinstance(record, dict) and 'source_url' in record and 'http_status' in record:
        records[record['source_url']] = record
        paths[record['source_url']] = PREFIX + path.name

# Reconcile all incoming sources, including sitemaps fetched after a page.
incoming = collections.defaultdict(set)
sitemap_urls = set()
for url, r in records.items():
    for link in r.get('html', {}).get('links', []):
        incoming[normalize(link['url'])].add(url)
    if 'xml_text' in r:
        tree = ET.fromstring(r['xml_text'])
        locs = {x.text for x in tree.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc') if x.text}
        for loc in locs:
            incoming[loc].add(url)
        if tree.tag.endswith('urlset'):
            sitemap_urls.update(locs)

primary = {'/', '/about-us/', '/awards-recognitions/', '/leadership/',
           '/industry-memberships-and-recognitions/', '/corporate-governance/', '/projects/',
           '/design-build/', '/modular-construction/', '/smart-operations/', '/sustainable-execution/',
           '/om-services/', '/news-press-release/', '/events/', '/blogs/', '/careers/', '/contact/', '/privacy-policy/'}
review = {'/our-team/', '/faqs/', '/careers-2/', '/newsroom/', '/knowledge-corner/',
          '/testing-page/', '/test-project-page/', '/thumbnail-slider/', '/home-2-copy/',
          '/projects-2-copy/', '/sustainable-execution-duplicate/', '/home-duplicate/',
          '/smart-operations-old-2/', '/home-copy/'}
families = {
    '/': 'home', '/projects/': 'project-listing', '/about-us/': 'corporate-overview',
    '/leadership/': 'leadership-listing', '/our-team/': 'leadership-listing',
    '/awards-recognitions/': 'award-gallery', '/industry-memberships-and-recognitions/': 'membership-gallery',
    '/corporate-governance/': 'governance-downloads', '/news-press-release/': 'news-and-press-year-galleries',
    '/events/': 'event-media-galleries', '/blogs/': 'blog-listing', '/careers/': 'careers-portal-link',
    '/contact/': 'contact-enquiry', '/privacy-policy/': 'legal-content', '/faqs/': 'legacy-faq',
}

def family(url, r):
    p = urlsplit(url).path
    if p in families:
        return families[p]
    if p in ('/design-build/', '/modular-construction/', '/smart-operations/', '/sustainable-execution/', '/om-services/'):
        return 'service-landing (page-specific sections)'
    if p.startswith('/portfolios/'):
        return 'project-detail'
    if p.startswith('/teams/'):
        return 'team-profile'
    if p.startswith(('/category/', '/portfolio-category/', '/team-category/', '/testimonial-category/')):
        return 'taxonomy-archive'
    if p.startswith('/testimonials/'):
        return 'testimonial-detail'
    if p.startswith('/elementor-hf/'):
        return 'published-template-redirect'
    if p in review:
        return 'legacy-or-duplicate (approval required)'
    if p.endswith('.xml') or p.endswith('robots.txt'):
        return 'discovery-endpoint'
    if r['http_status'] == 404:
        return 'missing-reference'
    return 'blog-article'

def write_csv(name, columns, rows):
    with (ROOT / name).open('w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=columns)
        writer.writeheader()
        writer.writerows(rows)

route_rows = []
seo_rows = []
resource_rows = collections.defaultdict(lambda: {'pages': set(), 'kinds': set(), 'evidence': set(), 'dates': set()})
interaction_rows = []
for url, r in sorted(records.items()):
    p = urlsplit(url).path
    h = r.get('html', {})
    is_discovery = p.endswith('.xml') or p.endswith('robots.txt')
    is_content = bool(h) and not is_discovery
    sources = sorted(s for s in incoming[url] | set(r.get('discovered_from', [])) if s.startswith('https://')) or [url]
    f = family(url, r)
    if is_content or is_discovery:
        if is_discovery:
            action, target = 'Discovery evidence only; publish fresh intended robots/sitemap later', ''
        elif r['http_status'] == 404:
            action, target = 'Owner to confirm intended replacement or deliberate 404; no redirect chosen', ''
        elif urlsplit(r['effective_url']).path != p:
            action, target = 'Review existing redirect and intended disposition', r['effective_url']
        elif p in review or p.startswith(('/teams/', '/testimonials/', '/category/', '/portfolio-category/', '/team-category/', '/testimonial-category/')):
            action, target = 'Hold disposition; owner approves retain/redirect/retire after SEO evidence', ''
        else:
            action, target = 'Propose preserve exact URL and owner-approved content', url
        route_rows.append(dict(old_url=url, page_type=('infrastructure' if is_discovery else f), template=f,
            source_url='; '.join(sources), observed_at=r['observed_at_utc'], http_status=r['http_status'],
            title=h.get('title', ''), description=h.get('meta', {}).get('description', ''),
            canonical='; '.join(h.get('canonicals', [])), robots=h.get('meta', {}).get('robots', ''),
            heading=' | '.join(x['text'] for x in h.get('headings', []) if x['tag']=='h1'),
            evidence=paths[url], proposed_action=action, target_url=target, owner_approval='pending',
            status=('fetched; classification provisional' if r['http_status']==200 else 'HTTP 404 observed'),
            access_method=r['access_method'], effective_url=r['effective_url'],
            sitemap_listed='yes' if url in sitemap_urls else 'no', notes='Source text includes hidden/legacy blocks; not approved copy.' if is_content else ''))
    if is_content:
        meta = h['meta']
        internal = sorted({normalize(x['url']) for x in h['links'] if urlsplit(x['url']).netloc == HOST})
        seo_rows.append(dict(page_url=url, title=h['title'], description=meta.get('description',''),
            canonical='; '.join(h['canonicals']), robots=meta.get('robots',''),
            og_title=meta.get('og:title',''), og_description=meta.get('og:description',''), og_image=meta.get('og:image',''),
            structured_data=json.dumps(h['structured_data'],ensure_ascii=False) if h['structured_data'] else '',
            internal_links='; '.join(internal), evidence=paths[url], status='source fields inspected; indexation/backlinks unverified',
            observed_at=r['observed_at_utc'], access_method=r['access_method'],
            h1_count=sum(x['tag']=='h1' for x in h['headings']), http_status=r['http_status'],
            x_robots_tag='; '.join(x for x in r['response_headers'] if x.lower().startswith('x-robots-tag:')),
            missing_fields='; '.join(k for k in ('description','og:title','og:description','og:image') if not meta.get(k))))
        for x in h['resources'] + h['links']:
            u = x['url']
            split = urlsplit(u)
            if split.scheme not in ('https','http') or split.fragment:
                continue
            if x.get('tag') == 'a' and not re.search(r'\.(pdf|jpe?g|png|gif|svg|webp|mp4|zip)$',split.path,re.I):
                continue
            entry = resource_rows[u]
            entry['pages'].add(url)
            entry['kinds'].add(x.get('kind','download-link'))
            entry['evidence'].add(paths[url])
            entry['dates'].add(r['observed_at_utc'])
        for n, form in enumerate(h['forms'],1):
            interaction_rows.append(dict(page_url=url,element=f'HTML form {n}: '+form.get('class',''),trigger='Not submitted',
                expected_behavior='Source form found; visible flow must be distinguished from hidden/legacy HTML',
                mobile_behavior='See browser observations for representative pages; otherwise untested',keyboard_behavior='Not submitted or delivery-tested',
                integration=json.dumps(form,ensure_ascii=False),evidence=paths[url],status='HTML observed only; not necessarily visible',
                observed_at=r['observed_at_utc'],access_method=r['access_method']))
        counts = collections.Counter(x['type'] for x in h['widgets'])
        interesting = {k:v for k,v in counts.items() if any(s in k for s in ('accordion','carousel','slider','gallery','counter','video','flip-box'))}
        for widget,count in sorted(interesting.items()):
            interaction_rows.append(dict(page_url=url,element=f'{widget} ({count} source widgets)',trigger='HTML widget reference; runtime unverified except dated browser evidence',
                expected_behavior='Inspect live approved variant before implementation',mobile_behavior='Not exhaustively tested',keyboard_behavior='Not exhaustively tested',
                integration='Legacy widget identifier is evidence only; do not import code',evidence=paths[url],status='HTML observed; behavior not inferred',
                observed_at=r['observed_at_utc'],access_method=r['access_method']))

# Include the hero video observed in the live DOM and fonts referenced by the
# one inspected font stylesheet. Other stylesheet dependencies are out of scope.
runtime_path = OUT/'browser-runtime-references.json'
if runtime_path.exists():
    runtime = json.loads(runtime_path.read_text(encoding='utf-8'))
    for x in runtime['resources']:
        if x.get('url'):
            entry = resource_rows[x['url']]
            entry['pages'].add(runtime['source_url'])
            entry['kinds'].add(x['kind'])
            entry['evidence'].add(PREFIX+runtime_path.name)
            entry['dates'].add(runtime['observed_at_utc'])
initial_path = OUT/'home-initial-resources.json'
if initial_path.exists():
    initial = json.loads(initial_path.read_text(encoding='utf-8'))
    for x in initial['resources']:
        if x['kind'] != 'data-settings-reference':
            continue
        entry = resource_rows[x['url']]
        entry['pages'].add(initial['source_context'])
        entry['kinds'].add(x['kind'])
        entry['evidence'].add(PREFIX+initial_path.name)
        entry['dates'].add(initial['observed_at_utc'])
for url, r in records.items():
    if '.css' in urlsplit(url).path and r.get('text'):
        from urllib.parse import urljoin
        for ref in re.findall(r'url\([\"\']?([^\)\"\']+)',r['text']):
            entry = resource_rows[urljoin(url,ref)]
            entry['pages'].add(url)
            entry['kinds'].add('font-stylesheet-reference')
            entry['evidence'].add(paths[url])
            entry['dates'].add(r['observed_at_utc'])

assets = []
for url, x in sorted(resource_rows.items()):
    checked = records.get(url,{})
    extension = urlsplit(url).path.rsplit('.',1)[-1].lower()
    kind = 'legacy-script (reference only; do not reuse)' if 'script-reference-only' in x['kinds'] else ('stylesheet-reference' if extension=='css' else extension)
    if urlsplit(url).netloc in ('youtu.be','www.youtube.com'):
        kind = 'external-video-reference'
    check = 'not fetched; reference observed only'
    if checked:
        check = 'HTTP '+str(checked['http_status'])+'; byte hash and '+('stylesheet text inspected' if checked.get('text') else 'file-signature only; decode/content/malware validation pending')
    assets.append(dict(source_url=url,used_on='; '.join(sorted(x['pages'])),media_type=kind,local_path='',
        size_bytes=checked.get('size_bytes',''),sha256=checked.get('response_sha256',''),permission_status='owner permission pending',
        validation_status=check,notes='Kinds: '+', '.join(sorted(x['kinds']))+'; no asset approved or reused.',
        observed_at=checked.get('observed_at_utc',min(x['dates'])),access_method=checked.get('access_method','public HTML reference extraction'),
        evidence='; '.join(sorted(x['evidence'] | ({paths[url]} if url in paths else set()))),http_status=checked.get('http_status','')))

browser_path = OUT/'browser-observations.json'
browser = json.loads(browser_path.read_text(encoding='utf-8')) if browser_path.exists() else []
for b in browser:
    interaction_rows.append(dict(page_url=b['source_url'],element=b['screenshot'].rsplit('.',1)[0],trigger=b['action'],
        expected_behavior=b['findings'],mobile_behavior=('Observed at '+str(b['viewport']) if b['viewport']['width']<1000 else 'See separate mobile captures'),
        keyboard_behavior=('Observed key action: '+b['action'] if any(s in b['action'] for s in ('Enter','Escape','keyboard')) else 'No complete keyboard traversal'),
        integration='No live form submission, upload or mail delivery',evidence=PREFIX+b['screenshot']+'; '+PREFIX+b['accessibility_snapshot']+'; '+PREFIX+'browser-observations.json',
        status='live UI observed; limited to recorded state',observed_at=b['observed_at_utc'],access_method=b['access_method']))

write_csv('routes.csv', 'old_url,page_type,template,source_url,observed_at,http_status,title,description,canonical,robots,heading,evidence,proposed_action,target_url,owner_approval,status,access_method,effective_url,sitemap_listed,notes'.split(','), route_rows)
write_csv('seo.csv','page_url,title,description,canonical,robots,og_title,og_description,og_image,structured_data,internal_links,evidence,status,observed_at,access_method,h1_count,http_status,x_robots_tag,missing_fields'.split(','),seo_rows)
write_csv('assets.csv','source_url,used_on,media_type,local_path,size_bytes,sha256,permission_status,validation_status,notes,observed_at,access_method,evidence,http_status'.split(','),assets)
write_csv('interactions.csv','page_url,element,trigger,expected_behavior,mobile_behavior,keyboard_behavior,integration,evidence,status,observed_at,access_method'.split(','),interaction_rows)
summary = {'audit_date':'2026-10-07','routes_rows':len(route_rows),'sitemap_content_urls':len(sitemap_urls),
    'content_urls_attempted':len(seo_rows),'content_final_200':sum(x['http_status']==200 for x in seo_rows),
    'content_404':sum(x['http_status']==404 for x in seo_rows),'projects':sum('/portfolios/' in x['page_url'] for x in seo_rows),
    'team_profiles':sum('/teams/' in x['page_url'] for x in seo_rows),'primary_routes':len(primary),
    'asset_references':len(assets),'resource_get_checks':sum(bool(x['sha256']) for x in assets),
    'download_pdf_references':sum(x['media_type']=='pdf' for x in assets),'asset_reuse_approved':0,
    'interaction_rows':len(interaction_rows),'browser_captures':len(browser),'browser_unique_routes':len({x['source_url'] for x in browser}),
    'content_missing_description':sum(not x['description'] for x in seo_rows),'content_missing_og_title':sum(not x['og_title'] for x in seo_rows),
    'content_with_jsonld':sum(bool(x['structured_data']) for x in seo_rows),
    'source_form_pages':sum(bool(r.get('html',{}).get('forms')) for r in records.values()),
    'source_forms':sum(len(r.get('html',{}).get('forms',[])) for r in records.values()),
    'families_provisional':dict(collections.Counter(x['template'] for x in route_rows)),
    'sitemap_urls_unfetched':sorted(sitemap_urls-set(records))}
(OUT/'coverage.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps(summary,ensure_ascii=True,indent=2))
