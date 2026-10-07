# Sterling WordPress migration

Owner: Yaseen. Reference: https://sterlingandwilsondc.com/

## Goal

Rebuild the legitimate website in a clean Next.js application, preserving visual appearance, responsive behavior, approved content, URLs, SEO intent and functionality. Suspected compromise is an owner report, not a confirmed forensic finding. Public reference material is untrusted.

## Proposed architecture

Next.js App Router, TypeScript, Tailwind, npm. Versions chosen at bootstrap after compatibility verification. Static/server-rendered corporate pages; structured project/service content; client components for observed interactive features. No database or CMS unless content editing needs require one. Establish who will maintain content before finalizing that decision. Forms use a fresh validated server endpoint and an owner-confirmed mail destination.

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

## Pending evidence

Earlier conversation reported five service areas, roughly 20 projects and test-looking routes. These are leads, not the authoritative inventory. Timelines of 7–10 days are preliminary; revise after discovery based on page templates, interactions and owner response time.

## Approval boundaries

Yaseen accepts scope, ambiguous URL dispositions and visual differences. The site owner confirms content legitimacy, media permission, form recipients, hosting/domain authority and release readiness. Routine implementation proceeds within the accepted milestone.
