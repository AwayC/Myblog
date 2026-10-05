---
name: modern-css-design-system
description: Modern dark mode CSS design tokens, HSL color palettes, typography, and micro-interaction guidelines for Web apps.
---

# Modern CSS & Dark Mode Design System Skill

This skill provides guidelines for crafting modern, premium dark-themed Web interfaces with clean typography, harmonious palettes, and smooth interactions.

## 1. Color Palette & Dark Tokens
- **Avoid Flat Black**: Instead of `#000000` or harsh contrasting colors, use curated slate/navy dark tones (`#0f172a`, `#18181b`, `rgba(37, 45, 56, 0.5)`).
- **Text Contrast**: Use soft white (`#f4f4f5`, `#e0e0e0`) for primary text and warm gray (`#a1a1aa`, `#cacaca`, `#71717a`) for secondary captions.

## 2. Typography & Micro-Interactions
- **Font Stacks**: Combine modern sans-serif stacks (`-apple-system`, `BlinkMacSystemFont`, `'Segoe UI'`) with tech display fonts (`'Orbitron'`, `'Fira Code'`) where appropriate.
- **Subtle Hover Effects**: Use small translateY shifts (`transform: translateY(-3px)`), gentle opacity changes, and 0.2s-0.3s cubic-bezier transitions instead of aggressive flickering effects.

## 3. Component Modularity
- **Predefined Design System**: Keep design tokens consistent across components (e.g., `tagBase`, `infoCard`, `postCard`).
