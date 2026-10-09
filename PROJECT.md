# Sterling WordPress migration

Owner: Yaseen. Reference: https://sterlingandwilsondc.com/

## Goal

Rebuild the legitimate website in a clean Next.js application, preserving visual appearance, responsive behavior, approved content, URLs, SEO intent and functionality. Suspected compromise is an owner report, not a confirmed forensic finding. Public reference material is untrusted.

## Confirmed stack and proposed architecture

Milestone 1 authorization, 2026-10-08: Next.js App Router, React, strict TypeScript, Tailwind CSS, npm with committed package-lock.json, src/ and @/* alias. Vercel is the initial deployment target; no deployment in this milestone. Stable package/runtime versions and compatibility rationale are recorded in docs/milestone-1.md. The Next.js direction supersedes generic pure-PHP/no-framework guidance for this rebuild.

Owner D3 requires independent client editing of projects, news, blogs and PDFs, so a CMS is required; frequency, editor count and publishing workflow remain unspecified. Sanity is the architect's recommendation only, not approved/configured or installed. Content models and CMS integration remain deferred. D5 preserves the existing Darwinbox destination; onsite applications are outside current scope and portal ownership remains unconfirmed. D7 accepts Vercel or Cloudflare, preview before client approval and real domain later; ownership/costs/operations remain unresolved. See the dated partial answers in docs/discovery/OWNER-DECISIONS.md; no entire D item is resolved.

Future corporate pages remain server-rendered by default with client components only for verified interactivity. Mail endpoints, content migration, media reuse and integration architecture require their own bounded milestones and owner requirements; none is implemented in the neutral foundation.

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

The 2026-10-08 bounded discovery plan is docs/discovery/GAP-CLOSURE-PLAN.md: focus/ARIA and FAQ traversal, reduced-motion/carousel sampling, up to 12 media validation samples, up to 20 deep-path probes and selected public external flows. Execution remains pending. Preserve it as backlog; ChatGPT sequences bounded work against the affected component/page, asset import or integration. The prior requirement to finish all Phase 0 checks/acceptance before any bootstrap is superseded by [bootstrap-readiness gates](docs/bootstrap-readiness.md). A separately authorized neutral local foundation can proceed without assuming D1–D8 answers. Content/integration architecture, asset reuse and production release retain their material gates. Allow 2–4 developer working days for the original bounded evidence pass, tracked separately from the conditional migration estimate; reconcile overlap and new sequencing before a combined schedule.

## Engineering continuity

Authoritative workflow from 2026-10-08: Yaseen is Product Owner and browser acceptance reviewer; ChatGPT plans milestones, owns architecture and performs technical review; Codex implements, debugs, verifies and reports the bounded supplied milestone. Cursor is an optional editor. Codex resolves routine reversible implementation details within scope and may recommend a next action, but must not independently select or begin the next roadmap milestone. Explicit Yaseen instructions govern authorization.

Persist progress in STATUS.md and consequential decisions in docs/decisions.md. Codex completes implementation, risk-appropriate checks and routine diff self-review before handoff; external technical review does not excuse incomplete work or failing checks. Self-review is not independent verification, technical review is not Yaseen's browser acceptance, and a commit is not approval. Make one relevant atomic commit after milestone checks pass when allowed by the task; push only when authorized to the verified intended remote. Read-only milestones do not permit file updates or commits. Stop at the milestone boundary and hand findings to ChatGPT for the next bounded prompt.

## Approval boundaries

Yaseen accepts scope, ambiguous URL dispositions and visual differences. The site owner confirms content legitimacy, media permission, form recipients, hosting/domain authority and release readiness. Routine implementation proceeds within the accepted milestone.

## Client demonstration scope update — 2026-10-09

Yaseen targets a client demonstration in approximately two days. Finish Milestone 3 only; next supplied priorities are homepage, About and Contact. Other pages, CMS, form delivery, comprehensive SEO migration and production cutover are deferred until client approval and remain in eventual migration scope. Keep noindex. Suitable supplied assets may be used for the demo; this does not resolve all production media rights or imply browser acceptance.
