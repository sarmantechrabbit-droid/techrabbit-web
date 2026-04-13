# TechRabbit Frontend — CLAUDE.md

## Project Overview

Marketing/landing-page website for **TechRabbit**, a premium AI product studio based in Ahmedabad. Sells two services: bi-weekly development sprints and one-time MVP builds. No backend — purely a static marketing site.

---

## Tech Stack

| Layer | Tool / Version |
|---|---|
| Framework | React 19 (JSX only — no TypeScript) |
| Bundler | Vite 8 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite` plugin) |
| Routing | React Router DOM v7 |
| Animation | Framer Motion v12 |
| Fonts | DM Sans (body) + Bricolage Grotesque (headings) via Google Fonts in `index.html` |
| Linting | ESLint 9 flat config (`eslint.config.js`) |

No TypeScript. No state management library. No backend, API calls, or database.

---

## Folder Structure

```
src/
  main.jsx              # React root mount (StrictMode)
  App.jsx               # BrowserRouter + AnimatePresence page transitions
  index.css             # Tailwind v4 import, @theme font tokens, global resets
  App.css               # Mostly empty — ignore
  layouts/
    Layout.jsx          # Wraps every page: Navbar + <main> + Footer
                        # Handles scroll-to-top on route change + hash anchor scrolling
  pages/
    Home.jsx            # Landing page — composes all section components in order
    Services.jsx        # Accordion-style service list (ServiceRow local component)
    Work.jsx            # Portfolio grid using CaseStudyCard
    About.jsx           # Team grid + company values
    Contact.jsx         # Contact form (front-end only mock, no submission)
  components/
    Navbar.jsx          # Fixed floating pill nav; shrinks on scroll via useScrollY
    Footer.jsx          # Newsletter input (static/no-op), site links, brand column
    Hero.jsx            # Full-height hero: headline, CTAs, stats, animated marquee
    PricingSection.jsx  # Two pricing plan cards (Sprints + MVP)
    ComparisonSection.jsx  # TechRabbit vs Freelancer vs Offshore comparison table
    ProcessSection.jsx  # 4-step process cards (numbered 01–04)
    PortfolioSection.jsx   # 3-item portfolio preview grid (Unsplash images)
    TestimonialsSection.jsx  # 3-card testimonial grid (static, one featured dark card)
    Testimonials.jsx    # Auto-advancing carousel with 5 testimonials — NOT currently used in any page
    WhySubscribe.jsx    # Benefits grid + "Say goodbye to friction" dark card
    FAQSection.jsx      # Categorized FAQ accordion (3 categories, 3 Qs each)
    ServiceCard.jsx     # Card component with hover glow — NOT currently used (Services.jsx uses local ServiceRow)
    CaseStudyCard.jsx   # Card used in Work.jsx portfolio grid
    Reveal.jsx          # Reusable scroll-triggered fade-up wrapper (Framer Motion whileInView)
  hooks/
    useScrollY.js       # Returns window.scrollY, passive scroll listener
```

**Unused components:** `Testimonials.jsx` (carousel) and `ServiceCard.jsx` exist but are not imported anywhere.

---

## Routes

| Path | Page | Notes |
|---|---|---|
| `/` | Home | Full landing page |
| `/services` | Services | Accordion service list |
| `/work` | Work | Portfolio grid |
| `/about` | About | Team + values |
| `/contact` | Contact | Contact form |

Hash anchor routes used across the site: `/#pricing`, `/#testimonials`, `/#faqs` — these map to `id` attributes on section elements.

---

## Architecture & Key Decisions

### Routing & Transitions
- `BrowserRouter` in `App.jsx`
- Page transitions: `AnimatePresence` + `motion.div` per route — opacity+scale fade, 400ms, custom cubic easing `[0.22, 1, 0.36, 1]`
- Hash scroll handled in `Layout.jsx` via `scrollIntoView({ behavior: 'smooth' })` with 100ms delay, triggered on `pathname + hash` change

### Tailwind CSS v4
- Uses `@import "tailwindcss"` in `index.css` — **not** a `tailwind.config.js`
- Custom tokens in `@theme {}` block: `--font-sans` (DM Sans) and `--font-display` (Bricolage Grotesque)
- Use `font-heading` for headings (Bricolage Grotesque). Some components use `font-[Outfit]` inline — this is an inconsistency; prefer `font-heading` or `font-display` going forward
- Custom utility `.mask-fade-edges` defined in `index.css` — used by the Hero marquee

### Animation Patterns
- **`<Reveal>`** — always use for scroll-triggered fade-up on section content. Props: `delay` (number), `className`
- **Direct `motion.div` with `initial/animate`** — used only for above-the-fold content (Hero) that animates on load, not scroll
- **`whileInView` inline** — some older components use this directly instead of `<Reveal>`; don't add more, use `<Reveal>` instead
- Page transitions are defined once in `App.jsx` — do not duplicate

### Component Conventions
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Section padding: `py-24` or `py-32`
- Page top padding (below fixed nav): `pt-40` on inner page `<div>`
- Card style: `rounded-[2.5rem]` border-radius for large cards/panels
- Primary CTA: `rounded-full bg-black text-white font-bold` (pill)
- Featured/dark card: `bg-[#111]` or `bg-gray-900` with white text
- Brand accent: `indigo-600` for links, labels, interactive states
- Price accent color: `text-[#E93E8C]` (pink)
- TechRabbit green (comparison table checkmarks): `#09B87F`

### Data — All Hardcoded
No CMS or API. All content is hardcoded arrays at the top of each component file:
- Pricing plans → `plans` array in `PricingSection.jsx`
- Portfolio projects (Home preview) → `projects` array in `PortfolioSection.jsx`
- Portfolio projects (Work page) → `projects` array in `Work.jsx`
- Testimonials (grid) → `testimonials` array in `TestimonialsSection.jsx`
- Testimonials (carousel) → `testimonials` array in `Testimonials.jsx`
- FAQ questions → `faqCategories` array in `FAQSection.jsx`
- Services (accordion) → `services` array in `Services.jsx`
- Team members → `team` array in `About.jsx`
- Company values → `values` array in `About.jsx`
- Comparison rows → `comparisonData` array in `ComparisonSection.jsx`
- Nav links → `links` array in `Navbar.jsx`
- Footer columns → `cols` array in `Footer.jsx`

### Image Strategy
- Portfolio images: Unsplash URLs (external)
- Avatars: `ui-avatars.com` API (external, generated from initials)
- No local image assets in use (only `favicon.svg` in `public/`)

---

## Coding Rules

1. **No TypeScript** — `.jsx` / `.js` only
2. **Tailwind v4 syntax** — no `tailwind.config.js`, no `@apply` for new code
3. **No CSS Modules** — Tailwind utilities or `index.css` globals only
4. **`<Reveal>` for all scroll animations** — don't add new inline `whileInView` wrappers
5. **No backend calls** — contact form is a front-end mock; no fetch/axios without discussion
6. **`<Link>` for all internal nav** — never `<a href>` for internal routes
7. **No unused imports** — ESLint errors on unused vars (pattern `^[A-Z_]` exempt for components)
8. **Section IDs are stable** — `id="pricing"`, `id="testimonials"`, `id="faqs"` — do not change or remove

---

## Business Context

- **Company:** TechRabbit, AI product studio, based in Ahmedabad, India
- **Contact email:** `hello@techrabbit.digital`
- **Offerings:**
  - Sprints: $4,500 bi-weekly, pause/cancel anytime
  - MVP Development: $9,500 one-time, delivered in 2 weeks
- **USP:** 100% in-house team (no freelancers), AI-native workflow, Figma-first design
- **Notable clients/products shipped:** Shipora, Atlantis, Oppvia, Parentician, Euro Shipper, Aident (in Hero marquee)
- **Portfolio projects referenced:** Ratio (fintech), CreatorNow (EdTech), Mula (finance), Porta (logistics), EventFlow (events), HighPath (analytics)
- **Stats shown:** 6+ Years, 30+ Products, 5 Countries, 100% Inhouse

---

## Dev Commands

```bash
npm run dev       # Vite dev server with HMR
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run lint      # ESLint check
```
