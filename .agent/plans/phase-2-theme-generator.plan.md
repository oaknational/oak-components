# Phase 2: Theme Generator Implementation Plan

> **Self-contained reference for continuing work in a new session**
> **Last Updated:** 2025-12-18

---

## Quick Resume

1. Read this document fully
2. Check current test status: `npm test -- custom-themes`
3. Pick up from "Remaining Work" section

---

## Context

### Phase 1 (Complete)

- Token registry: 17 semantic tokens (`custom-surface-primary`, etc.)
- `CustomThemeProvider`: React component generating CSS custom properties
- `parseColor` integration: Recognizes `custom-*` tokens

### Phase 2 Goal

Generate **Full Themes** (6 Token Sets) from **Brand Colours** or **Simple Themes** using colour theory and contrast calculations.

---

## ✅ Completed Work

### UI Clarity (Stories)

- [x] Palette swatches with hex labels
- [x] Full labels (no abbreviations)
- [x] Token Set cards organised by role
- [x] Card borders
- [x] Click me: no hover, colour on click
- [x] Shadows on elevated cards
- [x] Colour theory labels (Triadic/Split-Comp)

### Contrast Strategy

- [x] High contrast: ≥9:1 (white/black surfaces)
- [x] Low contrast: 4.5–5:1 (muted tones)

### Named Themes

- [x] SimpleTheme type
- [x] festive-2025 Simple Theme (fully specified)
- [x] expandSimpleTheme() function
- [x] Storybook updated

### Colour-Blind Safe

- [x] Pre-computed (AAA, blue-orange)
- [x] Single theme, no expansion
- [x] Uses TokenSetCard with useHighContrastButtons=true

### Interactive Token (interactive.active)

- [x] Added to GeneratedThemeColors interface (17 total tokens)
- [x] deriveTokens.ts: derives active with 2x lightness shift
- [x] expandSimpleTheme.ts: shares derivation logic with deriveTokens
- [x] Named themes updated with active values
- [x] ThemePreview.tsx: generates --custom-interactive-active CSS var
- [x] Stories: buttons use active token for :active state

### DRY Improvements

- [x] expandSimpleTheme.ts: removed 17 hardcoded hex colours
- [x] ThemePreview: pure CSS variable provider (no styling)
- [x] BaseButton: shared button styles with 4 extending variants
- [x] TokensGrid: config array with .map() instead of hardcoded calls
- [x] TOKEN_SET_VARIANTS: config for 6 mode×contrast combinations
- [x] GeneratedThemeColumn / NamedThemeColumn: use .map() iteration
- [x] ColorBlindSafeColumn: reuses TokenSetCard component

---

## 🔴 Blocking Work (Phase 2b)

### CustomThemeProvider Integration

> **Critical Path:** Yes - without this, consuming apps cannot use generated themes

| Task | Description |
|------|-------------|
| Accept `GeneratedTheme` | Update provider to take `theme` prop |
| Emit contrast media queries | `@media (prefers-contrast: more/less)` blocks |
| Auto color-scheme | Set `color-scheme: light dark` on root |
| Tests | Verify CSS output for all 6 Token Sets |
| Migration docs | Show upgrade path from manual config |

**Current Gap:**

```tsx
// ❌ Cannot do this today:
const { theme } = generateTheme({ primary: "#287c34" });
<CustomThemeProvider theme={theme}>
  <App />
</CustomThemeProvider>

// ✅ After Phase 2b:
<CustomThemeProvider theme={theme}>
  <App />  {/* Auto-responds to prefers-color-scheme + prefers-contrast */}
</CustomThemeProvider>
```

---

## 🔶 Optional Improvements

### Low Priority DRY

| Item | Status | Notes |
|------|--------|-------|
| Border demo boxes | Could iterate | 3 similar OakBox structures |
| TextOnSurface combinations | Could be config-driven | Currently documentation-like clarity |
| HexLabel/TokenGroupLabel #666/#999 | Outside theme context | Storybook-only styling |

### Future Enhancements

| Feature | Description |
|---------|-------------|
| Dark mode SSR | Handle server-side rendering with correct mode |
| Theme persistence | LocalStorage/cookie for user preference |
| Animation tokens | Transition timing from theme |
| Export utilities | CSS file generation from theme |

---

## Current Architecture

### Files

| File | Purpose |
|------|---------|
| `colorUtils.ts` | OKLCH colour manipulation (adjustLightness, desaturate, etc.) |
| `contrastUtils.ts` | WCAG contrast checks and adjustments |
| `deriveTokens.ts` | Generate 17 tokens from brand palette |
| `expandSimpleTheme.ts` | Expand SimpleTheme to 6 Token Sets |
| `generateTheme.ts` | Main API: generateTheme(), generateSingleTokenSet() |
| `namedThemes.ts` | Pre-defined themes (festive2025, colorBlindSafe) |
| `themeTypes.ts` | Type definitions (BrandColors, GeneratedTheme, etc.) |
| `ThemePreview.tsx` | Storybook preview with explicit mode selection |
| `generateTheme.stories.tsx` | Interactive Storybook demonstration |
| `customSemanticTokens.ts` | Token registry and type generation |

### Key Types

```typescript
interface BrandColors {
  primary: string;
  secondary?: string;
}

interface GeneratedThemeColors {
  surface: { primary, secondary, accent, inverse };
  text: { primary, muted, accent, inverse };
  border: { subtle, strong, accent };
  interactive: { primary, hover, active, focus }; // 4 tokens
  shadow: { subtle, strong };
}

interface GeneratedTheme {
  light: GeneratedThemeColors;
  dark: GeneratedThemeColors;
  highContrastLight: GeneratedThemeColors;
  highContrastDark: GeneratedThemeColors;
  lowContrastLight: GeneratedThemeColors;
  lowContrastDark: GeneratedThemeColors;
}

interface SimpleTheme {
  name: string;
  mode: "light" | "dark";
  tokens: GeneratedThemeColors;
}
```

---

## Quality Gates

```bash
npm run check-types   # TypeScript
npm test -- custom-themes --watchAll=false  # 78 tests
```

---

## Related Documents

- [ADR-0002: Custom Semantic Tokens](../../docs/architecture/decision-records/0002-custom-semantic-tokens.adr.md)
- [arbitrary-theme-support.plan.md](./arbitrary-theme-support.plan.md)
- [theme-input-examples.appendix.md](./theme-input-examples.appendix.md)
