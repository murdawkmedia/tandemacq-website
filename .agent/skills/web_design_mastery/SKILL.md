---
name: Web Design Mastery
description: A comprehensive guide for building, verifying, and polishing premium web applications. Consolidates Visual QA, Accessibility, and High-Contrast Design.
---

# Web Design Mastery

This skill is the definitive guide for ensuring web applications are visually stunning, accessible, and bug-free. It combines visual inspection, code analysis, and user-centric design principles.

## 1. The "Invisible Text" Audit (Critical)

A common issue in Tailwind/CSS development is undefined color variables (e.g., `text-brand-black`) rendering as white-on-white.

### **Detection Routine**

1. **Scan for Undefined Colors**:
    * Search codebase for custom color classes (`grep "text-brand-"`).
    * Verify these are defined in `tailwind.config.js` or `index.css`.
    * *Red Flag*: `text-brand-grey` or `text-brand-black` often fail if not explicitly defined.
2. **White-on-White Check**:
    * Inspect cards with white backgrounds.
    * Ensure headers/text are NOT inheriting global white text (common in Dark Mode apps).
    * **Fix**: Explicitly set `text-gray-900` or `text-black` for light cards.
3. **Dark-on-Dark Check**:
    * Inspect dark sections (Hero, Footer).
    * Ensure text is `text-white` or `text-gray-200`.

## 2. Visual QA & Polish

Use the `browser_subagent` to verify design fidelity.

### **Alignment & Spacing**

* **Hero Section**: Ensure the subject (if a person) is not obscured by text. Use `object-position` to align faces.
* **Breathing Room**: Avoid cramped headers. Use `py-4` or `py-6` for headers, but verify it's not excessive.
* **Centering**: For premium "editorial" looks, center logos and key headlines.

### **Verification Snippet (Browser)**

```javascript
(() => {
  const element = document.querySelector('SELECTOR');
  const style = window.getComputedStyle(element);
  return {
    color: style.color, // Check contrast
    backgroundColor: style.backgroundColor, // Check contrast base
    padding: style.padding, // Check spacing
    objectPosition: style.objectPosition // Check image alignment
  };
})()
```

## 3. Accessibility Standards

Every page must pass these basic checks.

1. **Heading Hierarchy**: H1 -> H2 -> H3. No skipping levels.
2. **Alt Text**: All regular images must have descriptive `alt` text. Decorative images (backgrounds) can be exempt or have empty alt.
3. **Focus States**: All buttons/inputs must have visible focus rings (`focus:ring`).

## 4. Aesthetic & "Premium Feel"

To achieve a "WOW" factor (especially for "Kandem-style" designs):

* **Glassmorphism**: Use `backdrop-blur-md` with semi-transparent backgrounds (`bg-white/10` or `bg-slate-900/90`).
* **Typography**: Use distinct font pairings (e.g., *Cabin* for headers, *Lato* for body).
* **Micro-Interactions**: buttons should hover (`hover:scale-105`, `transition-all`), links should fade (`hover:text-brand-gold`).

## 5. Workflow for New Features

1. **Implement**: Write the code using standard Tailwind classes first (`text-white`, `bg-gray-900`).
2. **Audit**: Run specific `grep_search` to ensure no "ghost" variables.
3. **Verify**: Use `browser_subagent` to take screenshots of:
    * Full Page (Desktop)
    * Modal/Interactive States (Click triggers)
    * Card Components (Contrast check)
