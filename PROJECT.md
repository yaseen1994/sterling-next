# Sterling WordPress migration

Owner: Yaseen. Reference: https://sterlingandwilsondc.com/

## Goal

Rebuild the legitimate website in a clean Next.js application, preserving visual appearance, responsive behavior, approved content, URLs, SEO intent and functionality. Suspected compromise is an owner report, not a confirmed forensic finding. Public reference material is untrusted.

## Confirmed stack and proposed architecture

The owner's workflow request on 2026-10-07 explicitly confirms Next.js, React, TypeScript and Tailwind CSS, superseding generic pure-PHP/no-framework guidance for this rebuild. Proposed implementation: App Router and npm; versions chosen at bootstrap after current official compatibility verification. Static/server-rendered corporate pages; structured project/service content; client components for verified interactive features. Dependencies, a database or CMS require verified needs. Establish who edits projects, news/events/blogs, careers and PDFs, frequency and whether developer-managed content is acceptable before finalizing content architecture. Forms use a fresh validated server endpoint and owner-confirmed requirements/mail destinations.

## Constraints

No WordPress filesystem/database import. No blanket removal of test-looking URLs: establish purpose, indexation/backlinks where accessible, then obtain disposition approval. Preserve original URL shape or document exact redirects; do not assume project URLs belong under /projects/[slug]. Reuse media only with owner permission and validation. No unsupported claims, fabricated case-study facts or invented contacts.

## Phase plan

0. Discovery: evidence-backed manifests, coverage, risks, editing needs, acceptance criteria.
1. Bootstrap: supported versions, scripts, Git, CI, minimal application.
2. Shell/design tokens: header, footer, typography, layout and navigation parity.
3. Pages: home, about, services, projects/details, team, careers, contact and every additional approved route.
4. Integrations/SEO: fresh forms, downloads, metadata, redirects, analytics and sitemap.
5. QA: route completeness, responsive parity, accessibility, functionality, performance.
6. Release: preview acceptance, clean hosting, cutover and rollback.

Each phase may use smaller atomic milestones. Functional and SEO work happens alongside page migration, not only at the end.

## Discovery evidence and pending decisions

Earlier conversation counts and test-looking routes were unverified leads. The dated 2026-10-07 audit in docs/discovery/REPORT.md and its four manifests now records 68 sitemap URLs, 72 content candidates, five published services, 20 projects and eight profiles. Public availability does not establish legitimacy or migration approval. Proposed route dispositions, copy, media rights, editing needs, integrations, SEO intent, hosting and comparison tolerances still require owner decisions. The public audit is evidence, not a forensic security finding or implementation parity check.

Phase 0 continues with evidence-gap closure and owner review; do not scaffold during workflow setup or automatically advance to bootstrap. Proposed effort is 15–25 developer working days after scope/content decisions, plus owner review, subject to editing/integration requirements. Earlier 7–10-day estimates are superseded. Keep historical captures dated; record later observations or decisions separately.

The 2026-10-08 bounded discovery handoff is docs/discovery/GAP-CLOSURE-PLAN.md: focus/ARIA and FAQ traversal, reduced-motion/carousel sampling, up to 12 media validation samples, up to 20 deep-path probes and selected public external flows. Execution remains pending. Allow 2–4 developer working days for this pass, tracked separately from the conditional migration estimate; reconcile overlap before a combined schedule. Bootstrap and content architecture remain gated on material Phase 0 requirements and acceptance.

## Engineering continuity

Own engineering and routine review inside Cursor using .cursor/rules/sterling-workflow.mdc and AGENTS.md. Persist progress in STATUS.md and architectural choices in docs/decisions.md. Plan substantial architecture before implementation; small reversible tasks do not require repeated mode switches or permission. A self-review is not independent verification. Make a relevant atomic commit after milestone checks pass; push only when authorized to the intended remote. No external ChatGPT review or manual report relay is required.

## Approval boundaries

Yaseen accepts scope, ambiguous URL dispositions and visual differences. The site owner confirms content legitimacy, media permission, form recipients, hosting/domain authority and release readiness. Routine implementation proceeds within the accepted milestone.
