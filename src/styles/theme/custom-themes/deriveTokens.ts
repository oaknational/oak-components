/**
 * Token derivation utilities for generating complete themes from base palettes.
 *
 * These functions construct a `GeneratedThemeColors` artifact from a 3-colour
 * base palette derived via colour theory.
 *
 * @remarks
 * All functions are pure with no side effects.
 */

import { adjustLightness } from "./colorUtils";
import { ensureContrast } from "./contrastUtils";
import type { GeneratedThemeColors, BasePalette } from "./themeTypes";

/**
 * Contrast level for token derivation.
 */
export type ContrastLevel = "normal" | "high" | "low";

/**
 * Context for deriving theme colors.
 */
export interface DeriveContext {
  /** 3-colour base palette */
  palette: BasePalette;
  /** Theme mode */
  mode: "light" | "dark";
  /** Contrast level */
  contrast: ContrastLevel;
}

/**
 * Get minimum contrast ratio based on level.
 * - normal: WCAG AA (4.5:1)
 * - high: Exceeds AAA (9:1) for visible distinction
 * - low: Close to AA (4.5:1) with muted tones
 */
function getContrastRatio(level: ContrastLevel): number {
  // High contrast exceeds AAA for visible difference from normal
  // Low contrast targets exact AA minimum
  return level === "high" ? 9 : 4.5;
}

/**
 * Derive shadow tokens based on mode and contrast.
 */
function deriveShadowTokens(
  mode: "light" | "dark",
  contrast: ContrastLevel,
): GeneratedThemeColors["shadow"] {
  // High contrast: sharper shadows; Low contrast: softer shadows
  const intensityFactor =
    contrast === "high" ? 1.5 : contrast === "low" ? 0.6 : 1;

  if (mode === "light") {
    return {
      subtle: `rgba(0,0,0,${(0.08 * intensityFactor).toFixed(2)})`,
      strong: `rgba(0,0,0,${(0.2 * intensityFactor).toFixed(2)})`,
    };
  }
  return {
    subtle: `rgba(0,0,0,${(0.25 * intensityFactor).toFixed(2)})`,
    strong: `rgba(0,0,0,${(0.5 * intensityFactor).toFixed(2)})`,
  };
}

/**
 * Derive surface tokens from palette.
 * Surfaces are derived from the palette colours, not hardcoded greys.
 * High contrast uses near-white/black; low contrast uses muted tones.
 */
function deriveSurfaceTokens(
  context: DeriveContext,
): GeneratedThemeColors["surface"] {
  const { palette, mode, contrast } = context;

  // High contrast: force towards extremes for ≥9:1 ratio
  // Low contrast: softer transitions with muted tones
  // Normal: balanced middle ground
  if (contrast === "high") {
    // Force near-white/near-black for maximum contrast
    if (mode === "light") {
      return {
        primary: "#ffffff",
        secondary: "#f5f5f5",
        accent: adjustLightness(palette.tertiary, 0.35),
        inverse: "#000000",
      };
    }
    return {
      primary: "#0a0a0a",
      secondary: "#1a1a1a",
      accent: adjustLightness(palette.tertiary, -0.25),
      inverse: "#ffffff",
    };
  }

  // Low contrast: muted tones, less separation
  if (contrast === "low") {
    const lightnessBoost = 0.3;
    const lightnessDrop = -0.25;

    if (mode === "light") {
      return {
        primary: adjustLightness(palette.primary, lightnessBoost),
        secondary: adjustLightness(palette.secondary, lightnessBoost - 0.03),
        accent: adjustLightness(palette.tertiary, lightnessBoost - 0.05),
        inverse: adjustLightness(palette.primary, lightnessDrop),
      };
    }
    return {
      primary: adjustLightness(palette.primary, lightnessDrop),
      secondary: adjustLightness(palette.secondary, lightnessDrop + 0.03),
      accent: adjustLightness(palette.tertiary, lightnessDrop + 0.05),
      inverse: adjustLightness(palette.primary, lightnessBoost),
    };
  }

  // Normal contrast
  const lightnessBoost = 0.4;
  const lightnessDrop = -0.35;

  if (mode === "light") {
    return {
      primary: adjustLightness(palette.primary, lightnessBoost),
      secondary: adjustLightness(palette.secondary, lightnessBoost - 0.05),
      accent: adjustLightness(palette.tertiary, lightnessBoost - 0.1),
      inverse: adjustLightness(palette.primary, lightnessDrop),
    };
  }

  return {
    primary: adjustLightness(palette.primary, lightnessDrop),
    secondary: adjustLightness(palette.secondary, lightnessDrop + 0.05),
    accent: adjustLightness(palette.tertiary, lightnessDrop + 0.1),
    inverse: adjustLightness(palette.primary, lightnessBoost),
  };
}

/**
 * Derive text tokens with appropriate contrast.
 */
function deriveTextTokens(
  context: DeriveContext,
): GeneratedThemeColors["text"] {
  const { palette, mode, contrast } = context;
  const minContrast = getContrastRatio(contrast);

  // Get surface primary for contrast calculations
  const surfacePrimary =
    mode === "light"
      ? adjustLightness(palette.primary, 0.4)
      : adjustLightness(palette.primary, -0.35);

  if (mode === "light") {
    const textPrimary = ensureContrast(
      "#1a1a1a",
      surfacePrimary,
      minContrast,
    ).adjusted;
    const textMuted = ensureContrast(
      "#666666",
      surfacePrimary,
      minContrast,
    ).adjusted;
    const accentAdjusted = ensureContrast(
      palette.tertiary,
      surfacePrimary,
      minContrast,
    ).adjusted;

    return {
      primary: textPrimary,
      muted: textMuted,
      inverse: "#f0f0f0",
      accent: accentAdjusted,
    };
  }

  const textPrimary = ensureContrast(
    "#f0f0f0",
    surfacePrimary,
    minContrast,
  ).adjusted;
  const textMuted = ensureContrast(
    "#999999",
    surfacePrimary,
    minContrast,
  ).adjusted;
  const accentAdjusted = ensureContrast(
    adjustLightness(palette.tertiary, 0.2),
    surfacePrimary,
    minContrast,
  ).adjusted;

  return {
    primary: textPrimary,
    muted: textMuted,
    inverse: "#1a1a1a",
    accent: accentAdjusted,
  };
}

/**
 * Derive border tokens.
 */
function deriveBorderTokens(
  context: DeriveContext,
): GeneratedThemeColors["border"] {
  const { palette, mode, contrast } = context;
  const minContrast = contrast === "high" ? 4.5 : 3;

  // Get surface primary for contrast calculations
  const surfacePrimary =
    mode === "light"
      ? adjustLightness(palette.primary, 0.4)
      : adjustLightness(palette.primary, -0.35);

  if (mode === "light") {
    return {
      subtle: contrast === "high" ? "#c0c0c0" : "#e0e0e0",
      strong: "#1a1a1a",
      accent: ensureContrast(palette.secondary, surfacePrimary, minContrast)
        .adjusted,
    };
  }

  return {
    subtle: contrast === "high" ? "#4a4a4a" : "#3a3a3a",
    strong: "#f0f0f0",
    accent: ensureContrast(
      adjustLightness(palette.secondary, 0.2),
      surfacePrimary,
      minContrast,
    ).adjusted,
  };
}

/**
 * Derive interactive tokens.
 * Primary drives main interactions; secondary drives focus state.
 */
function deriveInteractiveTokens(
  context: DeriveContext,
): GeneratedThemeColors["interactive"] {
  const { palette, mode, contrast } = context;
  const minContrast = getContrastRatio(contrast);

  // Get surface primary for contrast calculations
  const surfacePrimary =
    mode === "light"
      ? adjustLightness(palette.primary, 0.4)
      : adjustLightness(palette.primary, -0.35);

  if (mode === "light") {
    const interactivePrimary = ensureContrast(
      palette.primary,
      surfacePrimary,
      minContrast,
    ).adjusted;
    const focusColor = ensureContrast(
      palette.secondary,
      surfacePrimary,
      3,
    ).adjusted;

    return {
      primary: interactivePrimary,
      hover: adjustLightness(interactivePrimary, -0.1),
      focus: focusColor,
    };
  }

  const interactivePrimary = ensureContrast(
    adjustLightness(palette.primary, 0.2),
    surfacePrimary,
    minContrast,
  ).adjusted;
  const focusColor = ensureContrast(
    adjustLightness(palette.secondary, 0.25),
    surfacePrimary,
    3,
  ).adjusted;

  return {
    primary: interactivePrimary,
    hover: adjustLightness(interactivePrimary, 0.1),
    focus: focusColor,
  };
}

/**
 * Derive a complete Token Set from a base palette.
 *
 * @param context - Palette, mode, and contrast level
 * @returns Complete `GeneratedThemeColors` with all 16 tokens populated
 */
export function deriveThemeColors(
  context: DeriveContext,
): GeneratedThemeColors {
  return {
    surface: deriveSurfaceTokens(context),
    text: deriveTextTokens(context),
    border: deriveBorderTokens(context),
    interactive: deriveInteractiveTokens(context),
    shadow: deriveShadowTokens(context.mode, context.contrast),
  };
}

/**
 * Legacy context for backward compatibility.
 * @deprecated Use DeriveContext with palette instead
 */
export interface LegacyDeriveContext {
  primary: string;
  secondary?: string;
  mode: "light" | "dark";
}

/**
 * Legacy function for backward compatibility.
 * @deprecated Use deriveThemeColors with DeriveContext instead
 */
export function deriveThemeColorsLegacy(
  context: LegacyDeriveContext,
): GeneratedThemeColors {
  const palette: BasePalette = {
    primary: context.primary,
    secondary: context.secondary ?? context.primary,
    tertiary: context.secondary ?? context.primary,
  };
  return deriveThemeColors({
    palette,
    mode: context.mode,
    contrast: "normal",
  });
}
