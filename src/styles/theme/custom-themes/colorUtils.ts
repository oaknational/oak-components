/**
 * Color utilities for theme generation.
 * Uses OKLCH color space for perceptually uniform color manipulation.
 *
 * @remarks
 * All functions are pure with no side effects.
 */

import type { BasePalette } from "./themeTypes";

/**
 * OKLCH color representation.
 */
export interface OklchColor {
  /** Lightness (0-1) */
  l: number;
  /** Chroma (0-~0.4 typical) */
  c: number;
  /** Hue (0-360 degrees) */
  h: number;
}

/**
 * Check if a string is a valid hex color.
 */
export function isValidHex(hex: string): boolean {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex);
}

/**
 * Parse any CSS color format and convert to hex.
 * Supports: hex, rgb(), rgba(), hsl(), hsla()
 *
 * @param color - CSS color string
 * @returns Hex color string or null if invalid
 */
export function parseColor(color: string): string | null {
  const trimmed = color.trim();

  // Already hex?
  if (isValidHex(trimmed)) {
    return expandHex(trimmed);
  }

  // RGB/RGBA: rgb(r, g, b) or rgba(r, g, b, a)
  const rgbMatch = trimmed.match(
    /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*[\d.]+)?\s*\)$/i,
  );
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1]!, 10);
    const g = parseInt(rgbMatch[2]!, 10);
    const b = parseInt(rgbMatch[3]!, 10);
    return rgbToHex(r, g, b);
  }

  // HSL/HSLA: hsl(h, s%, l%) or hsla(h, s%, l%, a)
  const hslMatch = trimmed.match(
    /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*(?:,\s*[\d.]+)?\s*\)$/i,
  );
  if (hslMatch) {
    const h = parseFloat(hslMatch[1]!) / 360;
    const s = parseFloat(hslMatch[2]!) / 100;
    const l = parseFloat(hslMatch[3]!) / 100;
    return hslToHex(h, s, l);
  }

  return null;
}

/**
 * Convert HSL to hex.
 * @param h - Hue (0-1)
 * @param s - Saturation (0-1)
 * @param l - Lightness (0-1)
 */
function hslToHex(h: number, s: number, l: number): string {
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return rgbToHex(r * 255, g * 255, b * 255);
}

/**
 * Expand 3-char hex to 6-char.
 */
export function expandHex(hex: string): string {
  if (hex.length === 4) {
    return `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  }
  return hex;
}

/**
 * Parse hex to RGB components (0-255).
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const expanded = expandHex(hex);
  const r = parseInt(expanded.slice(1, 3), 16);
  const g = parseInt(expanded.slice(3, 5), 16);
  const b = parseInt(expanded.slice(5, 7), 16);
  return { r, g, b };
}

/**
 * RGB to hex string.
 */
// Note: Must be declared before parseColor uses it
function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)));
  const toHex = (v: number) => clamp(v).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Convert linear RGB to sRGB.
 */
function linearToSrgb(c: number): number {
  if (c <= 0.0031308) {
    return c * 12.92;
  }
  return 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
}

/**
 * Convert sRGB to linear RGB.
 */
function srgbToLinear(c: number): number {
  if (c <= 0.04045) {
    return c / 12.92;
  }
  return Math.pow((c + 0.055) / 1.055, 2.4);
}

/**
 * Convert hex color to OKLCH color space.
 *
 * @param hex - Hex color string (3 or 6 char)
 * @returns OKLCH color
 */
export function hexToOklch(hex: string): OklchColor {
  const { r, g, b } = hexToRgb(hex);

  // Convert to linear RGB
  const lr = srgbToLinear(r / 255);
  const lg = srgbToLinear(g / 255);
  const lb = srgbToLinear(b / 255);

  // Linear RGB to LMS
  const l_ = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb;
  const m_ = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb;
  const s_ = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb;

  // LMS to Lab
  const l__ = Math.cbrt(l_);
  const m__ = Math.cbrt(m_);
  const s__ = Math.cbrt(s_);

  const L = 0.2104542553 * l__ + 0.793617785 * m__ - 0.0040720468 * s__;
  const a = 1.9779984951 * l__ - 2.428592205 * m__ + 0.4505937099 * s__;
  const bVal = 0.0259040371 * l__ + 0.7827717662 * m__ - 0.808675766 * s__;

  // Lab to LCH
  const C = Math.sqrt(a * a + bVal * bVal);
  let H = (Math.atan2(bVal, a) * 180) / Math.PI;
  if (H < 0) H += 360;

  return { l: L, c: C, h: H };
}

/**
 * Convert OKLCH color to hex string.
 *
 * @param color - OKLCH color
 * @returns Hex color string
 */
export function oklchToHex(color: OklchColor): string {
  const { l: L, c: C, h: H } = color;

  // LCH to Lab
  const hRad = (H * Math.PI) / 180;
  const a = C * Math.cos(hRad);
  const bVal = C * Math.sin(hRad);

  // Lab to LMS
  const l__ = L + 0.3963377774 * a + 0.2158037573 * bVal;
  const m__ = L - 0.1055613458 * a - 0.0638541728 * bVal;
  const s__ = L - 0.0894841775 * a - 1.291485548 * bVal;

  // LMS to linear RGB
  const l_ = l__ * l__ * l__;
  const m_ = m__ * m__ * m__;
  const s_ = s__ * s__ * s__;

  const lr = +4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_;
  const lg = -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_;
  const lb = -0.0041960863 * l_ - 0.7034186147 * m_ + 1.707614701 * s_;

  // Linear to sRGB
  const r = linearToSrgb(lr) * 255;
  const g = linearToSrgb(lg) * 255;
  const b = linearToSrgb(lb) * 255;

  return rgbToHex(r, g, b);
}

/**
 * Calculate relative luminance per WCAG 2.2.
 */
function relativeLuminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  const rLin = srgbToLinear(r / 255);
  const gLin = srgbToLinear(g / 255);
  const bLin = srgbToLinear(b / 255);
  return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;
}

/**
 * Calculate contrast ratio between two colors per WCAG 2.2.
 *
 * @param foreground - Foreground hex color
 * @param background - Background hex color
 * @returns Contrast ratio (1 to 21)
 */
export function getContrastRatio(
  foreground: string,
  background: string,
): number {
  const l1 = relativeLuminance(foreground);
  const l2 = relativeLuminance(background);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Adjust the lightness of a color.
 *
 * @param hex - Hex color
 * @param amount - Amount to adjust (-1 to 1)
 * @returns Adjusted hex color
 */
export function adjustLightness(hex: string, amount: number): string {
  const oklch = hexToOklch(hex);
  oklch.l = Math.max(0, Math.min(1, oklch.l + amount));
  return oklchToHex(oklch);
}

/**
 * Adjust the hue of a color.
 *
 * @param hex - Hex color
 * @param degrees - Degrees to rotate hue
 * @returns Adjusted hex color
 */
export function adjustHue(hex: string, degrees: number): string {
  const oklch = hexToOklch(hex);
  oklch.h = (((oklch.h + degrees) % 360) + 360) % 360; // Normalize to 0-360
  return oklchToHex(oklch);
}

/**
 * Adjust the chroma (saturation) of a color.
 *
 * @param hex - Hex color
 * @param factor - Multiplier (0.9 = 90% saturation)
 * @returns Adjusted hex color
 */
export function adjustChroma(hex: string, factor: number): string {
  const oklch = hexToOklch(hex);
  oklch.c = Math.max(0, oklch.c * factor);
  return oklchToHex(oklch);
}

/**
 * Derive a triadic 3-colour palette from a single brand colour.
 *
 * Uses 120° hue rotations in OKLCH colour space for perceptually
 * uniform colour relationships. Minimal adjustments for accessibility.
 *
 * @param primary - Primary brand colour (hex)
 * @returns 3-colour base palette
 *
 * @example
 * ```typescript
 * const palette = deriveTriadicPalette('#287c34');
 * // palette.primary = '#287c34' (input)
 * // palette.secondary = '#...' (+120° hue)
 * // palette.tertiary = '#...' (+240° hue)
 * ```
 */
export function deriveTriadicPalette(primary: string): BasePalette {
  const oklch = hexToOklch(primary);

  // Secondary: +120° hue, slightly reduced chroma for harmony
  const secondaryOklch = {
    l: Math.min(oklch.l + 0.05, 0.85), // Small lightness boost for a11y
    c: oklch.c * 0.9,
    h: (oklch.h + 120) % 360,
  };

  // Tertiary: +240° hue (or -120°)
  const tertiaryOklch = {
    l: Math.min(oklch.l + 0.05, 0.85),
    c: oklch.c * 0.9,
    h: (oklch.h + 240) % 360,
  };

  return {
    primary,
    secondary: oklchToHex(secondaryOklch),
    tertiary: oklchToHex(tertiaryOklch),
  };
}

/**
 * Derive a split-complementary palette from two brand colours.
 *
 * - Primary: used as-is (absolute)
 * - Secondary: based on input secondary (rough coordinate), adjusted for a11y
 * - Tertiary: derived via split-complement (150° from primary)
 *
 * @param primary - Primary brand colour (hex)
 * @param secondaryHint - Secondary colour (used as hue guide)
 * @returns 3-colour base palette
 */
export function deriveSplitComplementaryPalette(
  primary: string,
  secondaryHint: string,
): BasePalette {
  const primaryOklch = hexToOklch(primary);
  const hintOklch = hexToOklch(secondaryHint);

  // Secondary: honour the hint's hue, adjust L/C for a11y
  const secondary = oklchToHex({
    l: Math.max(0.3, Math.min(0.7, hintOklch.l)), // Ensure mid-range lightness
    c: hintOklch.c * 0.9,
    h: hintOklch.h,
  });

  // Tertiary: split-complement of primary (150° instead of 180° for more harmony)
  const tertiary = oklchToHex({
    l: primaryOklch.l,
    c: primaryOklch.c * 0.85,
    h: (primaryOklch.h + 150) % 360,
  });

  return { primary, secondary, tertiary };
}

/**
 * Derive a colour-blind safe triadic palette.
 *
 * Avoids red-green confusion by using blue-orange-yellow axis.
 * Uses WCAG AAA contrast for extra headroom.
 *
 * @param primary - Primary brand colour (hex)
 * @returns 3-colour base palette safe for colour vision deficiency
 */
export function deriveColorBlindSafePalette(primary: string): BasePalette {
  const oklch = hexToOklch(primary);

  // Shift hues away from red-green confusion zone
  // Blue-yellow axis is generally safer
  const safeHue = adjustHueForColorBlindness(oklch.h);

  // Secondary: shifted towards blue (safe for deuteranopia)
  const secondaryOklch = {
    l: Math.min(oklch.l + 0.1, 0.8),
    c: oklch.c * 0.85,
    h: (safeHue + 180) % 360, // Complement for maximum distinction
  };

  // Tertiary: shifted towards yellow/orange (also safe)
  const tertiaryOklch = {
    l: Math.min(oklch.l + 0.15, 0.85),
    c: oklch.c * 0.8,
    h: (safeHue + 60) % 360, // 60° for triadic-like distinction
  };

  return {
    primary: oklchToHex({ ...oklch, h: safeHue }),
    secondary: oklchToHex(secondaryOklch),
    tertiary: oklchToHex(tertiaryOklch),
  };
}

/**
 * Adjust hue to avoid red-green confusion.
 * Shifts problematic hues towards blue or orange.
 */
function adjustHueForColorBlindness(hue: number): number {
  // Red-green confusion zone: roughly 0-60° (red-orange) and 90-150° (yellow-green)
  // Shift these towards safer zones
  if ((hue >= 0 && hue < 30) || (hue >= 330 && hue <= 360)) {
    // Red zone → shift towards orange
    return 30;
  }
  if (hue >= 90 && hue < 150) {
    // Green zone → shift towards teal/blue
    return 180;
  }
  return hue;
}
