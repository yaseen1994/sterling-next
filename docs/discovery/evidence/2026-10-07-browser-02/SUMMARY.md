# Bounded browser supplement — 2026-10-07

Objective/acceptance: investigate homepage title encoding; record representative navigation/focus/Escape, first FAQ Enter/Space/pointer and project/award carousel states on two existing routes at 390×844 and 768×1024. Save dated URL/action/state/screenshot evidence separately; distinguish settled states, transition snapshots and tool failures. This is not full Phase 0 acceptance or migration parity.

Start: clean main at 94848a7, two commits ahead of the local origin/main ref. Read workflow rule, AGENTS, PROJECT, STATUS, REPORT and OWNER-DECISIONS. D1–D8 have no explicit answers in the current request or repository; all remain pending.

## Title correction

Live browser document.title and document.characterSet report the correct title with U+2013 en dash and UTF-8, matching the original SEO record. Explicit UTF-8 decoding of all three unchanged prior variant JSON files yields the same title/codepoints. The earlier mojibake report was an engineering inspection error: that inspection used Path.read_text() without encoding on Windows, rather than UTF-8. No source title defect was established. Correct current report/status; keep previous captures/access logs as historical records, including their now-superseded interpretation. No source copy correction required. Evidence: title-browser.json and title-evidence-comparison.json.

## Observed states

- 24 new viewport JPEG/AX pairs on homepage and Smart Operations; observations.json gives exact UTC timestamps, actions, viewport requests and source URLs. Previous 43 captures remain unchanged; 67 captured states across the same 21 distinct routes in total. Not all routes/states/viewports audited.
- Mobile: unnamed menu trigger Enter opens popup, focus initially stays on trigger; next Tab goes to Home; Enter expands Services. Escape restores trigger focus. Immediate snapshot retains popup nodes during closing transition; subsequent settled check reports Close not visible. Earlier Escape non-dismissal is not reproduced in this sample; no full focus-trap/wrap traversal.
- Tablet: named Menu Toggle Enter opens/closes main dropdown. Services Enter opens submenu; Escape collapses submenu while main dropdown stays expanded. Requested innerWidth=768, innerHeight=1024; scrollbar width=15. Mobile request 390×844. Normal scrollbar reduces content width, not a different requested breakpoint.
- FAQ: inspected header is DIV, tabIndex=0, no button role. After establishing closed answer visibility, Enter and Space each show the first answer on mobile; Enter shows it on tablet. Earlier Enter failure is not reproduced. Preliminary snapshots were not sufficient to distinguish initialization/transition effects, so controlled closed-state trials are authoritative only for this sample. Other FAQ items, ARIA state announcements and full keyboard traversal remain unverified.
- Project Next slide receives Enter/focus on mobile/tablet; resulting states saved. Carousel autoplay remains active; no deterministic exact slide attribution or reduced-motion claim.
- Award Next read-only DOM inspection returned A, role=button, href=null, tabIndex=0. Playwright Enter timed out with one visible match; focus remained on project Next slide. This is an explicit tool/action limitation, not proof that all keyboard activation fails. Pointer click completed and resulting state captured; autoplay prevents deterministic slide attribution. Earlier absent-tabindex finding is qualified by this observed DOM property.

## Methods and limitations

Codex in-app browser, background temporary tab; documented viewport controls, AX state, viewport screenshot, UI actions and read-only DOM inspection. Page scripts run normally in the browser; no legacy script/PHP copied, transplanted or executed as custom audit code. No forms, uploads, emails, WordPress administration or account changes. Viewport reset and audit tab closed after capture.

No browser navigation timeout in this pass. Award locator.press failed with a selector deadline; captured actual focus and state rather than recording a pass. JPEG magic bytes checked before delivery. No full-page screenshots, focus trap completeness, all carousel/FAQ states, reduced-motion tests, media decoding/security/rights, external application behavior or owner-only evidence. No replacement UI exists to compare for parity. Search Console, editing, rights, recipients, hosting and acceptance remain owner inputs. No owner response or authorization beyond this discovery milestone inferred.
