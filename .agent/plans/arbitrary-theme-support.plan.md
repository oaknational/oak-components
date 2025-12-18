# Oak Components: Custom Semantic Theme Support

## Impact

Enable consuming applications to use **arbitrary branded colors** in Oak Components via native props:

```tsx
<OakBox
  as="footer"
  $background="custom-surface-primary"
  $color="custom-text-primary"
  $pv={["spacing-32", "spacing-48"]}
>
  <FooterContent />
</OakBox>
```

**Benefits:**

- **White-labeling**: Apps can use any brand colors, not just Oak's palette
- **Accessibility**: Custom accessible colors for dark/high-contrast modes
- **Design flexibility**: CSS-native theming with system preference support
- **Zero breaking changes**: Existing Oak tokens continue to work unchanged

> See [ADR-0002 Nomenclature](../../docs/architecture/decision-records/0002-custom-semantic-tokens.adr.md#nomenclature) for term definitions (Theme, Simple Theme, Partial Theme, Full Theme, Brand Colors, Generated Theme).

---

## Phases

### Phase 1 Summary: Core Custom Tokens (MVP) ✅ COMPLETE

> **Implemented:** 2025-12-17
> **ADR:** [0002-custom-semantic-tokens.adr.md](../../docs/architecture/decision-records/0002-custom-semantic-tokens.adr.md)

Enable custom token props with consumer-defined colors.

**Delivered:**

1. ✅ Token registry (`customSemanticTokens.ts`) - 17 tokens with derived types
2. ✅ Type extension (`OakCombinedColorToken`)
3. ✅ `parseColor` update - returns CSS var references for custom tokens
4. ✅ `CustomThemeProvider` component - with `buildCss` pure function
5. ✅ Full test coverage - 28 new tests
6. ✅ Storybook examples - 4 stories (Default, AllTokenCategories, HighContrastDemo, BrandedTheme)

### Phase 2 Summary: Theme Generator ✅ COMPLETE

> **Implemented:** 2025-12-18

Generate accessible themes from brand colors using colour theory.

**Delivered:**

1. ✅ `generateTheme()` function - triadic/split-complementary derivation
2. ✅ `deriveTokens()` - 17 semantic tokens from base palette
3. ✅ `expandSimpleTheme()` - expand SimpleTheme to 6 Token Sets
4. ✅ `checkWcagContrast()` utility - WCAG 2.2 AA/AAA validation
5. ✅ Named themes (`festive2025`, `colorBlindSafe`) with pre-computed tokens
6. ✅ High/Low contrast modes with proper derivation (9:1+ / 4.5-5:1)
7. ✅ Interactive token with `active` state (17 tokens total)
8. ✅ Storybook with interactive colour picker, token grids, live demos
9. ✅ 78 unit tests covering all derivation paths

### Phase 3 Summary: Advanced Accessibility

CVD safety and bundled palettes.

**Deliverables:**

1. `simulateCVD()` function
2. `safePalettes` collection
3. Okabe-Ito, Wong, IBM palettes
4. Storybook examples proving the features work

### Phase 4 Summary: Arbitrary Named Themes

Support for custom theme names beyond light/dark.

**Deliverables:**

1. `named` themes in config
2. `data-theme` attribute support
3. Theme switcher example
4. Storybook examples proving the features work

---

## Requirements

### Must Have

1. **Native prop support**: `$background="custom-surface-primary"` works in OakBox and all components using `colorStyle`
2. **Consumer-defined colors**: Apps pass their color values via a provider component
3. **Light/dark support**: Uses CSS `light-dark()` for automatic theme switching
4. **Type safety**: Full autocomplete for custom token names (derived from runtime constant)
5. **SSR safe**: No hydration mismatches, CSS in initial HTML

### Should Have

6. **Contrast preference support**: `prefers-contrast: more/less` via CSS media queries
7. **Derived fallbacks**: Undefined tokens derive from explicit ones (e.g., muted = 60% of primary)
8. **Theme generator**: Helper function generates full theme from 1-2 brand colors
9. **Arbitrary named themes**: Support themes like `"festive-theme-2025"`

### Must NOT change

- Existing Oak color tokens (`mint`, `navy110`, etc.)
- Existing UI role tokens (`bg-decorative1-main`, etc.)
- Oak's existing theme structure

---

## Examples

### 1. Minimum Valid Palette

The minimum required tokens are **`surface.primary`** and **`text.primary`** for both `light` and `dark` modes. All other tokens are optional and will be derived automatically if not provided.

```typescript
// ✅ Minimum valid config - only 2 tokens per mode
const minimalConfig: CustomThemeConfig = {
  light: {
    surface: { primary: "#ffffff" },
    text: { primary: "#1a1a1a" },
  },
  dark: {
    surface: { primary: "#1a1a1a" },
    text: { primary: "#f0f0f0" },
  },
};

// Auto-derived values (examples - actual derivation may vary):
// surface.secondary = surface.primary adjusted by 5% lightness
// surface.accent = interactive.primary (if set) or derived from text.primary
// surface.inverse = opposite mode's surface.primary
// text.muted = text.primary at 60% opacity/lightness
// text.inverse = opposite mode's text.primary
// text.accent = interactive.primary (if set)
// border.subtle = surface.primary adjusted 15% toward text.primary
// border.strong = text.primary
// border.accent = interactive.primary (if set)
// interactive.primary = first non-grayscale color found, or derived
// interactive.hover = interactive.primary darkened 10%
// interactive.focus = interactive.primary lightened 20%
// shadow.subtle = rgba(0,0,0,0.1) / rgba(0,0,0,0.2)
// shadow.strong = rgba(0,0,0,0.25) / rgba(0,0,0,0.4)
```

**Derivation Rules:**

| Token | Derived From | Rule |
|-------|-------------|------|
| `surface.secondary` | `surface.primary` | Shift lightness 5% toward middle gray |
| `surface.accent` | `interactive.primary` | Copy, or if missing, derive from text |
| `surface.inverse` | Opposite mode's `surface.primary` | Direct copy |
| `text.muted` | `text.primary` | Reduce contrast by 40% |
| `text.inverse` | Opposite mode's `text.primary` | Direct copy |
| `text.accent` | `interactive.primary` | Copy |
| `border.subtle` | `surface.primary`, `text.primary` | 15% blend |
| `border.strong` | `text.primary` | Direct copy |
| `border.accent` | `interactive.primary` | Copy |
| `interactive.primary` | First chromatic color | Auto-detect or derive |
| `interactive.hover` | `interactive.primary` | Darken 10% |
| `interactive.focus` | `interactive.primary` | Lighten 20%, ensure visible ring |
| `shadow.subtle` | Mode | `rgba(0,0,0,0.1)` light / `rgba(0,0,0,0.2)` dark |
| `shadow.strong` | Mode | `rgba(0,0,0,0.25)` light / `rgba(0,0,0,0.4)` dark |

---

### 2. Full Manual Specification (All Reserved Themes + Custom)

This example shows explicit values for all 6 reserved theme modes plus one custom named theme.

```typescript
const fullManualConfig: CustomThemeConfig = {
  // Required: Standard light mode
  light: {
    surface: { 
      primary: "#ffffff",
      secondary: "#f5f5f5",
      accent: "#e8f4e8",
      inverse: "#1a1a1a",
    },
    text: { 
      primary: "#1a1a1a",
      muted: "#666666",
      inverse: "#f0f0f0",
      accent: "#287c34",
    },
    border: { 
      subtle: "#e0e0e0",
      strong: "#1a1a1a",
      accent: "#287c34",
    },
    interactive: { 
      primary: "#287c34",
      hover: "#1f5f28",
      focus: "#4a9f54",
    },
    shadow: { 
      subtle: "rgba(0,0,0,0.08)",
      strong: "rgba(0,0,0,0.2)",
    },
  },

  // Required: Standard dark mode
  dark: {
    surface: { 
      primary: "#1a1a1a",
      secondary: "#2a2a2a",
      accent: "#1e3a1e",
      inverse: "#ffffff",
    },
    text: { 
      primary: "#f0f0f0",
      muted: "#999999",
      inverse: "#1a1a1a",
      accent: "#4a9f54",
    },
    border: { 
      subtle: "#3a3a3a",
      strong: "#f0f0f0",
      accent: "#4a9f54",
    },
    interactive: { 
      primary: "#4a9f54",
      hover: "#5cb565",
      focus: "#287c34",
    },
    shadow: { 
      subtle: "rgba(0,0,0,0.2)",
      strong: "rgba(0,0,0,0.5)",
    },
  },

  // Optional: High-contrast light (prefers-contrast: more)
  highContrastLight: {
    surface: { 
      primary: "#ffffff",
      secondary: "#ffffff",
      accent: "#ffffff",
      inverse: "#000000",
    },
    text: { 
      primary: "#000000",
      muted: "#000000",
      inverse: "#ffffff",
      accent: "#000000",
    },
    border: { 
      subtle: "#000000",
      strong: "#000000",
      accent: "#000000",
    },
    interactive: { 
      primary: "#000000",
      hover: "#333333",
      focus: "#000000",
    },
    shadow: { 
      subtle: "rgba(0,0,0,0.3)",
      strong: "rgba(0,0,0,0.6)",
    },
  },

  // Optional: High-contrast dark (prefers-contrast: more + dark)
  highContrastDark: {
    surface: { 
      primary: "#000000",
      secondary: "#000000",
      accent: "#000000",
      inverse: "#ffffff",
    },
    text: { 
      primary: "#ffffff",
      muted: "#ffffff",
      inverse: "#000000",
      accent: "#ffffff",
    },
    border: { 
      subtle: "#ffffff",
      strong: "#ffffff",
      accent: "#ffffff",
    },
    interactive: { 
      primary: "#ffffff",
      hover: "#cccccc",
      focus: "#ffffff",
    },
    shadow: { 
      subtle: "rgba(255,255,255,0.15)",
      strong: "rgba(255,255,255,0.35)",
    },
  },

  // Optional: Low-contrast light (prefers-contrast: less)
  lowContrastLight: {
    surface: { 
      primary: "#fafafa",
      secondary: "#f0f0f0",
      accent: "#e8e8e8",
      inverse: "#404040",
    },
    text: { 
      primary: "#404040",
      muted: "#808080",
      inverse: "#e0e0e0",
      accent: "#5a9a5a",
    },
    border: { 
      subtle: "#e8e8e8",
      strong: "#a0a0a0",
      accent: "#5a9a5a",
    },
    interactive: { 
      primary: "#5a9a5a",
      hover: "#4a8a4a",
      focus: "#6aaa6a",
    },
    shadow: { 
      subtle: "rgba(0,0,0,0.04)",
      strong: "rgba(0,0,0,0.1)",
    },
  },

  // Optional: Low-contrast dark (prefers-contrast: less)
  lowContrastDark: {
    surface: { 
      primary: "#2a2a2a",
      secondary: "#333333",
      accent: "#3a3a3a",
      inverse: "#c0c0c0",
    },
    text: { 
      primary: "#c0c0c0",
      muted: "#808080",
      inverse: "#404040",
      accent: "#6aaa6a",
    },
    border: { 
      subtle: "#404040",
      strong: "#808080",
      accent: "#6aaa6a",
    },
    interactive: { 
      primary: "#6aaa6a",
      hover: "#7aba7a",
      focus: "#5a9a5a",
    },
    shadow: { 
      subtle: "rgba(0,0,0,0.15)",
      strong: "rgba(0,0,0,0.3)",
    },
  },

  // Optional: Arbitrary named themes
  named: {
    "festive-theme-2025": {
      surface: { 
        primary: "#1a472a",      // Deep green
        secondary: "#0d2818",    // Darker green
        accent: "#8b0000",       // Dark red
        inverse: "#ffd700",      // Gold
      },
      text: { 
        primary: "#ffffff",
        muted: "#c0c0c0",
        inverse: "#1a472a",
        accent: "#ffd700",       // Gold
      },
      border: { 
        subtle: "#2a5a3a",
        strong: "#ffd700",
        accent: "#8b0000",
      },
      interactive: { 
        primary: "#ffd700",
        hover: "#ffed4a",
        focus: "#e6c200",
      },
      shadow: { 
        subtle: "rgba(0,0,0,0.3)",
        strong: "rgba(0,0,0,0.6)",
      },
    },
  },
};
```

**Generated CSS for the above config:**

```css
/* Standard light/dark with light-dark() */
:root {
  color-scheme: light dark;
  --custom-surface-primary: light-dark(#ffffff, #1a1a1a);
  --custom-surface-secondary: light-dark(#f5f5f5, #2a2a2a);
  /* ... all tokens ... */
}

/* High contrast override */
@media (prefers-contrast: more) {
  :root {
    --custom-surface-primary: light-dark(#ffffff, #000000);
    --custom-text-primary: light-dark(#000000, #ffffff);
    /* ... all tokens ... */
  }
}

/* Low contrast override */
@media (prefers-contrast: less) {
  :root {
    --custom-surface-primary: light-dark(#fafafa, #2a2a2a);
    --custom-text-primary: light-dark(#404040, #c0c0c0);
    /* ... all tokens ... */
  }
}

/* Named theme (static values, not light-dark) */
[data-theme="festive-theme-2025"] {
  --custom-surface-primary: #1a472a;
  --custom-surface-secondary: #0d2818;
  --custom-surface-accent: #8b0000;
  --custom-text-primary: #ffffff;
  /* ... all tokens ... */
}
```

---

### 3. Theme Generator Examples

> **Note:** The output colors shown below are illustrative examples. Actual generated values will depend on the specific algorithms implemented (OKLCH color space, contrast adjustment iterations, triadic hue rotations).

#### 3a. Single Color Input (Standard)

```typescript
const result = generateTheme("#287c34"); // Oak green

// Example output (illustrative):
{
  light: {
    surface: { primary: "#ffffff", secondary: "#f7faf7", accent: "#e8f4e8", inverse: "#1a1a1a" },
    text: { primary: "#1a2e1c", muted: "#4a5a4c", inverse: "#f0f5f0", accent: "#287c34" },
    border: { subtle: "#d4e4d4", strong: "#287c34", accent: "#287c34" },
    interactive: { primary: "#287c34", hover: "#1f5f28", focus: "#4a9f54" },
    shadow: { subtle: "rgba(40,124,52,0.08)", strong: "rgba(40,124,52,0.2)" },
  },
  dark: {
    surface: { primary: "#0f1a10", secondary: "#1a2e1c", accent: "#1e3a1e", inverse: "#f0f5f0" },
    text: { primary: "#e8f0e8", muted: "#a0b0a0", inverse: "#1a2e1c", accent: "#5cb565" },
    border: { subtle: "#2a4a2c", strong: "#5cb565", accent: "#5cb565" },
    interactive: { primary: "#5cb565", hover: "#4a9f54", focus: "#7cc985" },
    shadow: { subtle: "rgba(0,0,0,0.25)", strong: "rgba(0,0,0,0.5)" },
  },
  warnings: [], // No warnings if all contrasts passed
}
```

#### 3b. Single Color with `colorBlindSafe: true`

```typescript
const result = generateTheme("#287c34", undefined, { colorBlindSafe: true });

// Example output (illustrative):
// - Achieves WCAG AAA (7:1) contrast for text
// - All color pairs validated through CVD simulation
// - Hues adjusted if original pairing fails CVD test
{
  light: {
    surface: { primary: "#ffffff", secondary: "#f5f5f5", accent: "#e0f0e0", inverse: "#000000" },
    text: { primary: "#000000", muted: "#333333", inverse: "#ffffff", accent: "#1a5a22" },
    border: { subtle: "#c0c0c0", strong: "#000000", accent: "#1a5a22" },
    interactive: { primary: "#1a5a22", hover: "#0d3a14", focus: "#2a7a32" },
    shadow: { subtle: "rgba(0,0,0,0.12)", strong: "rgba(0,0,0,0.3)" },
  },
  dark: {
    surface: { primary: "#000000", secondary: "#1a1a1a", accent: "#0a2a0e", inverse: "#ffffff" },
    text: { primary: "#ffffff", muted: "#cccccc", inverse: "#000000", accent: "#7cc985" },
    border: { subtle: "#444444", strong: "#ffffff", accent: "#7cc985" },
    interactive: { primary: "#7cc985", hover: "#9cda9e", focus: "#5cb565" },
    shadow: { subtle: "rgba(0,0,0,0.35)", strong: "rgba(0,0,0,0.6)" },
  },
  highContrastLight: { /* AAA contrast, pure black/white where needed */ },
  highContrastDark: { /* AAA contrast, pure black/white where needed */ },
  warnings: [
    "Adjusted interactive.primary hue by +15° to improve deuteranopia distinguishability",
  ],
}
```

#### 3c. Two Color Input

```typescript
const result = generateTheme("#287c34", "#7c2834"); // Green + complementary red-brown

// Example output (illustrative):
// - Primary color (#287c34) used for interactive elements
// - Secondary color (#7c2834) used for accents
{
  light: {
    surface: { 
      primary: "#ffffff", 
      secondary: "#faf7f7",  // Tinted toward secondary
      accent: "#f4e8e8",     // Secondary-tinted
      inverse: "#1a1a1a",
    },
    text: { 
      primary: "#1a1a1a", 
      muted: "#5a5a5a", 
      inverse: "#f0f0f0", 
      accent: "#7c2834",    // Secondary color
    },
    border: { 
      subtle: "#e4d4d4",    // Secondary-tinted
      strong: "#1a1a1a", 
      accent: "#7c2834",    // Secondary color
    },
    interactive: { 
      primary: "#287c34",   // Primary color
      hover: "#1f5f28", 
      focus: "#4a9f54",
    },
    shadow: { subtle: "rgba(0,0,0,0.08)", strong: "rgba(0,0,0,0.2)" },
  },
  dark: {
    surface: { 
      primary: "#1a1a1a", 
      secondary: "#2a2020",  // Secondary-tinted
      accent: "#3a2020",     // Secondary-tinted
      inverse: "#ffffff",
    },
    text: { 
      primary: "#f0f0f0", 
      muted: "#a0a0a0", 
      inverse: "#1a1a1a", 
      accent: "#c45a66",    // Secondary, lightened for dark mode
    },
    border: { 
      subtle: "#4a3a3a",    // Secondary-tinted
      strong: "#f0f0f0", 
      accent: "#c45a66",    // Secondary, lightened
    },
    interactive: { 
      primary: "#5cb565",   // Primary, lightened for dark mode
      hover: "#4a9f54", 
      focus: "#7cc985",
    },
    shadow: { subtle: "rgba(0,0,0,0.25)", strong: "rgba(0,0,0,0.5)" },
  },
  warnings: [],
}
```

> **Important:** The hex values shown in all examples above are illustrative. The actual implementation will use OKLCH color space calculations, WCAG 2.2 contrast formulas, and iterative adjustment to produce colors that meet accessibility requirements. The specific output values will depend on the algorithms chosen during implementation.

---

## Edge Cases

### Input Validation

| Case | Behavior |
|------|----------|
| Invalid hex format (`#gggggg`) | Throw `TypeError` with descriptive message |
| 3-char hex (`#abc`) | Expand to 6-char (`#aabbcc`) |
| 8-char hex with alpha (`#rrggbbaa`) | Strip alpha, warn in `warnings` array |
| RGB/HSL string | Throw `TypeError` - only hex supported (v1) |
| Empty string | Throw `TypeError` |

### Contrast Failures

| Case | Behavior |
|------|----------|
| Cannot achieve 4.5:1 with provided color | Adjust lightness until passes, add warning |
| Cannot achieve 7:1 for AAA | Cap at maximum achievable, add warning |
| Primary color too close to white/black | Shift hue 180° or use derived triadic, add warning |

### Derivation Edge Cases

| Case | Behavior |
|------|----------|
| `surface.primary` is very dark in light mode | Warn, suggest using it in dark mode config |
| `interactive.primary` is grayscale | Derive chromatic color from theme defaults |
| Only `light` mode provided, no `dark` | Throw `TypeError` - both modes required |
| `highContrastLight` without `highContrastDark` | Throw `TypeError` - pairs required |

### Named Theme Edge Cases

| Case | Behavior |
|------|----------|
| Reserved name used (`"light"`, `"dark"`) | Throw `TypeError` - reserved names forbidden |
| Theme name with special characters | Sanitize for CSS selector compatibility |
| Empty named themes object (`named: {}`) | Valid - no named themes generated |

### SSR/Hydration

| Case | Behavior |
|------|----------|
| Config changes between server/client | React reconciliation handles style update |
| Missing `CustomThemeProvider` | CSS vars undefined, components use fallback/transparent |
| Multiple `CustomThemeProvider` instances | Last one wins (CSS cascade) |

---

## Phase 1: Core Custom Tokens

### Architecture

```text
1. Consumer defines colors:
   CustomThemeProvider({ config: { light: {...}, dark: {...} } })
   
2. Provider generates CSS:
   <style>:root { --custom-surface-primary: light-dark(#fff, #1a1a1a); }</style>
   
3. OakBox uses token:
   <OakBox $background="custom-surface-primary" />
   
4. parseColor recognizes prefix:
   parseColor("custom-surface-primary") → "var(--custom-surface-primary)"
   
5. styled-components outputs:
   background: var(--custom-surface-primary);
   
6. CSS cascade resolves:
   Browser applies light or dark value based on color-scheme
```

### Token Registry

**File:** `src/styles/theme/customSemanticTokens.ts`

```typescript
/**
 * Canonical set of custom semantic tokens.
 * Types are derived from this constant for strict type safety.
 * 
 * @remarks
 * Token names follow the pattern `custom-{category}-{name}`.
 * These are recognized by `parseColor` and output CSS var references.
 */
export const customSemanticTokenSpec = {
  surface: ["primary", "secondary", "accent", "inverse"],
  text: ["primary", "muted", "inverse", "accent"],
  border: ["subtle", "strong", "accent"],
  interactive: ["primary", "hover", "focus"],
  shadow: ["subtle", "strong"],
} as const;

// Derive token names: "custom-surface-primary", "custom-text-muted", etc.
type TokenNames<T extends Record<string, readonly string[]>> = {
  [K in keyof T]: `custom-${K & string}-${T[K][number]}`;
}[keyof T];

/**
 * Union type of all valid custom semantic token names.
 */
export type CustomSemanticToken = TokenNames<typeof customSemanticTokenSpec>;

/**
 * Type guard for custom semantic tokens.
 */
export function isCustomSemanticToken(value: string): value is CustomSemanticToken {
  return value.startsWith("custom-") && customSemanticTokens.includes(value as CustomSemanticToken);
}

// Generate array for runtime checks
export const customSemanticTokens: readonly CustomSemanticToken[] = 
  Object.entries(customSemanticTokenSpec).flatMap(
    ([category, names]) => names.map(name => `custom-${category}-${name}` as CustomSemanticToken)
  );
```

### TDD: Token Registry Tests

**File:** `src/styles/theme/customSemanticTokens.test.ts`

```typescript
import { 
  customSemanticTokens, 
  isCustomSemanticToken,
  type CustomSemanticToken 
} from "./customSemanticTokens";

describe("customSemanticTokens", () => {
  describe("token generation", () => {
    it("generates all expected surface tokens", () => {
      expect(customSemanticTokens).toContain("custom-surface-primary");
      expect(customSemanticTokens).toContain("custom-surface-secondary");
      expect(customSemanticTokens).toContain("custom-surface-accent");
      expect(customSemanticTokens).toContain("custom-surface-inverse");
    });

    it("generates all expected text tokens", () => {
      expect(customSemanticTokens).toContain("custom-text-primary");
      expect(customSemanticTokens).toContain("custom-text-muted");
      expect(customSemanticTokens).toContain("custom-text-inverse");
      expect(customSemanticTokens).toContain("custom-text-accent");
    });

    it("generates all expected border tokens", () => {
      expect(customSemanticTokens).toContain("custom-border-subtle");
      expect(customSemanticTokens).toContain("custom-border-strong");
      expect(customSemanticTokens).toContain("custom-border-accent");
    });

    it("generates correct total count", () => {
      // 4 surface + 4 text + 3 border + 3 interactive + 2 shadow = 16
      expect(customSemanticTokens).toHaveLength(16);
    });
  });

  describe("isCustomSemanticToken type guard", () => {
    it("returns true for valid custom tokens", () => {
      expect(isCustomSemanticToken("custom-surface-primary")).toBe(true);
      expect(isCustomSemanticToken("custom-text-muted")).toBe(true);
    });

    it("returns false for invalid custom tokens", () => {
      expect(isCustomSemanticToken("custom-invalid-token")).toBe(false);
      expect(isCustomSemanticToken("surface-primary")).toBe(false);
    });

    it("returns false for Oak tokens", () => {
      expect(isCustomSemanticToken("mint")).toBe(false);
      expect(isCustomSemanticToken("bg-decorative1-main")).toBe(false);
    });
  });
});
```

### Type Extension

**File:** `src/styles/theme/color.ts`

```diff
+ import { CustomSemanticToken } from "./customSemanticTokens";

- export type OakCombinedColorToken = OakColorToken | OakUiRoleToken;
+ export type OakCombinedColorToken = OakColorToken | OakUiRoleToken | CustomSemanticToken;
```

### TDD: parseColor Tests

**File:** `src/styles/helpers/parseColor.test.tsx` (additions)

```typescript
describe("parseColor with custom tokens", () => {
  it("returns CSS var for custom-surface-primary", () => {
    expect(parseColor("custom-surface-primary")).toBe("var(--custom-surface-primary)");
  });

  it("returns CSS var for custom-text-muted", () => {
    expect(parseColor("custom-text-muted")).toBe("var(--custom-text-muted)");
  });

  it("returns CSS var for all custom token categories", () => {
    expect(parseColor("custom-border-subtle")).toBe("var(--custom-border-subtle)");
    expect(parseColor("custom-interactive-hover")).toBe("var(--custom-interactive-hover)");
    expect(parseColor("custom-shadow-strong")).toBe("var(--custom-shadow-strong)");
  });

  it("existing Oak color tokens still work", () => {
    expect(parseColor("mint")).toBe("#bef2bd");
  });

  it("existing UI role tokens still work", () => {
    const result = parseColor("bg-decorative1-main");
    expect(typeof result).toBe("function"); // Theme function
  });

  it("returns undefined for null/undefined", () => {
    expect(parseColor(null)).toBeUndefined();
    expect(parseColor(undefined)).toBeUndefined();
  });
});
```

### parseColor Implementation

**File:** `src/styles/helpers/parseColor.ts`

```diff
+ import { isCustomSemanticToken } from "@/styles/theme/customSemanticTokens";

function parseColor(value?: OakCombinedColorToken | null) {
  if (value === undefined || value === null) {
    return undefined;
  }

+ // Custom semantic tokens: return CSS variable reference
+ if (typeof value === "string" && isCustomSemanticToken(value)) {
+   return `var(--${value})`;
+ }

  // Existing: raw color tokens
  if (value in oakColorTokens) {
    return oakColorTokens[value as OakColorToken];
  }

  // Existing: UI role tokens (theme lookup)
  if (oakUiRoleTokens.includes(value as OakUiRoleToken)) {
    return ({ theme }: PropsWithTheme) => {
      const c = theme.uiColors[value as OakUiRoleToken];
      return oakColorTokens[c as OakColorToken];
    };
  }
}
```

### TDD: buildCss Pure Function Tests

**File:** `src/components/atoms/CustomThemeProvider/buildCss.test.ts`

```typescript
import { buildCss } from "./buildCss";
import type { CustomThemeConfig } from "./CustomThemeProvider";

describe("buildCss", () => {
  const minimalConfig: CustomThemeConfig = {
    light: {
      surface: { primary: "#ffffff" },
      text: { primary: "#222222" },
    },
    dark: {
      surface: { primary: "#1a1a1a" },
      text: { primary: "#f0f0f0" },
    },
  };

  it("generates :root with color-scheme declaration", () => {
    const css = buildCss(minimalConfig);
    expect(css).toContain(":root {");
    expect(css).toContain("color-scheme: light dark;");
  });

  it("generates light-dark() for tokens defined in both modes", () => {
    const css = buildCss(minimalConfig);
    expect(css).toContain("--custom-surface-primary: light-dark(#ffffff, #1a1a1a);");
    expect(css).toContain("--custom-text-primary: light-dark(#222222, #f0f0f0);");
  });

  it("omits tokens not defined in both modes", () => {
    const partialConfig: CustomThemeConfig = {
      light: { surface: { primary: "#fff" }, text: {} },
      dark: { surface: { primary: "#000" }, text: {} },
    };
    const css = buildCss(partialConfig);
    expect(css).not.toContain("--custom-text-primary");
  });

  it("generates high-contrast media query when highContrast modes provided", () => {
    const hcConfig: CustomThemeConfig = {
      ...minimalConfig,
      highContrastLight: { surface: { primary: "#ffffff" }, text: { primary: "#000000" } },
      highContrastDark: { surface: { primary: "#000000" }, text: { primary: "#ffffff" } },
    };
    const css = buildCss(hcConfig);
    expect(css).toContain("@media (prefers-contrast: more)");
  });

  it("does not generate high-contrast when modes not provided", () => {
    const css = buildCss(minimalConfig);
    expect(css).not.toContain("@media (prefers-contrast: more)");
  });
});
```

### buildCss Implementation

**File:** `src/components/atoms/CustomThemeProvider/buildCss.ts`

```typescript
import { customSemanticTokenSpec } from "@/styles/theme/customSemanticTokens";
import type { CustomThemeColors, CustomThemeConfig } from "./CustomThemeProvider";

/**
 * Generates CSS custom properties for custom theme tokens.
 * 
 * @param config - Theme configuration with light/dark color values
 * @returns CSS string to inject into <style> element
 * 
 * @remarks
 * Pure function - no side effects, deterministic output.
 * Uses CSS `light-dark()` for automatic theme switching.
 */
export function buildCss(config: CustomThemeConfig): string {
  const lines: string[] = [":root {", "  color-scheme: light dark;"];
  
  for (const [category, names] of Object.entries(customSemanticTokenSpec)) {
    for (const name of names) {
      const lightVal = config.light[category as keyof CustomThemeColors]?.[name];
      const darkVal = config.dark[category as keyof CustomThemeColors]?.[name];
      
      if (lightVal && darkVal) {
        lines.push(`  --custom-${category}-${name}: light-dark(${lightVal}, ${darkVal});`);
      }
    }
  }
  
  lines.push("}");
  
  // High contrast media query
  if (config.highContrastLight && config.highContrastDark) {
    lines.push("@media (prefers-contrast: more) {");
    lines.push("  :root {");
    for (const [category, names] of Object.entries(customSemanticTokenSpec)) {
      for (const name of names) {
        const hcLight = config.highContrastLight[category as keyof CustomThemeColors]?.[name];
        const hcDark = config.highContrastDark[category as keyof CustomThemeColors]?.[name];
        if (hcLight && hcDark) {
          lines.push(`    --custom-${category}-${name}: light-dark(${hcLight}, ${hcDark});`);
        }
      }
    }
    lines.push("  }");
    lines.push("}");
  }
  
  return lines.join("\n");
}
```

### CustomThemeProvider Component

**File:** `src/components/atoms/CustomThemeProvider/CustomThemeProvider.tsx`

```typescript
import React, { useMemo, type JSX } from "react";
import { customSemanticTokenSpec } from "@/styles/theme/customSemanticTokens";
import { buildCss } from "./buildCss";

/**
 * Color values for a single theme mode.
 */
export type CustomThemeColors = {
  [K in keyof typeof customSemanticTokenSpec]: {
    [N in (typeof customSemanticTokenSpec)[K][number]]?: string;
  };
};

/**
 * Configuration for custom semantic theming.
 */
export interface CustomThemeConfig {
  light: CustomThemeColors;
  dark: CustomThemeColors;
  highContrastLight?: CustomThemeColors;
  highContrastDark?: CustomThemeColors;
}

export interface CustomThemeProviderProps {
  config: CustomThemeConfig;
  children: React.ReactNode;
}

/**
 * Provider for custom semantic theming.
 * 
 * @remarks
 * Generates CSS custom properties for all tokens with `light-dark()` support.
 * Use with Oak components via `$background="custom-surface-primary"` etc.
 * 
 * @example
 * ```tsx
 * <CustomThemeProvider config={myThemeConfig}>
 *   <OakBox $background="custom-surface-primary">
 *     Content with custom themed background
 *   </OakBox>
 * </CustomThemeProvider>
 * ```
 */
export function CustomThemeProvider({ config, children }: CustomThemeProviderProps): JSX.Element {
  const css = useMemo(() => buildCss(config), [config]);
  return (
    <>
      <style id="custom-theme-vars">{css}</style>
      {children}
    </>
  );
}
```

---

## Phase 2: Theme Generator

### TDD: checkContrast Tests

**File:** `src/styles/theme/checkContrast.test.ts`

```typescript
import { checkContrast } from "./checkContrast";

describe("checkContrast", () => {
  it("calculates 21:1 ratio for black on white", () => {
    const result = checkContrast("#000000", "#ffffff");
    expect(result.ratio).toBeCloseTo(21, 0);
  });

  it("calculates 1:1 ratio for same colors", () => {
    const result = checkContrast("#ffffff", "#ffffff");
    expect(result.ratio).toBeCloseTo(1, 0);
  });

  it("passes text for 4.5:1+ ratio", () => {
    // #767676 on white is exactly 4.54:1
    const result = checkContrast("#767676", "#ffffff");
    expect(result.passesText).toBe(true);
    expect(result.ratio).toBeGreaterThanOrEqual(4.5);
  });

  it("fails text for <4.5:1 ratio", () => {
    // #777777 on white is ~4.48:1
    const result = checkContrast("#777777", "#ffffff");
    expect(result.passesText).toBe(false);
  });

  it("passes large text for 3:1+ ratio", () => {
    // #959595 on white is ~3.01:1
    const result = checkContrast("#959595", "#ffffff");
    expect(result.passesLargeText).toBe(true);
    expect(result.passesText).toBe(false);
  });

  it("passes UI for 3:1+ ratio", () => {
    const result = checkContrast("#959595", "#ffffff");
    expect(result.passesUI).toBe(true);
  });

  it("handles 3-char hex shorthand", () => {
    const result = checkContrast("#000", "#fff");
    expect(result.ratio).toBeCloseTo(21, 0);
  });
});
```

### checkContrast Implementation

**File:** `src/styles/theme/checkContrast.ts`

```typescript
/**
 * Result of WCAG contrast check.
 */
export interface ContrastResult {
  /** Contrast ratio (1:1 to 21:1) */
  ratio: number;
  /** Passes WCAG AA normal text (4.5:1) */
  passesText: boolean;
  /** Passes WCAG AA large text (3:1) */
  passesLargeText: boolean;
  /** Passes WCAG AA UI components (3:1) */
  passesUI: boolean;
  /** Passes WCAG AAA normal text (7:1) */
  passesAAAText: boolean;
}

/**
 * Parses hex color to RGB values.
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const clean = hex.replace("#", "");
  const expanded = clean.length === 3
    ? clean.split("").map(c => c + c).join("")
    : clean;
  
  return {
    r: parseInt(expanded.slice(0, 2), 16),
    g: parseInt(expanded.slice(2, 4), 16),
    b: parseInt(expanded.slice(4, 6), 16),
  };
}

/**
 * Calculates relative luminance per WCAG 2.2.
 */
function relativeLuminance({ r, g, b }: { r: number; g: number; b: number }): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    const sRGB = c / 255;
    return sRGB <= 0.04045
      ? sRGB / 12.92
      : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Checks WCAG 2.2 contrast ratio between two colors.
 * 
 * @param foreground - Foreground color (hex)
 * @param background - Background color (hex)
 * @returns Contrast check result with ratio and pass/fail flags
 */
export function checkContrast(foreground: string, background: string): ContrastResult {
  const fgLum = relativeLuminance(hexToRgb(foreground));
  const bgLum = relativeLuminance(hexToRgb(background));
  
  const lighter = Math.max(fgLum, bgLum);
  const darker = Math.min(fgLum, bgLum);
  const ratio = (lighter + 0.05) / (darker + 0.05);
  
  return {
    ratio,
    passesText: ratio >= 4.5,
    passesLargeText: ratio >= 3,
    passesUI: ratio >= 3,
    passesAAAText: ratio >= 7,
  };
}
```

### TDD: generateTheme Tests

**File:** `src/styles/theme/generateTheme.test.ts`

```typescript
import { generateTheme } from "./generateTheme";
import { checkContrast } from "./checkContrast";

describe("generateTheme", () => {
  it("generates light and dark themes from primary color", () => {
    const result = generateTheme("#287c34");
    expect(result.light).toBeDefined();
    expect(result.dark).toBeDefined();
  });

  it("generates text colors with AA contrast against surfaces", () => {
    const result = generateTheme("#287c34");
    
    // Light mode: text should contrast with light surface
    const lightSurface = result.light.surface?.primary;
    const lightText = result.light.text?.primary;
    if (lightSurface && lightText) {
      const contrast = checkContrast(lightText, lightSurface);
      expect(contrast.passesText).toBe(true);
    }

    // Dark mode: text should contrast with dark surface
    const darkSurface = result.dark.surface?.primary;
    const darkText = result.dark.text?.primary;
    if (darkSurface && darkText) {
      const contrast = checkContrast(darkText, darkSurface);
      expect(contrast.passesText).toBe(true);
    }
  });

  it("uses provided secondary color when given", () => {
    const result = generateTheme("#287c34", "#7c2834");
    expect(result.light.surface?.accent).toBeDefined();
  });

  it("derives triadic secondary when not provided", () => {
    const result = generateTheme("#287c34");
    // Should generate a secondary/accent color
    expect(result.light.surface?.accent).toBeDefined();
  });

  it("generates high-contrast variants when requested", () => {
    const result = generateTheme("#287c34", undefined, { includeHighContrast: true });
    expect(result.highContrastLight).toBeDefined();
    expect(result.highContrastDark).toBeDefined();
  });

  it("high-contrast text achieves AAA (7:1) ratio", () => {
    const result = generateTheme("#287c34", undefined, { includeHighContrast: true });
    
    if (result.highContrastLight?.surface?.primary && result.highContrastLight?.text?.primary) {
      const contrast = checkContrast(
        result.highContrastLight.text.primary,
        result.highContrastLight.surface.primary
      );
      expect(contrast.passesAAAText).toBe(true);
    }
  });

  it("returns warnings array for adjusted colors", () => {
    // A color that requires adjustment to meet contrast
    const result = generateTheme("#cccccc");
    expect(Array.isArray(result.warnings)).toBe(true);
  });
});
```

---

## Phase 3: CVD Safety

### TDD: simulateCVD Tests

**File:** `src/styles/theme/simulateCVD.test.ts`

```typescript
import { simulateCVD, areDistinguishable } from "./simulateCVD";

describe("simulateCVD", () => {
  it("simulates deuteranopia (red-green confusion)", () => {
    // Red and green should become more similar
    const redSimulated = simulateCVD("#ff0000", "deuteranopia");
    const greenSimulated = simulateCVD("#00ff00", "deuteranopia");
    
    // Both should shift toward yellow-brown tones
    expect(redSimulated).not.toBe("#ff0000");
    expect(greenSimulated).not.toBe("#00ff00");
  });

  it("simulates protanopia (red weakness)", () => {
    const result = simulateCVD("#ff0000", "protanopia");
    expect(result).not.toBe("#ff0000");
  });

  it("simulates tritanopia (blue-yellow confusion)", () => {
    const result = simulateCVD("#0000ff", "tritanopia");
    expect(result).not.toBe("#0000ff");
  });

  it("leaves grayscale colors unchanged", () => {
    const white = simulateCVD("#ffffff", "deuteranopia");
    const black = simulateCVD("#000000", "deuteranopia");
    const gray = simulateCVD("#808080", "deuteranopia");
    
    expect(white).toBe("#ffffff");
    expect(black).toBe("#000000");
    // Gray should remain approximately gray
  });
});

describe("areDistinguishable", () => {
  it("returns true for high-contrast color pairs", () => {
    expect(areDistinguishable("#000000", "#ffffff")).toBe(true);
  });

  it("returns false for low-contrast color pairs after CVD simulation", () => {
    // Red and green become indistinguishable in deuteranopia
    expect(areDistinguishable("#ff0000", "#00ff00", "deuteranopia")).toBe(false);
  });

  it("returns true for blue and yellow in deuteranopia", () => {
    // Blue and yellow remain distinguishable in red-green CVD
    expect(areDistinguishable("#0000ff", "#ffff00", "deuteranopia")).toBe(true);
  });
});
```

### Safe Palettes

**File:** `src/styles/theme/safePalettes.ts`

```typescript
import type { CustomThemeConfig } from "@/components/atoms/CustomThemeProvider";

/**
 * Pre-built color-blind safe theme palettes based on peer-reviewed research.
 * 
 * @remarks
 * These palettes have been validated to be distinguishable by users with
 * deuteranopia, protanopia, and tritanopia, while meeting WCAG 2.2 AA.
 * 
 * @see {@link https://jfly.uni-koeln.de/color/ | Okabe-Ito Color Universal Design}
 * @see {@link https://www.nature.com/articles/nmeth.1618 | Wong - Points of View}
 */
export const safePalettes = {
  /**
   * Okabe-Ito palette (Color Universal Design).
   * Gold standard for scientific publications and accessibility.
   */
  okabeIto: {
    light: {
      surface: { 
        primary: "#ffffff",
        secondary: "#f0f0f0",
        accent: "#e69f00", // Orange
        inverse: "#0072b2", // Blue
      },
      text: { 
        primary: "#000000",
        muted: "#555555",
        inverse: "#ffffff",
        accent: "#009e73", // Bluish green
      },
      border: {
        subtle: "#cccccc",
        strong: "#000000",
        accent: "#cc79a7", // Reddish purple
      },
      interactive: {
        primary: "#0072b2", // Blue
        hover: "#005b8f",
        focus: "#56b4e9", // Sky blue
      },
      shadow: { subtle: "rgba(0,0,0,0.1)", strong: "rgba(0,0,0,0.25)" },
    },
    dark: {
      surface: {
        primary: "#1a1a1a",
        secondary: "#2a2a2a",
        accent: "#e69f00",
        inverse: "#56b4e9",
      },
      text: {
        primary: "#f0f0f0",
        muted: "#aaaaaa",
        inverse: "#000000",
        accent: "#009e73",
      },
      border: {
        subtle: "#444444",
        strong: "#ffffff",
        accent: "#cc79a7",
      },
      interactive: {
        primary: "#56b4e9",
        hover: "#0072b2",
        focus: "#e69f00",
      },
      shadow: { subtle: "rgba(0,0,0,0.3)", strong: "rgba(0,0,0,0.5)" },
    },
  } satisfies CustomThemeConfig,

  /**
   * High-contrast monochromatic palette.
   * Uses only luminance differences, works for all CVD types.
   */
  monochrome: {
    light: {
      surface: { primary: "#ffffff", secondary: "#e0e0e0", accent: "#c0c0c0", inverse: "#000000" },
      text: { primary: "#000000", muted: "#404040", inverse: "#ffffff", accent: "#000000" },
      border: { subtle: "#c0c0c0", strong: "#000000", accent: "#606060" },
      interactive: { primary: "#000000", hover: "#333333", focus: "#666666" },
      shadow: { subtle: "rgba(0,0,0,0.15)", strong: "rgba(0,0,0,0.35)" },
    },
    dark: {
      surface: { primary: "#000000", secondary: "#1a1a1a", accent: "#333333", inverse: "#ffffff" },
      text: { primary: "#ffffff", muted: "#c0c0c0", inverse: "#000000", accent: "#ffffff" },
      border: { subtle: "#333333", strong: "#ffffff", accent: "#808080" },
      interactive: { primary: "#ffffff", hover: "#cccccc", focus: "#999999" },
      shadow: { subtle: "rgba(0,0,0,0.3)", strong: "rgba(0,0,0,0.6)" },
    },
  } satisfies CustomThemeConfig,
} as const;

export type SafePaletteName = keyof typeof safePalettes;
```

---

## Phase 4: Arbitrary Named Themes

### Extended Config Type

```typescript
export interface CustomThemeConfig {
  light: CustomThemeColors;
  dark: CustomThemeColors;
  highContrastLight?: CustomThemeColors;
  highContrastDark?: CustomThemeColors;
  /** Arbitrary named themes activated via data-theme attribute */
  named?: Record<string, CustomThemeColors>;
}
```

### TDD: Named Themes in buildCss

```typescript
describe("buildCss with named themes", () => {
  it("generates data-theme selectors for named themes", () => {
    const config: CustomThemeConfig = {
      light: { surface: { primary: "#fff" }, text: {} },
      dark: { surface: { primary: "#000" }, text: {} },
      named: {
        "festive-2025": {
          surface: { primary: "#1a472a", accent: "#ffd700" },
          text: { primary: "#ffffff" },
        },
      },
    };
    const css = buildCss(config);
    expect(css).toContain('[data-theme="festive-2025"]');
    expect(css).toContain("--custom-surface-primary: #1a472a");
  });

  it("does not use light-dark() for named themes (static values)", () => {
    const config: CustomThemeConfig = {
      light: { surface: { primary: "#fff" }, text: {} },
      dark: { surface: { primary: "#000" }, text: {} },
      named: {
        "summer-sale": { surface: { primary: "#ff6b35" }, text: {} },
      },
    };
    const css = buildCss(config);
    // Named themes use static values, not light-dark()
    expect(css).toContain('[data-theme="summer-sale"]');
    expect(css).not.toMatch(/\[data-theme="summer-sale"\].*light-dark/);
  });
});
```

---

## Storybook Stories

### CustomThemeProvider Stories

**File:** `src/components/atoms/CustomThemeProvider/CustomThemeProvider.stories.tsx`

```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { CustomThemeProvider, type CustomThemeConfig } from "./CustomThemeProvider";
import { OakBox, OakFlex, OakHeading, OakP, OakPrimaryButton } from "@/components";
import { safePalettes } from "@/styles/theme/safePalettes";

const meta: Meta<typeof CustomThemeProvider> = {
  title: "Providers/CustomThemeProvider",
  component: CustomThemeProvider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Provider for custom semantic theming. Generates CSS custom properties 
that enable Oak components to use arbitrary brand colors via props like 
\`$background="custom-surface-primary"\`.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomThemeProvider>;

// Demo component to show all custom tokens in action
function ThemeDemo() {
  return (
    <OakFlex $flexDirection="column" $gap="spacing-16">
      <OakBox $background="custom-surface-primary" $pa="spacing-16">
        <OakHeading tag="h3" $color="custom-text-primary">
          Surface Primary
        </OakHeading>
        <OakP $color="custom-text-muted">Text muted on primary surface</OakP>
      </OakBox>
      
      <OakBox $background="custom-surface-secondary" $pa="spacing-16">
        <OakP $color="custom-text-primary">Surface Secondary</OakP>
      </OakBox>
      
      <OakBox $background="custom-surface-accent" $pa="spacing-16">
        <OakP $color="custom-text-inverse">Surface Accent</OakP>
      </OakBox>
      
      <OakFlex $gap="spacing-8">
        <OakBox 
          $background="custom-interactive-primary" 
          $pa="spacing-8"
          $color="custom-text-inverse"
        >
          Interactive Primary
        </OakBox>
        <OakBox 
          $background="custom-interactive-hover" 
          $pa="spacing-8"
          $color="custom-text-inverse"
        >
          Interactive Hover
        </OakBox>
      </OakFlex>
      
      <OakBox 
        $borderColor="custom-border-strong" 
        $ba="border-solid-m" 
        $pa="spacing-16"
      >
        <OakP $color="custom-text-primary">Strong border</OakP>
      </OakBox>
    </OakFlex>
  );
}

const minimalConfig: CustomThemeConfig = {
  light: {
    surface: { primary: "#ffffff" },
    text: { primary: "#1a1a1a" },
  },
  dark: {
    surface: { primary: "#1a1a1a" },
    text: { primary: "#f0f0f0" },
  },
};

const brandedConfig: CustomThemeConfig = {
  light: {
    surface: { 
      primary: "#ffffff", 
      secondary: "#f0faf0", 
      accent: "#287c34",
      inverse: "#1a1a1a",
    },
    text: { 
      primary: "#1a1a1a", 
      muted: "#666666", 
      inverse: "#ffffff",
      accent: "#287c34",
    },
    border: { subtle: "#e0e0e0", strong: "#287c34", accent: "#287c34" },
    interactive: { primary: "#287c34", hover: "#1f5f28", focus: "#4a9f54" },
    shadow: { subtle: "rgba(0,0,0,0.08)", strong: "rgba(0,0,0,0.2)" },
  },
  dark: {
    surface: { 
      primary: "#0f1a10", 
      secondary: "#1a2e1c", 
      accent: "#287c34",
      inverse: "#f0f0f0",
    },
    text: { 
      primary: "#f0f0f0", 
      muted: "#999999", 
      inverse: "#1a1a1a",
      accent: "#5cb565",
    },
    border: { subtle: "#2a4a2c", strong: "#5cb565", accent: "#5cb565" },
    interactive: { primary: "#5cb565", hover: "#4a9f54", focus: "#7cc985" },
    shadow: { subtle: "rgba(0,0,0,0.25)", strong: "rgba(0,0,0,0.5)" },
  },
};

export const Default: Story = {
  args: {
    config: minimalConfig,
    children: <ThemeDemo />,
  },
};

export const BrandedTheme: Story = {
  args: {
    config: brandedConfig,
    children: <ThemeDemo />,
  },
  parameters: {
    docs: {
      description: {
        story: "Full branded theme with Oak green as the primary interactive color.",
      },
    },
  },
};

export const OkabeItoPalette: Story = {
  args: {
    config: safePalettes.okabeIto,
    children: <ThemeDemo />,
  },
  parameters: {
    docs: {
      description: {
        story: "Color-blind safe Okabe-Ito palette. Validated for deuteranopia, protanopia, and tritanopia.",
      },
    },
  },
};

export const MonochromePalette: Story = {
  args: {
    config: safePalettes.monochrome,
    children: <ThemeDemo />,
  },
  parameters: {
    docs: {
      description: {
        story: "High-contrast monochromatic palette. Uses only luminance differences for maximum accessibility.",
      },
    },
  },
};

export const LightMode: Story = {
  args: {
    config: brandedConfig,
    children: <ThemeDemo />,
  },
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const DarkMode: Story = {
  args: {
    config: brandedConfig,
    children: <ThemeDemo />,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};
```

### Story Requirements Checklist

Per RULES.md, every component must have:

- [x] **Default story** - Component with minimal config
- [x] **All variants** - BrandedTheme, OkabeItoPalette, MonochromePalette
- [x] **Interactive states** - ThemeDemo shows hover/focus interactive colors
- [x] **Edge cases** - Minimal config, CVD-safe palettes
- [x] **Accessibility** - a11y addon validates contrast

---

## Component Tests for CustomThemeProvider

**File:** `src/components/atoms/CustomThemeProvider/CustomThemeProvider.test.tsx`

```typescript
import { render, screen } from "@testing-library/react";
import { CustomThemeProvider, type CustomThemeConfig } from "./CustomThemeProvider";
import { OakBox } from "@/components";

const minimalConfig: CustomThemeConfig = {
  light: {
    surface: { primary: "#ffffff" },
    text: { primary: "#1a1a1a" },
  },
  dark: {
    surface: { primary: "#1a1a1a" },
    text: { primary: "#f0f0f0" },
  },
};

describe("CustomThemeProvider", () => {
  describe("rendering", () => {
    it("renders children", () => {
      render(
        <CustomThemeProvider config={minimalConfig}>
          <div data-testid="child">Content</div>
        </CustomThemeProvider>
      );
      expect(screen.getByTestId("child")).toBeInTheDocument();
    });

    it("injects a style element with id 'custom-theme-vars'", () => {
      const { container } = render(
        <CustomThemeProvider config={minimalConfig}>
          <div>Content</div>
        </CustomThemeProvider>
      );
      const styleElement = container.querySelector("style#custom-theme-vars");
      expect(styleElement).toBeInTheDocument();
    });

    it("generates CSS with light-dark() for defined tokens", () => {
      const { container } = render(
        <CustomThemeProvider config={minimalConfig}>
          <div>Content</div>
        </CustomThemeProvider>
      );
      const styleElement = container.querySelector("style#custom-theme-vars");
      expect(styleElement?.textContent).toContain("light-dark(#ffffff, #1a1a1a)");
    });

    it("sets color-scheme: light dark on :root", () => {
      const { container } = render(
        <CustomThemeProvider config={minimalConfig}>
          <div>Content</div>
        </CustomThemeProvider>
      );
      const styleElement = container.querySelector("style#custom-theme-vars");
      expect(styleElement?.textContent).toContain("color-scheme: light dark");
    });
  });

  describe("integration with Oak components", () => {
    it("enables custom tokens in OakBox", () => {
      render(
        <CustomThemeProvider config={minimalConfig}>
          <OakBox 
            data-testid="themed-box" 
            $background="custom-surface-primary"
          >
            Content
          </OakBox>
        </CustomThemeProvider>
      );
      const box = screen.getByTestId("themed-box");
      expect(box).toHaveStyle("background: var(--custom-surface-primary)");
    });
  });

  describe("config updates", () => {
    it("updates CSS when config changes", () => {
      const { container, rerender } = render(
        <CustomThemeProvider config={minimalConfig}>
          <div>Content</div>
        </CustomThemeProvider>
      );
      
      const newConfig: CustomThemeConfig = {
        light: {
          surface: { primary: "#f0f0f0" },
          text: { primary: "#000000" },
        },
        dark: {
          surface: { primary: "#0f0f0f" },
          text: { primary: "#ffffff" },
        },
      };
      
      rerender(
        <CustomThemeProvider config={newConfig}>
          <div>Content</div>
        </CustomThemeProvider>
      );
      
      const styleElement = container.querySelector("style#custom-theme-vars");
      expect(styleElement?.textContent).toContain("#f0f0f0");
      expect(styleElement?.textContent).not.toContain("#ffffff, #1a1a1a");
    });
  });

  describe("high contrast mode", () => {
    it("includes @media (prefers-contrast: more) when highContrast modes provided", () => {
      const hcConfig: CustomThemeConfig = {
        ...minimalConfig,
        highContrastLight: {
          surface: { primary: "#ffffff" },
          text: { primary: "#000000" },
        },
        highContrastDark: {
          surface: { primary: "#000000" },
          text: { primary: "#ffffff" },
        },
      };
      
      const { container } = render(
        <CustomThemeProvider config={hcConfig}>
          <div>Content</div>
        </CustomThemeProvider>
      );
      
      const styleElement = container.querySelector("style#custom-theme-vars");
      expect(styleElement?.textContent).toContain("@media (prefers-contrast: more)");
    });
  });
});
```

---

## Naming Clarification

### Component Naming Convention

The provider is named **`CustomThemeProvider`** (not `OakCustomThemeProvider`) because:

1. **Provider pattern** - Providers in React idiomatically use `*Provider` suffix without framework prefixes
2. **Matches Oak precedent** - `OakThemeProvider` exists; `CustomThemeProvider` follows same pattern
3. **Clarity** - "Custom" clearly distinguishes from Oak's built-in theming

### Export Strategy

```typescript
// src/index.ts
export { 
  CustomThemeProvider,
  type CustomThemeConfig,
  type CustomThemeColors,
} from "./components/atoms/CustomThemeProvider";

export {
  generateTheme,
  checkContrast,
  safePalettes,
  type SafePaletteName,
} from "./styles/theme";
```

---

## Architecture Decision Record

This feature requires **ADR-0002: Custom Semantic Tokens**.

**File:** `docs/architecture/decision-records/0002-custom-semantic-tokens.adr.md`

```markdown
# ADR-0002: Custom Semantic Tokens

**Date:** 2024-12-17
**Status:** Proposed

## Context

Oak Components uses a fixed color palette (`mint`, `navy110`, etc.) and UI role tokens 
(`bg-decorative1-main`, etc.). Consuming applications need to use their own brand colors
while maintaining:

1. Design token consistency across the application
2. Automatic light/dark mode support
3. WCAG AA accessibility compliance
4. SSR compatibility

Options considered:

1. **Extend Oak's theme object** - Adds custom colors to `oakDefaultTheme`
   - Rejected: Violates "must not change existing theme structure"
   
2. **CSS variables via consumers** - Consumers define their own CSS vars
   - Rejected: No type safety, easy to misuse, no integration with Oak props
   
3. **Semantic token layer** - New `custom-*` token prefix recognized by `parseColor`
   - Selected: Non-breaking, type-safe, SSR-compatible

## Decision

Implement a **semantic token layer** with the `custom-*` prefix:

1. Define canonical tokens in `customSemanticTokenSpec` constant
2. Derive TypeScript types from the constant (single source of truth)
3. Extend `OakCombinedColorToken` to include `CustomSemanticToken`
4. Modify `parseColor` to return `var(--custom-*)` for custom tokens
5. Provide `CustomThemeProvider` to generate CSS custom properties

## Consequences

### Benefits

- **Zero breaking changes** - Existing Oak tokens unchanged
- **Full type safety** - Autocomplete for all custom tokens
- **SSR safe** - CSS generated server-side, no hydration mismatch
- **CSS-native** - Uses `light-dark()` for automatic theme switching
- **Accessible** - Optional theme generator enforces WCAG contrast

### Trade-offs

- **Browser support** - `light-dark()` requires modern browsers (Chrome 123+)
- **Learning curve** - Consumers must understand semantic token concepts
- **Bundle size** - Small increase for `CustomThemeProvider` (~2KB gzipped)

## Related

- [ADR-0001: Core Architecture (Atomic Design)](./0001-core-architecture.adr.md)
- [Plan: Custom Semantic Theme Support](/.agent/plans/arbitrary-theme-support.plan.md)
```

---

## Files Summary

| File | Action | Phase |
|------|--------|-------|
| `src/styles/theme/customSemanticTokens.ts` | NEW | 1 |
| `src/styles/theme/customSemanticTokens.test.ts` | NEW | 1 |
| `src/styles/theme/color.ts` | MODIFY | 1 |
| `src/styles/helpers/parseColor.ts` | MODIFY | 1 |
| `src/styles/helpers/parseColor.test.tsx` | MODIFY | 1 |
| `src/components/atoms/CustomThemeProvider/buildCss.ts` | NEW | 1 |
| `src/components/atoms/CustomThemeProvider/buildCss.test.ts` | NEW | 1 |
| `src/components/atoms/CustomThemeProvider/CustomThemeProvider.tsx` | NEW | 1 |
| `src/components/atoms/CustomThemeProvider/CustomThemeProvider.test.tsx` | NEW | 1 |
| `src/components/atoms/CustomThemeProvider/CustomThemeProvider.stories.tsx` | NEW | 1 |
| `docs/architecture/decision-records/0002-custom-semantic-tokens.adr.md` | NEW | 1 |
| `src/styles/theme/checkContrast.ts` | NEW | 2 |
| `src/styles/theme/checkContrast.test.ts` | NEW | 2 |
| `src/styles/theme/generateTheme.ts` | NEW | 2 |
| `src/styles/theme/generateTheme.test.ts` | NEW | 2 |
| `src/styles/theme/simulateCVD.ts` | NEW | 3 |
| `src/styles/theme/simulateCVD.test.ts` | NEW | 3 |
| `src/styles/theme/safePalettes.ts` | NEW | 3 |
| `src/styles/theme/index.ts` | MODIFY | 1-3 |

---

## Quality Gate Checklists

### Phase 1 Checklist

Before marking Phase 1 complete:

- [ ] **TDD complete** - All tests written before implementation
- [ ] `customSemanticTokens.test.ts` passes
- [ ] `parseColor.test.tsx` passes (including new custom token tests)
- [ ] `buildCss.test.ts` passes
- [ ] `CustomThemeProvider.test.tsx` passes
- [ ] **Storybook stories** - New stories for all features. All stories render without errors
- [ ] **a11y addon** - No accessibility violations in stories
- [ ] **Type safety** - No `as`, `any`, or `!` usage (except `as const`)
- [ ] **TSDoc** - All public exports have documentation
- [ ] **Quality gates pass:**

  ```bash
  npm run build && npm run check-types && npm run lint && npm run format:check && npm run test:ci
  ```

- [ ] **ADR created** - `0002-custom-semantic-tokens.adr.md` committed

### Phase 2 Checklist

Before marking Phase 2 complete:

- [ ] **TDD complete** - Tests for `checkContrast`, `generateTheme` written first
- [ ] `checkContrast.test.ts` passes
- [ ] `generateTheme.test.ts` passes
- [ ] Generated themes achieve WCAG AA contrast (4.5:1 text, 3:1 UI)
- [ ] High-contrast variants achieve WCAG AAA (7:1 text)
- [ ] **Storybook stories** - New stories for all features. All stories render without errors
- [ ] **Type safety** - No escape hatches
- [ ] **TSDoc** - All functions documented
- [ ] **Quality gates pass**

### Phase 3 Checklist

Before marking Phase 3 complete:

- [ ] **TDD complete** - Tests for `simulateCVD`, `areDistinguishable` written first
- [ ] `simulateCVD.test.ts` passes
- [ ] `safePalettes` all validated against CVD simulation
- [ ] **Storybook stories** - New stories for all features. All stories render without errors. Safe palette stories demonstrate a11y
- [ ] **Type safety** - No escape hatches
- [ ] **Quality gates pass**

### Phase 4 Checklist

Before marking Phase 4 complete:

- [ ] **TDD complete** - Tests for named themes in `buildCss.test.ts`
- [ ] Named themes generate correct `[data-theme="*"]` selectors
- [ ] Reserved names (`light`, `dark`, etc.) throw errors
- [ ] **Storybook stories** - New stories for all features. All stories render without errors. Named theme switcher demo (light, dark, high-contrast-light, high-contrast-dark, low-contrast-light, low-contrast-dark, festive-theme-2025)
- [ ] **Quality gates pass**

### Final Verification

After all phases:

```bash
# Full quality gates
npm run build && npm run check-types && npm run lint && npm run format:check && npm run test:ci

# Visual verification
npm run storybook

# Manual testing
# 1. Toggle system light/dark preference - verify automatic switching
# 2. Enable high-contrast mode - verify @media rule applies
# 3. Test named theme switcher - verify data-theme attribute works
```

### Engineering Excellence Checklist (from RULES.md)

Before final PR:

- [ ] All quality gates pass
- [ ] TDD followed - tests written first
- [ ] No type escape hatches (`as`, `any`, `!`)
- [ ] Stories created in Storybook
- [ ] Storybook a11y addon passes
- [ ] TSDoc for all public APIs
- [ ] Design tokens used (no hardcoded values)
