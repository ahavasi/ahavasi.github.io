# Portfolio Revamp — Design Spec

Date: 2026-07-18

## Context

`ahavasi.github.io` is Andre Havasi's personal site (Vite + React, deployed to
`gh-pages` via GitHub Actions). The current build is a single Ant Design landing
page — competent but generic: default antd styling, a wall-of-text About, only
two projects, and no angle for attracting client work.

Andre wants a **full visual rebuild** into a bold, creative showcase of *who he
is and what he's built*. Audience is broad — recruiters, peers, project
users/investors, **and prospective clients who want websites/apps built for
them**. That last group is a new, explicit goal: the site should sell him as a
builder-for-hire, not just document a resume.

## Goals

- Bold, creative, cohesive dark theme — memorable, not another dev-blue template.
- Lead with **work**: six real projects, richly presented.
- Add a **Services / Work-with-me** angle for client acquisition.
- Tighten the writing (the current About is one dense paragraph).
- Keep it fast, dependency-light, and easy to update via structured data.

## Non-Goals

- No CMS/blog for now.
- No multi-page routing — single long scroll page.
- Ignore the `new-ui` branch (beginner practice projects; not showcase-grade).
- Not featuring Andryte / Xclusive (excluded per Andre).

## Stack Decision

Keep **React + Vite + framer-motion**. **Remove Ant Design** (`antd`,
`@ant-design/icons`) — it's the main source of the generic look. Replace with:

- A **custom CSS design system** driven by CSS custom properties (single
  `styles/theme.css` for tokens + per-component CSS). No CSS framework.
- **Lightweight icons** via `lucide-react` (or inline SVG) instead of antd icons.
- Keep bundled **Poppins**; add one **bold display face** for headlines
  (e.g. a variable/geometric sans) loaded from the existing local-font pattern.

React Router can be dropped (single page) unless kept trivially for future use —
default is to remove it.

## Design System

- **Theme:** single dark theme (drop the light/dark toggle — dilutes a bold
  look). Near-black base, layered surfaces.
- **Accent:** electric violet → blue gradient. Define as tokens:
  `--accent`, `--accent-2`, `--gradient-brand`. Use for CTAs, highlights,
  section accents, hover states.
- **Type scale:** large display headings, comfortable body. Fluid `clamp()`
  sizing. Display face for H1/H2, Poppins for body.
- **Texture:** subtle noise/grain overlay + soft radial gradient glows behind
  the hero and section dividers. Restrained, not busy.
- **Motion:** framer-motion — scroll-reveal on sections (already the pattern),
  hero entrance, card hover lift. Respect `prefers-reduced-motion`.
- **Spacing:** generous, consistent scale (token-based).
- Fully responsive; mobile-first nav (keep the working mobile-menu pattern,
  restyled).

## Page Structure (single scroll page)

**Priority: lead with hire-me.** The client-acquisition value prop appears
early and prominently; the portfolio then serves as proof. Sticky/scroll-aware
top nav with anchor links + a prominent **Hire Me** button (primary style).

1. **Hero** — huge name + a builder-for-hire-forward headline
   (e.g. "I build web & iOS apps — for my products and for yours"), animated
   rotating tagline (`Software Engineer · Founder · Builder-for-hire`). Two
   CTAs with **Hire Me primary** (scroll to Services/Contact) and *View Work*
   secondary. Animated gradient/glow background (replaces the photo bg).
   Profile image with a creative framed/gradient treatment.
2. **Services / Work with me** — placed high (right after the hero) since
   hire-me leads. Short value intro ("I build web + iOS apps for people"),
   3 service cards (*Web Apps*, *iOS Apps*, *Backends & APIs*), and a clear
   contact CTA. Equine + drivway cited as proof.
3. **About** — tight, punchy rewrite of the profile blurb (2–3 short
   paragraphs) + a **quick-stats** row (e.g. 5+ yrs experience, 6 shipped apps,
   founder ×N). Stats data-driven.
4. **Work** — the proof. A responsive grid of **project cards**, one per
   project (see Data Model). Each card: logo/thumbnail, name, one-line pitch,
   role/tag (Founder / Contract / Personal), stack tag chips, 2–3 impact
   bullets, and live links (Site / App Store / GitHub) where they exist.
5. **Experience** — vertical timeline (Jamf SWE → Jamf Intern → Equine
   contract), data-driven from `experience[]`.
6. **Skills** — grouped visual tag chips (Languages / Frameworks / Tools),
   not one comma string.
7. **Contact + Footer** — headline hire-me CTA, email button, GitHub +
   LinkedIn links, copyright footer.

## Data Model (`src/resumeData.js`)

Expand the existing default export into richer structured data driving the UI:

```js
export default {
  name, title, taglines: [ ... ],      // rotating hero taglines
  about: [ "para1", "para2" ],          // rewritten, split
  stats: [ { value, label }, ... ],
  projects: [
    {
      id, name, pitch, role,            // role: 'Founder' | 'Contract' | 'Personal'
      logo,                             // imported asset
      tags: [ 'SwiftUI', 'Firebase' ],
      bullets: [ ... ],
      links: { site?, appStore?, github? },
    },
    // LiftLogic, BodyTree, drivway, CardStock, SimpleSelfBudget, Equine Logistics
  ],
  services: [ { title, desc, icon }, ... ],
  experience: [ { title, desc }, ... ], // existing, reused
  education, skills: { languages:[], frameworks:[], tools:[] },
  social: { linkedin, github, email },
}
```

Project seed content (bullets/pitches refined during build):

- **LiftLogic** — AI-assisted iOS workout tracking; SwiftUI, Firebase, Apple
  Watch. Role: Founder. Links: site (liftlogic.fit), App Store.
- **BodyTree** — calisthenics skill-progression app, iOS + Android. Native,
  Firebase. Role: Founder. Links: site.
- **drivway** — marketplace connecting customers with mobile car-repair
  technicians. React/TS, Vite, Tailwind, Firebase, Cloudflare Pages.
  Role: Founder.
- **CardStock** — Pokémon card inventory + pricing iOS app. SwiftUI,
  SwiftData/CloudKit, Cloudflare Worker. Role: Personal.
- **SimpleSelfBudget** — personal monthly budget iOS app. SwiftUI,
  SwiftData/CloudKit. Role: Personal. Links: App Store (if live).
- **Equine Logistics LLC** — contract company web platform. React, Vite,
  Firebase. Role: Contract. Links: site.

Logos: reuse existing `liftlogic-logo.png`, `equine-logo.png`. Need new logos/
thumbnails for BodyTree, drivway, CardStock, SimpleSelfBudget — placeholder
treatment (monogram tile in brand gradient) until real assets are added.

## Components

- `Nav` — scroll-aware sticky nav + mobile menu + Hire Me CTA.
- `Hero`, `About`, `Work` (+ `ProjectCard`), `Services` (+ `ServiceCard`),
  `Experience` (+ `TimelineItem`), `Skills`, `Contact`, `Footer`.
- `styles/theme.css` (tokens) + component CSS. One section = one focused
  component file.

## Deploy

Unchanged: `npm run build` → `dist/`, GitHub Actions → `gh-pages`. Verify the
existing `.github/workflows/deploy.yml` still matches the build output. Keep
`public/.nojekyll`, `404.html`, `_headers`, favicon.

## Verification

1. `npm install` (add lucide-react, remove antd) then `npm run dev` — visually
   walk every section on desktop + mobile widths.
2. Check each project card's links open correct live sites.
3. `npm run build` succeeds; preview `dist/` with `npm run preview`.
4. Lighthouse pass — performance + accessibility; confirm
   `prefers-reduced-motion` disables heavy motion; color contrast on the dark
   theme meets AA.
5. Confirm no antd remnants remain (no `antd` import; bundle size dropped).
```
