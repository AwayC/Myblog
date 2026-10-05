---
name: frontend-web-testing
description: Comprehensive testing, code quality audit, IME composition handling, and accessibility guidelines for modern frontend applications.
---

# Frontend Code Quality & Input Handling Skill

This skill provides essential guidelines for frontend testing, IME input method handling, and UI quality assurance.

## 1. Chinese IME (Input Method Editor) Composition Rules
- **Composition Events**: When listening to text input for live search or tag parsing, always register `@compositionstart` and `@compositionend` handlers.
- **Composition Flag**: Maintain an `isComposing` state boolean. When `isComposing === true`, suppress tag parsing and autocomplete split logic so uncommitted Pinyin spelling isn't accidentally parsed as completed tokens.

## 2. Build & Type Verification
- **Empirical Build Verification**: Always execute `npm run build` after UI refactoring to ensure zero compilation or Webpack bundle errors.
- **Click Target & Boundary Precision**: Ensure visual component dimensions match their clickable hit areas (100% width/height alignment).

## 3. SEO & Accessibility Standards
- **Semantic HTML**: Use `<main>`, `<header>`, `<nav>`, `<article>`, and `<section>` elements.
- **Image Fallbacks**: Always provide `@error` handlers and fallback avatars for user-submitted images or dynamic URLs.
