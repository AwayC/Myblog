---
name: vue3-performance-ui
description: Best practices for Vue 3 component architecture, 60fps animations, Canvas 3D performance, and high-performance Web UI development.
---

# Vue 3 Performance & UI Architecture Skill

This skill provides authoritative guidelines and best practices for building high-performance, responsive Vue 3 applications and interactive Web UI.

## 1. Vue 3 Reactive State & Component Rules
- **Avoid Global DOM Mutations**: Always keep transient component state within local Vue `data()` or `ref()`.
- **Event Cleanup**: Always remove window resize listeners, scroll listeners, and cancel `requestAnimationFrame` IDs inside `beforeUnmount()` or `onUnmounted()`.
- **Prop Verification**: Define explicit prop types, defaults, and validators to prevent `TypeError` or `NullPointerException` crashes.

## 2. HTML5 Canvas 2D/3D & Animation Performance
- **Avoid `ctx.shadowBlur`**: In HTML5 Canvas 2D rendering, `ctx.shadowBlur` is extremely expensive and causes heavy CPU drop. Use `ctx.globalCompositeOperation = 'lighter'` for glowing neon effects instead.
- **Cap `devicePixelRatio`**: Always clamp `devicePixelRatio` using `Math.min(window.devicePixelRatio || 1, 1.5)` to avoid rendering excessive pixel buffers on 4K Retina displays.
- **Avoid Allocating Objects inside Frame Loops**: Pre-allocate math vectors, points, and temporary arrays outside the 60fps render loop to eliminate Garbage Collection (GC) stutter.

## 3. Component Styling & Glassmorphism Guidelines
- **Unified Card Aesthetics**: Use semi-transparent dark slate backgrounds (`rgba(37, 45, 56, 0.5)`) combined with `backdrop-filter: blur(12px)` and hairline borders (`border: 1px solid rgba(255, 255, 255, 0.08)`).
- **Responsive Layouts**: Combine CSS Grid and Flexbox with mobile media queries (`@media (max-width: 768px)`).
