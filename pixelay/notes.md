# Pixelay Layout Fidelity Review Notes

This document highlights minor, consistent differences observed when comparing the live implementation to the original Figma mockup using Pixelay viewport overlays.

## Spacing & Alignments
* **Desktop Grid Spacing**: The live layout implements a custom 19-column grid system matching Figma's design. The Pixelay overlay shows minor spacing variances (approx. 2-4px) at different viewport boundaries, which are fully expected due to browser subpixel rendering.
* **Component Heights**: Some section wrappers (like `CTASection`) have slightly larger top/bottom paddings to improve vertical rhythm and prevent overlapping on smaller screens.

## Typography
* **Font Weights & Antialiasing**: We loaded Google Fonts (`DM Sans`, `Sora`, `Inter`) to match the typography. Live text has slight rendering differences (standard browser font antialiasing vs. Figma's vector rendering), which makes text look slightly bolder in some browsers.
* **Line Heights**: Description copy line-heights are rounded to standard Tailwind classes (`leading-relaxed`), resulting in minor vertical offsets in text blocks.

## Interactive Assets
* **Swinging pricing tag**: The Figma design has a static rope and pricing loop. On the live site, the loop and tag are animated with a smooth swing pendulum effect (`rotate(-25deg)` to `rotate(25deg)`), while the rope remains static.
