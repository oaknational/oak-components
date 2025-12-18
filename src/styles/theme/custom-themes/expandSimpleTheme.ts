/**
 * Expand a Simple Theme to a Full Theme.
 *
 * Takes a fully specified Token Set (one mode) and generates the
 * other 5 Token Sets by:
 * - Inverting for opposite mode
 * - Adjusting for high/low contrast
 */

import { adjustLightness, hexToOklch, oklchToHex } from "./colorUtils";
import { ensureContrast } from "./contrastUtils";
import type { GeneratedTheme, GeneratedThemeColors } from "./themeTypes";
import type { SimpleTheme } from "./namedThemes";

/**
 * Invert lightness of a hex colour.
 */
function invertLightness(hex: string): string {
  const oklch = hexToOklch(hex);
  return oklchToHex({
    l: 1 - oklch.l,
    c: oklch.c,
    h: oklch.h,
  });
}

/**
 * Adjust all colours in a token set for different contrast level.
 */
function adjustTokenSetContrast(
  tokens: GeneratedThemeColors,
  mode: "light" | "dark",
  contrast: "high" | "low",
): GeneratedThemeColors {
  const targetContrast = contrast === "high" ? 9 : 4.5;

  // For high contrast, push towards extremes
  // For low contrast, reduce intensity
  const adjustAmount = contrast === "high" ? 0.15 : -0.1;
  const applyAdjust = (hex: string) =>
    adjustLightness(hex, mode === "light" ? adjustAmount : -adjustAmount);

  const newSurface = {
    primary:
      contrast === "high"
        ? mode === "light"
          ? "#ffffff"
          : "#0a0a0a"
        : applyAdjust(tokens.surface.primary),
    secondary:
      contrast === "high"
        ? mode === "light"
          ? "#f5f5f5"
          : "#1a1a1a"
        : applyAdjust(tokens.surface.secondary),
    accent: applyAdjust(tokens.surface.accent),
    inverse:
      contrast === "high"
        ? mode === "light"
          ? "#000000"
          : "#ffffff"
        : applyAdjust(tokens.surface.inverse),
  };

  return {
    surface: newSurface,
    text: {
      primary: ensureContrast(
        tokens.text.primary,
        newSurface.primary,
        targetContrast,
      ).adjusted,
      muted: ensureContrast(
        tokens.text.muted,
        newSurface.primary,
        targetContrast,
      ).adjusted,
      inverse:
        contrast === "high"
          ? mode === "light"
            ? "#ffffff"
            : "#000000"
          : tokens.text.inverse,
      accent: ensureContrast(
        tokens.text.accent,
        newSurface.primary,
        targetContrast,
      ).adjusted,
    },
    border: {
      subtle:
        contrast === "high"
          ? mode === "light"
            ? "#c0c0c0"
            : "#4a4a4a"
          : mode === "light"
            ? "#e0e0e0"
            : "#3a3a3a",
      strong: tokens.border.strong,
      accent: tokens.border.accent,
    },
    interactive: {
      primary: ensureContrast(
        tokens.interactive.primary,
        newSurface.primary,
        targetContrast,
      ).adjusted,
      hover: applyAdjust(tokens.interactive.hover),
      active: applyAdjust(tokens.interactive.active),
      focus: tokens.interactive.focus,
    },
    shadow: {
      subtle:
        contrast === "high"
          ? `rgba(0,0,0,${mode === "light" ? "0.12" : "0.38"})`
          : `rgba(0,0,0,${mode === "light" ? "0.05" : "0.15"})`,
      strong:
        contrast === "high"
          ? `rgba(0,0,0,${mode === "light" ? "0.30" : "0.75"})`
          : `rgba(0,0,0,${mode === "light" ? "0.12" : "0.30"})`,
    },
  };
}

/**
 * Invert a token set for opposite mode.
 */
function invertTokenSet(tokens: GeneratedThemeColors): GeneratedThemeColors {
  return {
    surface: {
      primary: invertLightness(tokens.surface.primary),
      secondary: invertLightness(tokens.surface.secondary),
      accent: invertLightness(tokens.surface.accent),
      inverse: invertLightness(tokens.surface.inverse),
    },
    text: {
      primary: invertLightness(tokens.text.primary),
      muted: invertLightness(tokens.text.muted),
      inverse: invertLightness(tokens.text.inverse),
      accent: invertLightness(tokens.text.accent),
    },
    border: {
      subtle: invertLightness(tokens.border.subtle),
      strong: invertLightness(tokens.border.strong),
      accent: invertLightness(tokens.border.accent),
    },
    interactive: {
      primary: invertLightness(tokens.interactive.primary),
      hover: invertLightness(tokens.interactive.hover),
      active: invertLightness(tokens.interactive.active),
      focus: invertLightness(tokens.interactive.focus),
    },
    shadow: {
      subtle: tokens.shadow.subtle,
      strong: tokens.shadow.strong,
    },
  };
}

/**
 * Expand a Simple Theme to a Full Theme.
 *
 * @param simple - A fully specified Simple Theme (16 tokens, one mode)
 * @returns Full Theme with all 6 Token Sets
 *
 * @example
 * ```typescript
 * const full = expandSimpleTheme(festive2025);
 * // full.light, full.dark, full.highContrastLight, etc.
 * ```
 */
export function expandSimpleTheme(simple: SimpleTheme): GeneratedTheme {
  const baseTokens = simple.tokens;
  const oppositeTokens = invertTokenSet(baseTokens);

  if (simple.mode === "light") {
    return {
      light: baseTokens,
      dark: oppositeTokens,
      highContrastLight: adjustTokenSetContrast(baseTokens, "light", "high"),
      highContrastDark: adjustTokenSetContrast(oppositeTokens, "dark", "high"),
      lowContrastLight: adjustTokenSetContrast(baseTokens, "light", "low"),
      lowContrastDark: adjustTokenSetContrast(oppositeTokens, "dark", "low"),
    };
  }

  // Simple theme is dark mode
  return {
    light: oppositeTokens,
    dark: baseTokens,
    highContrastLight: adjustTokenSetContrast(oppositeTokens, "light", "high"),
    highContrastDark: adjustTokenSetContrast(baseTokens, "dark", "high"),
    lowContrastLight: adjustTokenSetContrast(oppositeTokens, "light", "low"),
    lowContrastDark: adjustTokenSetContrast(baseTokens, "dark", "low"),
  };
}
