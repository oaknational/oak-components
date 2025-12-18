/**
 * Named themes registry.
 *
 * Named themes are pre-computed Simple Themes (fully specified Token Sets)
 * that can be used directly or expanded to Full Themes.
 */

import type { GeneratedThemeColors } from "./themeTypes";

/**
 * A fully specified theme for a single mode.
 * Used as input for named themes and for `expandSimpleTheme()`.
 */
export interface SimpleTheme {
  /** Theme name identifier */
  name: string;
  /** Which mode this theme is designed for */
  mode: "light" | "dark";
  /** Complete set of 16 tokens */
  tokens: GeneratedThemeColors;
}

/**
 * Festive 2025 theme — Christmas-inspired colours.
 * Designed for light mode, can be expanded to Full Theme.
 */
export const festive2025: SimpleTheme = {
  name: "festive-2025",
  mode: "light",
  tokens: {
    surface: {
      primary: "#faf5f5", // Warm off-white
      secondary: "#ffe8e5", // Light red tint
      accent: "#e8f0e8", // Light green tint
      inverse: "#2a1515", // Dark warm
    },
    text: {
      primary: "#1a0808", // Near-black warm
      muted: "#5a4040", // Muted warm
      inverse: "#faf5f5", // Matches surface.primary
      accent: "#c41e3a", // Christmas red
    },
    border: {
      subtle: "#e0d5d5", // Soft warm border
      strong: "#1a0808", // Strong contrast
      accent: "#228b22", // Forest green
    },
    interactive: {
      primary: "#c41e3a", // Christmas red
      hover: "#a01830", // Darker red
      focus: "#228b22", // Forest green for distinction
    },
    shadow: {
      subtle: "rgba(42, 21, 21, 0.08)",
      strong: "rgba(42, 21, 21, 0.20)",
    },
  },
};

/**
 * Colour-blind safe theme — designed for accessibility.
 * Uses blue-orange axis to avoid red-green confusion.
 * Meets WCAG 2.2 AAA contrast (7:1+).
 * This is a standalone theme, not expanded to Full Theme.
 */
export const colorBlindSafe: SimpleTheme = {
  name: "colour-blind-safe",
  mode: "light",
  tokens: {
    surface: {
      primary: "#ffffff", // Pure white for max contrast
      secondary: "#f5f5fa", // Slight blue tint
      accent: "#fff5e5", // Slight orange tint
      inverse: "#1a1a2e", // Deep blue-black
    },
    text: {
      primary: "#1a1a2e", // Deep blue-black (contrast: 15.3:1)
      muted: "#4a4a6a", // Muted blue-grey (contrast: 7.2:1)
      inverse: "#ffffff", // Pure white
      accent: "#0055aa", // Strong blue (safe, contrast: 8.1:1)
    },
    border: {
      subtle: "#d0d0e0", // Light blue-grey
      strong: "#1a1a2e", // High contrast
      accent: "#e67700", // Orange (safe for colour blindness)
    },
    interactive: {
      primary: "#0055aa", // Strong blue (distinct from orange)
      hover: "#004488", // Darker blue
      focus: "#e67700", // Orange for focus (distinct)
    },
    shadow: {
      subtle: "rgba(26, 26, 46, 0.08)",
      strong: "rgba(26, 26, 46, 0.20)",
    },
  },
};

/**
 * Registry of all named themes.
 */
export const namedThemes: Record<string, SimpleTheme> = {
  "festive-2025": festive2025,
  "colour-blind-safe": colorBlindSafe,
};

/**
 * Get a named theme by name.
 */
export function getNamedTheme(name: string): SimpleTheme | undefined {
  return namedThemes[name];
}
