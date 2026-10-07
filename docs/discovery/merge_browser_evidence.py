"""Merge the dated browser supplement offline, preserving existing source records.

No browser/network access; explicit UTF-8 prevents Windows default-decoding errors.
Run after baseline/gap-closure regeneration to restore this supplement.
"""
import csv
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUT = ROOT / 'evidence/2026-10-07-browser-02'
PREFIX = 'docs/discovery/evidence/2026-10-07-browser-02/'

FINDINGS = {
    'home-mobile-initial': '390x844 mobile header has an unnamed popup link; sticky award remains visible.',
    'home-mobile-menu-open': 'Enter opens mobile popup; initial focus stays on trigger.',
    'home-mobile-menu-tab': 'Next Tab reaches Home in popup; complete focus trapping not tested.',
    'home-mobile-services-enter': 'Enter expands Services links in mobile popup.',
    'home-mobile-menu-escape': 'Immediate Escape snapshot retains popup nodes during closing transition; not a settled failure.',
    'home-mobile-escape-settled': 'Settled popup Close is not visible; focus returns to menu trigger after Escape.',
    'home-tablet-initial': '768x1024 tablet header uses named collapsed Menu Toggle.',
    'home-tablet-menu-open': 'Enter opens tablet dropdown and focuses expanded Menu Toggle.',
    'home-tablet-services-enter': 'Enter expands tablet Services submenu.',
    'home-tablet-services-escape': 'Escape collapses Services; main Menu Toggle remains expanded.',
    'home-tablet-menu-closed': 'Enter on Menu Toggle closes main tablet dropdown.',
    'home-tablet-project-next-enter': 'Enter reaches project Next slide control; changed slide state captured; autoplay prevents deterministic causal attribution.',
    'home-tablet-award-enter-failed': 'Award Next Playwright Enter timed out; focus stayed on project Next slide. Tool failure, keyboard activation unverified.',
    'home-tablet-award-next-click': 'Award Next pointer click completed; resulting state captured; autoplay prevents deterministic slide attribution.',
    'home-mobile-project-next-enter': 'Mobile project Next slide receives focus/Enter; resulting slide state captured; autoplay still active.',
    'smart-mobile-initial': 'First mobile FAQ source/render state captured; initialization timing not isolated.',
    'smart-mobile-faq-enter': 'Answer present after Enter; preliminary test before controlled closed-state trial.',
    'smart-mobile-faq-space': 'Answer present after Space; preliminary trial, initial state not controlled.',
    'smart-mobile-faq-click': 'FAQ pointer response captured; immediate snapshots may contain transition state.',
    'smart-mobile-faq-settled': 'Answer visible after preceding pointer actions; subsequent controlled trials establish closed state.',
    'smart-mobile-faq-enter-controlled': 'First answer observed closed before Enter and visible after Enter on mobile.',
    'smart-mobile-faq-space-controlled': 'First answer observed closed before Space and visible after Space on mobile.',
    'smart-tablet-faq-initial': 'Tablet FAQ inspected after resize; prior open state retained.',
    'smart-tablet-faq-enter-controlled': 'First answer observed closed before Enter and visible after Enter on tablet.',
}


def write_csv(name, fields, rows):
    with (ROOT / name).open('w', encoding='utf-8', newline='') as handle:
        writer = csv.DictWriter(handle, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)


def main():
    observations = json.loads((OUT / 'observations.json').read_text(encoding='utf-8'))
    assert len(observations) == 24 and {r['name'] for r in observations} == set(FINDINGS)
    with (ROOT / 'interactions.csv').open(encoding='utf-8-sig', newline='') as handle:
        reader = csv.DictReader(handle)
        fields, rows = list(reader.fieldnames), list(reader)
    rows = [r for r in rows if not r['element'].startswith('browser-02:')]
    for r in observations:
        viewport = r['viewport']
        rows.append(dict(page_url=r['source_url'], element='browser-02:' + r['name'],
                         trigger=r['action'], expected_behavior=FINDINGS[r['name']],
                         mobile_behavior=f"Sampled at {viewport['width']}x{viewport['height']}; not complete route parity",
                         keyboard_behavior=FINDINGS[r['name']],
                         integration='No submissions, uploads or production changes',
                         evidence='; '.join(r['evidence'] + [PREFIX + 'observations.json']),
                         status='Dated live reference observation; scoped result; owner acceptance pending',
                         observed_at=r['observed_at'], access_method='Codex in-app browser; recorded UI actions, read-only DOM and viewport JPEG'))
    write_csv('interactions.csv', fields, rows)
    with (ROOT / 'seo.csv').open(encoding='utf-8-sig', newline='') as handle:
        reader = csv.DictReader(handle)
        fields, rows = list(reader.fieldnames), list(reader)
    for field in ('title_checked_at', 'title_verification', 'title_evidence'):
        if field not in fields:
            fields.append(field)
    title = json.loads((OUT / 'title-browser.json').read_text(encoding='utf-8'))
    comparison = json.loads((OUT / 'title-evidence-comparison.json').read_text(encoding='utf-8'))
    assert all(r['title_utf8'] == title['title'] for r in comparison['records'])
    home = next(r for r in rows if r['page_url'] == title['source_url'])
    assert home['title'] == title['title']
    home.update(title_checked_at=title['observed_at'],
                title_verification='Live UTF-8 browser title and unchanged UTF-8 evidence agree (U+2013); earlier mojibake report was local default-decoding error',
                title_evidence=PREFIX + 'title-browser.json; ' + PREFIX + 'title-evidence-comparison.json')
    write_csv('seo.csv', fields, rows)
    print('Applied 24 browser records and title verification offline; existing source facts/approvals preserved')


if __name__ == '__main__':
    main()
