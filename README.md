# Sterling Next.js foundation

Milestone 1 provides a neutral local development page and accessible 404, not the migrated client website. CMS, content, branding/media, forms and deployment are deferred. Temporary `noindex,nofollow` metadata must be reviewed before production launch; it is not access control. No environment variables or service accounts are needed for this foundation.

## Runtime and installation

Supported: Node.js 24.x LTS and npm 11.x. Tested/CI baseline: Node **24.18.0** (also in `.node-version`) and npm **11.16.0** (`packageManager` in package.json). Use those exact versions to reproduce this milestone. Direct dependencies are pinned; package-lock.json records the complete install. Never regenerate the lockfile merely to run the site.

From Windows PowerShell:

```powershell
Set-Location -LiteralPath 'C:\Projects\React\sterling-next'
node --version
npm.cmd --version
npm.cmd ci
npm.cmd run dev
```

Open http://localhost:3000. Stop the server with Ctrl+C before starting another server on the same port. `npm.cmd` avoids PowerShell script-execution-policy issues with npm.ps1; plain `npm` is also supported when policy permits.

## Verification and local production mode

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
npm.cmd run start
```

The production server uses the already-built `.next` output; open http://localhost:3000 and an unknown URL such as http://localhost:3000/foundation-missing. The latter must show the custom not-found page with HTTP 404. For an alternate port use `npm.cmd run dev -- --port 3100` or `npm.cmd run start -- --port 3101`.

`lint` uses ESLint's flat configuration and CLI, independently of build. `typecheck` runs `next typegen` then strict `tsc --noEmit`, so generated route types are available on a fresh checkout. Generated `.next/`, next-env.d.ts, node_modules/ and TypeScript incremental files are ignored. Tailwind 4 uses its PostCSS plugin and scans src/app only; historical reference evidence is not a styling source. System fonts avoid remote font requests.

GitHub Actions (`.github/workflows/checks.yml`) uses the documented Node/npm baseline and runs npm ci, lint, typecheck and build on main pushes and pull requests. It requires no configured secrets and does not deploy. A local pass does not claim a GitHub-hosted run passed.

## Structure and handoff

- `src/app/layout.tsx`: semantic HTML root and temporary noindex metadata.
- `src/app/page.tsx`: neutral server-rendered development page styled with Tailwind.
- `src/app/not-found.tsx`: accessible 404 with a keyboard-visible home link.
- `src/app/globals.css`: Tailwind import and system-font baseline.
- `next.config.ts`: disables Next's automatic AGENTS.md additions, preserving the existing repository instructions.
- AGENTS.md, PROJECT.md and STATUS.md: workflow, scope and progress; `docs/decisions.md`: consequential history.
- [Milestone 1](docs/milestone-1.md): exact package versions, official compatibility sources and actual checks.
- [Owner decisions](docs/discovery/OWNER-DECISIONS.md): D3/D5/D7 partially answered; independent editing requires a CMS, Sanity remains a recommendation, Darwinbox retained and Vercel initial target. No CMS or deployment configured.

Yaseen owns product/browser acceptance; ChatGPT plans/architects/reviews; Codex executes the supplied bounded milestone. Future preview publication, production indexing, content integration and real-domain connection need their own milestone and approvals. Discovery evidence is preserved; W1–W4 has not been executed by this foundation milestone.
