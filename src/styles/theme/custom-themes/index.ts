/**
 * Custom theme utilities for generating accessible themes from brand colors.
 *
 * @remarks
 * This module provides:
 * - `generateTheme()` - Generate complete themes from 1-2 brand colors
 * - `customSemanticTokens` - Registry of 16 semantic tokens
 * - Color and contrast utilities for accessibility compliance
 */

// Core theme generation
export { generateTheme } from "./generateTheme";
export type {
  BrandColors,
  BasePalette,
  GeneratedTheme,
  GeneratedThemeColors,
  GenerateThemeOptions,
  GenerateThemeResult,
} from "./generateTheme";

// Token registry
export {
  customSemanticTokens,
  customSemanticTokenSpec,
  isCustomSemanticToken,
} from "./customSemanticTokens";
export type { CustomSemanticToken } from "./customSemanticTokens";

// Contrast utilities
export { checkContrast, ensureContrast } from "./contrastUtils";
export type { ContrastResult, EnsureContrastResult } from "./contrastUtils";

// Color utilities
export {
  hexToOklch,
  oklchToHex,
  getContrastRatio,
  adjustLightness,
  adjustHue,
  adjustChroma,
  isValidHex,
  expandHex,
  deriveTriadicPalette,
  deriveSplitComplementaryPalette,
  deriveColorBlindSafePalette,
} from "./colorUtils";
export type { OklchColor } from "./colorUtils";

// Token derivation (internal, but useful for advanced use)
export { deriveThemeColors } from "./deriveTokens";
export type { DeriveContext, ContrastLevel } from "./deriveTokens";

// Theme preview for Storybook mode simulation
export { ThemePreview } from "./ThemePreview";
export type { ThemePreviewProps } from "./ThemePreview";
