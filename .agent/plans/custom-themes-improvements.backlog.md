# Custom Themes Improvement Backlog

> **Purpose:** Capture feedback and improvement ideas for future work.
> **Last Updated:** 2025-12-18

---

## ~~Nomenclature (Establish Consistent Terminology)~~ ✅ COMPLETE

Canonical definitions now in [ADR-0002 Nomenclature](../../docs/architecture/decision-records/0002-custom-semantic-tokens.adr.md#nomenclature):

- **Theme**, **Token Set**, **Simple Theme**, **Partial Theme**, **Full Theme**
- **Brand Colors**, **Generated Theme**, **Custom Semantic Token**

All plan documents updated to reference the ADR.

---

## Bug Fixes

### 1. Color Picker Format Exception

**Issue:** Screenshot shows error "Invalid primary color `hsla(129, 51%, 32%, 1)`. Expected hex format: #RGB or #RRGGBB"

**Root Cause:** Storybook's color picker outputs HSLA by default. Our `validateHex()` only accepts hex.

**Fix Options:**

- **A) Restrict picker format:** `argTypes: { primary: { control: { type: "color", presetColors: [...] } } }`
- **B) Accept HSLA input:** Convert HSLA → hex in `generateTheme()`

**Recommended:** Option A (simplest, hex is our canonical format).

### 2. Controls on Wrong Stories

**Issue:** Both `primary` and `secondary` controls appear on single-color demo stories.

**Fix:** Override `argTypes` per-story to hide irrelevant controls:

```typescript
export const SingleColor: Story = {
  argTypes: { secondary: { table: { disable: true } } },
  // ...
};
```

---

## Story Improvements

### 3. Document Intent, Not Just Usage

Each story should answer:

- **What?** — What feature is demonstrated
- **Why?** — When would you use this?
- **How?** — Usage example

**Current:** Stories show how to call `generateTheme()`
**Needed:** Explain *why* you'd use single color vs. two colors vs. full manual config

See [Storybook 8 docs](https://storybook.js.org/docs/8) for best practices.

### 4. Separate Stories vs. Multi-Aspect Stories

**Question:** When demonstrating multiple aspects, use separate stories or variants within one?

**Recommendation:** Follow Storybook's guidance:

- Separate stories for distinct *features* (e.g., generateTheme vs. CustomThemeProvider)
- Variants within one story for *options* (e.g., with/without secondary color)

---

## Feature Gaps

### 5. Full Theme Generation Example

**Question:** Does `theme-input-examples.appendix.md` have an example for:
> 1-2 brand colors → full light/dark/high-light/high-dark/low-light/low-dark/color-blind-safe theme?

**Answer:** Level A shows `{ contrast: "AAA", includeHighContrast: true }` but doesn't cover:

- `lowContrastLight` / `lowContrastDark`
- Color-blind-safe generation

**Action:** Add Level A+ example showing full generation with all options:

```typescript
const result = generateTheme(
  { primary: "#287c34" },
  { 
    includeHighContrast: true,
    includeLowContrast: true,  // NEW
    colorBlindSafe: true,       // Phase 3
  }
);
```

Then create corresponding Storybook story.

### 6. Stories for All Examples

**Question:** Are all examples in `theme-input-examples.appendix.md` covered by stories?

| Level | Example | Has Story? |
|-------|---------|------------|
| A | Brand colors → full theme | ✅ `Interactive` |
| B | Partial theme | ❌ Not yet |
| C | Single mode | ❌ Not yet |
| D | Full light + dark | ✅ `CustomThemeProvider/Default` |
| E | Contrast variants | ✅ `CustomThemeProvider/HighContrastDemo` |
| F | Named themes | ❌ Not yet |

**Action:** Create missing stories for Levels B, C, F.

### 7. Stories as Proof of Functionality

**Goal:** Stories should be sufficient to prove the custom theme system is fully functional.

**Current coverage:**

- ✅ Token rendering (surface, text, border, interactive, shadow)
- ✅ Theme generation from brand colors
- ✅ Light/dark mode switching
- ✅ Contrast checker utility
- ❌ Actual `prefers-color-scheme` switching demonstration
- ❌ Actual `prefers-contrast` media query demonstration
- ❌ Named theme `data-theme` attribute usage
- ❌ Color-blind simulation

---

## Future Features

### 8. Theme Picker Component (from ADR-0012)

**Context:** Starter-app has a theme picker with cookie-based persistence. Consider including similar functionality in Oak Components.

**What this implies:**

- A `ThemePicker` component (UI for selecting mode)
- An application mechanism (`data-color-scheme` attribute or CSS class)
- Ability to override system preferences:
  - Pick specific simple theme
  - Pick derived combination from full theme matrix

**Questions to resolve:**

- Should Oak Components include this, or is it consumer-app responsibility?
- How does this interact with `CustomThemeProvider`?
- How do we handle SSR (see ADR-0012 two-cookie approach)?

---

## Priority Order (Suggested)

1. **Nomenclature** — Establish first, update all docs
2. **Bug #1** — Color picker format (quick fix)
3. **Bug #2** — Controls on wrong stories (quick fix)
4. **Story improvements** — Intent documentation
5. **Missing stories** — Levels B, C, F
6. **Full generation example** — Level A+ with all options
7. **Theme picker consideration** — Design discussion needed

---

## Related Documents

- [arbitrary-theme-support.plan.md](./arbitrary-theme-support.plan.md) — Master implementation plan
- [theme-input-examples.appendix.md](./theme-input-examples.appendix.md) — Input spectrum examples
- [ADR-0002 Custom Semantic Tokens](../../docs/architecture/decision-records/0002-custom-semantic-tokens.adr.md)
- [Starter-app ADR-0012 SSR Theme Rendering](file:///Users/jim/code/oak/starter-app-spike/docs/architecture/decision-records/0012-ssr-theme-rendering-strategy.md)
