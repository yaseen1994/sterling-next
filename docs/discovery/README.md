# Phase 0 evidence protocol

## Current audit

2026-10-07: [public discovery report](REPORT.md), four populated CSV manifests and dated [evidence](evidence/2026-10-07/coverage.json). Observed does not mean owner approved. Empty SEO cells mean absent in fetched source; blank asset hashes mean not downloaded, and blank targets on held routes mean no disposition chosen. Existing CSV columns are retained; date/method/evidence and status details are appended where needed.

The Phase 0 helpers use Python's standard library and curl; no app dependencies. `python docs/discovery/build_manifests.py` regenerates manifests offline. Network collection is explicitly bounded/read-only: `python docs/discovery/audit_public.py --fetch`, or `--resource-checks`. Do not rerun dated collection over the original snapshot; use a new dated evidence directory for a later audit. Generated manifests remain proposals until owner acceptance.

Supplement: evidence/2026-10-07-gap-closure-01/ records 21 additional PDF availability checks, three homepage variants and careers destination. `gap_closure.py` collects this fixed scope once into a new directory and refuses overwrite; do not rerun collection. `python docs/discovery/gap_closure.py --apply` merges saved supplemental evidence offline and preserves source timestamps/approval fields. If rebuilding the original manifests with build_manifests.py, run this offline apply afterwards to restore supplemental columns/records. url_variants.csv is a separate alias manifest, not new content routes. OWNER-DECISIONS.md records the pending owner questions.

Browser supplement: evidence/2026-10-07-browser-02/ holds 24 mobile/tablet JPEG/AX pairs, controlled FAQ trials and corrected title interpretation. `python docs/discovery/merge_browser_evidence.py` merges this saved evidence offline. Regeneration order: build_manifests.py, gap_closure.py --apply, merge_browser_evidence.py. Use explicit UTF-8 for all JSON/CSV reads; default Windows decoding caused an erroneous mojibake finding. Record settled visibility and focus after animation, not merely transient AX node presence. Browser snapshots and HTTP checks do not establish owner acceptance.

## Protocol

Record observation date, exact source URL, access method and evidence location for every item. Empty manifests mean not yet audited, not no pages found.

Discover sitemap/robots, navigation/footer links, internal links, downloads and indexed pages. Reconcile all sources. Search indexes are incomplete and do not replace a crawl. Distinguish public coverage from owner-only Search Console/analytics/server data. Report inaccessible URLs and untested interactions.

Capture page content and SEO fields; screenshots at representative desktop/tablet/mobile widths; menus, sliders, filters, accordion, sticky behavior, forms and download flows. Record viewports and interaction states. Do not submit live forms during an audit.

Ask the owner about CMS editing needs, careers applications/attachments, enquiry recipients, analytics/consent, redirects, email/DNS, critical pages, media ownership and target hosting. Do not require credentials in chat; use supported secure account connection mechanisms where needed.

Deliver a coverage summary: routes discovered, routes inspected, unique templates, inaccessible items, assets validated, forms observed, owner-only gaps, proposed dispositions and revised effort estimate. Approval is required for ambiguous removals before migration. Site migration reduces inherited WordPress risk but does not itself prove malware eradication or secure domain/email accounts.
