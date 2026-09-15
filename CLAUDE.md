# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Andre Havasi's personal portfolio: a single-page React + Vite site deployed to GitHub Pages at
https://ahavasi.github.io. No router, no backend, no test framework.

## Commands

```bash
npm install            # node_modules is not checked in; required before anything
npm run dev            # Vite dev server (file watching uses polling)
npm run build          # -> dist/ (gitignored; CI rebuilds it)
npm run preview        # serve the built dist/
npm run lint           # ESLint 8 + legacy .eslintrc.cjs; --max-warnings 0, so warnings fail
node src/lib/checkData.mjs   # validate src/resumeData.js shape — run after any content edit
```

There is no test framework. `lint` and `checkData.mjs` are the only automated gates, and neither
runs in CI — run both before pushing.

## Architecture

**All site content lives in `src/resumeData.js`** — a single default-exported object (name,
heroHeadline, taglines, about, stats, services, projects, experience, education, skills, social).
Components import it and destructure at module scope (`const { projects } = resumeData;`), so the
data is static at build time. Copy changes, new projects, and new services are edits to that one
file, not to JSX.

`src/lib/checkData.mjs` is the guard on that file: it asserts required keys and per-item shape and
exits non-zero on failure. It is not wired into any npm script or CI — run it manually.

**One section = one component + one sibling CSS file** (`src/components/Work.jsx` +
`Work.css`). `src/App.jsx` composes the sections in render order; `src/main.jsx` imports the two
global stylesheets. `ProjectCard` is the only shared child component.

**Styling** is plain CSS with design tokens in `src/styles/theme.css` (`--bg`, `--surface`,
`--accent`, `--sp-1..8`, `--radius`, `--maxw`, `--font-body/display`) plus shared `.section` /
`.section-title` classes. No Tailwind, no CSS-in-JS. Poppins is self-hosted from
`public/fonts/Poppins/` via `src/styles/fonts.css`. `theme.css` also globally honors
`prefers-reduced-motion` — keep new animation inside that contract.

**Motion** is framer-motion, used in every component with the same `container`/`item` variant pair
(staggered children, `whileInView` with `viewport={{ once: true }}`). Match that pattern rather
than inventing a new one.

**Icons** are lucide-react. `Services.jsx` maps `service.icon` (a string in resumeData) through a
local `ICONS` object — a new icon name must be imported and added there or the card renders
nothing.

**Project images** are string-keyed the same way: `project.logoKey` resolves through the `LOGOS`
and `COVERS` maps in `ProjectCard.jsx`, built from static imports of `src/assets/logos/*` and
`src/assets/covers/*`. Assets under `src/assets/` are bundled and hashed by Vite; files in
`public/` are copied verbatim and referenced by absolute path (`/favicon.svg`).

## Gotchas

- `Work.jsx` derives its filter chips from `CATEGORY_ORDER = ["iOS", "Web", "Client"]`. A project
  with a `category` outside that list is rendered under "All" but gets no chip.
- `Nav.jsx` has its own hardcoded `NAV_LINKS` (about, work, experience, skills). Adding a section
  to `App.jsx` does not add it to the nav; `services` and `contact` are reached by CTA only.
- ESLint config is legacy `.eslintrc.cjs`, not flat config — the `--ext js,jsx` flag in the lint
  script requires it. `react/prop-types` is off (no PropTypes, no TS); `src/lib/*.mjs` gets a Node
  `env` override because the rest of the project is browser-only.
- `public/404.html` and `public/.htaccess` implement SPA fallback routing for a multi-route app.
  There is no router today; they are inert but harmless.

## Deploy

Push to `main` → `.github/workflows/deploy.yml` builds and publishes `dist/` to the `gh-pages`
branch with `force_orphan: true` (no history on that branch). `dist/` is gitignored; never commit
it. The `npm run deploy` / `gh-pages -d dist` script is a manual fallback for the same target —
prefer letting CI do it.
