# Phase 2: Theme Generator Implementation Plan

> **Self-contained reference for continuing work in a new session**
> **Last Updated:** 2025-12-18

---

## Quick Resume

1. Read this document fully
2. Check current test status: `npm test`
3. Pick up from "Remaining Work" section

---

## Context

### Phase 1 (Complete)

- Token registry: 16 semantic tokens (`custom-surface-primary`, etc.)
- `CustomThemeProvider`: React component generating CSS custom properties
- `parseColor` integration: Recognizes `custom-*` tokens
- Full test coverage and Storybook stories

### Phase 2 Goal

Generate **Full Themes** (6 Token Sets) from minimal **Brand Colours** using colour theory.

---

## Nomenclature

See [ADR-0002](../../docs/architecture/decision-records/0002-custom-semantic-tokens.adr.md#nomenclature) for canonical definitions:

- **Brand Colours** — 1-2 input colours
- **Base Palette** — 3-colour foundation derived via colour theory
- **Token Set** — All 16 tokens for one mode
- **Full Theme** — 6 Token Sets (light/dark × 3 contrasts)
- **Simple Theme** — Single Token Set (one mode only)

---

## Core Architecture

### Derivation Flow

```text
Brand Colours (1 or 2)
        │
        ▼
┌───────────────────────┐
│  Colour Theory        │
│  - 1 colour: triadic  │
│  - 2 colours: split-  │
│    complementary      │
└───────────────────────┘
        │
        ▼
Base Palette (3 colours)
        │
        ▼
┌───────────────────────┐
│  Token Derivation     │
│  - Lightness adjust   │
│  - Contrast ensure    │
│  - Per mode/contrast  │
└───────────────────────┘
        │
        ▼
Full Theme (6 Token Sets)
```

### 6 Token Sets per Full Theme

| Mode | Contrast | Token Set |
|------|----------|-----------|
| Light | Normal | `light` |
| Light | High | `highContrastLight` |
| Light | Low | `lowContrastLight` |
| Dark | Normal | `dark` |
| Dark | High | `highContrastDark` |
| Dark | Low | `lowContrastDark` |

---

## Contrast Requirements

| Context | Minimum | Notes |
|---------|---------|-------|
| Normal mode | WCAG 2.2 AA (4.5:1) | General use |
| High contrast | WCAG 2.2 AAA (7:1) | `prefers-contrast: more` |
| Low contrast | WCAG 2.2 AA (4.5:1) | `prefers-contrast: less`, reduced visual intensity |
| Colour-blind safe | WCAG 2.2 AAA (7:1) | Extra headroom for perception variance |

All contrast checks use **text vs background** calculation. Interactive elements may use 3:1 for non-text UI.

---

## Type Definitions

```typescript
// Intent: Brand Colours
interface BrandColors {
  primary: string;
  secondary?: string;
}

// Derived: Base Palette
interface BasePalette {
  primary: string;   // Input or adjusted-for-accessibility
  secondary: string; // Triadic (+120°) or input secondary
  tertiary: string;  // Triadic (+240°) or split-complementary
}

// Artifact: Token Set
interface GeneratedThemeColors {
  surface: { primary: string; secondary: string; accent: string; inverse: string };
  text: { primary: string; muted: string; inverse: string; accent: string };
  border: { subtle: string; strong: string; accent: string };
  interactive: { primary: string; hover: string; focus: string };
  shadow: { subtle: string; strong: string };
}

// Artifact: Full Theme (6 Token Sets)
interface GeneratedTheme {
  light: GeneratedThemeColors;
  dark: GeneratedThemeColors;
  highContrastLight: GeneratedThemeColors;
  highContrastDark: GeneratedThemeColors;
  lowContrastLight: GeneratedThemeColors;
  lowContrastDark: GeneratedThemeColors;
}

// Result
interface GenerateThemeResult {
  theme: GeneratedTheme;
  basePalette: BasePalette;
  warnings: string[];
}
```

---

## API

```typescript
function generateTheme(
  brand: BrandColors,
  options?: {
    contrast?: "AA" | "AAA";      // Default: "AA"
    colorBlindSafe?: boolean;     // Phase 3 polish, basic support now
  }
): GenerateThemeResult
```

---

## Colour Theory Implementation

### One Brand Colour → Triadic Palette

```typescript
function deriveTriadicPalette(primary: string): BasePalette {
  const oklch = hexToOklch(primary);
  return {
    primary: primary,  // Preserve input
    secondary: oklchToHex({ 
      l: Math.min(oklch.l + 0.05, 0.85),  // Slight adjustment for a11y
      c: oklch.c * 0.9, 
      h: (oklch.h + 120) % 360 
    }),
    tertiary: oklchToHex({ 
      l: Math.min(oklch.l + 0.05, 0.85), 
      c: oklch.c * 0.9, 
      h: (oklch.h + 240) % 360 
    }),
  };
}
```

**Principle:** Minimal adjustment for accessibility while preserving hue intent.

### Two Brand Colours → Split-Complementary

```typescript
function deriveSplitComplementaryPalette(
  primary: string, 
  secondaryHint: string
): BasePalette {
  const primaryOklch = hexToOklch(primary);
  const hintOklch = hexToOklch(secondaryHint);
  
  // Secondary: honour the hint's hue, adjust L/C for a11y
  const secondary = oklchToHex({
    l: ensureAccessibleLightness(hintOklch.l),
    c: hintOklch.c * 0.9,
    h: hintOklch.h,
  });
  
  // Tertiary: split-complement of primary (150° instead of 180°)
  const tertiary = oklchToHex({
    l: primaryOklch.l,
    c: primaryOklch.c * 0.85,
    h: (primaryOklch.h + 150) % 360,
  });
  
  return { primary, secondary, tertiary };
}
```

---

## Token Derivation Rules

### Surface Tokens

| Token | Light Mode Source | Dark Mode Source |
|-------|-------------------|------------------|
| `surface.primary` | palette.primary L+40% | palette.primary L-35% |
| `surface.secondary` | palette.secondary L+35% | palette.secondary L-30% |
| `surface.accent` | palette.tertiary L+30% | palette.tertiary L-25% |
| `surface.inverse` | palette.primary L-35% | palette.primary L+40% |

### Text Tokens

- `text.primary`: Max contrast against surface.primary (AA minimum)
- `text.muted`: Reduced contrast but still AA compliant
- `text.accent`: Derived from palette.tertiary, ensured AA
- `text.inverse`: Inverse of text.primary

### Interactive Tokens

- `interactive.primary`: palette.primary, ensured AA on surface.primary
- `interactive.hover`: Darkened 10% (light) / Lightened 10% (dark)
- `interactive.focus`: palette.secondary for distinct focus ring

### Border Tokens

- `border.subtle`: Greyscale, low contrast
- `border.strong`: High contrast outline
- `border.accent`: palette.tertiary for emphasis

### Shadow Tokens

- `shadow.subtle`: `rgba(0,0,0,0.08)` light / `rgba(0,0,0,0.25)` dark
- `shadow.strong`: `rgba(0,0,0,0.2)` light / `rgba(0,0,0,0.5)` dark

---

## High/Low Contrast Adjustments

### High Contrast

- Increase lightness difference: ±15% more separation
- Ensure AAA (7:1) for all text
- Sharper border colours
- Stronger shadows

### Low Contrast

- Reduce lightness difference: softer transitions
- Maintain AA (4.5:1) minimum
- Subtle borders
- Lighter shadows

---

## Colour-Blind Safe Mode

**Target:** Broad coverage (deuteranopia, protanopia, tritanopia)

**Strategy:**

1. Use AAA contrast (7:1) — extra headroom helps
2. Avoid relying solely on red-green distinction
3. Prefer blue-yellow or blue-orange for palette generation
4. Adjust triadic angles if needed (avoid pure red-green opposition)

**Phase 3 refinement:** Dedicated colour-blindness simulation and testing.

---

## Simple Theme Expansion

Named themes (e.g., "festive-2025") defined as Simple Theme (light-only) expand to Full Theme:

```typescript
function expandSimpleTheme(simple: SimpleTheme): GeneratedTheme {
  // 1. Use provided mode as base
  // 2. Generate opposite mode by inverting lightness
  // 3. Generate high/low contrast variants by adjusting contrast
  // 4. Return complete Full Theme
}
```

---

## Storybook Demonstration

### ThemeShowcase Layout

```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ One Colour   │ Two Colours  │ Festive 2025 │ Colour-Blind │
├──────────────┼──────────────┼──────────────┼──────────────┤
│ Input: ■     │ Input: ■ ■   │ (Named)      │ Input: ■+CBS │
│ Palette: ■■■ │ Palette: ■■■ │              │ Palette: ■■■ │
├──────────────┼──────────────┼──────────────┼──────────────┤
│ Light        │ Light        │ Light        │ Light        │
│ Dark         │ Dark         │ Dark         │ Dark         │
│ HC-Light     │ HC-Light     │ HC-Light     │ HC-Light     │
│ HC-Dark      │ HC-Dark      │ HC-Dark      │ HC-Dark      │
│ LC-Light     │ LC-Light     │ LC-Light     │ LC-Light     │
│ LC-Dark      │ LC-Dark      │ LC-Dark      │ LC-Dark      │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

### Token Demonstration

Each Token Set card shows:

- **Surfaces**: 4 background swatches
- **Text**: 4 text samples on appropriate backgrounds
- **Borders**: 3 bordered boxes
- **Interactive**: Hover button, "Click me" active, focus ring demo
- **Shadows**: 2 elevated cards

### Interactive Elements

- **Hover me** — real `:hover` state
- **Click me** — real `:active` state on click
- **Focused** — static focus ring demo

---

## Current File Status

| File | Status | Tests |
|------|--------|-------|
| `themeTypes.ts` | ⚠️ Update for 6 Token Sets | N/A |
| `colorUtils.ts` | ⚠️ Add triadic/split-comp | 27 passing |
| `contrastUtils.ts` | ✅ | 13 passing |
| `deriveTokens.ts` | ⚠️ Major refactor | 8 passing |
| `generateTheme.ts` | ⚠️ Update for 6 Token Sets | 14 passing |
| `generateTheme.stories.tsx` | ⚠️ New ThemeShowcase | Storybook |
| `ThemePreview.tsx` | ⚠️ Add contrast prop | N/A |

---

## Quality Gates

```bash
npm run check  # type-check, lint, format:check, test:ci
```

All tests must pass.

---

## Related Documents

- [ADR-0002 Custom Semantic Tokens](../../docs/architecture/decision-records/0002-custom-semantic-tokens.adr.md)
- [theme-input-examples.appendix.md](./theme-input-examples.appendix.md)
- [arbitrary-theme-support.plan.md](./arbitrary-theme-support.plan.md)

---

## RULES

- WCAG 2.2 AA minimum for all generated themes
- WCAG 2.2 AAA for colour-blind-safe mode
- No non-null assertions
- All functions pure with no side effects
- Full JSDoc documentation
- TDD approach
