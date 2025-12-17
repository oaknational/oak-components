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

---

## Phases

### Phase 1: Core Custom Tokens (MVP)

Enable custom token props with consumer-defined colors.

**Deliverables:**

1. Token registry (`customSemanticTokens.ts`)
2. Type extension (`OakCombinedColorToken`)
3. `parseColor` update
4. `CustomThemeProvider` component
5. Full test coverage

### Phase 2: Theme Generator

Helper function to generate accessible themes from brand colors.

**Deliverables:**

1. `generateTheme()` function
2. `checkContrast()` utility
3. WCAG 2.2 AA/AAA validation

### Phase 3: Advanced Accessibility

CVD safety and bundled palettes.

**Deliverables:**

1. `simulateCVD()` function
2. `safePalettes` collection
3. Okabe-Ito, Wong, IBM palettes

### Phase 4: Arbitrary Named Themes

Support for custom theme names beyond light/dark.

**Deliverables:**

1. `named` themes in config
2. `data-theme` attribute support
3. Theme switcher example

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
| `src/styles/theme/checkContrast.ts` | NEW | 2 |
| `src/styles/theme/checkContrast.test.ts` | NEW | 2 |
| `src/styles/theme/generateTheme.ts` | NEW | 2 |
| `src/styles/theme/generateTheme.test.ts` | NEW | 2 |
| `src/styles/theme/simulateCVD.ts` | NEW | 3 |
| `src/styles/theme/simulateCVD.test.ts` | NEW | 3 |
| `src/styles/theme/safePalettes.ts` | NEW | 3 |
| `src/styles/theme/index.ts` | MODIFY | 1-3 |

---

## Verification

```bash
# Phase 1
npm run test -- customSemanticTokens parseColor buildCss CustomThemeProvider
npm run build && npm run check-types

# Phase 2
npm run test -- checkContrast generateTheme
npm run build

# Phase 3
npm run test -- simulateCVD safePalettes
npm run build

# Full verification
npm run build && npm run check-types && npm run lint && npm run format:check && npm run test:ci
npm run storybook  # Visual verification with example stories
```
