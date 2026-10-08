# Phase 0 bounded evidence-gap closure plan

Prepared: 2026-10-08. Planning complete; execution not started and owner acceptance pending. This document extends the existing [report](REPORT.md) and [evidence protocol](README.md); it does not replace their dated findings. Current request authorizes planning and an Agent-mode handoff, not bootstrap.

## Objective and baseline

Produce enough targeted evidence to resolve or precisely bound the highest-risk remaining interaction, media and URL/integration uncertainties. Separate observed source behavior, proposed migration requirements and owner decisions. Complete this bounded pass without claiming full Phase 0 acceptance, full asset validation or replacement visual parity.

Baseline at planning: 85 route records, 72 SEO records, 742 resource references, 136 interaction records and three homepage aliases. Existing report records 67 browser states across 21 routes and availability evidence for all 25 PDF references. All 742 resource permission fields and all 85 route approval fields remain pending. The 29 resource samples have availability/signature/hash evidence, not complete validation. Recheck live facts only during execution; these numbers describe saved evidence.

Latest authoritative qualifications: settled mobile Escape restores trigger focus; controlled first-FAQ mobile Enter/Space and tablet Enter work in the sample. The FAQ header lacks button semantics in the inspected state. Award keyboard activation remains unverified after a tool timeout; project carousel slide attribution is confounded by autoplay. The title encoding issue was an inspection error and is closed. Do not reopen or restate these as confirmed failures without new evidence.

## Scope, order and limits

Run W1 through W4 below, then reconcile once. Prefer existing routes and controls over broad recrawling. The proposed comparison viewports remain 1440×900, 768×1024 and 390×844; use them as measurement coordinates while D8 acceptance is pending. They are not approved tolerances.

Before collection, inspect documented browser capabilities and installed validators. Record actual versions/capabilities, especially reduced-motion emulation, keyboard input and read-only DOM/AX access. A missing capability narrows the result; do not label an unperformed check successful. Use a new `evidence/<execution-date>-gap-closure-02/` directory, refusing overwrite. The execution date must be actual, not the plan date.

### W1 — Focus, names, roles and FAQ state

Routes: `/` and `/smart-operations/`, at all three viewports. Capture the sticky-award dismiss control on the homepage as part of traversal.

- Walk the full visible navigation sequence with Tab and Shift+Tab from a known starting focus. Record opening trigger, submenu entry/exit, first/last focusable elements, focus visibility, background access and focus after close. Test Enter, Space where a button is expected, Escape and pointer close. Distinguish mobile popup behavior from desktop/tablet dropdown behavior; do not assume every menu must trap focus.
- Record accessible name, role, `aria-expanded`, `aria-controls`, controlled-node existence and hidden/inert state before/after activation. Compare DOM/AX state with settled visible state. Missing or misleading semantics are findings, not permission to redesign.
- Inventory every visible Smart Operations FAQ header, then traverse each once by keyboard at each viewport. Check initial closed/open state, Enter and Space from a known state, collapse behavior, single/multiple expansion, answer association and visible focus. Determine IDs/counts from the live rendered route; do not use hidden legacy widgets as the denominator.
- Establish transition settling before interpreting state. Record action timestamps and actual focus; one controlled repeat is allowed for a timing ambiguity. A tool timeout is an inconclusive trial unless the target was demonstrably focused and the action/state were observed.

Acceptance: a complete traversal log for these routes/viewports, an explicit FAQ denominator with per-item results, DOM/AX properties and screenshot pairs for materially distinct states. Each trial is observed, not reproduced, inconclusive or blocked with a reason. Classify source discrepancies and proposed accessible migration behavior separately. This does not audit every route or establish screen-reader compatibility.

### W2 — Carousels and reduced motion

Route: `/`, all three viewports; two primary carousels (projects and awards), hero video, sticky award and any visible testimonial motion. Other animation families remain explicitly outside this pass.

- Record default motion/autoplay, accessible control names/roles, previous/next/dot reachability and any pause/resume control. Inspect all rendered control types, not every project/award slide. Record wrap behavior only if reached through those controls.
- For projects and awards, record a stable slide identity and timestamps before/after pointer, Enter and Space activation where applicable. Test whether focus or hover pauses rotation. Prefer a source-provided pause mechanism. If autoplay cannot be isolated through documented browser/source controls, report deterministic action attribution as inconclusive; do not disable legacy timers or import site scripts to force a pass.
- Retry the award keyboard check using actual focus and documented keyboard input. Separate failure to deliver the input from a delivered action with no settled change.
- If documented browser emulation or a supported system setting is available, verify the effective `prefers-reduced-motion` value, reload into that preference and repeat the two carousel/hero observations at each viewport. Restore the prior setting afterward. If unavailable, record the capability limitation and leave reduced-motion runtime verification open; static CSS inspection is supplementary evidence only.
- Record whether moving content pauses, controls remain usable, focus stays visible, and the hero has a usable static state. Recommendations for the replacement must preserve content and design and be submitted under D8 before a consequential behavior change.

Acceptance: a default/reduced-motion result for each sampled motion feature and viewport, paired captures for changed states, and clear deterministic/inconclusive status for each carousel activation. No universal autoplay or keyboard verdict from a single timeout or changing slide screenshot.

### W3 — Representative media validation

Inspect up to **12 exact URLs** selected from assets.csv and confirmed visible use: six raster images (brand logo, hero/poster if present, project thumbnail, project detail image, leader portrait and news image), one observed SVG, two confirmed Livvic font weights, the hero MP4, one policy PDF and one press PDF. If a category is absent or a font reference belongs to legacy icons rather than Livvic, document it and do not invent a replacement URL. Known video candidate: `/wp-content/uploads/2025/07/mainfinalvideo.mp4`; confirm live use before selection.

- Write a selection list with exact URL, referenced page, category, reason, permission status and prior evidence. Shared assets first; no validation of all 742 references or reuse of legacy CSS/JS is implied.
- Download audit samples to an excluded temporary directory inside the workspace; do not put unapproved bodies in public assets or Git. Enforce 12 MB per image/font/PDF/SVG, 50 MB for video, 30 seconds per request and five redirects. Require HTTPS final destinations and reject HTML/executable responses masquerading as media. Oversize/truncated bodies are blocked, not completely hashed/validated; request a clean original if needed.
- Record MIME/signature, complete-body size/SHA-256, redirects and tool versions. Where installed tools support it, decode raster dimensions/orientation and visual content; inspect SVG for active content/external references; parse fonts for family/weights; probe video streams, duration/dimensions and poster needs; parse/render PDFs and inspect actions/embedded content. Run an available malware scanner and record its scope/result. Missing scanners/parsers or partial checks keep the affected validation stage open.
- Treat rights, technical validation and migration suitability as separate fields. A clean scan/hash/decode is not a safety guarantee or license. Confirm Livvic provenance/license terms from its authoritative source during execution; source copying of font/CSS references does not establish rights to other media.
- Keep only sanitized metadata, validation logs and authorized derived inspection evidence; delete temporary sample bodies using verified literal paths within the designated audit directory. Do not install a CMS/database or copy executable legacy assets to complete this pass.

Acceptance: every selected item has an exact source/evidence link, availability result, complete/partial validation stages, rights status and reuse recommendation. Zero items become approved without D2. Unvalidated categories and all unsampled media remain explicitly pending. Reuse-ready media must later satisfy the full approved inventory, not only this sample.

### W4 — Deep-path aliases and public external flows

Cap explicit HTTP probes at **20**, excluding normal browser subresources. Four control paths:

- `/smart-operations/`
- `/portfolios/colocation-data-center-navi-mumbai-india-2025/`
- `/the-ai-infrastructure-race-why-future-data-centres-must-be-ai-ready/`
- `/portfolio-category/domestic/page/2/`

Probe each path on HTTP bare host, HTTP www and HTTPS www (12), then its HTTPS bare-host no-trailing-slash shape (four). Probe two benign query variants on Smart Operations and the project detail (`?phase0=1`, two; audit-only candidates, not newly discovered content). Probe `/feed/` (one explicit candidate outside the prior crawl) and one author URL only if linked in saved or rendered public evidence (one). If no author URL is evidenced, record that boundary and finish at 19 or fewer; do not invent usernames or enumerate accounts. Final chains may revisit controls; preserve exact path/query/fragment intent and differentiate aliases from legitimate content candidates.

- Capture timestamp, requested URL, full redirect chain, final status/URL, canonical, robots/X-Robots-Tag and source title where available. Use bounded read-only GETs with the existing 30-second/five-redirect limits. Detect loops, lost deep paths or query-dependent differences; do not implement redirects or infer indexation from responses.
- Browser-inspect the exact evidenced careers destination `https://sterlingone.darwinbox.in/ms/candidatev2/a688b512869b6c/careers/home` at desktop/mobile. Verify CTA target, resulting public listing/empty/error/login state, visible navigation and keyboard reachability. Open at most one public job detail if available without authentication; stop before apply/submit/upload and never enter applicant data. Portal ownership and delivery remain D5/integration gates.
- Check at most three other visibly linked external destinations (evidenced video/map/document links), selected by migration impact and exact URL. Inspect status/redirects and public CTA behavior only. Do not open mail clients or send messages. Captures may be redacted for incidental personal information; do not retain applicant data.

Acceptance: exact outcomes or documented access failures for the capped probes and selected flows, updated alias/integration evidence, and no silent retirement or redirect decision. A shell/HTTP 200 is not a working careers flow. All feed/author/query candidates remain unapproved and separately labeled; unavailable owner SEO evidence remains D6.

## Owner requirements and acceptance gates

[OWNER-DECISIONS.md](OWNER-DECISIONS.md) remains the single owner question/answer record. D1–D8 are pending; requests or recommendations do not count as answers.

- **Architecture/effort inputs needed first:** D3 editors/update frequency/workflow and developer-managed versus nontechnical editing; D5 external careers versus onsite applications and portal ownership; D7 actual hosting/runtime constraints and operational owners. These questions were raised in this planning session. Continue public evidence work without assuming their answers; do not select CMS/database/runtime deployment or finalize content architecture until material inputs are resolved.
- **Scope/content/SEO decisions:** D1 held routes and legitimate content, including project/business claims and policy editions; D6 owner-authorized indexation/backlink evidence or explicit acceptance of its absence. Retain proposed actions until exact targets/statuses are approved. A site crawl cannot supply client-owned facts.
- **Reuse/integration requirements:** D2 rights or a clean sourcing plan for every required asset category; D4 enquiry/media recipients, consent/retention, anti-spam/delivery expectations and the Media Queries mismatch. Technical sample checks may proceed, but reuse and recipient choices remain gated.
- **Comparison/accessibility acceptance:** D8 viewports/tolerances and proposed scoped menu/FAQ/carousel/reduced-motion/sticky-award corrections. Record factual source behavior independently. No implementation correction or acceptance inferred from a review request.

Owners may explicitly defer a requirement with an agreed source, responsible person and gate/date. Silence is not deferral. Hosting purchases, account changes, source WordPress changes, real enquiries, uploads, DNS and pushing remain outside this milestone.

## Evidence, verification and exit criteria

1. Before execution, read Git status and capture sizes/SHA-256 of all historical evidence and current manifests. Preserve old source timestamps and owner approval fields. Do not rerun collectors into dated directories or blindly rebuild CSVs.
2. New directory contains a concise summary, capability/access log, structured trial observations, paired screenshots/AX when available, HTTP/validation metadata, selected-asset list, file index and verification results. Every claim links exact URL, actual timestamp, viewport/preference/action where relevant, method, result and limitation.
3. Append new evidence fields/records to existing manifests only when necessary, preserving prior columns, unique keys, historical evidence references and decisions. Keep alias probes in url_variants.csv; genuinely new content candidates are separately proposed. If helpers change, support the new supplement and verify offline idempotence; the old regeneration order must not silently discard it.
4. Verify CSV schemas/counts/keys, date/method fields and local evidence paths; check signatures for actual screenshot formats; compare every historical file's bytes/hash against the pre-run baseline. Parse changed Python helpers without executing untrusted data. Run `git diff --check` and review the full scoped diff for correctness, privacy, SEO, accessibility and unnecessary complexity.
5. Update REPORT.md with a dated supplement, STATUS.md with actual results and remaining gaps, and owner decisions only for explicit responses. Make one scoped atomic commit after checks pass; no push. Report self-review accurately. Application lint/typecheck/build/tests remain inapplicable until an application exists.

**Engineering exit:** W1–W4 attempted within caps with evidence, honest blocked/inconclusive outcomes, unchanged historical files and passing data/diff checks. An unavailable capability can complete a bounded attempt but leaves that engineering gap open. Full responsive/lightbox/event/testimonial/map behavior, all media and all route aliases remain deferred coverage, with affected routes/categories recorded.

**Phase 0 exit:** separately resolve or explicitly accept deferral of material engineering gaps and D1–D8; approve route/content/media plans, editing/integration/hosting inputs and comparison criteria. A commit or passing bounded audit alone never authorizes bootstrap.

Planning checks on 2026-10-08: 271 indexed historical file sizes/SHA-256 verified; five manifests unchanged against Git after expected CRLF/LF normalization, with schema/count/key/date/method/evidence-link checks passing and approval fields retained. Seven changed/new documents are valid UTF-8 with resolving local links. Work packages, owner gates and ranges checked; documentation self-reviewed and whitespace checked. Initial comparison assumptions were corrected for Git line endings and Windows pipeline encoding. No live browser/media/HTTP execution occurred in this planning milestone; app checks do not apply.

## Effort and implementation handoff

Provisional allowance for this remaining bounded pass: **2–4 developer working days**, approximately 0.5–1 day per work package including reconciliation/review. Assumes working browser controls, existing validators and accessible public references. Tool limits may produce documented open checks rather than unlimited troubleshooting. Full media cleanup, source remediation and owner response time are outside this allowance.

Retain the report's **15–25 developer working days after scope/content decisions** for the migration; no new verified CMS, onsite applications or expanded legacy-page requirement supports narrowing it. Track this discovery allowance separately. Reconcile remaining discovery/QA overlap before presenting a combined schedule. Re-estimate after D1/D3/D5/D7/D8 answers and the sample results; do not invent fixed add-ons for undecided requirements or commit a release date.

Agent-mode execution begins with this plan, the workflow rule and existing evidence. Implement W1–W4 as read-only discovery and documentation, adapt only reversible details within the caps, preserve user changes, and record explicit owner answers received during the run. Ask only for a concrete missing capability/evidence or material owner input. No app scaffold, production components, unsolicited infrastructure changes or independent-review claim.
