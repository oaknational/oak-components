import type {
  CustomThemeColors,
  CustomThemeConfig,
} from "./CustomThemeProvider";

import { customSemanticTokenSpec } from "@/styles/theme/customSemanticTokens";

/**
 * Generates CSS custom properties for custom theme tokens.
 *
 * @param config - Theme configuration with light/dark color values
 * @returns CSS string to inject into `<style>` element
 *
 * @remarks
 * Pure function - no side effects, deterministic output.
 * Uses CSS `light-dark()` for automatic theme switching.
 *
 * @example
 * ```typescript
 * const css = buildCss({
 *   light: { surface: { primary: "#fff" }, text: { primary: "#000" } },
 *   dark: { surface: { primary: "#000" }, text: { primary: "#fff" } },
 * });
 * // Returns: ":root { color-scheme: light dark; --custom-surface-primary: light-dark(#fff, #000); ... }"
 * ```
 */
export function buildCss(config: CustomThemeConfig): string {
  const lines: string[] = [":root {", "  color-scheme: light dark;"];

  // Generate light-dark() tokens for base config
  for (const [category, names] of Object.entries(customSemanticTokenSpec)) {
    for (const name of names) {
      const lightVal =
        config.light[category as keyof CustomThemeColors]?.[
          name as keyof CustomThemeColors[keyof CustomThemeColors]
        ];
      const darkVal =
        config.dark[category as keyof CustomThemeColors]?.[
          name as keyof CustomThemeColors[keyof CustomThemeColors]
        ];

      if (lightVal && darkVal) {
        lines.push(
          `  --custom-${category}-${name}: light-dark(${lightVal}, ${darkVal});`,
        );
      }
    }
  }

  lines.push("}");

  // High contrast media query
  if (config.highContrastLight && config.highContrastDark) {
    lines.push("@media (prefers-contrast: more) {");
    lines.push("  :root {");
    for (const [category, names] of Object.entries(customSemanticTokenSpec)) {
      for (const name of names) {
        const hcLight =
          config.highContrastLight[category as keyof CustomThemeColors]?.[
            name as keyof CustomThemeColors[keyof CustomThemeColors]
          ];
        const hcDark =
          config.highContrastDark[category as keyof CustomThemeColors]?.[
            name as keyof CustomThemeColors[keyof CustomThemeColors]
          ];
        if (hcLight && hcDark) {
          lines.push(
            `    --custom-${category}-${name}: light-dark(${hcLight}, ${hcDark});`,
          );
        }
      }
    }
    lines.push("  }");
    lines.push("}");
  }

  // Low contrast media query
  if (config.lowContrastLight && config.lowContrastDark) {
    lines.push("@media (prefers-contrast: less) {");
    lines.push("  :root {");
    for (const [category, names] of Object.entries(customSemanticTokenSpec)) {
      for (const name of names) {
        const lcLight =
          config.lowContrastLight[category as keyof CustomThemeColors]?.[
            name as keyof CustomThemeColors[keyof CustomThemeColors]
          ];
        const lcDark =
          config.lowContrastDark[category as keyof CustomThemeColors]?.[
            name as keyof CustomThemeColors[keyof CustomThemeColors]
          ];
        if (lcLight && lcDark) {
          lines.push(
            `    --custom-${category}-${name}: light-dark(${lcLight}, ${lcDark});`,
          );
        }
      }
    }
    lines.push("  }");
    lines.push("}");
  }

  return lines.join("\n");
}
