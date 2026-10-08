# Milestone 1 — local application foundation

Date: 2026-10-08. Scope: neutral Next.js foundation at the existing root; no CMS, deployment, production content/media or W1–W4 execution. Existing AGENTS.md and Git repository retained. Implementation completion, ChatGPT review and Yaseen browser acceptance are separate states.

## Stable versions and rationale

Node 24.18.0 / npm 11.16.0 is the locally installed and CI-pinned baseline; supported runtime line is Node 24 LTS / npm 11. Next requires Node >=20.9; npm 11.16.0 requires Node ^20.17 or >=22.9, both satisfied. No runtime upgrade installed.

Direct packages: Next **16.4.0**; React/react-dom **19.3.0**; Tailwind and @tailwindcss/postcss **4.3.3**; PostCSS **8.5.29**; TypeScript **5.9.3**; ESLint **10.12.0**, @eslint/js **10.0.1**, typescript-eslint **8.71.1**; @types/node **24.19.1**; @types/react and @types/react-dom **19.3.0**. Exact direct versions and full transitive resolutions are in package.json/package-lock.json. No prerelease package is selected. Stable Next bundles its App Router React runtime internally; the declared React packages are stable releases, as official Next documentation instructs.

Next's official npm metadata accepts stable React 19. TypeScript 5.9.3 is stable and satisfies typescript-eslint 8.71.1's >=4.8.4 <6.1.0 peer range; the registry latest TypeScript 7.0.2 is outside that range. ESLint 10 requires Node >=24 on the chosen runtime line, satisfied by 24.18.0; typescript-eslint advertises ESLint 10 compatibility. Tailwind 4 uses the official PostCSS plugin, without dependencies intended for older Tailwind. Source scanning is restricted to src/app so reference documents are not scanned into application CSS. No remote fonts.

Dependency review changed the initial lint selection: npm marked ESLint 9.39.5 unsupported, and npm audit reported five high-severity entries caused by the Next preset/plugin's fast-glob -> micromatch -> braces chain ([GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)); braces' latest 3.0.3 was affected with no patched release. Removed eslint-config-next and its unused plugin/resolver chain, using supported ESLint 10 plus official JS/TypeScript recommended rules for the minimal source. No force fix, insecure override or framework downgrade. Next-specific lint rules are not currently enabled; add compatible, reviewed framework/React rules when affected UI work requires them. Current strict typing, build, smoke and self-review checks still apply; this is not a universal accessibility guarantee.

Current official sources consulted on 2026-10-08:

- [Next installation and manual setup](https://nextjs.org/docs/app/getting-started/installation): supported Node/OS, stable declared React packages and App Router setup.
- [Next ESLint configuration](https://nextjs.org/docs/app/api-reference/config/eslint): ESLint CLI/flat configuration, separate lint/build and plugin compatibility caveats. Final configuration follows [typescript-eslint quickstart](https://typescript-eslint.io/getting-started/) and [ESLint flat configuration](https://eslint.org/docs/latest/use/configure/configuration-files).
- [Next CLI/type generation](https://nextjs.org/docs/app/api-reference/cli/next): next typegen before strict tsc; generated next-env.d.ts ignored.
- [Next not-found convention](https://nextjs.org/docs/app/api-reference/file-conventions/not-found) and [metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata): root 404 and robots metadata.
- [Tailwind Next.js guide](https://tailwindcss.com/docs/installation/framework-guides/nextjs) and [source detection](https://tailwindcss.com/docs/detecting-classes-in-source-files): PostCSS plugin, CSS import and scoped source scanning.
- [Node releases](https://nodejs.org/en/about/previous-releases): Node 24 LTS; [TypeScript 5.9](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-9.html): stable compiler release.
- [Official setup-node](https://github.com/actions/setup-node) / [checkout](https://github.com/actions/checkout): current v7 Actions, node-version-file and npm caching, read-only repository permission. CI pins npm 11.16.0 explicitly and requires no configured secrets.
- Official npm registry queries (`npm view`) verified next/React/Tailwind latest stable versions, exact supporting package versions, Next peer/runtime requirements, eslint-config-next dependencies and npm runtime requirements. Lockfile/install checks establish the actual resolved dependency graph.

## Implementation

src/app contains only a server-rendered semantic root layout, neutral development page, accessible not-found page and Tailwind/system-font CSS. @/* maps to src/*. Temporary noindex/nofollow applies to the foundation; review before production launch and independently protect any future public preview. No production SEO/canonical/redirect decision is implemented. No empty feature folders or optional compiler/CMS packages.

Scripts: dev, build, start, ESLint CLI lint (zero warnings), and route generation plus strict no-emit typecheck. CI runs npm ci, lint, typecheck and build on main pushes/PRs. README supplies complete Windows installation/start/verification instructions. The only Next configuration is `agentRules: false`: the first dev start appended a generated block to AGENTS.md, which was removed; the setting prevents future additions and preserves the original instructions. See [official agentRules configuration](https://nextjs.org/docs/app/api-reference/config/next-config-js/agentRules). No Vercel account/deployment configuration is required or created here.

Owner answers D3/D5/D7 are recorded as partial answers in [OWNER-DECISIONS.md](discovery/OWNER-DECISIONS.md). CMS required, Sanity recommendation only; preserve Darwinbox and exclude onsite applications; initial target Vercel, no deployment. Editor frequency/count/workflow, portal ownership and hosting account/cost/operations remain open. D1/D2/D4/D6/D8 remain unanswered.

## Verification and acceptance

- `npm ci`: pass, installed 140 packages/audited 141, zero reported vulnerabilities. Lockfile contains no prerelease versions. No forced peer resolution or audit fix.
- `npm run lint`: pass, ESLint CLI with zero warnings; rerun after final next.config change passed.
- `npm run typecheck`: pass, next typegen and strict tsc; rerun with final config passed.
- `npm run build`: final pass, Next 16.4.0/Turbopack generated static `/` and `/_not-found`. The first sandbox attempt compiled then failed at worker spawn with EPERM; authorized execution outside that restriction passed. Final config was rebuilt successfully; no source/build issue left open.
- `npm run dev -- --hostname 127.0.0.1 --port 3100`: startup and GET `/` passed (200), correct heading and noindex/nofollow. Config reload applied agentRules false without re-adding the generated instruction block.
- `npm run start -- --hostname 127.0.0.1 --port 3101`: final built `/` returned 200; `/foundation-missing` returned 404 with custom text and noindex. [HTTP outcomes](qa/milestone-1/http-checks.json) record the final production checks. Next's extra automatic 404 noindex tag is expected.
- Browser on local production build: 1440×900 and 390×844 homepage, mobile 404. One main/H1, no horizontal overflow, Tailwind 48px desktop/30px mobile heading and styled background verified. Tab focused the 404 home link visibly; Enter returned to `/`. No recorded warning/error logs. [Browser results](qa/milestone-1/browser-checks.json) and paired viewport JPEG/AX files preserve evidence. These checks do not compare client/reference design. Temporary viewport reset/tab closed; task-owned loopback servers stopped after checks.
- Historical discovery evidence/manifests: 282 protected files byte-identical to the pre-milestone aggregate; original AGENTS.md and Cursor workflow rule unchanged. Scoped source/config/docs/lockfile diff and local document references reviewed; git diff --check passes. Generated dependencies/build/type files ignored, not committed.

Initial npm installation/preset audit failures and the stale ESLint peer-resolution attempt were resolved by a clean regeneration of only newly created dependencies/lockfile and the minimal supported lint toolchain. Initial Get-NetTCPConnection cleanup inspection was denied in the sandbox; authorized inspection identified and stopped only verified task-owned server processes. No source WordPress, historical evidence or unrelated user data changed.

GitHub Actions workflow is configured; its hosted execution has not yet been observed. No Linux/Vercel deployment, full automated behavioral suite, CMS/email/content or migrated parity check performed. Milestone implementation/checks complete, routine self-review complete; ChatGPT technical review and Yaseen browser acceptance pending. Next step is review and a separately supplied bounded milestone; no CMS integration or page migration begins.
