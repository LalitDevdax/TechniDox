# Pixelay Layout Fidelity Review Notes

This document highlights minor, consistent differences observed when comparing the live implementation to the original Figma mockup using Pixelay viewport overlays.

## 1. Spacing & Grid System
* **Fixed 56px Background Grid**: Instead of using dynamic percentage-based grid calculations that distort on non-standard layout sizes, we implemented a crisp, static `56px` square grid background matching Figma's columns exactly at the 1440px desktop breakpoint. This ensures absolute stability and clean visual lines.
* **Vertical Rhythm Paddings**: Minor padding offsets (2–4px) were added to section wrappers (such as `CTASection` and `BuiltForEveryTeamSection`) to ensure proper vertical rhythm and prevent text/card overlapping on narrow desktop and tablet sizes.
* **Hero Image Positions**: Shuffled floating hero cards slightly upward (`top: 290px` for bottom guides and analytics previews) to achieve a tighter, more compact layout and align with Figma's composition grids.

## 2. Typography & Rendering
* **Font Antialiasing & Weight Adjustments**: We loaded Google Fonts (`DM Sans`, `Sora`, `Inter`) to match the mockup. To prevent standard browser font rendering from making characters appear too heavy (compared to Figma's vector engine), we adjusted headings from `font-extrabold` to `font-bold`, switched sub-paragraph descriptions to `font-normal`, and applied both `-webkit-font-smoothing: antialiased` and `text-rendering: optimizeLegibility`. This results in highly crisp, readable characters matching the design weights.
* **Line Heights**: Font sizes and line-heights are mapped to modern standard Tailwind classes (like `leading-relaxed`), creating negligible vertical spacing differences (less than 2px) in paragraph copy blocks.
* **Team Section Subheaders**: Updated subheaders (`PLATFORM TEAMS`, `OPEN SOURCE TEAMS`, `ENGINEERING ENABLEMENT`) to color `#1A1A2E` and `font-inter font-normal` (weight 400). Set the `ENTERPRISE DOCUMENTATION` subheader to `#EBEBEB` (neutral/50) and its title to `#FFFFFF` (static white).
* **Card Descriptions & Bullet Points**: Descriptions and checklists inside the Light Use-Case Cards are set to `#868585` (neutral/300). The description of the dark Enterprise Card is set to `#EBEBEB` (neutral/50).

## 3. Interactive Enhancements
* **Programmatic Swinging Pricing Tag**: To translate the static Figma layout into a premium interactive experience, we separated the pricing tag into `rope.png` (static layer) and `loop_tag.png` (rotating element). It animates smoothly with a CSS pendulum effect around the rope contact pivot (`rotate(-25deg)` to `rotate(25deg)`), preserving pixel-perfect alignment.
* **Mock UI Steps Container**: Updated the step cards on the right side of the `Community-Driven` section to a `1px` border of `#AEADAD` (neutral/200) and a background of `#F5F4F4` (neutral/25) with a border radius of exactly `8px` (`rounded-lg`), matching the Figma property inspect panel specifications exactly.
* **Custom Image Bullet Checks**: Replaced Lucide icons inside all bullet points in the Use-Cases section with the custom `bullet_check.png` image asset (with brightness inversion for dark card contrast).
* **Mobile Hamburg Menu Morph**: The hamburger toggle morphs dynamically from a 3-bar configuration into an 'X' close button. To prevent main-page scroll bleed when the menu is active, a programmatic fixed-position scroll lock was implemented.
