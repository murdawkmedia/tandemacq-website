---
name: Accessibility Check
description: Verify website accessibility using standard checks.
---

# Accessibility Check

This skill codifies the process for verifying basic accessibility compliance.

## 1. Alt Text Check

Verify that all images have meaningful `alt` text.

```javascript
(() => {
  const images = Array.from(document.querySelectorAll('img'));
  return images.map(img => ({
    src: img.src.split('/').pop(),
    alt: img.alt || 'MISSING'
  }));
})()
```

## 2. Heading Hierarchy

Ensure headings follow a logical order (H1 -> H2 -> H3).

```javascript
(() => {
  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  return headings.map(h => ({
    tag: h.tagName,
    text: h.textContent.substring(0, 50)
  }));
})()
```

## 3. Contrast & Focus

(Requires manual verification or visual check)

- Ensure text has sufficient contrast against the background.
- Ensure interactive elements are focusable.
