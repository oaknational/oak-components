/**
 * Token derivation utilities for generating complete themes from brand colors.
 *
 * These functions construct a `GeneratedThemeColors` artifact from brand intent.
 *
 * @remarks
 * All functions are pure with no side effects.
 */

import { adjustLightness } from "./colorUtils";
import { ensureContrast } from "./contrastUtils";
import type { GeneratedThemeColors } from "./themeTypes";

/**
 * Context for deriving theme colors.
 */
export interface DeriveContext {
  /** Primary brand color (hex) */
  primary: string;
  /** Optional secondary/accent color (hex) */
  secondary?: string;
  /** Theme mode */
  mode: "light" | "dark";
}

/**
 * Derive shadow tokens based on mode.
 */
function deriveShadowTokens(
  mode: "light" | "dark",
): GeneratedThemeColors["shadow"] {
  if (mode === "light") {
    return {
      subtle: "rgba(0,0,0,0.08)",
      strong: "rgba(0,0,0,0.2)",
    };
  }
  return {
    subtle: "rgba(0,0,0,0.25)",
    strong: "rgba(0,0,0,0.5)",
  };
}

/**
 * Derive surface tokens.
 * Secondary colour drives accent surfaces when provided.
 */
function deriveSurfaceTokens(
  context: DeriveContext,
): GeneratedThemeColors["surface"] {
  const { mode, primary, secondary } = context;
  // Accent surfaces use secondary if provided, otherwise primary
  const accentSource = secondary ?? primary;

  if (mode === "light") {
    return {
      primary: "#ffffff",
      secondary: "#f5f5f5",
      accent: adjustLightness(accentSource, 0.35),
      inverse: "#1a1a1a",
    };
  }

  return {
    primary: "#1a1a1a",
    secondary: "#2a2a2a",
    accent: adjustLightness(accentSource, -0.25),
    inverse: "#f0f0f0",
  };
}

/**
 * Derive text tokens.
 */
function deriveTextTokens(
  context: DeriveContext,
): GeneratedThemeColors["text"] {
  const { mode, primary, secondary } = context;
  const accentColor = secondary ?? primary;

  if (mode === "light") {
    const textPrimary = ensureContrast("#1a1a1a", "#ffffff", 7).adjusted;
    const textMuted = ensureContrast("#666666", "#ffffff", 4.5).adjusted;
    const accentAdjusted = ensureContrast(accentColor, "#ffffff", 4.5).adjusted;

    return {
      primary: textPrimary,
      muted: textMuted,
      inverse: "#f0f0f0",
      accent: accentAdjusted,
    };
  }

  const textPrimary = ensureContrast("#f0f0f0", "#1a1a1a", 7).adjusted;
  const textMuted = ensureContrast("#999999", "#1a1a1a", 4.5).adjusted;
  const accentAdjusted = ensureContrast(
    adjustLightness(accentColor, 0.2),
    "#1a1a1a",
    4.5,
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
  const { mode, primary, secondary } = context;
  const accentColor = secondary ?? primary;

  if (mode === "light") {
    return {
      subtle: "#e0e0e0",
      strong: "#1a1a1a",
      accent: ensureContrast(accentColor, "#ffffff", 3).adjusted,
    };
  }

  return {
    subtle: "#3a3a3a",
    strong: "#f0f0f0",
    accent: ensureContrast(adjustLightness(accentColor, 0.2), "#1a1a1a", 3)
      .adjusted,
  };
}

/**
 * Derive interactive tokens.
 * Primary drives main interactions; secondary (if provided) drives focus state
 * for visual distinction between click targets and focus indicators.
 */
function deriveInteractiveTokens(
  context: DeriveContext,
): GeneratedThemeColors["interactive"] {
  const { mode, primary, secondary } = context;
  // Focus ring uses secondary for distinction; falls back to primary-derived if no secondary
  const focusSource = secondary ?? primary;

  if (mode === "light") {
    const interactivePrimary = ensureContrast(primary, "#ffffff", 4.5).adjusted;
    const focusColor = ensureContrast(focusSource, "#ffffff", 3).adjusted;

    return {
      primary: interactivePrimary,
      hover: adjustLightness(interactivePrimary, -0.1),
      focus: secondary ? focusColor : adjustLightness(interactivePrimary, 0.15),
    };
  }

  const interactivePrimary = ensureContrast(
    adjustLightness(primary, 0.2),
    "#1a1a1a",
    4.5,
  ).adjusted;
  const focusColor = ensureContrast(
    adjustLightness(focusSource, 0.25),
    "#1a1a1a",
    3,
  ).adjusted;

  return {
    primary: interactivePrimary,
    hover: adjustLightness(interactivePrimary, 0.1),
    focus: secondary ? focusColor : adjustLightness(interactivePrimary, -0.1),
  };
}

/**
 * Derive a complete theme colors artifact from brand intent.
 *
 * @param context - Brand colors and mode
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
    shadow: deriveShadowTokens(context.mode),
  };
}
