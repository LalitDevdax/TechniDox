# TechniDox — AI-Native Developer Documentation Platform

A high-fidelity recreation of the Figma home page design built as a premium, responsive single-page web application using **Nuxt 3**, **Vue 3**, and **Tailwind CSS**.

## Live Demo
* **Hosted URL**: [https://venturseed-technidox.vercel.app](https://venturseed-technidox.vercel.app)

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
* **`useCopyToClipboard.js`**: A clipboard copy utility helper.

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
│   ├── useCopyToClipboard.js    # Modern clipboard copy utility with fallback
│   └── useScrollDirection.js    # Tracks header visibility and scroll state
├── pages/
│   └── index.vue            # Main landing page assembling sections (Single Page App)
├── public/                  # Static assets
│   └── images/              # Restructured and descriptive asset paths
│       ├── hero/            # Hero floating cards and arrow icons
│       ├── pricing/         # Swinging price tag and rope layers
│       ├── dashboard/       # Executive ROI dashboard backgrounds
│       ├── logos/           # High-res brand logo assets
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

## Tradeoffs, Shortcuts, & Next Steps

### 1. Image Slicing and Swing physics
* **Tradeoff**: In the original Figma mockup, the rope, ring, and tag were a single flat image. Rotating it resulted in shearing or required clipping out pieces, causing visual artifacts.
* **Solution**: Programmatically separated the image into `rope.png` (static background) and `loop_tag.png` (swinging element). Fitted a quadratic curve to the rope to draw it continuously under the loop. This ensures zero gaps and a 100% realistic rotation around the rope center.

### 2. Tailored Grid Layout
* **Fidelity**: Applied a strict desktop 19-column grid overlay system to the header and hero wrapper to align columns exactly with Figma's custom layout grid.

### 3. Future Improvements
* **CMS Integration**: Convert sections into dynamically configurable components using standard Nuxt Content or a headless CMS (like Storyblok/Contentful).
* **Nuxt Image Optimization**: Integrate `@nuxt/image` to serve modern formats (AVIF/WebP) and apply automatic responsive resizing on assets.

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
