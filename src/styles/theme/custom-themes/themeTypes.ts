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
 * This represents a constructed **artifact** - all 16 semantic tokens
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
    focus: string;
  };
  shadow: {
    subtle: string;
    strong: string;
  };
}

/**
 * A complete generated theme with light and dark mode colors.
 *
 * This is the **artifact** constructed by `generateTheme()` from brand intent.
 * All properties are guaranteed to be populated.
 */
export interface GeneratedTheme {
  /** Light mode colors - always present */
  light: GeneratedThemeColors;
  /** Dark mode colors - always present */
  dark: GeneratedThemeColors;
  /** High contrast light mode - present if requested */
  highContrastLight?: GeneratedThemeColors;
  /** High contrast dark mode - present if requested */
  highContrastDark?: GeneratedThemeColors;
}

/**
 * Options for theme generation.
 */
export interface GenerateThemeOptions {
  /** Target contrast level: 'AA' (4.5:1) or 'AAA' (7:1). Default: 'AA' */
  contrast?: "AA" | "AAA";
  /** Include high-contrast mode variants. Default: false */
  includeHighContrast?: boolean;
  /** Validate against color vision deficiency simulations (Phase 3). Default: false */
  colorBlindSafe?: boolean;
}

/**
 * Result of theme generation.
 */
export interface GenerateThemeResult {
  /** The constructed theme artifact */
  theme: GeneratedTheme;
  /** Warnings about adjustments made during generation */
  warnings: string[];
}
