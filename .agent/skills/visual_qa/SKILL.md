---
name: Visual QA
description: A routine for verifying visual elements of a web page using screenshots and DOM inspection.
---

# Visual QA Skill

This skill outlines the standard operating procedure for verifying visual compliance, debugging layout issues, and ensuring design fidelity.

## 1. Setup Phase

- **Target URL**: Identify the local or remote URL (e.g., `http://localhost:5173/`).
- **Objective**: Define what specifically needs checking (e.g., "Hero image alignment", "Font size consistency").

## 2. Browser Verification Steps

Always use the `browser_subagent` to orchestrate these checks.

### A. Element Inspection

Use `execute_browser_javascript` to retrieve computed styles for critical elements.

```javascript
(() => {
  const el = document.querySelector('SELECTOR');
  if (!el) return "Element not found";
  const style = window.getComputedStyle(el);
  return {
    opacity: style.opacity,
    position: style.position,
    zIndex: style.zIndex,
    backgroundImage: style.backgroundImage,
    fontSize: style.fontSize
  };
})()
```

### B. Visual Evidence

Always capture a screenshot of the specific section in question.

```json
{
  "SaveScreenshot": true,
  "ScreenshotName": "feature_name_verification"
}
```

## 3. Feedback Loop

- Compare the screenshot against the requirements.
- If the visual doesn't match:
  - Check for "masking" elements (gradients, overlays).
  - Check for z-index issues.
  - Check for specificity conflicts in CSS.

## 4. Reporting

- Return the screenshot path.
- Provide a summary of the findings (e.g., "Image is 50% opacity, centered").
