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

// ─────────────────────────────────────────────────────────────────────────────
// Configuration Constants
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Base neutral colours used as starting points for text and borders.
 * These are adjusted by ensureContrast() to meet accessibility requirements.
 */
const NEUTRALS = {
  /** Near-black used for light mode text */
  darkText: "#1a1a1a",
  /** Near-white used for dark mode text */
  lightText: "#f0f0f0",
  /** Grey for light mode muted text */
  lightMuted: "#666666",
  /** Grey for dark mode muted text */
  darkMuted: "#999999",
  /** Pure white for high contrast light surfaces */
  pureWhite: "#ffffff",
  /** Pure black for high contrast dark surfaces */
  pureBlack: "#000000",
  /** Near-white for high contrast light secondary */
  offWhite: "#f5f5f5",
  /** Near-black for high contrast dark primary */
  nearBlack: "#0a0a0a",
  /** Near-black for high contrast dark secondary */
  charcoal: "#1a1a1a",
} as const;

/**
 * Lightness adjustment values for surface derivation.
 * Positive values lighten (for light mode), negative darken (for dark mode).
 */
const LIGHTNESS = {
  surface: {
    /** Light mode: boost lightness to create pale surfaces */
    lightPrimary: 0.4,
    /** Dark mode: reduce lightness to create dark surfaces */
    darkPrimary: -0.35,
    /** Secondary surface offset from primary */
    secondaryOffset: 0.05,
    /** Accent surface offset from primary */
    accentOffset: 0.1,
  },
  lowContrast: {
    /** Reduced lightness boost for low contrast */
    lightPrimary: 0.3,
    darkPrimary: -0.25,
    secondaryOffset: 0.03,
    accentOffset: 0.05,
  },
  highContrast: {
    /** Accent lightness in light mode */
    accentLight: 0.35,
    /** Accent darkening in dark mode */
    accentDark: -0.25,
  },
  text: {
    /** Brighten accent for dark mode readability */
    darkAccentBoost: 0.2,
  },
  interactive: {
    /** Hover state: darken in light mode */
    hoverDarken: -0.1,
    /** Hover state: lighten in dark mode */
    hoverLighten: 0.1,
    /** High contrast hover: larger shift for visibility */
    hoverHighContrast: 0.15,
    /** Brighten primary for dark mode */
    darkPrimaryBoost: 0.2,
    /** Brighten focus colour for dark mode */
    darkFocusBoost: 0.25,
  },
  border: {
    /** Lighten border accent for dark mode */
    darkAccentBoost: 0.2,
  },
} as const;

/**
 * Contrast ratio targets for different accessibility levels.
 */
const CONTRAST_RATIOS = {
  /** WCAG AA for normal text (4.5:1) */
  normal: 4.5,
  /** Exceeds WCAG AAA for high visibility */
  high: 9,
  /** Meets WCAG AA (4.5:1) */
  low: 4.5,
  /** Minimum for borders against surfaces */
  border: 3,
  /** Higher minimum for high contrast borders */
  borderHigh: 4.5,
  /** Focus ring minimum */
  focus: 3,
} as const;

/**
 * Shadow intensity multipliers for different contrast levels.
 */
const SHADOW_INTENSITY = {
  normal: 1,
  high: 1.5,
  low: 0.6,
} as const;

/**
 * Base shadow opacity values.
 */
const SHADOW_OPACITY = {
  light: { subtle: 0.08, strong: 0.2 },
  dark: { subtle: 0.25, strong: 0.5 },
} as const;

/**
 * Border grey colours for different modes and contrast levels.
 */
const BORDER_GREYS = {
  light: {
    subtle: { normal: "#e0e0e0", high: "#c0c0c0" },
    strong: "#1a1a1a",
  },
  dark: {
    subtle: { normal: "#3a3a3a", high: "#4a4a4a" },
    strong: "#f0f0f0",
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

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

// ─────────────────────────────────────────────────────────────────────────────
// Helper Functions
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Get minimum contrast ratio based on level.
 */
function getContrastRatio(level: ContrastLevel): number {
  return CONTRAST_RATIOS[level];
}

/**
 * Get lightness settings for a contrast level.
 */
function getLightnessConfig(contrast: ContrastLevel) {
  if (contrast === "low") return LIGHTNESS.lowContrast;
  return LIGHTNESS.surface;
}

/**
 * Calculate surface primary lightness for a given context.
 * This is the key calculation that determines the background colour.
 */
function getSurfacePrimaryLightness(
  palette: BasePalette,
  mode: "light" | "dark",
  contrast: ContrastLevel,
): string {
  // High contrast uses fixed extreme colours
  if (contrast === "high") {
    return mode === "light" ? NEUTRALS.pureWhite : NEUTRALS.nearBlack;
  }

  const config = getLightnessConfig(contrast);
  const adjustment =
    mode === "light" ? config.lightPrimary : config.darkPrimary;
  return adjustLightness(palette.primary, adjustment);
}

// ─────────────────────────────────────────────────────────────────────────────
// Token Derivation Functions
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Derive shadow tokens based on mode and contrast.
 */
function deriveShadowTokens(
  mode: "light" | "dark",
  contrast: ContrastLevel,
): GeneratedThemeColors["shadow"] {
  const intensityFactor = SHADOW_INTENSITY[contrast];
  const baseOpacity = SHADOW_OPACITY[mode];

  return {
    subtle: `rgba(0,0,0,${(baseOpacity.subtle * intensityFactor).toFixed(2)})`,
    strong: `rgba(0,0,0,${(baseOpacity.strong * intensityFactor).toFixed(2)})`,
  };
}

/**
 * Derive surface tokens from palette.
 * High contrast uses near-white/black; low contrast uses muted tones.
 */
function deriveSurfaceTokens(
  context: DeriveContext,
): GeneratedThemeColors["surface"] {
  const { palette, mode, contrast } = context;

  // High contrast: force towards extremes for ≥9:1 ratio
  if (contrast === "high") {
    if (mode === "light") {
      return {
        primary: NEUTRALS.pureWhite,
        secondary: NEUTRALS.offWhite,
        accent: adjustLightness(
          palette.tertiary,
          LIGHTNESS.highContrast.accentLight,
        ),
        inverse: NEUTRALS.pureBlack,
      };
    }
    return {
      primary: NEUTRALS.nearBlack,
      secondary: NEUTRALS.charcoal,
      accent: adjustLightness(
        palette.tertiary,
        LIGHTNESS.highContrast.accentDark,
      ),
      inverse: NEUTRALS.pureWhite,
    };
  }

  // Normal and low contrast: derive from palette
  const config = getLightnessConfig(contrast);
  const isLight = mode === "light";
  const primaryAdjust = isLight ? config.lightPrimary : config.darkPrimary;
  const direction = isLight ? -1 : 1; // Offset direction

  return {
    primary: adjustLightness(palette.primary, primaryAdjust),
    secondary: adjustLightness(
      palette.secondary,
      primaryAdjust + direction * config.secondaryOffset,
    ),
    accent: adjustLightness(
      palette.tertiary,
      primaryAdjust + direction * config.accentOffset,
    ),
    inverse: adjustLightness(
      palette.primary,
      isLight ? -primaryAdjust : -primaryAdjust,
    ),
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
  const surfacePrimary = getSurfacePrimaryLightness(palette, mode, contrast);

  const isLight = mode === "light";
  const baseText = isLight ? NEUTRALS.darkText : NEUTRALS.lightText;
  const baseMuted = isLight ? NEUTRALS.lightMuted : NEUTRALS.darkMuted;
  const baseInverse = isLight ? NEUTRALS.lightText : NEUTRALS.darkText;

  const accentBase = isLight
    ? palette.tertiary
    : adjustLightness(palette.tertiary, LIGHTNESS.text.darkAccentBoost);

  return {
    primary: ensureContrast(baseText, surfacePrimary, minContrast).adjusted,
    muted: ensureContrast(baseMuted, surfacePrimary, minContrast).adjusted,
    inverse: baseInverse,
    accent: ensureContrast(accentBase, surfacePrimary, minContrast).adjusted,
  };
}

/**
 * Derive border tokens.
 */
function deriveBorderTokens(
  context: DeriveContext,
): GeneratedThemeColors["border"] {
  const { palette, mode, contrast } = context;
  const minContrast =
    contrast === "high" ? CONTRAST_RATIOS.borderHigh : CONTRAST_RATIOS.border;
  const surfacePrimary = getSurfacePrimaryLightness(palette, mode, contrast);

  const isLight = mode === "light";
  const greys = isLight ? BORDER_GREYS.light : BORDER_GREYS.dark;
  const subtleGrey =
    contrast === "high" ? greys.subtle.high : greys.subtle.normal;

  const accentSource = isLight
    ? palette.secondary
    : adjustLightness(palette.secondary, LIGHTNESS.border.darkAccentBoost);

  return {
    subtle: subtleGrey,
    strong: greys.strong,
    accent: ensureContrast(accentSource, surfacePrimary, minContrast).adjusted,
  };
}

/**
 * Derive interactive tokens.
 *
 * Interactive state strategy:
 * - **Normal/Low contrast**: Hover uses lightness shift (darker in light mode, lighter in dark mode)
 * - **High contrast**: Hover uses focus colour for distinct colour change (accessibility requirement)
 *
 * @param context - The derivation context
 * @returns Interactive tokens with primary, hover, and focus states
 */
function deriveInteractiveTokens(
  context: DeriveContext,
): GeneratedThemeColors["interactive"] {
  const { palette, mode, contrast } = context;
  const minContrast = getContrastRatio(contrast);
  const surfacePrimary = getSurfacePrimaryLightness(palette, mode, contrast);

  const isLight = mode === "light";
  const isHighContrast = contrast === "high";

  // Calculate base interactive primary
  const primarySource = isLight
    ? palette.primary
    : adjustLightness(palette.primary, LIGHTNESS.interactive.darkPrimaryBoost);

  const interactivePrimary = ensureContrast(
    primarySource,
    surfacePrimary,
    minContrast,
  ).adjusted;

  // Calculate focus colour (uses secondary palette colour)
  const focusSource = isLight
    ? palette.secondary
    : adjustLightness(palette.secondary, LIGHTNESS.interactive.darkFocusBoost);

  const focusColor = ensureContrast(
    focusSource,
    surfacePrimary,
    CONTRAST_RATIOS.focus,
  ).adjusted;

  // Calculate hover colour based on contrast level
  let hoverColor: string;
  if (isHighContrast) {
    // High contrast: use focus colour for distinct colour change
    // This ensures visible distinction for users who need high contrast
    hoverColor = focusColor;
  } else {
    // Normal/Low contrast: use lightness shift
    const hoverShift = isLight
      ? LIGHTNESS.interactive.hoverDarken
      : LIGHTNESS.interactive.hoverLighten;
    hoverColor = adjustLightness(interactivePrimary, hoverShift);
  }

  return {
    primary: interactivePrimary,
    hover: hoverColor,
    focus: focusColor,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Export
// ─────────────────────────────────────────────────────────────────────────────

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

// ─────────────────────────────────────────────────────────────────────────────
// Legacy Support
// ─────────────────────────────────────────────────────────────────────────────

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
