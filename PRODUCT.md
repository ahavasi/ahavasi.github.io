# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: prospective clients.** People with an app, website, or product idea who need it
actually shipped, not prototyped. They arrive cold or by referral, evaluate whether Andre can
be trusted with real money and a real launch, and decide in one scroll. This group is the
conversion target; section order, proof, and CTA key off it.

Secondary audiences, served but never at the primary's expense:

- **Recruiters and hiring managers** checking depth and employability.
- **Peers, founders, and product users** discovering the shipped products.

## Product Purpose

A single-page personal site at https://ahavasi.github.io that presents Andre Havasi as a
software engineer who ships complete products end to end — iOS, web, and the backends behind
them — and converts a stranger into an inbound project inquiry.

Success is one measurable thing: **a stranger emails about a project.** The conversion path is
`mailto:` — no form, no backend, no scheduler. Traffic to the products and recruiter interest
are welcome side effects, not the metric.

## Positioning

Not a resume site and not an agency. The differentiator is **founder-operator range**: the same
person architects enterprise backend systems at Jamf and independently ships his own iOS and web
products to the App Store and the open web — design, build, release management, and growth
included. A neighboring freelancer portfolio cannot truthfully claim both the enterprise
engineering depth and the shelf of self-founded, live products.

The client-facing promise is the last mile: build, TestFlight, App Review, release — all the way
to live.

## Operating Context

- One long scroll, no router, no CMS, no blog. Current section order: Nav, Hero, Services,
  About, Work, Experience, Skills, Contact.
- Visitors evaluate on any device and frequently on a phone; the whole judgment happens in one
  session, without signup or gating.
- Services and Work carry the client case. Experience, Skills, and Education exist as
  supporting credibility, not as the lead.
- Work is presented in three categories — iOS, Web, Client — which drive the filter chips.
- Contact is `mailto:` plus LinkedIn and GitHub. Email is `andre.havasi@icloud.com`.

## Capabilities and Constraints

- **Static site, build-time content.** React + Vite, deployed to GitHub Pages from `main` via
  GitHub Actions to the `gh-pages` branch. No server, no database, no runtime data fetching.
- **All content lives in `src/resumeData.js`** — a single default-exported object. Copy, new
  projects, and new services are edits to that file, not to JSX. `src/lib/checkData.mjs` guards
  its shape.
- Dependency-light by intent: framer-motion and lucide-react only. No CSS framework, no
  CSS-in-JS. Design tokens in `src/styles/theme.css`; Poppins self-hosted from `public/fonts/`.
- No test framework. `npm run lint` and `node src/lib/checkData.mjs` are the only automated
  gates, and neither runs in CI.
- `public/404.html` and `public/.htaccess` implement SPA fallback routing for a multi-route app
  that does not exist today. Inert, harmless, not a signal that routing is planned.
- **Open:** whether a booking or intake flow is ever wanted. Today it is explicitly out — email
  is the whole funnel.

## Brand Commitments

- Name shown as **Andre Havasi**. Title line: Software Engineer · Founder · Builder-for-hire.
- **Jamf employment is public and stays visible.** Current employer named on the site is
  approved, not sensitive.
- Voice is direct, first person, and concrete — "I build web & iOS apps — for my products, and
  for yours." No agency plural, no hype adjectives, no invented scale.
- Products referenced by their own names and real URLs: LiftLogic (liftlogic.fit), BodyTree
  (bodytree.app), drivway (drivway.co), CardOps (cardops.app), Simple Self Budget, Marquee,
  Elite Equine Events (eliteequineevents.com), Valz Corner. Names match the App Store listing
  exactly — the shipped name is the canonical one, never an internal or former codename.
- Brand favicon at `public/favicon.svg`; portrait at `public/andrehavasi.jpg`.

## Evidence on Hand

Real and usable:

- **Eight shipped projects** with roles, pitches, and stacks in `src/resumeData.js`; six have
  live App Store listings (LiftLogic, BodyTree, drivway, CardOps, Simple Self Budget, Marquee)
  and five have live sites. Cards carry a one-line pitch and tags, no outcome bullets — the
  Work section closes with a link to the App Store developer page instead.
- **Project logos and app icons** bundled under `src/assets/logos/`, resolved by `logoKey`.
  Every project card renders its mark on the shared gradient plate; there are no screenshots.
- **Verified employment history** — Jamf (2021–present, 2020–21 intern), Elite Equine Events
  contract (2024–present) — and a University of Minnesota CS degree (2017–2020).
- **Stats are accurate counts** and must stay accurate as work changes: 5+ years shipping, 6
  apps and platforms built, 3 products founded. Never rounded up for effect.
- **The limited-availability claim is true** — "I take on a limited number of freelance and
  contract projects" is an accurate statement and may stay.

Absent — future work must not fabricate these:

- **No client testimonials, quotes, or named references.**
- **No partner, employer, or client logo wall** beyond Andre's own project marks.
- **No published rates, pricing tiers, or packages.**
- No case studies with metrics, no press coverage, no awards, no user counts or revenue
  figures, no "trusted by" numbers.

## Product Principles

1. **Earn the email.** Every section either builds the case that Andre ships real things or
   gets out of the way of the one CTA. Decoration that delays the decision is cost, not polish.
2. **Proof is shipped work, because that is all the proof there is.** With no testimonials,
   logos, or rates, credibility has to come from live URLs, App Store listings, and specific
   technical detail. Lean on them harder rather than inventing softer proof.
3. **Founder-operator range is the story.** Enterprise backend depth and independently shipped
   consumer products belong in the same frame; separating them into two personas loses the
   thing nobody else can claim.
4. **Accurate or absent.** Counts, claims, and availability are real and stay real. A number
   that stops being true gets corrected or removed, never inflated.
5. **Content is data, not markup.** Anything a future edit will touch belongs in
   `src/resumeData.js` behind the shape check, so the site stays one-file editable.
