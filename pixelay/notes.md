# Pixelay Layout Fidelity Review Notes

This document highlights minor, consistent differences observed when comparing the live implementation to the original Figma mockup using Pixelay viewport overlays.

## 1. Spacing & Grid System
* **Fixed 56px Background Grid**: Instead of using dynamic percentage-based grid calculations that distort on non-standard layout sizes, we implemented a crisp, static `56px` square grid background matching Figma's columns exactly at the 1440px desktop breakpoint. This ensures absolute stability and clean visual lines.
* **Vertical Rhythm Paddings**: Minor padding offsets (2–4px) were added to section wrappers (such as `CTASection` and `BuiltForEveryTeamSection`) to ensure proper vertical rhythm and prevent text/card overlapping on narrow desktop and tablet sizes.

## 2. Typography & Rendering
* **Font Antialiasing**: We loaded Google Fonts (`DM Sans`, `Sora`, `Inter`) to match the mockup. The live text rendering has standard browser font antialiasing (using `-webkit-font-smoothing: antialiased`), which renders characters slightly bolder in Chrome/Safari compared to Figma's static vector engine rendering.
* **Line Heights**: Font sizes and line-heights are mapped to modern standard Tailwind classes (like `leading-relaxed`), creating negligible vertical spacing differences (less than 2px) in paragraph copy blocks.

## 3. Interactive Enhancements
* **Programmatic Swinging Pricing Tag**: To translate the static Figma layout into a premium interactive experience, we separated the pricing tag into `rope.png` (static layer) and `loop_tag.png` (rotating element). It animates smoothly with a CSS pendulum effect around the rope contact pivot (`rotate(-25deg)` to `rotate(25deg)`), preserving pixel-perfect alignment.
* **Mobile Hamburg Menu Morph**: The hamburger toggle morphs dynamically from a 3-bar configuration into an 'X' close button. To prevent main-page scroll bleed when the menu is active, a programmatic fixed-position scroll lock was implemented.
