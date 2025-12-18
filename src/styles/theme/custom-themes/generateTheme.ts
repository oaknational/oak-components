/**
 * Theme generator for creating accessible themes from brand colours.
 *
 * Constructs a `GeneratedTheme` artifact (6 Token Sets) from `BrandColors` intent
 * using colour theory (triadic or split-complementary palettes).
 *
 * @example
 * ```typescript
 * const result = generateTheme({ primary: '#287c34' });
 * <CustomThemeProvider config={result.theme}>
 *   <App />
 * </CustomThemeProvider>
 * ```
 */

import {
  isValidHex,
  expandHex,
  parseColor,
  deriveTriadicPalette,
  deriveSplitComplementaryPalette,
  deriveColorBlindSafePalette,
} from "./colorUtils";
import { deriveThemeColors } from "./deriveTokens";
import type { ContrastLevel } from "./deriveTokens";
import type {
  BrandColors,
  BasePalette,
  GeneratedTheme,
  GeneratedThemeColors,
  GenerateThemeOptions,
  GenerateThemeResult,
} from "./themeTypes";

// Re-export types for convenience
export type {
  BrandColors,
  BasePalette,
  GeneratedTheme,
  GeneratedThemeColors,
  GenerateThemeOptions,
  GenerateThemeResult,
};

/**
 * Validate and normalize a colour (supports hex, rgb, rgba, hsl, hsla).
 */
function validateColor(color: string, name: string): string {
  // Try parseColor first (handles all formats)
  const parsed = parseColor(color);
  if (parsed) {
    return parsed;
  }

  // Fallback: check if it's a valid hex (for better error messages)
  if (!isValidHex(color)) {
    throw new TypeError(
      `Invalid ${name} colour "${color}". Expected hex (#RGB or #RRGGBB), rgb(), rgba(), hsl(), or hsla()`,
    );
  }
  return expandHex(color);
}

/**
 * Derive the appropriate base palette based on input and options.
 */
function derivePalette(
  primary: string,
  secondary: string | undefined,
  colorBlindSafe: boolean,
): BasePalette {
  if (colorBlindSafe) {
    return deriveColorBlindSafePalette(primary);
  }

  if (secondary) {
    return deriveSplitComplementaryPalette(primary, secondary);
  }

  return deriveTriadicPalette(primary);
}

/**
 * Generate a Token Set for a specific mode and contrast level.
 */
function generateTokenSet(
  palette: BasePalette,
  mode: "light" | "dark",
  contrast: ContrastLevel,
): GeneratedThemeColors {
  return deriveThemeColors({ palette, mode, contrast });
}

/**
 * Generate a complete theme from brand colours.
 *
 * Constructs a `GeneratedTheme` artifact (6 Token Sets) from the consumer's
 * brand intent using colour theory:
 * - One colour: triadic palette (120° hue rotations)
 * - Two colours: split-complementary palette
 *
 * @param brand - Brand colours expressing identity
 * @param options - Generation options
 * @returns Complete theme artifact (6 Token Sets), base palette, and any warnings
 *
 * @example
 * ```typescript
 * // Single colour → triadic derivation
 * const result = generateTheme({ primary: '#287c34' });
 *
 * // Two colours → split-complementary
 * const result = generateTheme({
 *   primary: '#287c34',
 *   secondary: '#7c2834',
 * });
 *
 * // Colour-blind safe
 * const result = generateTheme(
 *   { primary: '#287c34' },
 *   { colorBlindSafe: true }
 * );
 * ```
 */
export function generateTheme(
  brand: BrandColors,
  options: GenerateThemeOptions = {},
): GenerateThemeResult {
  // Validate inputs
  const normalizedPrimary = validateColor(brand.primary, "primary");
  const normalizedSecondary = brand.secondary
    ? validateColor(brand.secondary, "secondary")
    : undefined;

  const warnings: string[] = [];
  const colorBlindSafe = options.colorBlindSafe ?? false;

  // Derive 3-colour base palette
  const basePalette = derivePalette(
    normalizedPrimary,
    normalizedSecondary,
    colorBlindSafe,
  );

  // Generate all 6 Token Sets
  const theme: GeneratedTheme = {
    // Normal contrast
    light: generateTokenSet(basePalette, "light", "normal"),
    dark: generateTokenSet(basePalette, "dark", "normal"),
    // High contrast (WCAG AAA)
    highContrastLight: generateTokenSet(basePalette, "light", "high"),
    highContrastDark: generateTokenSet(basePalette, "dark", "high"),
    // Low contrast
    lowContrastLight: generateTokenSet(basePalette, "light", "low"),
    lowContrastDark: generateTokenSet(basePalette, "dark", "low"),
  };

  // Add colour-blind safe warning if applicable
  if (colorBlindSafe) {
    warnings.push(
      "Colour-blind safe palette applied. Hues adjusted to avoid red-green confusion.",
    );
  }

  return { theme, basePalette, warnings };
}
