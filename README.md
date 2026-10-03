# Tulas International School Homepage Redesign

An animated, responsive redesign of the Tulas International School (TIS) homepage. The layout and interactions are new; the brand (crimson, teal and gold palette, bold italic serif headlines), the copy and the school's photos from [tis.edu.in](https://tis.edu.in) are kept.

- **Live demo:** _add your Vercel URL here after deploying_
- **Repository:** _add your GitHub URL here after pushing_

## Tech Stack

- **React 18** with **Vite 5**
- **Tailwind CSS 3** (brand colours are CSS variables, so dark mode is a token swap)
- **Framer Motion** for animation
- **Lucide React** for icons

## Features

- **Interactive hero:** pick an interest (Dance, Pottery, Karate, Cricket, Basketball, Drawing, Shooting, Science). The photo, the category label, the tinted arch behind it and the "Let's do ___ with Tulas" line all change together. It auto-rotates until the visitor chooses, and not at all for reduced-motion users.
- **Custom cursor:** an interactive 60 FPS spring-driven follower ring and precision indicator. Scales and glows over links and buttons. Automatically hidden on touch/mobile devices (`pointer: coarse`), restores the native text caret over form fields, and hides when the mouse leaves the window.
- **Scroll reveal:** `whileInView` with `once: true`, entrance duration 0.5s, staggered with a `delay` prop for cards and sections.
- **Theme switcher:** animated light/dark toggle. The choice is saved in `localStorage`, defaults to the OS setting and is applied before first paint, so there is no flash.
- **Scroll progress bar:** `useScroll` + `useSpring`, no React re-renders while scrolling.
- **Interactive sports section:** click, tap or keyboard-focus one of the 16 sports to swap the large photo.
- **Responsive navigation:** floating bar with an active-section underline (IntersectionObserver), mobile menu with `aria-expanded`, closes on Escape.
- **Multi-step enquiry form:** class, state, contact. Per-step validation with inline error messages, focus moves to the first error and to each new step.
- **Also:** count-up numbers, rankings with sources, personalities carousel with filter tabs, awards, virtual tour banner, parent videos, Google reviews and collaborations marquees (pause on hover), footer map.
- **Accessibility:** semantic landmarks, skip link, visible focus rings, labelled controls, 44px touch targets, `prefers-reduced-motion` support (Framer Motion `MotionConfig` plus CSS).

## Project Structure

```
src/
├── components/
│   ├── ui/          Button, Circle, CrossfadeStack, Marquee, Photo, Title
│   ├── layout/      Navbar, Footer, FloatingEnquiry
│   ├── sections/    Hero, Stats, Sports, Rankings, Voices, Visitors,
│   │                Awards, Parents, Enquiry
│   └── animation/   CustomCursor, ScrollProgress, ThemeToggle, Reveal, CountUp
├── hooks/           useTheme, useFinePointer, useActiveSection
├── services/        submitEnquiry.js (the one place to plug in a real API)
├── data/            content.js (all copy, links and image references)
├── styles/          index.css (brand tokens, base styles, keyframes)
├── App.jsx          Page composition
└── main.jsx         Entry point
public/images/       Local hero and sports photos (WebP)
```

Sections are presentational; all copy lives in `data/content.js`.

## Installation

Requires Node.js 18+.

```bash
git clone <your-repository-url>
cd tis-homepage-redesign
npm install
npm run dev
```

Open http://localhost:5173.

## Production Build

```bash
npm run build     # output in dist/
npm run preview   # serve the production build locally
```

## Deployment (Vercel)

1. Push the repository to GitHub (public).
2. On [vercel.com](https://vercel.com) choose **Add New → Project** and import the repository.
3. Vercel detects Vite automatically (build command `npm run build`, output directory `dist`). Click **Deploy**.
4. Copy the live URL into the **Live demo** line at the top of this file.

Netlify works the same way (build `npm run build`, publish directory `dist`).

## Submission
- **Google Form Submission Link:** [https://forms.gle/1njGvsG8a2MW8cRR7](https://forms.gle/1njGvsG8a2MW8cRR7)
- **Timeframe:** 3–4 Days
- **Deliverables:** Public GitHub Repository Link + Deployed Live Link (Vercel / Netlify / GitHub Pages)

## Notes

- **The enquiry form is a front-end prototype.** It validates input but sends nothing. To connect a backend, edit `src/services/submitEnquiry.js` (an example `fetch` is in the comments); the form already handles the sending and error states.
- Hero and most sports photos are stored in `public/images/`. The other images (people, awards, reviews, logos, six sports) and the parent videos load from tis.edu.in. A remote image that fails to load hides itself (sports show a name card instead). To host one yourself, save it in `public/images/` and use `local('file-name')` in `src/data/content.js`.
