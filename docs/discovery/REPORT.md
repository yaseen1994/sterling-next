# Phase 0 public discovery — 2026-10-07

Public audit delivered; classifications and migration specification are proposed, not owner accepted. Earlier observations were leads; counts below come from dated public responses and live browser evidence.

## Repository and scope

Read `AGENTS.md`, `PROJECT.md`, `STATUS.md`, discovery protocol and relevant decisions/release gates. Repository: `C:\Projects\React\sterling-next`. Initial Git: clean `main`, HEAD `17b4085f4c2bc4821b2c2d67823f209c42ff44b3`, no remote. A later read found `origin` configured as `https://github.com/yaseen1994/sterling-next.git` and tracking `main...origin/main`; HEAD unchanged. This audit did not configure the remote, fetch, commit or push. Remote reachability/authentication not tested.

During the public audit, only discovery docs, evidence and audit helpers changed. No scaffold, dependencies, WordPress modification, real enquiries or DNS changes. The audit recorded a conflict between generic pure-PHP/no-framework guidance and PROJECT.md's Next.js direction. **Subsequent workflow setup, 2026-10-07:** the owner's explicit request confirmed Next.js/React/TypeScript/Tailwind and resolved that conflict; see docs/decisions.md. Historical public evidence is unchanged.

## Coverage

- **68 sitemap-listed URLs**, all fetched from the advertised `/wp-sitemap.xml` and ten children. No advertised URL or crawl candidate remains unfetched.
- **72 content URLs** from sitemap plus recursive same-host HTTPS anchors: 69 final 200 responses, three 404s. One 200 follows an existing 301 from `/elementor-hf/my-custom-footer/` to `/`; 68 distinct successful final page URLs. Four content URLs absent from sitemap: domestic archive page 2 and the three broken links.
- `routes.csv`: **85 rows** = 72 content URLs + 13 discovery endpoints (robots, advertised index, ten children, alternative sitemap probe). `seo.csv`: **72 content records**. Infrastructure probes are not migration pages.
- **Five service routes, 20 `/portfolios/` projects, eight `/teams/` profiles** verified. Homepage copy claiming 30 delivered projects is a business claim, not the published case-study count; owner approval pending.
- **43 browser states across 21 routes**. Desktop covers all 18 main navigation/footer content routes plus project/profile/article samples. Viewports 1440×900, 768×1024 and 390×844; seven routes have mobile samples, homepage only has tablet coverage. Captures are representative states, not full visual/accessibility QA.
- **742 resource references**, including variants, PDFs, fonts, stylesheets and legacy script references. **25 PDF links**. Eight direct checks: three images, four policy PDFs and one font stylesheet, all 200. Seven binary signatures match stated MIME types; byte sizes/hashes recorded. **Zero assets fully validated or approved for reuse**.
- `interactions.csv`: **111 records**, distinguishing source-only forms/widgets from live states. Source contains 13 form elements on seven pages; this is not 13 active business forms. Contact enquiry and external careers flow observed; no submissions/uploads.

Totals: [coverage.json](evidence/2026-10-07/coverage.json). Access/method limits: [access-log.md](evidence/2026-10-07/access-log.md). Every manifest item has dated source/method/evidence. HTTP records retain source/final URL, sanitized headers, status, byte size and SHA-256. Parsed HTML text includes hidden/legacy blocks and is not approved copy. Source PHP, themes/plugins and executable JavaScript were not imported or transplanted.

Verification: [verification.json](evidence/2026-10-07/verification.json) records passing CSV schema/unique-key/timestamp/evidence checks, sitemap reconciliation, main-route desktop coverage, JPEG signatures and Python helper syntax. [index.csv](evidence/2026-10-07/index.csv) hashes 191 source-evidence files. `git diff --check` passes; local HEAD and origin/main tracking ref have zero commits of difference, without a fetch. No application lint/typecheck/build/test scripts exist. First verification caught screenshot bytes being JPEG despite PNG filenames; filenames and references corrected before delivery.

## Routes and planning families

Main routes: `/`, `/about-us/`, `/awards-recognitions/`, `/leadership/`, `/industry-memberships-and-recognitions/`, `/corporate-governance/`, `/projects/`, `/design-build/`, `/modular-construction/`, `/smart-operations/`, `/sustainable-execution/`, `/om-services/`, `/news-press-release/`, `/events/`, `/blogs/`, `/careers/`, `/contact/`, `/privacy-policy/`.

Planning model: **17 provisional core template families**, including project/profile/article details. Five services have different sections despite sharing a family label. Other public URLs add legacy FAQ, testimonials, taxonomy/pagination, duplicate and redirect families. Manifest's 24 labels include infrastructure/errors and do not imply 24 application components.

Preserve approved `/portfolios/<slug>/`, `/teams/<slug>/`, root-level article slug and trailing-slash shape. No automatic move to `/projects/<slug>` proposed. Project Next/Previous and enquiry links are observed requirements if those pages are approved.

## Findings for owner review

1. **Published ambiguous pages:** `/careers-2/`, `/newsroom/`, `/knowledge-corner/`, `/testing-page/`, `/test-project-page/`, `/thumbnail-slider/`, `/home-2-copy/`, `/projects-2-copy/`, `/sustainable-execution-duplicate/`, `/home-duplicate/`, `/smart-operations-old-2/`, `/home-copy/`, `/our-team/`, `/faqs/` are sitemap-listed 200s. Names do not prove illegitimacy. No retirement/redirect/noindex decision made. Profiles, testimonial, six archive/pagination URLs and footer-template redirect also need deliberate mapping.
2. **Three broken links from `/home-2-copy/`:** `/conventional-brick-mortar-data-center/`, `/modular-data-centers/`, `/prefabricated-containerised-data-centers/` return 404. No replacement URL invented; establish historical purpose and owner SEO evidence.
3. **SEO:** source lacks meta description and OG title/description/image on all 72 content responses. `max-image-preview:large` without noindex observed; this does not prove indexation. Taxonomy archives lack canonicals; duplicates generally self-canonicalize. Smart Operations and its old variant contain FAQ JSON-LD. Manifest heading counts are raw-source counts; live templates can expose additional headings. Proposed metadata/headings require approved SEO intent.
4. **Contact:** visible fields name/email/phone/company/service/location/message, two required consent checkboxes, five services plus general enquiry. Select change and Name→Email Tab focus observed on desktop/mobile. CF7 source form is not the visible Elementor form. Displayed mailboxes do not prove server recipients. Media Queries icon/heading links to general mailbox, while displayed media email links to `corpcomm@sterlingwilson.com`; approve intended correction.
5. **Careers:** visible Apply Now points to SterlingOne Darwinbox; no visible onsite upload form. Source also includes hidden/legacy upload forms and theme-demo job links. Do not migrate demo jobs or infer an upload feature. Portal owner/destination unconfirmed.
6. **Keyboard/responsive:** desktop Services Enter opens and Escape collapses submenu. Mobile unnamed nine-dot link opens right-side popup; Services Enter exposes submenu, but Escape did not dismiss popup in sampled test. Tablet uses named Menu Toggle hamburger/header dropdown. Smart Operations FAQ expands by pointer; Enter on focusable DIV did not toggle, no button role. Awards Next A has button role without href/tabindex: focus/Enter failed, pointer worked. Project carousel keyboard activation and sticky award close observed; autoplay prevents deterministic slide comparisons. Approve accessible semantics and keyboard corrections while preserving design.
7. **Media:** homepage muted looping autoplay video, Livvic font and orange/white/dark-blue treatments observed. Sticky award overlaps mobile content in sample. Full focus trapping, all lightboxes/hover states, event sequences, testimonial/map behavior and reduced motion remain unverified. Captures include loading/animation timing; no replacement parity claimed.
8. **Downloads/tracking:** four checked PDFs are HSE, CSR, FY 2024–25 and FY 2023–24. Content/rights unapproved; remaining PDFs and external destinations not exhaustively tested. Google tag/Site Kit references found; active tracking, ownership and consent configuration unverified.

## Owner questions

1. Approve main/detail scope and legitimate copy, metrics, project facts, leadership, addresses and policy editions; identify missing/critical pages.
2. Choose retain, exact redirect, or retire/status for every held route. Supply Search Console/backlink/analytics/log evidence or explicitly accept its absence. Public search cannot settle disposition.
3. Resolved during workflow setup on 2026-10-07: owner's explicit request confirms Next.js/React/TypeScript/Tailwind. Versions and content architecture remain pending; this does not authorize bootstrap.
4. Who edits projects, news/events/blogs, careers and PDFs, how often, and is developer-managed content acceptable? Confirm editing/CMS needs before implementation.
5. Approve media/document/logo/font reuse, provide rights or clean originals, and confirm rights to client media/news clippings. Confirm hero video and reduced-motion intent.
6. Confirm enquiry/media recipients, required fields, consent/privacy copy, retention and anti-spam requirements; resolve Media Queries mismatch. Delivery, server validation and success/failure states untested.
7. Keep Darwinbox or request onsite applications? If onsite, approve recipient, file types/count/size, retention and wording; hidden forms are not requirements.
8. Approve menu/FAQ/carousel accessibility corrections, tablet/mobile differences and sticky-award treatment; agree comparison matrix and visual tolerances.
9. Confirm analytics/consent owner, target hosting/runtime, domain/email/DNS authority, redirects and release reviewer. Confirm intended Git remote. These are planning inputs; no cutover or credentials requested.

## Proposed acceptance and effort

Phase 0 acceptance: owner-reviewed route dispositions, approved copy/media or sourcing plan, editing/integration/SEO requirements and agreed comparison criteria. Package implemented/self-checked; owner review/acceptance pending. Remain in Phase 0 until material questions resolved and next milestone authorized.

Later acceptance: compare approved states at 1440×900, 768×1024 and 390×844, including menus, FAQs, carousels, news years, project navigation, careers CTA, downloads and safe form tests. Every approved old URL must serve or have an approved exact redirect/status. Review titles/canonicals/headings/schema, copy/downloads and keyboard/focus/reduced-motion behavior. Run appropriate app checks only after an application exists. Discovery captures alone do not prove parity.

Planning range: **15–25 developer working days after decisions**, plus owner review time; no release-date commitment. Assumes permitted clean media, 17 core families with service variations, 20 case studies, eight profiles if approved, external careers and one new enquiry endpoint. Includes migration, interactions, SEO/download mapping and responsive/integration QA; excludes unknown CMS/onsite applications, unapproved legacy expansion and owner account/security remediation. Earlier 7–10-day lead superseded; re-estimate after signoff.

No forensic compromise finding. Source-host/domain/email remediation remains separate from public discovery.
