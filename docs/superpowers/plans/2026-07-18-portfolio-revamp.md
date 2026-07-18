# Portfolio Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `ahavasi.github.io` into a bold, dark, creative single-page portfolio that leads with a hire-me value prop and showcases six real projects, replacing Ant Design with a custom CSS design system.

**Architecture:** React + Vite single-page app. All content is data-driven from `src/resumeData.js`. One CSS design-system file of tokens (`src/styles/theme.css`) plus one focused component per section, each with its own CSS. framer-motion for scroll reveals. No Ant Design, no router.

**Tech Stack:** React 18, Vite 6, framer-motion 12, lucide-react (icons), custom CSS (variables, no framework), Poppins + one display font (local).

## Global Constraints

- **Remove** `antd`, `@ant-design/icons`, `react-router-dom`, `react-confetti`, `react-copy-to-clipboard` from dependencies — none are used after the rebuild.
- **Add** `lucide-react` for icons.
- Single **dark theme only** — no light/dark toggle.
- Accent = electric violet→blue gradient, defined once as CSS tokens (`--accent`, `--accent-2`, `--gradient-brand`); never hard-code these hex values in components.
- **Lead with hire-me:** section order is Hero → Services → About → Work → Experience → Skills → Contact. Hire Me is the primary CTA everywhere; View Work is secondary.
- All copy/section content comes from `src/resumeData.js` — components render data, never hard-code project/experience text.
- Respect `prefers-reduced-motion`: heavy motion disabled under it.
- Responsive: must work at 375px (mobile) through 1440px+ (desktop).
- Deploy is unchanged: push to `main` triggers `.github/workflows/deploy.yml`, which runs `npm run build` and publishes `dist/` to `gh-pages`. `base: "/"` in `vite.config.js` stays. Keep `public/.nojekyll`, `public/404.html`, `public/_headers`, favicon.
- Verification is **build + lint + visual**, not TDD — this is a presentational site with no business logic. The one automated check is a data-integrity assertion on `resumeData.js` (Task 2).

---

## File Structure

**Create:**
- `src/styles/theme.css` — design tokens (color, type, spacing, radius, shadow) + global reset + base element styles.
- `src/styles/fonts.css` — `@font-face` for Poppins (existing local files) + display font.
- `src/components/Nav.jsx` + `Nav.css` — sticky scroll-aware nav, mobile menu, Hire Me CTA.
- `src/components/Hero.jsx` + `Hero.css`.
- `src/components/Services.jsx` + `Services.css` (+ inline ServiceCard).
- `src/components/About.jsx` + `About.css` (+ stats row).
- `src/components/Work.jsx` + `Work.css` + `ProjectCard.jsx` + `ProjectCard.css`.
- `src/components/Experience.jsx` + `Experience.css`.
- `src/components/Skills.jsx` + `Skills.css`.
- `src/components/Contact.jsx` + `Contact.css` (+ footer).
- `src/lib/checkData.mjs` — node script asserting `resumeData` shape (Task 2).

**Modify:**
- `src/resumeData.js` — expand into full structured content.
- `src/App.jsx` — compose sections, drop router + darkMode.
- `src/main.jsx` — import theme/fonts css, drop antd reset if any.
- `src/index.css` / `src/App.css` — fold into `theme.css` or trim to empty.
- `package.json` — dependency changes.
- `index.html` — title/meta/OG tags.

**Delete:**
- `src/components/LandingPage.jsx` + `LandingPage.css`, `src/components/Navigation.jsx`, `src/components/Projects.jsx` (placeholder), `src/assets/logos/andryte-logo.png`, `src/assets/logos/xclusive-logo.png`.

---

## Task 1: Dependencies + design-system foundation

**Files:**
- Modify: `package.json`
- Create: `src/styles/theme.css`, `src/styles/fonts.css`
- Modify: `src/main.jsx`, `src/App.jsx`, `index.html`
- Delete: `src/components/LandingPage.*`, `src/components/Navigation.jsx`, `src/components/Projects.jsx`

**Interfaces:**
- Produces: CSS custom properties consumed by every component — `--bg`, `--surface`, `--surface-2`, `--text`, `--text-dim`, `--accent`, `--accent-2`, `--gradient-brand`, `--radius`, `--shadow`, spacing scale `--sp-1..--sp-8`, font vars `--font-body`, `--font-display`. Produces a bare `App` shell rendering `<main>` with section placeholders.

- [ ] **Step 1: Swap dependencies**

Remove antd/router/confetti/clipboard, add lucide-react:

```bash
npm uninstall antd @ant-design/icons react-router-dom react-confetti react-copy-to-clipboard
npm install lucide-react
```

- [ ] **Step 2: Write `src/styles/theme.css` (tokens + reset)**

```css
:root {
  --bg: #0a0a0f;
  --surface: #14141c;
  --surface-2: #1c1c28;
  --border: #2a2a3a;
  --text: #f4f4f8;
  --text-dim: #a0a0b4;
  --accent: #7c4dff;      /* electric violet */
  --accent-2: #3d7bff;    /* electric blue */
  --gradient-brand: linear-gradient(120deg, var(--accent), var(--accent-2));
  --radius: 16px;
  --radius-sm: 10px;
  --shadow: 0 20px 60px -20px rgba(0,0,0,0.7);
  --shadow-glow: 0 0 80px -20px rgba(124,77,255,0.5);
  --sp-1: 0.5rem; --sp-2: 0.75rem; --sp-3: 1rem; --sp-4: 1.5rem;
  --sp-5: 2rem; --sp-6: 3rem; --sp-7: 4.5rem; --sp-8: 7rem;
  --font-body: 'Poppins', system-ui, sans-serif;
  --font-display: 'Poppins', system-ui, sans-serif; /* upgraded in Step 3 */
  --maxw: 1120px;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
}
body {
  background: var(--bg); color: var(--text);
  font-family: var(--font-body); line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
h1, h2, h3 { font-family: var(--font-display); line-height: 1.1; font-weight: 700; }
.section { max-width: var(--maxw); margin: 0 auto; padding: var(--sp-8) var(--sp-4); }
.section-title { font-size: clamp(1.8rem, 4vw, 2.6rem); margin-bottom: var(--sp-5); }
```

- [ ] **Step 3: Write `src/styles/fonts.css`**

Reuse the existing local Poppins files under `public/fonts/Poppins/`. Declare the weights actually used (400/500/600/700/800). Example block (repeat per weight):

```css
@font-face {
  font-family: 'Poppins'; font-style: normal; font-weight: 400;
  src: url('/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
  font-display: swap;
}
/* ...500 Medium, 600 SemiBold, 700 Bold, 800 ExtraBold... */
```

Note: keep `--font-display` = Poppins ExtraBold for now (already bundled). A distinct display face can be added later by dropping a font file into `public/fonts/` and updating the token — no code change elsewhere.

- [ ] **Step 4: Rewrite `src/main.jsx`**

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/theme.css';
import './styles/fonts.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode><App /></StrictMode>
);
```

- [ ] **Step 5: Rewrite `src/App.jsx` to a bare shell**

```jsx
export default function App() {
  return (
    <main>
      {/* sections added in later tasks */}
      <section id="hero" className="section">Hero</section>
    </main>
  );
}
```

- [ ] **Step 6: Delete dead files**

```bash
git rm src/components/LandingPage.jsx src/components/LandingPage.css \
  src/components/Navigation.jsx src/components/Projects.jsx \
  src/assets/logos/andryte-logo.png src/assets/logos/xclusive-logo.png
```

Empty `src/index.css` and `src/App.css` (or delete and remove their imports).

- [ ] **Step 7: Update `index.html` meta**

Set `<title>Andre Havasi — Software Engineer, Founder & Builder-for-Hire</title>`, a meta description, and Open Graph tags (`og:title`, `og:description`, `og:image` → `/andrehavasi.jpg`).

- [ ] **Step 8: Verify build + dev**

```bash
npm run build
```
Expected: build succeeds, no antd/router import errors. Then `npm run dev`, load the page — dark background, "Hero" text in Poppins.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: design-system foundation, drop antd"
```

---

## Task 2: Structured content in `resumeData.js`

**Files:**
- Modify: `src/resumeData.js`
- Create: `src/lib/checkData.mjs`
- Assets: import existing `liftlogic-logo.png`, `equine-logo.png`; other project logos left `null` (ProjectCard renders a monogram tile).

**Interfaces:**
- Produces the default export shape consumed by all section components:
  `{ name, title, taglines[], heroHeadline, about[], stats[{value,label}], services[{title,desc,icon}], projects[{id,name,pitch,role,logo,tags[],bullets[],links{site?,appStore?,github?}}], experience[{title,desc}], education, skills{languages[],frameworks[],tools[]}, social{linkedin,github,email} }`
- `icon` on services is a lucide icon name string (e.g. `'Globe'`, `'Smartphone'`, `'Server'`).

- [ ] **Step 1: Rewrite `src/resumeData.js`**

Populate every field with real content. Keep the existing `experience` entries and `social`. Rewrite `profile` into 2–3 short `about` paragraphs. `projects` array in order: LiftLogic, BodyTree, drivway, CardStock, SimpleSelfBudget, Equine Logistics — using the seed content from the design spec (pitch, role, tags, 2–3 bullets, links). Import the two existing logos; set `logo: null` for the four without assets. `services`: Web Apps / iOS Apps / Backends & APIs with a one-line desc each and lucide icon names. `stats`: e.g. `{value:'5+', label:'Years shipping software'}`, `{value:'6', label:'Apps built'}`, `{value:'3', label:'Products founded'}`. `skills` grouped into languages/frameworks/tools from the existing comma string.

- [ ] **Step 2: Write `src/lib/checkData.mjs` (data-integrity assertion)**

```js
import data from '../resumeData.js';
const req = (c, m) => { if (!c) { console.error('FAIL:', m); process.exit(1); } };
req(data.name && data.title, 'name/title');
req(Array.isArray(data.taglines) && data.taglines.length, 'taglines');
req(data.about?.length >= 2, 'about paragraphs');
req(data.projects?.length === 6, 'six projects');
data.projects.forEach(p => req(p.id != null && p.name && p.pitch && p.role && Array.isArray(p.tags) && Array.isArray(p.bullets), `project ${p.name}`));
req(data.services?.length === 3, 'three services');
req(data.skills?.languages && data.skills?.frameworks && data.skills?.tools, 'grouped skills');
req(data.social?.email && data.social?.github && data.social?.linkedin, 'social');
console.log('resumeData OK');
```

Note: this imports `.png` via resumeData only indirectly — run with logos imported lazily or guard the node run. If `.png` imports break plain node, move logo imports into the components instead and keep `logo` as a string key in data. Prefer: **components import logos**, data holds a `logoKey` string; adjust the assertion accordingly. Pick one approach and keep it consistent across Task 7.

- [ ] **Step 3: Run the check**

```bash
node src/lib/checkData.mjs
```
Expected: `resumeData OK`

- [ ] **Step 4: Commit**

```bash
git add src/resumeData.js src/lib/checkData.mjs
git commit -m "feat: structured portfolio content"
```

---

## Task 3: Nav (sticky, scroll-aware, mobile menu, Hire Me CTA)

**Files:**
- Create: `src/components/Nav.jsx`, `src/components/Nav.css`
- Modify: `src/App.jsx` (render `<Nav />`)

**Interfaces:**
- Consumes: nothing from data except `social.github`/`linkedin` optional.
- Produces: `<Nav />` — fixed top bar, links (About, Work, Experience, Skills), scrolls to section ids via `scrollIntoView`, primary **Hire Me** button scrolling to `#contact`; adds a `scrolled` class after 40px scroll (background/blur). Mobile (<768px): hamburger toggling a full-screen menu, closing on link click and locking body scroll while open.

- [ ] **Step 1: Implement `Nav.jsx`**

Anchor items `[{id:'about',label:'About'},{id:'work',label:'Work'},{id:'experience',label:'Experience'},{id:'skills',label:'Skills'}]`. `scrollTo(id)` = `document.getElementById(id)?.scrollIntoView({behavior:'smooth'})`. Use `useState`/`useEffect` scroll listener for `scrolled`. Use lucide `Menu`/`X` icons. Reuse the mobile-menu open/close + `body.mobile-menu-open` scroll-lock pattern from the old `Navigation.jsx` (git history) but restyled.

- [ ] **Step 2: Style `Nav.css`**

Fixed, `backdrop-filter: blur()` when `.scrolled`, gradient Hire Me button using `var(--gradient-brand)`. Mobile menu overlay.

- [ ] **Step 3: Render in `App.jsx`** above `<main>`.

- [ ] **Step 4: Verify** `npm run dev` — nav sticks, blurs on scroll, mobile hamburger opens/closes, Hire Me scrolls (target added later; no crash if `#contact` absent).

- [ ] **Step 5: Commit** `git commit -am "feat: nav bar"`

---

## Task 4: Hero

**Files:**
- Create: `src/components/Hero.jsx`, `src/components/Hero.css`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `data.name`, `data.heroHeadline`, `data.taglines[]`, `data.social`.
- Produces: `<Hero />` full-viewport section `id="hero"` with animated gradient/glow bg (CSS), big name, hire-me-forward headline, a rotating tagline (cycles `taglines` every ~2.5s via `setInterval`, respecting reduced-motion by showing a static join), CTAs: **Hire Me** (primary → `#contact`) + **View Work** (secondary → `#work`), profile image `/andrehavasi.jpg` with gradient frame.

- [ ] **Step 1: Implement `Hero.jsx`** with framer-motion entrance (`initial/animate` opacity+y) and the rotating tagline (guard interval with `window.matchMedia('(prefers-reduced-motion: reduce)')`).
- [ ] **Step 2: Style `Hero.css`** — animated conic/radial gradient glow behind content (`@keyframes` drift), fluid `clamp()` name size, gradient-framed circular/rounded profile image, responsive stack on mobile.
- [ ] **Step 3: Render `<Hero />`** as first child of `<main>`, remove the placeholder.
- [ ] **Step 4: Verify** dev — hero fills viewport, tagline rotates, CTAs scroll, looks right at 375px + desktop.
- [ ] **Step 5: Commit** `git commit -am "feat: hero section"`

---

## Task 5: Services / Work-with-me (leads the page)

**Files:**
- Create: `src/components/Services.jsx`, `src/components/Services.css`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `data.services[]` (`{title, desc, icon}`), icon = lucide name.
- Produces: `<Services />` section `id="services"`, placed **directly after Hero**. Intro line ("I build web & iOS apps for people"), 3 service cards (icon, title, desc), CTA button → `#contact`.

- [ ] **Step 1: Implement `Services.jsx`** — map `data.services`; resolve lucide icon via a small map `{Globe, Smartphone, Server}` from `lucide-react`. Scroll-reveal with framer-motion `whileInView`.
- [ ] **Step 2: Style `Services.css`** — 3-col grid → 1-col mobile, cards `var(--surface)` + border, accent icon in a gradient chip, hover lift.
- [ ] **Step 3: Render** after `<Hero />`.
- [ ] **Step 4: Verify** dev — three cards, CTA scrolls.
- [ ] **Step 5: Commit** `git commit -am "feat: services section"`

---

## Task 6: About + stats

**Files:**
- Create: `src/components/About.jsx`, `src/components/About.css`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `data.about[]`, `data.stats[]`.
- Produces: `<About />` section `id="about"` — section title, `about` paragraphs, and a stats row of `{value,label}` tiles.

- [ ] **Step 1: Implement `About.jsx`** — map paragraphs + stats, framer-motion `whileInView` reveal.
- [ ] **Step 2: Style `About.css`** — readable measure (`max-width: 60ch`), stats as a responsive flex row, big gradient `value`, dim `label`.
- [ ] **Step 3: Render** after Services.
- [ ] **Step 4: Verify** dev.
- [ ] **Step 5: Commit** `git commit -am "feat: about + stats"`

---

## Task 7: Work + ProjectCard

**Files:**
- Create: `src/components/Work.jsx`, `src/components/Work.css`, `src/components/ProjectCard.jsx`, `src/components/ProjectCard.css`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `data.projects[]`. Logos: import the two existing PNGs and map by `logoKey` (consistent with the Task 2 decision — data holds `logoKey`, component holds the import map). Missing logo → monogram tile (first letter(s) of `name` on `var(--gradient-brand)`).
- Produces: `<Work />` section `id="work"` grid of `<ProjectCard project={p} />`. Card: logo-or-monogram, name, role badge, pitch, tag chips, bullets, and link buttons for each present `links` entry (Site / App Store / GitHub) with lucide icons (`ExternalLink`, `Github`).

- [ ] **Step 1: Implement `ProjectCard.jsx`** — render monogram when `logoKey` has no mapped asset; render only the links that exist; role badge styled by role.
- [ ] **Step 2: Implement `Work.jsx`** — responsive grid, staggered `whileInView` reveal.
- [ ] **Step 3: Style `Work.css` + `ProjectCard.css`** — 2-col → 1-col, card hover lift + accent border glow, chip + badge styles, monogram tile.
- [ ] **Step 4: Render** after About.
- [ ] **Step 5: Verify** dev — six cards, two show real logos, four show monograms, links open correct sites (LiftLogic, BodyTree, Equine live; App Store links where set).
- [ ] **Step 6: Commit** `git commit -am "feat: work section + project cards"`

---

## Task 8: Experience timeline

**Files:**
- Create: `src/components/Experience.jsx`, `src/components/Experience.css`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `data.experience[]` (`{title, desc}`) + `data.education`.
- Produces: `<Experience />` section `id="experience"` — vertical timeline, one node per entry, education line at the end.

- [ ] **Step 1: Implement `Experience.jsx`** — map entries into timeline items with a connecting line + accent node dots; `whileInView` reveal per item.
- [ ] **Step 2: Style `Experience.css`** — left rail line, gradient node dots, responsive.
- [ ] **Step 3: Render** after Work.
- [ ] **Step 4: Verify** dev.
- [ ] **Step 5: Commit** `git commit -am "feat: experience timeline"`

---

## Task 9: Skills (grouped chips)

**Files:**
- Create: `src/components/Skills.jsx`, `src/components/Skills.css`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `data.skills` = `{languages[], frameworks[], tools[]}`.
- Produces: `<Skills />` section `id="skills"` — three groups, each a labeled row of tag chips.

- [ ] **Step 1: Implement `Skills.jsx`** — map the three groups; `whileInView` reveal.
- [ ] **Step 2: Style `Skills.css`** — chip style shared visual language with project tags, group labels dim/uppercase.
- [ ] **Step 3: Render** after Experience.
- [ ] **Step 4: Verify** dev.
- [ ] **Step 5: Commit** `git commit -am "feat: skills section"`

---

## Task 10: Contact + Footer

**Files:**
- Create: `src/components/Contact.jsx`, `src/components/Contact.css`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `data.social` (`email`, `github`, `linkedin`).
- Produces: `<Contact />` section `id="contact"` — big hire-me headline, email CTA button (`mailto:`), GitHub + LinkedIn links (lucide icons), and a footer with name + year. This is the `#contact` target for all Hire Me CTAs.

- [ ] **Step 1: Implement `Contact.jsx`** — headline, `mailto:` primary button, social icon links, footer. Year: hard-code `2026` (avoid `new Date()` churn) or compute once at render.
- [ ] **Step 2: Style `Contact.css`** — centered CTA block with gradient glow, footer separated by border.
- [ ] **Step 3: Render** last in `<main>`.
- [ ] **Step 4: Verify** dev — every Hire Me CTA scrolls here; email/social links correct.
- [ ] **Step 5: Commit** `git commit -am "feat: contact + footer"`

---

## Task 11: Polish, a11y, and ship

**Files:**
- Modify: any component CSS as needed; `public/_headers`/`404.html` untouched unless broken.

- [ ] **Step 1: Reduced-motion pass** — verify with `prefers-reduced-motion: reduce` (DevTools rendering emulation) that tagline rotation, gradient drift, and reveals are quiet.
- [ ] **Step 2: Responsive sweep** — walk 375 / 768 / 1024 / 1440px. No horizontal scroll; nav, hero, grids all reflow.
- [ ] **Step 3: Contrast/a11y** — confirm text-on-dark meets AA; images have `alt`; buttons/links are real `<a>`/`<button>`; nav links keyboard-focusable.
- [ ] **Step 4: Remove antd remnants** — `grep -rn "antd" src/` returns nothing; confirm `package.json` has no antd/router. Run `node src/lib/checkData.mjs` → `resumeData OK`.
- [ ] **Step 5: Lint + build + preview**

```bash
npm run lint
npm run build
npm run preview
```
Expected: lint clean (fix or update `.eslintrc` for any unused-var noise), build succeeds, preview renders the full site. Confirm bundle size dropped vs the antd build.

- [ ] **Step 6: Commit + push to deploy**

```bash
git commit -am "chore: polish, a11y, responsive pass"
git push origin main
```
Pushing `main` triggers the deploy workflow → `gh-pages`. Verify the Action succeeds and https://ahavasi.github.io reflects the new site.

---

## Self-Review

- **Spec coverage:** stack swap (T1), design system (T1), dark theme (T1), data model (T2), all 7 sections Hero/Services/About/Work/Experience/Skills/Contact (T4–T10), lead-with-hire-me ordering (T3 nav + T4/T5 placement), placeholder logos (T7), deploy (T11), reduced-motion + a11y + responsive (T11). Covered.
- **Placeholder scan:** no TBD/TODO; each task shows concrete code or concrete styling intent. Presentational CSS is described by responsibility rather than full stylesheets by design (see Global Constraints note on verification).
- **Type consistency:** the `resumeData` shape in Task 2 Interfaces is the single source; Tasks 4–10 consume exactly those field names. Logo handling resolved once (data holds `logoKey`, components hold the import map) and referenced consistently in Tasks 2 and 7.
