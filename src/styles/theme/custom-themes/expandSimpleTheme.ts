/**
 * Expand a Simple Theme to a Full Theme.
 *
 * Takes a fully specified Token Set (one mode) and generates the
 * other 5 Token Sets by:
 * - Inverting for opposite mode
 * - Adjusting for high/low contrast
 *
 * @remarks
 * - No hardcoded colours - all adjustments derived from input tokens
 * - High contrast interactive states use focus colour for active (matches deriveTokens.ts)
 */

import {
  adjustLightness,
  hexToOklch,
  oklchToHex,
  desaturate,
} from "./colorUtils";
import { ensureContrast } from "./contrastUtils";
import type { GeneratedTheme, GeneratedThemeColors } from "./themeTypes";
import type { SimpleTheme } from "./namedThemes";

// ─────────────────────────────────────────────────────────────────────────────
// Configuration Constants (matching deriveTokens.ts)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Contrast ratio targets.
 */
const CONTRAST_RATIOS = {
  high: 9,
  normal: 4.5,
} as const;

/**
 * Lightness adjustments.
 */
const LIGHTNESS = {
  /** Push towards extremes for high contrast */
  highContrastAdjust: 0.15,
  /** Reduce intensity for low contrast */
  lowContrastAdjust: -0.1,
  /** Interactive hover/active shifts */
  interactive: {
    hoverDarken: -0.1,
    hoverLighten: 0.1,
    activeMultiplier: 2, // Active = 2x hover shift (matching deriveTokens.ts)
    darkBoost: 0.2,
  },
} as const;

/**
 * Desaturation for deriving neutrals from coloured tokens.
 */
const DESATURATION = {
  border: 0.5, // Partial desaturation for subtle borders
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Helper Functions
// ─────────────────────────────────────────────────────────────────────────────

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
 * Push a colour towards extreme lightness (very light or very dark).
 * Used for high contrast surfaces.
 */
function pushToExtreme(hex: string, mode: "light" | "dark"): string {
  const oklch = hexToOklch(hex);
  // For light mode, push lightness towards 1 (white)
  // For dark mode, push lightness towards 0 (black)
  const targetL = mode === "light" ? 0.98 : 0.05;
  // Move aggressively towards target
  const newL = oklch.l + (targetL - oklch.l) * 0.9;
  return oklchToHex({ ...oklch, l: newL });
}

/**
 * Derive high-contrast interactive states from base tokens.
 * Matches the strategy in deriveTokens.ts:
 * - Hover uses focus colour (distinct colour change)
 * - Active uses adjusted focus colour (even more distinct)
 */
function deriveHighContrastInteractive(
  tokens: GeneratedThemeColors,
  mode: "light" | "dark",
  surfacePrimary: string,
): GeneratedThemeColors["interactive"] {
  const isLight = mode === "light";

  // Primary: ensure contrast against new surface
  const primary = ensureContrast(
    tokens.interactive.primary,
    surfacePrimary,
    CONTRAST_RATIOS.high,
  ).adjusted;

  // Hover: use focus colour for distinct colour change
  const hover = ensureContrast(
    tokens.interactive.focus,
    surfacePrimary,
    CONTRAST_RATIOS.normal,
  ).adjusted;

  // Active: derive from focus with additional shift
  const activeSource = isLight
    ? tokens.interactive.focus
    : adjustLightness(
        tokens.interactive.focus,
        LIGHTNESS.interactive.darkBoost,
      );
  const active = ensureContrast(
    activeSource,
    surfacePrimary,
    CONTRAST_RATIOS.high,
  ).adjusted;

  return {
    primary,
    hover,
    active,
    focus: tokens.interactive.focus,
  };
}

/**
 * Derive low-contrast interactive states from base tokens.
 * Uses lightness shifts (same as deriveTokens.ts normal/low contrast).
 */
function deriveLowContrastInteractive(
  tokens: GeneratedThemeColors,
  mode: "light" | "dark",
  surfacePrimary: string,
): GeneratedThemeColors["interactive"] {
  const isLight = mode === "light";

  const primary = ensureContrast(
    tokens.interactive.primary,
    surfacePrimary,
    CONTRAST_RATIOS.normal,
  ).adjusted;

  // Lightness shifts for hover and active
  const hoverShift = isLight
    ? LIGHTNESS.interactive.hoverDarken
    : LIGHTNESS.interactive.hoverLighten;
  const activeShift = hoverShift * LIGHTNESS.interactive.activeMultiplier;

  return {
    primary,
    hover: adjustLightness(primary, hoverShift),
    active: adjustLightness(primary, activeShift),
    focus: tokens.interactive.focus,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Token Set Transformation Functions
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Adjust all colours in a token set for different contrast level.
 * No hardcoded colours - all derived from input tokens.
 */
function adjustTokenSetContrast(
  tokens: GeneratedThemeColors,
  mode: "light" | "dark",
  contrast: "high" | "low",
): GeneratedThemeColors {
  const targetContrast =
    CONTRAST_RATIOS[contrast === "high" ? "high" : "normal"];
  const isLight = mode === "light";
  const adjustAmount =
    contrast === "high"
      ? LIGHTNESS.highContrastAdjust
      : LIGHTNESS.lowContrastAdjust;
  const adjustment = isLight ? adjustAmount : -adjustAmount;

  const applyAdjust = (hex: string) => adjustLightness(hex, adjustment);

  // Surfaces: derive from existing surfaces
  const newSurface = {
    primary:
      contrast === "high"
        ? pushToExtreme(tokens.surface.primary, mode)
        : applyAdjust(tokens.surface.primary),
    secondary:
      contrast === "high"
        ? pushToExtreme(tokens.surface.secondary, mode)
        : applyAdjust(tokens.surface.secondary),
    accent: applyAdjust(tokens.surface.accent),
    inverse:
      contrast === "high"
        ? pushToExtreme(
            tokens.surface.inverse,
            mode === "light" ? "dark" : "light",
          )
        : applyAdjust(tokens.surface.inverse),
  };

  // Text: ensure contrast against new surface
  const text = {
    primary: ensureContrast(
      tokens.text.primary,
      newSurface.primary,
      targetContrast,
    ).adjusted,
    muted: ensureContrast(tokens.text.muted, newSurface.primary, targetContrast)
      .adjusted,
    inverse:
      contrast === "high"
        ? pushToExtreme(
            tokens.text.inverse,
            mode === "light" ? "dark" : "light",
          )
        : tokens.text.inverse,
    accent: ensureContrast(
      tokens.text.accent,
      newSurface.primary,
      targetContrast,
    ).adjusted,
  };

  // Borders: derive from text colours (desaturated) for subtle, keep strong as-is
  const border = {
    subtle: ensureContrast(
      desaturate(tokens.border.subtle, DESATURATION.border),
      newSurface.primary,
      contrast === "high" ? 4.5 : 3,
    ).adjusted,
    strong: tokens.border.strong,
    accent: tokens.border.accent,
  };

  // Interactive: use shared derivation logic based on contrast level
  const interactive =
    contrast === "high"
      ? deriveHighContrastInteractive(tokens, mode, newSurface.primary)
      : deriveLowContrastInteractive(tokens, mode, newSurface.primary);

  // Shadows: derive opacities based on mode and contrast
  const shadowIntensity = contrast === "high" ? 1.5 : 0.6;
  const baseSubtle = isLight ? 0.08 : 0.25;
  const baseStrong = isLight ? 0.2 : 0.5;

  const shadow = {
    subtle: `rgba(0,0,0,${(baseSubtle * shadowIntensity).toFixed(2)})`,
    strong: `rgba(0,0,0,${(baseStrong * shadowIntensity).toFixed(2)})`,
  };

  return {
    surface: newSurface,
    text,
    border,
    interactive,
    shadow,
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
      // Shadows don't invert well - keep same for both modes
      subtle: tokens.shadow.subtle,
      strong: tokens.shadow.strong,
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Export
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Expand a Simple Theme to a Full Theme.
 *
 * @param simple - A fully specified Simple Theme (17 tokens, one mode)
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
