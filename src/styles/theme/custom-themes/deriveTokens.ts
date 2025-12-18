/**
 * Token derivation utilities for generating complete themes from base palettes.
 *
 * These functions construct a `GeneratedThemeColors` artifact from a 3-colour
 * base palette derived via colour theory.
 *
 * @remarks
 * - All functions are pure with no side effects
 * - No hardcoded colours - all tokens derived from the palette input
 * - Lightness adjustments create light/dark mode variants
 * - ensureContrast() adjusts colours to meet WCAG requirements
 */

import { adjustLightness, desaturate } from "./colorUtils";
import { ensureContrast } from "./contrastUtils";
import type { GeneratedThemeColors, BasePalette } from "./themeTypes";

// ─────────────────────────────────────────────────────────────────────────────
// Configuration Constants (no hardcoded colours - only numerical adjustments)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Lightness adjustment values for derivation.
 * Positive values lighten, negative values darken.
 */
const LIGHTNESS = {
  surface: {
    /** Light mode: boost lightness to create pale surfaces from brand colour */
    light: 0.45,
    /** Dark mode: reduce lightness to create dark surfaces */
    dark: -0.4,
    /** Secondary surface offset from primary */
    secondaryOffset: 0.05,
    /** Accent surface offset from primary */
    accentOffset: 0.1,
  },
  lowContrast: {
    light: 0.35,
    dark: -0.3,
    secondaryOffset: 0.03,
    accentOffset: 0.05,
  },
  highContrast: {
    /** High contrast light mode: very pale surfaces */
    light: 0.48,
    /** High contrast dark mode: very dark surfaces */
    dark: -0.48,
    accentLight: 0.4,
    accentDark: -0.35,
  },
  text: {
    /** Light mode: derive text from darkened primary */
    lightPrimary: -0.45,
    /** Dark mode: derive text from lightened primary */
    darkPrimary: 0.45,
    /** Muted text has less extreme lightness */
    lightMuted: -0.25,
    darkMuted: 0.25,
    /** Accent text boost for dark mode readability */
    darkAccentBoost: 0.2,
  },
  border: {
    /** Light mode subtle border */
    lightSubtle: 0.25,
    /** Dark mode subtle border */
    darkSubtle: -0.15,
    /** Strong border adjustments */
    lightStrong: -0.4,
    darkStrong: 0.4,
    /** Accent boost for dark mode */
    darkAccentBoost: 0.2,
  },
  interactive: {
    /** Hover state: darken in light mode */
    hoverDarken: -0.1,
    /** Hover state: lighten in dark mode */
    hoverLighten: 0.1,
    /** Brighten primary for dark mode */
    darkPrimaryBoost: 0.2,
    /** Brighten focus colour for dark mode */
    darkFocusBoost: 0.25,
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
 * Desaturation amounts for deriving neutral-ish colours from brand.
 */
const DESATURATION = {
  /** Desaturate primary to create text base (keeps hint of brand) */
  text: 0.85,
  /** Desaturate for border base */
  border: 0.9,
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
 * Get lightness config for a contrast level.
 */
function getSurfaceConfig(contrast: ContrastLevel) {
  if (contrast === "high") return LIGHTNESS.highContrast;
  if (contrast === "low") return LIGHTNESS.lowContrast;
  return LIGHTNESS.surface;
}

/**
 * Derive the surface primary colour from the palette.
 * This is the background colour - derived by adjusting the primary brand colour.
 */
function deriveSurfacePrimary(
  palette: BasePalette,
  mode: "light" | "dark",
  contrast: ContrastLevel,
): string {
  const config = getSurfaceConfig(contrast);
  const adjustment = mode === "light" ? config.light : config.dark;
  return adjustLightness(palette.primary, adjustment);
}

// ─────────────────────────────────────────────────────────────────────────────
// Token Derivation Functions
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Derive shadow tokens based on mode and contrast.
 * Shadows use transparency so they work over any background.
 */
function deriveShadowTokens(
  mode: "light" | "dark",
  contrast: ContrastLevel,
): GeneratedThemeColors["shadow"] {
  const intensityFactor = SHADOW_INTENSITY[contrast];
  const baseOpacity = SHADOW_OPACITY[mode];

  // Using rgba(0,0,0,...) is acceptable for shadows as they must work universally
  return {
    subtle: `rgba(0,0,0,${(baseOpacity.subtle * intensityFactor).toFixed(2)})`,
    strong: `rgba(0,0,0,${(baseOpacity.strong * intensityFactor).toFixed(2)})`,
  };
}

/**
 * Derive surface tokens from palette.
 * All surfaces are derived from the brand palette through lightness adjustments.
 */
function deriveSurfaceTokens(
  context: DeriveContext,
): GeneratedThemeColors["surface"] {
  const { palette, mode, contrast } = context;
  const config = getSurfaceConfig(contrast);
  const isLight = mode === "light";
  const primaryAdjust = isLight ? config.light : config.dark;

  // Offset direction: in light mode secondary is slightly darker, in dark mode slightly lighter
  const direction = isLight ? -1 : 1;
  const secondaryOffset =
    "secondaryOffset" in config ? config.secondaryOffset : 0.05;
  const accentOffset = "accentOffset" in config ? config.accentOffset : 0.1;

  // Derive accent lightness adjustment
  const accentAdjust =
    contrast === "high"
      ? isLight
        ? LIGHTNESS.highContrast.accentLight
        : LIGHTNESS.highContrast.accentDark
      : primaryAdjust + direction * accentOffset;

  return {
    primary: adjustLightness(palette.primary, primaryAdjust),
    secondary: adjustLightness(
      palette.secondary,
      primaryAdjust + direction * secondaryOffset,
    ),
    accent: adjustLightness(palette.tertiary, accentAdjust),
    inverse: adjustLightness(palette.primary, -primaryAdjust),
  };
}

/**
 * Derive text tokens from palette with appropriate contrast.
 * Text colours are derived by heavily adjusting and desaturating the primary.
 */
function deriveTextTokens(
  context: DeriveContext,
): GeneratedThemeColors["text"] {
  const { palette, mode, contrast } = context;
  const minContrast = getContrastRatio(contrast);
  const surfacePrimary = deriveSurfacePrimary(palette, mode, contrast);

  const isLight = mode === "light";

  // Derive text base from desaturated primary, then adjust lightness
  const textBase = desaturate(palette.primary, DESATURATION.text);
  const primaryText = adjustLightness(
    textBase,
    isLight ? LIGHTNESS.text.lightPrimary : LIGHTNESS.text.darkPrimary,
  );
  const mutedText = adjustLightness(
    textBase,
    isLight ? LIGHTNESS.text.lightMuted : LIGHTNESS.text.darkMuted,
  );

  // Inverse text is lightened/darkened opposite to primary
  const inverseText = adjustLightness(
    textBase,
    isLight ? LIGHTNESS.text.darkPrimary : LIGHTNESS.text.lightPrimary,
  );

  // Accent text uses tertiary
  const accentBase = isLight
    ? palette.tertiary
    : adjustLightness(palette.tertiary, LIGHTNESS.text.darkAccentBoost);

  return {
    primary: ensureContrast(primaryText, surfacePrimary, minContrast).adjusted,
    muted: ensureContrast(mutedText, surfacePrimary, minContrast).adjusted,
    inverse: inverseText,
    accent: ensureContrast(accentBase, surfacePrimary, minContrast).adjusted,
  };
}

/**
 * Derive border tokens from palette.
 * Borders are derived from desaturated primary with lightness adjustments.
 */
function deriveBorderTokens(
  context: DeriveContext,
): GeneratedThemeColors["border"] {
  const { palette, mode, contrast } = context;
  const minContrast =
    contrast === "high" ? CONTRAST_RATIOS.borderHigh : CONTRAST_RATIOS.border;
  const surfacePrimary = deriveSurfacePrimary(palette, mode, contrast);

  const isLight = mode === "light";
  const borderBase = desaturate(palette.primary, DESATURATION.border);

  // Subtle border: slightly different from surface
  const subtleBorder = adjustLightness(
    borderBase,
    isLight ? LIGHTNESS.border.lightSubtle : LIGHTNESS.border.darkSubtle,
  );

  // Strong border: high contrast from surface
  const strongBorder = adjustLightness(
    borderBase,
    isLight ? LIGHTNESS.border.lightStrong : LIGHTNESS.border.darkStrong,
  );

  // Accent border uses secondary
  const accentSource = isLight
    ? palette.secondary
    : adjustLightness(palette.secondary, LIGHTNESS.border.darkAccentBoost);

  return {
    subtle: ensureContrast(subtleBorder, surfacePrimary, minContrast).adjusted,
    strong: ensureContrast(strongBorder, surfacePrimary, minContrast).adjusted,
    accent: ensureContrast(accentSource, surfacePrimary, minContrast).adjusted,
  };
}

/**
 * Derive interactive tokens from palette.
 *
 * Interactive state strategy:
 * - **Hover**: Small lightness shift from primary
 * - **Active**: Larger lightness shift from primary (more pronounced than hover)
 * - **High contrast**: Hover uses focus colour, active uses tertiary for distinct colour changes
 */
function deriveInteractiveTokens(
  context: DeriveContext,
): GeneratedThemeColors["interactive"] {
  const { palette, mode, contrast } = context;
  const minContrast = getContrastRatio(contrast);
  const surfacePrimary = deriveSurfacePrimary(palette, mode, contrast);

  const isLight = mode === "light";
  const isHighContrast = contrast === "high";

  // Primary interactive: uses brand primary
  const primarySource = isLight
    ? palette.primary
    : adjustLightness(palette.primary, LIGHTNESS.interactive.darkPrimaryBoost);

  const interactivePrimary = ensureContrast(
    primarySource,
    surfacePrimary,
    minContrast,
  ).adjusted;

  // Focus colour: uses secondary for distinction
  const focusSource = isLight
    ? palette.secondary
    : adjustLightness(palette.secondary, LIGHTNESS.interactive.darkFocusBoost);

  const focusColor = ensureContrast(
    focusSource,
    surfacePrimary,
    CONTRAST_RATIOS.focus,
  ).adjusted;

  // Hover and active colours based on contrast level
  let hoverColor: string;
  let activeColor: string;

  if (isHighContrast) {
    // High contrast: distinct colour changes for each state
    hoverColor = focusColor;
    // Active uses tertiary for another distinct colour
    const activeSource = isLight
      ? palette.tertiary
      : adjustLightness(
          palette.tertiary,
          LIGHTNESS.interactive.darkPrimaryBoost,
        );
    activeColor = ensureContrast(
      activeSource,
      surfacePrimary,
      minContrast,
    ).adjusted;
  } else {
    // Normal/Low: lightness shifts (active is more pronounced than hover)
    const hoverShift = isLight
      ? LIGHTNESS.interactive.hoverDarken
      : LIGHTNESS.interactive.hoverLighten;
    const activeShift = hoverShift * 1.5; // 50% more shift for active

    hoverColor = adjustLightness(interactivePrimary, hoverShift);
    activeColor = adjustLightness(interactivePrimary, activeShift);
  }

  return {
    primary: interactivePrimary,
    hover: hoverColor,
    active: activeColor,
    focus: focusColor,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Export
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Derive a complete Token Set from a base palette.
 *
 * All 16 tokens are derived from the 3-colour palette input through:
 * - Lightness adjustments for mode (light/dark)
 * - Desaturation for neutral-ish text and borders
 * - ensureContrast() to meet WCAG requirements
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
