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
8. **Theme generator**: Helper function generates full theme from 1-2 brand colors using triadic colors and WCAG 2.2 AA contrast validation
9. **Arbitrary named themes**: Support themes like `"festive-theme-2025"` beyond the reserved light/dark/contrast names

### Must NOT change, modify, or remove

- Existing Oak color tokens (`mint`, `navy110`, etc.)
- Existing UI role tokens (`bg-decorative1-main`, etc.)
- Changing Oak's existing theme structure

---

## Architecture

### How It Works

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

---

## Token Registry (Runtime Constant)

**File:** `src/styles/theme/customSemanticTokens.ts`

```typescript
/**
 * Canonical set of custom semantic tokens.
 * Types are derived from this constant for strict type safety.
 * 
 * @remarks
 * Token names follow the pattern `custom-{category}-{name}`.
 * These are recognized by `parseColor` and output CSS var references.
 * 
 * @see {@link CustomSemanticToken} - Derived union type
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
 * Used in `OakCombinedColorToken` for prop type safety.
 */
export type CustomSemanticToken = TokenNames<typeof customSemanticTokenSpec>;

// Generate array for runtime checks
export const customSemanticTokens: readonly CustomSemanticToken[] = 
  Object.entries(customSemanticTokenSpec).flatMap(
    ([category, names]) => names.map(name => `custom-${category}-${name}` as CustomSemanticToken)
  );
```

---

## Type Changes

### Extend OakCombinedColorToken

**File:** `src/styles/theme/color.ts`

```diff
+ import { CustomSemanticToken } from "./customSemanticTokens";

- export type OakCombinedColorToken = OakColorToken | OakUiRoleToken;
+ export type OakCombinedColorToken = OakColorToken | OakUiRoleToken | CustomSemanticToken;
```

This single change enables:

```tsx
<OakBox $background="custom-surface-primary" />  // ✅ Type-safe
<OakBox $color="custom-text-muted" />            // ✅ Type-safe
```

---

## parseColor Changes

**File:** `src/styles/helpers/parseColor.ts`

```diff
+ import { customSemanticTokens } from "@/styles/theme/customSemanticTokens";

function parseColor(value?: OakCombinedColorToken | null) {
  if (value === undefined || value === null) {
    return undefined;
  }

+ // Custom semantic tokens: return CSS variable reference
+ if (typeof value === "string" && value.startsWith("custom-")) {
+   // Runtime validation (type system handles compile-time)
+   if (!customSemanticTokens.includes(value as any)) {
+     console.warn(`Unknown custom semantic token: ${value}`);
+   }
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

---

## Consumer Provider

**File:** `src/components/atoms/CustomThemeProvider/CustomThemeProvider.tsx`

```typescript
import React, { useMemo, type JSX } from "react";
import { customSemanticTokenSpec } from "@/styles";

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
 * 
 * @example
 * ```typescript
 * const config: CustomThemeConfig = {
 *   light: {
 *     surface: { primary: "#ffffff", secondary: "#f5f5f5" },
 *     text: { primary: "#222222" },
 *   },
 *   dark: {
 *     surface: { primary: "#1a1a1a", secondary: "#2a2a2a" },
 *     text: { primary: "#f0f0f0" },
 *   },
 * };
 * ```
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

function buildCss(config: CustomThemeConfig): string {
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

## Usage Examples

### Basic Usage

```tsx
// app/layout.tsx
import { CustomThemeProvider, OakGlobalStyle } from "@oaknational/oak-components";
import { myThemeConfig } from "@/styles/theme";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <CustomThemeProvider config={myThemeConfig}>
          <OakGlobalStyle />
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  );
}
```

### In Components

```tsx
import { OakBox, OakFlex, OakHeading } from "@oaknational/oak-components";

export function HeroSection() {
  return (
    <OakBox $background="custom-surface-accent" $pv="spacing-48">
      <OakFlex $flexDirection="column" $gap="spacing-16">
        <OakHeading $color="custom-text-primary" tag="h1">
          Welcome
        </OakHeading>
      </OakFlex>
    </OakBox>
  );
}

export function Footer() {
  return (
    <OakBox
      as="footer"
      $background="custom-surface-primary"
      $color="custom-text-primary"
      $borderColor="custom-border-subtle"
      $bt="border-solid-s"
    >
      <FooterContent />
    </OakBox>
  );
}
```

---

## Files to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| `src/styles/theme/customSemanticTokens.ts` | NEW | Token registry + derived types |
| `src/styles/theme/generateTheme.ts` | NEW | Theme generator + contrast checker |
| `src/styles/theme/color.ts` | MODIFY | Add CustomSemanticToken to union |
| `src/styles/helpers/parseColor.ts` | MODIFY | Handle custom-* prefix |
| `src/styles/theme/safePalettes.ts` | NEW | Bundled CVD-safe palettes |
| `src/styles/theme/index.ts` | MODIFY | Export new types |
| `src/components/atoms/CustomThemeProvider/` | NEW | Provider component |

---

## Test Updates

**File:** `src/styles/helpers/parseColor.test.tsx`

```typescript
describe("parseColor with custom tokens", () => {
  it("returns CSS var for custom semantic tokens", () => {
    expect(parseColor("custom-surface-primary")).toBe("var(--custom-surface-primary)");
    expect(parseColor("custom-text-muted")).toBe("var(--custom-text-muted)");
  });
  
  it("existing tokens still work", () => {
    expect(parseColor("mint")).toBe("#bef2bd");
  });
});
```

---

## Theme Generator Helper

**File:** `src/styles/theme/generateTheme.ts`

```typescript
import type { CustomThemeColors } from "./CustomThemeProvider";

type ContrastLevel = "AA" | "AAA";
type CVDType = "deuteranopia" | "protanopia" | "tritanopia";

interface GenerateThemeOptions {
  /** Include high-contrast variants (WCAG AAA) */
  includeHighContrast?: boolean;
  /** Include low-contrast variants (softer, still AA compliant) */
  includeLowContrast?: boolean;
  /**
   * Enable color blindness safety validation.
   * 
   * @remarks
   * When enabled:
   * - Upgrades to WCAG 2.2 AAA contrast (7:1 text, 4.5:1 UI)
   * - Simulates palette for deuteranopia, protanopia, and tritanopia
   * - Auto-adjusts hue/lightness if simulated colors become indistinguishable
   * - Ensures all color pairings remain visually distinct after simulation
   * 
   * **Important**: Color-safe themes address perception differences, but
   * UI design should NEVER rely on color alone to convey information.
   * Always pair color with:
   * - Icons (✓ for success, ✕ for error)
   * - Text labels
   * - Patterns or shapes
   * 
   * @see {@link https://www.w3.org/WAI/WCAG22/Understanding/use-of-color | WCAG 1.4.1 Use of Color}
   * @see {@link https://webaim.org/articles/visual/colorblind | WebAIM Color Blindness Guide}
   * @see {@link https://www.color-blindness.com/types-of-color-blindness/ | Types of Color Blindness}
   */
  colorBlindSafe?: boolean;
}

/**
 * Generates a complete theme from 1-2 brand colors.
 * 
 * @remarks
 * Uses color theory to derive a full palette:
 * - Primary color for interactive elements
 * - Triadic colors for accents (120° hue rotation)
 * - Automatic light/dark surface colors
 * 
 * **Contrast standards by theme type:**
 * - Light/Dark: WCAG 2.2 AA (4.5:1 text, 3:1 UI)
 * - High-contrast: WCAG 2.2 AAA (7:1 text, 4.5:1 UI)
 * - Low-contrast: WCAG 2.2 AA minimum, softer colors
 * - colorBlindSafe: WCAG 2.2 AAA + CVD simulation validation
 * 
 * Iteratively adjusts colors until all combinations pass.
 * 
 * @param primary - Primary brand color (hex)
 * @param secondary - Optional secondary color; if omitted, derives triadic
 * @param options - Configuration options
 * @returns Complete theme config with all requested modes
 * 
 * @example
 * ```typescript
 * // Generate accessible, color-blind-safe theme
 * const theme = generateTheme("#287c34", undefined, {
 *   colorBlindSafe: true,
 *   includeHighContrast: true,
 * });
 * ```
 */
export function generateTheme(
  primary: string,
  secondary?: string,
  options?: GenerateThemeOptions
): {
  light: CustomThemeColors;
  dark: CustomThemeColors;
  highContrastLight?: CustomThemeColors;
  highContrastDark?: CustomThemeColors;
  lowContrastLight?: CustomThemeColors;
  lowContrastDark?: CustomThemeColors;
  /** Warnings about potential issues (e.g., adjusted colors) */
  warnings?: string[];
} {
  // Implementation:
  // 1. Parse primary to OKLCH (perceptually uniform)
  // 2. Generate triadic secondary if not provided (primary + 120°)
  // 3. Generate surface colors (very light/dark versions)
  // 4. Generate text colors
  // 
  // Standard mode (WCAG AA):
  // 5. Check contrast ≥ 4.5:1 for text, ≥ 3:1 for UI
  // 6. Adjust lightness until passes
  //
  // High-contrast (WCAG AAA):
  // 7. Check contrast ≥ 7:1 for text, ≥ 4.5:1 for UI
  //
  // colorBlindSafe mode:
  // 8. Apply WCAG AAA contrast requirements
  // 9. Simulate palette through CVD (deuteranopia, protanopia, tritanopia)
  // 10. Check simulated colors remain distinguishable
  // 11. If colors merge, shift hue by 30° or adjust lightness
  // 12. Re-validate until all CVD simulations pass
  // 13. Add warnings for any auto-adjusted colors
  
  // ... implementation details
}

/**
 * Simulates how a color appears to someone with color vision deficiency.
 * 
 * @param color - Input color (hex)
 * @param type - Type of color vision deficiency
 * @returns Simulated color (hex)
 * 
 * @see {@link https://www.color-blindness.com/coblis-color-blindness-simulator/ | Color Blindness Simulator}
 */
export function simulateCVD(color: string, type: CVDType): string {
  // Uses Brettel/Viénot/Mollon algorithm for CVD simulation
  // ... implementation
}

/**
 * Checks WCAG 2.2 AA contrast ratio between two colors.
 * 
 * @param foreground - Text/foreground color (hex)
 * @param background - Background color (hex)
 * @returns Object with ratio and pass/fail for text and UI elements
 */
export function checkContrast(foreground: string, background: string): {
  ratio: number;
  passesText: boolean;      // 4.5:1 for normal text
  passesLargeText: boolean; // 3:1 for large text
  passesUI: boolean;        // 3:1 for UI components
} {
  // ... implementation
}
```

---

## Bundled Color-Blind Safe Palettes

**File:** `src/styles/theme/safePalettes.ts`

```typescript
import type { CustomThemeConfig } from "./CustomThemeProvider";

/**
 * Pre-built color-blind safe theme palettes based on peer-reviewed research.
 * 
 * @remarks
 * These palettes have been validated to be distinguishable by users with
 * deuteranopia, protanopia, and tritanopia, while meeting WCAG 2.2 AAA.
 * 
 * **Palette Sources:**
 * - IBM Design: {@link https://www.ibm.com/design/language/color/}
 * - Okabe-Ito: {@link https://jfly.uni-koeln.de/color/ | Color Universal Design}
 * - Wong: {@link https://www.nature.com/articles/nmeth.1618 | Points of View: Color blindness}
 * 
 * @example
 * ```tsx
 * import { safePalettes } from "@oaknational/oak-components";
 * 
 * <CustomThemeProvider config={safePalettes.okabeIto}>
 *   <App />
 * </CustomThemeProvider>
 * ```
 */
export const safePalettes = {
  /**
   * IBM Design color-blind safe palette.
   * 8 distinct colors validated across all CVD types.
   */
  ibm: { /* CustomThemeConfig */ } as CustomThemeConfig,
  
  /**
   * Okabe-Ito palette (Color Universal Design).
   * Gold standard for scientific publications.
   * 
   * @see {@link https://jfly.uni-koeln.de/color/ | Original Research}
   */
  okabeIto: { /* CustomThemeConfig */ } as CustomThemeConfig,
  
  /**
   * Wong palette from Nature Methods.
   * Optimized for data visualization.
   * 
   * @see {@link https://www.nature.com/articles/nmeth.1618 | Points of View}
   */
  wong: { /* CustomThemeConfig */ } as CustomThemeConfig,
  
  /**
   * High-contrast monochromatic palette.
   * Uses only luminance differences, works for all CVD types.
   */
  monochrome: { /* CustomThemeConfig */ } as CustomThemeConfig,
} as const;

export type SafePaletteName = keyof typeof safePalettes;
```

---

## Arbitrary Named Themes

### Activation

For themes beyond light/dark, use the `data-theme` attribute:

```tsx
// Component to switch themes
export function ThemeSwitcher({ theme }: { theme: string }) {
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  return null;
}

// Usage
<ThemeSwitcher theme="festive-theme-2025" />
```

### Defining Arbitrary Themes

```typescript
export interface CustomThemeConfig {
  light: CustomThemeColors;
  dark: CustomThemeColors;
  highContrastLight?: CustomThemeColors;
  highContrastDark?: CustomThemeColors;
  // Arbitrary named themes
  named?: Record<string, CustomThemeColors>;
}

const config: CustomThemeConfig = {
  light: { /* ... */ },
  dark: { /* ... */ },
  named: {
    "festive-theme-2025": {
      surface: { primary: "#1a472a", secondary: "#8b0000", accent: "#ffd700" },
      text: { primary: "#ffffff", muted: "#e0e0e0" },
      // ...
    },
    "summer-sale": {
      surface: { primary: "#ff6b35", accent: "#00d4aa" },
      // ...
    },
  },
};
```

### Generated CSS for Named Themes

```css
/* Named themes via data-theme attribute */
[data-theme="festive-theme-2025"] {
  --custom-surface-primary: #1a472a;
  --custom-surface-secondary: #8b0000;
  --custom-surface-accent: #ffd700;
  --custom-text-primary: #ffffff;
}

[data-theme="summer-sale"] {
  --custom-surface-primary: #ff6b35;
  --custom-surface-accent: #00d4aa;
}
```

### Reserved Theme Names

The following names use `light-dark()` and cannot be used as arbitrary theme names:

- `light`, `dark` (handled by `color-scheme`)
- `high-contrast-light`, `high-contrast-dark` (handled by `prefers-contrast: more`)
- `low-contrast-light`, `low-contrast-dark` (handled by `prefers-contrast: less`)

Any other name is available for arbitrary themes.

---

## SSR & Browser Support

- **SSR safe**: `useMemo` with pure function, `<style>` in initial HTML
- **`light-dark()`**: Chrome 123+, Firefox 120+, Safari 17.5+
- **`prefers-contrast`**: Chrome 96+, Firefox 101+, Safari 14.1+

---

## Verification

```bash
npm install && npm test -- --watchAll=false && npm run build
npm run storybook  # Visual verification
```
