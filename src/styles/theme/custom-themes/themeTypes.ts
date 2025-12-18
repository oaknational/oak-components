/**
 * Type definitions for the custom theme system.
 *
 * This module defines the Intent (BrandColors) and Artifact (GeneratedTheme)
 * types that form the core of the theme generation domain.
 */

/**
 * Brand colors provided by consuming applications.
 *
 * This represents the consumer's **intent** - the brand identity they want
 * to express through the theme. The generator constructs a complete theme
 * from this minimal specification.
 *
 * @example
 * ```typescript
 * const brand: BrandColors = {
 *   primary: '#287c34',        // Oak green
 *   secondary: '#7c2834',      // Accent red (optional)
 * };
 * ```
 */
export interface BrandColors {
  /** Primary brand color in hex format (#RRGGBB or #RGB) */
  primary: string;
  /** Optional secondary/accent color in hex format */
  secondary?: string;
}

/**
 * A complete set of theme colors for one mode (light or dark).
 *
 * This represents a constructed **artifact** - all 17 semantic tokens
 * with guaranteed string values. No properties are optional.
 */
export interface GeneratedThemeColors {
  surface: {
    primary: string;
    secondary: string;
    accent: string;
    inverse: string;
  };
  text: {
    primary: string;
    muted: string;
    inverse: string;
    accent: string;
  };
  border: {
    subtle: string;
    strong: string;
    accent: string;
  };
  interactive: {
    primary: string;
    hover: string;
    active: string;
    focus: string;
  };
  shadow: {
    subtle: string;
    strong: string;
  };
}

/**
 * A complete generated theme with all mode and contrast variations.
 *
 * This is the **artifact** constructed by `generateTheme()` from brand intent.
 * All 6 Token Sets are guaranteed to be populated (Full Theme).
 *
 * Covered modes:
 * - light / dark (normal contrast)
 * - highContrastLight / highContrastDark (prefers-contrast: more)
 * - lowContrastLight / lowContrastDark (prefers-contrast: less)
 */
export interface GeneratedTheme {
  /** Light mode, normal contrast - always present */
  light: GeneratedThemeColors;
  /** Dark mode, normal contrast - always present */
  dark: GeneratedThemeColors;
  /** Light mode, high contrast (WCAG AAA) - always present */
  highContrastLight: GeneratedThemeColors;
  /** Dark mode, high contrast (WCAG AAA) - always present */
  highContrastDark: GeneratedThemeColors;
  /** Light mode, low contrast - always present */
  lowContrastLight: GeneratedThemeColors;
  /** Dark mode, low contrast - always present */
  lowContrastDark: GeneratedThemeColors;
}

/**
 * 3-colour base palette derived from brand colours via colour theory.
 *
 * For one brand colour: triadic (120° hue rotations)
 * For two brand colours: split-complementary
 */
export interface BasePalette {
  /** Primary colour - typically the input brand colour */
  primary: string;
  /** Secondary colour - triadic (+120°) or input secondary (adjusted) */
  secondary: string;
  /** Tertiary colour - triadic (+240°) or split-complement */
  tertiary: string;
}

/**
 * Options for theme generation.
 */
export interface GenerateThemeOptions {
  /** Target contrast level: 'AA' (4.5:1) or 'AAA' (7:1). Default: 'AA' */
  contrast?: "AA" | "AAA";
  /** Validate against colour vision deficiency simulations. Default: false */
  colorBlindSafe?: boolean;
}

/**
 * Result of theme generation.
 */
export interface GenerateThemeResult {
  /** The constructed theme artifact (6 Token Sets) */
  theme: GeneratedTheme;
  /** The 3-colour base palette used for derivation */
  basePalette: BasePalette;
  /** Warnings about adjustments made during generation */
  warnings: string[];
}
