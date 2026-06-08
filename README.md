# TechniDox — AI-Native Developer Documentation Platform

A high-fidelity recreation of the Figma home page design built as a premium, responsive single-page web application using **Nuxt 3**, **Vue 3**, and **Tailwind CSS**.

## Live Demo
* **Hosted URL**: [https://technidoxx.netlify.app/](https://technidoxx.netlify.app/)

---

## Tech Stack & Architecture

* **Core Framework**: [Nuxt 3](https://nuxt.com/) (Vue 3 Composition API, Vite)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) for fully responsive, utility-first styling.
* **Icons**: [Lucide Vue Next](https://lucide.dev/) for crisp, uniform vector icons.
* **Interactions & Animations**:
  * **Interactive Lottie Loader**: Smooth Lottie loading visual on initial mount.
  * **Responsive Mobile Navigation**: Interactive hamburger menu toggle in the header.
  * **Physically Accurate Pendulum Swing**: A pricing tag in the `PlansSection` that rotates from `-25deg` to `25deg` around the rope contact pivot, utilizing separate static rope and swinging loop assets to avoid shearing/gaps.
  * **Dashboard ROI Cards**: High-fidelity hover lift and interactive metrics.

### What are Composables?
In Nuxt 3 and Vue 3, **Composables** are reusable stateful functions that leverage the Vue Composition API. Instead of duplicating logic across components, features are encapsulated inside the `composables/` folder. Nuxt auto-imports these hooks so they are globally available without boilerplate imports.
* **`useScrollDirection.js`**: Tracks user scroll direction. It shows the navigation header when scrolling up, hides it when scrolling down, and keeps it visible when the mobile menu is open.

---

## Folder Structure

Following standard Nuxt 3 single-page application conventions:
```bash
├── assets/
│   └── css/
│       └── main.css         # Custom grid tokens, glassmorphism, & animations
├── components/              # Clean, modular Vue components
│   ├── Header.vue                 # Fixed navbar with mobile menu toggle
│   ├── Hero.vue                   # Grid layout, text signals, and floating cards
│   ├── AINativeSection.vue        # AI-native documentation engine cards
│   ├── EnterpriseGradeSection.vue # Executive dashboard metrics card
│   ├── PlansSection.vue           # Swing pricing tag section
│   ├── BuiltForEveryTeamSection.vue # Use cases and team support grid
│   ├── CommunityDrivenSection.vue # Peer validation and workflow steps
│   ├── CTASection.vue             # CTA card
│   └── Footer.vue                 # Clean, grid-aligned footer columns
├── composables/             # Reusable Composition API hooks
│   └── useScrollDirection.js    # Tracks header visibility and scroll state
├── pages/
│   └── index.vue            # Main landing page assembling sections (Single Page App)
├── public/                  # Static assets
│   └── images/              # Restructured and descriptive asset paths
│       ├── hero/            # Hero floating cards and arrow icons
│       ├── pricing/         # Swinging price tag and rope layers
│       ├── dashboard/       # Executive ROI dashboard backgrounds
│       ├── logos/           # High-res brand logo assets
│       ├── enterprise_grade/ # Custom metric card icons
│       ├── built_for_every_team/ # Custom team card images & check bullet assets
│       └── lottie/          # Interactive loader Lottie files
├── pixelay/                 # Deliverables folder for visual comparison
│   ├── pixelay-desktop.png  # Desktop Pixelay overlay screenshot
│   ├── pixelay-mobile.png   # Mobile Pixelay overlay screenshot
│   └── notes.md             # Overlay differences review notes
├── nuxt.config.js           # Nuxt routing and app configuration
└── package.json             # Build dependencies
```

---

## Pixelay Overlay Fidelity Check
Fidelity checks were conducted using the **Pixelay** extension overlays to compare the live site to Figma mockups at:
* **Desktop Viewport**: 1920x1080 resolution
* **Mobile Viewport**: 375x812 resolution (iPhone size)

Overlay screenshots and review notes can be found directly in the [`/pixelay`](./pixelay) folder.

---

## Tradeoffs, Shortcuts, & Things We Would Do With More Time

### 1. Image Slicing and Swing physics
* **Tradeoff**: In the original Figma mockup, the rope, ring, and tag were a single flat image. Rotating it would result in shearing or require clipping out pieces, causing visual artifacts.
* **Solution**: Programmatically separated the image into `rope.png` (static background) and `loop_tag.png` (swinging element). Fitted a quadratic curve to the rope to draw it continuously under the loop. This ensures zero gaps and a 100% realistic rotation around the rope center.

### 2. Tailored Grid Layout
* **Fidelity**: Applied a strict desktop 19-column grid overlay system to the header and hero wrapper to align columns exactly with Figma's custom layout grid.

### 3. Font-Weight & Alignment Corrections
* **Fidelity**: Replaced standard Lucide icons with custom `bullet_check.png` assets, customized card corners and backgrounds (to `8px` and `#F5F4F4` / `#AEADAD`), and reduced font weights to match Figma text rendering.

### 4. What We Would Do With More Time
* **Nuxt Image Integration**: Install and configure `@nuxt/image` to dynamically generate responsive formats (AVIF/WebP) and scale assets according to the user's viewport density.
* **Headless CMS Mapping**: Map the UI strings and use-case checklists to a headless CMS (like Storyblok or Sanity) or Nuxt Content. This would allow product teams to modify cards and copy without touching the code.
* **Component Testing Suite**: Set up Vitest and Playwright to run automated visual regression checks, ensuring future PRs do not break figma alignment boundaries.

---

## Getting Started

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```
