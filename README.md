# Tulas International School Homepage Redesign

A modern, animated, and fully responsive homepage redesign for **Tulas International School (TIS)**. The project retains the school's core visual identity and content while introducing modern interactions, smooth animations, responsive layouts, and conversion-focused calls to action.

## 🔗 Live Demo

https://tis-school-redesign.vercel.app

## 📦 GitHub Repository

https://github.com/yash4579/tis-homepage-redesign

---

## ✨ Features

- **Interactive Hero** — Switch between Dance, Pottery, Karate, Cricket, Basketball, Drawing, Shooting, and Science. The image, activity label, background treatment, and headline update together.
- **Custom Cursor** — Smooth mouse-following ring that reacts to interactive elements and is disabled for touch/coarse pointers.
- **Scroll-Triggered Reveals** — Sections and cards animate into view using Framer Motion.
- **Theme Switcher** — Dark/light theme with saved preference and reduced-motion support.
- **Scroll Progress Bar** — Smooth top-of-page reading progress indicator.
- **Interactive Sports Showcase** — Select a sport to update the featured image.
- **Responsive Navigation** — Active-section indicator, animated underline, mobile menu, keyboard support, and Escape-to-close behavior.
- **Rankings & Recognition** — Ranking cards, campus personalities, awards, and achievements.
- **Virtual Tour & Collaborations** — Dedicated call-to-action and scrolling collaboration logos.
- **Parent Stories & Google Reviews** — Video/testimonial content presented in responsive layouts.
- **Multi-Step Enquiry Form** — Class, state, and contact steps with validation, inline errors, focus management, and success/error states.
- **Accessibility** — Semantic landmarks, labelled controls, visible focus styles, touch-friendly targets, and `prefers-reduced-motion` support.

---

## 🛠️ Tech Stack

- **React 18**
- **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion**
- **Lucide React**
- **JavaScript (ES Modules)**

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── ui/          Reusable UI components
│   ├── layout/      Navbar, Footer, FloatingEnquiry
│   ├── sections/    Main homepage sections
│   └── animation/   Cursor, reveal, progress, theme, counters
├── hooks/           Reusable React hooks
├── services/        Enquiry submission integration point
├── data/            Centralized copy and content data
├── styles/          Global styles and design tokens
├── App.jsx          Page composition
└── main.jsx         Application entry point

public/
└── images/          Local WebP image assets
```

The project keeps page composition, reusable UI, hooks, animation logic, content data, and service integration separate so individual parts remain easier to maintain and explain.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Clone the repository

```bash
git clone https://github.com/yash4579/tis-homepage-redesign.git
cd tis-homepage-redesign
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local Vite URL shown in the terminal, normally:

```text
http://localhost:5173
```

---

## 🏗️ Production Build

Create the production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production output is generated in:

```text
dist/
```

---

## ☁️ Deployment — Vercel

This project is deployed on **Vercel** from the public GitHub repository.

### Vercel settings

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Root Directory: ./
```

### Live deployment

https://tis-school-redesign.vercel.app

Future changes pushed to the `main` branch can be deployed through the connected Vercel project.

---

## 📱 Responsive Design

The homepage is designed for:

- **375px** — Mobile
- **768px** — Tablet
- **1280px+** — Desktop

The layout adapts navigation, grids, carousels, media, forms, typography, and spacing for smaller screens.

---

## ♿ Accessibility

The project includes:

- Semantic HTML landmarks
- Accessible form labels
- Keyboard navigation and focus states
- Appropriate ARIA attributes
- Touch-friendly controls
- Reduced-motion support
- Custom cursor disabled for coarse/touch pointers
- Native text caret preserved in form controls

---

## 📝 Enquiry Form

The enquiry form is implemented as a **frontend prototype** for the assignment.

It includes:

- Three-step interaction
- Required-field validation
- Inline error messages
- Focus management
- Sending/error states
- Success state

No backend service is connected. The integration point is:

```text
src/services/submitEnquiry.js
```

A real admissions API or form service can be connected there without changing the form's UI flow.

---

## 🎨 Design Approach

The redesign keeps the TIS-inspired visual direction while improving:

- Visual hierarchy
- Calls to action
- Micro-interactions
- Scroll-based storytelling
- Content discoverability
- Responsive behavior
- Accessibility

The page uses a combination of dark sections, crimson/teal/gold accents, large typography, imagery, and animated transitions to create a premium school landing-page experience.

---

## 📋 Assignment Deliverables

- **Public GitHub Repository:** https://github.com/yash4579/tis-homepage-redesign
- **Live Deployment:** https://tis-school-redesign.vercel.app
- **Submission Form:** https://forms.gle/1njGvsG8a2MW8cRR7

---

## 👤 Repository

**GitHub:** https://github.com/yash4579/tis-homepage-redesign

