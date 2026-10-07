# Phase 0 evidence protocol

## Current audit

2026-10-07: [public discovery report](REPORT.md), four populated CSV manifests and dated [evidence](evidence/2026-10-07/coverage.json). Observed does not mean owner approved. Empty SEO cells mean absent in fetched source; blank asset hashes mean not downloaded, and blank targets on held routes mean no disposition chosen. Existing CSV columns are retained; date/method/evidence and status details are appended where needed.

The Phase 0 helpers use Python's standard library and curl; no app dependencies. `python docs/discovery/build_manifests.py` regenerates manifests offline. Network collection is explicitly bounded/read-only: `python docs/discovery/audit_public.py --fetch`, or `--resource-checks`. Do not rerun dated collection over the accepted snapshot; use a new dated evidence directory for a later audit. Generated manifests remain proposals until owner acceptance.

## Protocol

Record observation date, exact source URL, access method and evidence location for every item. Empty manifests mean not yet audited, not no pages found.

Discover sitemap/robots, navigation/footer links, internal links, downloads and indexed pages. Reconcile all sources. Search indexes are incomplete and do not replace a crawl. Distinguish public coverage from owner-only Search Console/analytics/server data. Report inaccessible URLs and untested interactions.

Capture page content and SEO fields; screenshots at representative desktop/tablet/mobile widths; menus, sliders, filters, accordion, sticky behavior, forms and download flows. Record viewports and interaction states. Do not submit live forms during an audit.

Ask the owner about CMS editing needs, careers applications/attachments, enquiry recipients, analytics/consent, redirects, email/DNS, critical pages, media ownership and target hosting. Do not require credentials in chat; use supported secure account connection mechanisms where needed.

Deliver a coverage summary: routes discovered, routes inspected, unique templates, inaccessible items, assets validated, forms observed, owner-only gaps, proposed dispositions and revised effort estimate. Approval is required for ambiguous removals before migration. Site migration reduces inherited WordPress risk but does not itself prove malware eradication or secure domain/email accounts.
