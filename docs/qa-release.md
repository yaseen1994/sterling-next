# QA and release gate

## Page acceptance

- Approved route and content complete; title/canonical/headings reflect the specification.
- Compare reference and replacement at matching viewports and states; check mobile navigation, images, typography, spacing, animations and overflow.
- Verify keyboard access, visible focus, semantic headings, labels, contrast and reduced-motion behavior.
- Verify each link, filter, accordion, carousel, CTA and download actually works.
- Verify assets and font licensing; use local approved media where appropriate.

## Integration acceptance

Forms: confirm recipient and approved wording; server-side validation, injection protection, rate limiting/anti-spam, accessible errors, failure/retry behavior, success state and upload constraints where applicable. Test in a safe environment; verify delivery to an authorized recipient before launch.

SEO: reconcile every approved old route to a served route or intended redirect/removal; test status codes and redirect destinations; preserve legitimate download URLs or redirects; validate canonicals, sitemap, robots, OpenGraph and structured data. Prevent preview indexing; enable intended production indexing at release.

## Engineering gate

Configured lint, typecheck and production build pass. Relevant behavioral tests pass. Exercise production-mode rendering, browser errors, responsive behavior and missing-page handling. Record performance measurements and environment; do not treat a single Lighthouse score as proof of field Core Web Vitals.

## Cutover

Confirm accepted scope and outstanding issues; clean hosting; runtime secrets; domain authority; email DNS records; certificates; redirect rules; analytics/consent; rollback target; monitoring owner. Keep production DNS/email changes scoped and authorized. Do not decommission the old installation until dependencies and rollback are assessed; isolate suspect infrastructure appropriately.

After cutover check key URLs, forms, downloads, indexing directives and error logs. Monitor 404s, mail failures and search coverage. Security/account remediation of the old host and domain/email controls is a separate owner responsibility, tracked explicitly if needed.
