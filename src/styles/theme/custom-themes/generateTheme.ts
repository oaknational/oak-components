/**
 * Theme generator for creating accessible themes from brand colors.
 *
 * Constructs a `GeneratedTheme` artifact from `BrandColors` intent.
 *
 * @example
 * ```typescript
 * const result = generateTheme({ primary: '#287c34' });
 * <CustomThemeProvider config={result.theme}>
 *   <App />
 * </CustomThemeProvider>
 * ```
 */

import { isValidHex, expandHex } from "./colorUtils";
import { deriveThemeColors } from "./deriveTokens";
import type {
  BrandColors,
  GeneratedTheme,
  GeneratedThemeColors,
  GenerateThemeOptions,
  GenerateThemeResult,
} from "./themeTypes";

// Re-export types for convenience
export type {
  BrandColors,
  GeneratedTheme,
  GeneratedThemeColors,
  GenerateThemeOptions,
  GenerateThemeResult,
};

/**
 * Validate and normalize a hex color.
 */
function validateHex(hex: string, name: string): string {
  if (!isValidHex(hex)) {
    throw new TypeError(
      `Invalid ${name} color "${hex}". Expected hex format: #RGB or #RRGGBB`,
    );
  }
  return expandHex(hex);
}

/**
 * Generate high contrast theme colors.
 */
function generateHighContrastTheme(
  mode: "light" | "dark",
): GeneratedThemeColors {
  if (mode === "light") {
    return {
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
    };
  }

  return {
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
      subtle: "rgba(255,255,255,0.2)",
      strong: "rgba(255,255,255,0.4)",
    },
  };
}

/**
 * Generate a complete theme from brand colors.
 *
 * Constructs a `GeneratedTheme` artifact from the consumer's brand intent.
 *
 * @param brand - Brand colors expressing identity
 * @param options - Generation options
 * @returns Complete theme artifact and any warnings
 *
 * @example
 * ```typescript
 * // Single color
 * const result = generateTheme({ primary: '#287c34' });
 *
 * // Two colors
 * const result = generateTheme({
 *   primary: '#287c34',
 *   secondary: '#7c2834',
 * });
 *
 * // With options
 * const result = generateTheme(
 *   { primary: '#287c34' },
 *   { contrast: 'AAA', includeHighContrast: true }
 * );
 * ```
 */
export function generateTheme(
  brand: BrandColors,
  options: GenerateThemeOptions = {},
): GenerateThemeResult {
  // Validate inputs
  const normalizedPrimary = validateHex(brand.primary, "primary");
  const normalizedSecondary = brand.secondary
    ? validateHex(brand.secondary, "secondary")
    : undefined;

  const warnings: string[] = [];

  // Generate light and dark themes
  const lightColors = deriveThemeColors({
    primary: normalizedPrimary,
    secondary: normalizedSecondary,
    mode: "light",
  });

  const darkColors = deriveThemeColors({
    primary: normalizedPrimary,
    secondary: normalizedSecondary,
    mode: "dark",
  });

  // Build theme artifact
  const theme: GeneratedTheme = {
    light: lightColors,
    dark: darkColors,
  };

  // Add high contrast variants if requested
  if (options.includeHighContrast) {
    theme.highContrastLight = generateHighContrastTheme("light");
    theme.highContrastDark = generateHighContrastTheme("dark");
  }

  // Phase 3: colorBlindSafe validation
  if (options.colorBlindSafe) {
    warnings.push("colorBlindSafe option will be implemented in Phase 3");
  }

  return { theme, warnings };
}
