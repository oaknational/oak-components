/**
 * Contrast utilities for WCAG compliance checking.
 * Provides functions to check and ensure sufficient contrast ratios.
 *
 * @remarks
 * All functions are pure with no side effects.
 */

import {
  getContrastRatio,
  hexToOklch,
  oklchToHex,
  expandHex,
} from "./colorUtils";

/**
 * Result of a contrast ratio check.
 */
export interface ContrastResult {
  /** The contrast ratio (1:1 to 21:1) */
  ratio: number;
  /** Passes WCAG AA for normal text (>= 4.5:1) */
  passesAA: boolean;
  /** Passes WCAG AAA for normal text (>= 7:1) */
  passesAAA: boolean;
  /** Passes WCAG AA for large text (>= 3:1) */
  passesAALarge: boolean;
  /** Passes WCAG AAA for large text (>= 4.5:1) */
  passesAAALarge: boolean;
}

/**
 * Result of ensuring contrast.
 */
export interface EnsureContrastResult {
  /** The adjusted color (may be same as input if no adjustment needed) */
  adjusted: string;
  /** Warnings about adjustments made */
  warnings: string[];
}

/**
 * WCAG contrast thresholds.
 */
const THRESHOLD = {
  AA: 4.5,
  AAA: 7,
  AA_LARGE: 3,
  AAA_LARGE: 4.5,
} as const;

/**
 * Check contrast ratio between two colors against WCAG thresholds.
 *
 * @param foreground - Foreground color (hex)
 * @param background - Background color (hex)
 * @returns Contrast result with ratio and pass/fail for each level
 */
export function checkContrast(
  foreground: string,
  background: string,
): ContrastResult {
  const fg = expandHex(foreground);
  const bg = expandHex(background);
  const ratio = getContrastRatio(fg, bg);

  return {
    ratio,
    passesAA: ratio >= THRESHOLD.AA,
    passesAAA: ratio >= THRESHOLD.AAA,
    passesAALarge: ratio >= THRESHOLD.AA_LARGE,
    passesAAALarge: ratio >= THRESHOLD.AAA_LARGE,
  };
}

/**
 * Ensure a color meets minimum contrast against a background.
 * Adjusts lightness if needed while preserving hue.
 *
 * @param foreground - Foreground color to adjust (hex)
 * @param background - Background color (hex)
 * @param minRatio - Minimum contrast ratio required (default: 4.5 for AA)
 * @returns Adjusted color and any warnings
 */
export function ensureContrast(
  foreground: string,
  background: string,
  minRatio: number = THRESHOLD.AA,
): EnsureContrastResult {
  const fg = expandHex(foreground);
  const bg = expandHex(background);

  // Check if already passes
  let currentRatio = getContrastRatio(fg, bg);
  if (currentRatio >= minRatio) {
    return { adjusted: fg, warnings: [] };
  }

  const warnings: string[] = [];
  const fgOklch = hexToOklch(fg);
  const bgOklch = hexToOklch(bg);

  // Determine direction to adjust
  // If background is light (l > 0.5), darken foreground; otherwise lighten
  const direction = bgOklch.l > 0.5 ? -1 : 1;

  // Iteratively adjust lightness
  const step = 0.02;
  const maxIterations = 50;
  let iterations = 0;
  const adjustedOklch = { ...fgOklch };

  while (currentRatio < minRatio && iterations < maxIterations) {
    adjustedOklch.l = Math.max(
      0,
      Math.min(1, adjustedOklch.l + direction * step),
    );
    const adjustedHex = oklchToHex(adjustedOklch);
    currentRatio = getContrastRatio(adjustedHex, bg);
    iterations++;
  }

  const adjustedHex = oklchToHex(adjustedOklch);

  if (currentRatio >= minRatio) {
    warnings.push(
      `Adjusted lightness from ${fgOklch.l.toFixed(
        2,
      )} to ${adjustedOklch.l.toFixed(2)} to achieve ${currentRatio.toFixed(
        1,
      )}:1 contrast`,
    );
  } else {
    warnings.push(
      `Could not achieve ${minRatio}:1 contrast. Best achieved: ${currentRatio.toFixed(
        1,
      )}:1`,
    );
  }

  return { adjusted: adjustedHex, warnings };
}
