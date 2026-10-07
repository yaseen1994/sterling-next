# Access evidence — 2026-10-07

Scope: read-only public discovery. No WordPress administration/import/modification, form submission, resume upload, real email, DNS change, dependency installation, scaffold, commit or push.

## Access attempts

- Web tool GET `https://sterlingandwilsondc.com/`: timeout. HTTP seed `http://sterlingandwilsondc.com/` was rewritten to HTTPS by the tool and timed out; this does not verify the site's HTTP redirect. Web tool GET `/robots.txt` and `/sitemap_index.xml`: reported inaccessible. Successful direct requests subsequently contradicted these access failures.
- Sandbox curl HEAD: exit 7, local proxy `127.0.0.1` refused connection. Authorized direct curl outside sandbox succeeded: homepage 200. Initial HEAD server Date `2026-10-07 04:04:26 UTC`; initial GET Date `04:04:55 UTC`.
- Robots 200 advertises `/wp-sitemap.xml`. Alternative `/sitemap_index.xml` actually returns 404. Advertised index and all ten children return 200. Crawl completed `2026-10-07T04:08:47+00:00`: 85 requests, no pending candidates at the 250-request bound. Eight later resource checks have separate records.
- Browser: initial homepage navigation timeout later recovered to loaded UI; O&M timeout also recovered. One multi-page capture timed out and reset its session; saved captures were recovered and the same tab resumed. Mobile full-page capture failed; viewport screenshots and full accessibility snapshots used instead. Temporary viewport override reset; audit-created tab closed.

## Public search

Access method: web search tool; observation date 2026-10-07, time not retained.

- Query `site:sterlingandwilsondc.com`: no results from this tool. This is not evidence of deindexing, missing backlinks or compromise.
- Query `"sterlingandwilsondc.com"`: results included [company LinkedIn](https://www.linkedin.com/company/sterling-and-wilson-data-center/), [group business page](https://www.sterlingandwilson.com/businesses/turnkey-data-centers/) and third-party mentions. No additional reference-domain URLs returned. External descriptions were not used to approve claims or expand route counts. Search is incomplete discovery evidence.

## Boundaries

Search Console, analytics reports, logs, backlink exports, content/media rights, mail routing, hosting authority and editing needs are owner-only information. No credentials requested/accessed. External portals, publishers, LinkedIn, short links and videos inventoried but not exhaustively tested. HTTP/www variants, query pages, feeds and author archives excluded; no authenticated inventory claimed.

Per-request JSON retains UTC start/completion, exact source/final URLs, sanitized redirect-chain headers, status, response size and SHA-256. Hidden input values, cookies and executable inline code omitted. Binary samples discarded after hash/signature recording; no decoding, PDF-content approval, malware scan or reuse approval claimed. Browser snapshots describe rendered states; raw-source text also includes hidden/legacy blocks.
