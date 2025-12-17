import React, { useMemo, type JSX } from "react";

import { buildCss } from "./buildCss";

import { customSemanticTokenSpec } from "@/styles/theme/customSemanticTokens";

/**
 * Color values for a single theme mode.
 *
 * @remarks
 * Each category contains optional color values. At minimum, `surface.primary`
 * and `text.primary` should be defined for both light and dark modes.
 */
export type CustomThemeColors = {
  [K in keyof typeof customSemanticTokenSpec]?: {
    [N in (typeof customSemanticTokenSpec)[K][number]]?: string;
  };
};

/**
 * Configuration for custom semantic theming.
 *
 * @remarks
 * - `light` and `dark` are required for basic theme support
 * - `highContrastLight` and `highContrastDark` enable `prefers-contrast: more` support
 * - `lowContrastLight` and `lowContrastDark` enable `prefers-contrast: less` support
 */
export interface CustomThemeConfig {
  /** Required: Light mode color values */
  light: CustomThemeColors;
  /** Required: Dark mode color values */
  dark: CustomThemeColors;
  /** Optional: High contrast light mode (prefers-contrast: more) */
  highContrastLight?: CustomThemeColors;
  /** Optional: High contrast dark mode (prefers-contrast: more) */
  highContrastDark?: CustomThemeColors;
  /** Optional: Low contrast light mode (prefers-contrast: less) */
  lowContrastLight?: CustomThemeColors;
  /** Optional: Low contrast dark mode (prefers-contrast: less) */
  lowContrastDark?: CustomThemeColors;
}

export interface CustomThemeProviderProps {
  /** Theme configuration with light/dark color values */
  config: CustomThemeConfig;
  /** Child components that will receive the custom theme */
  children: React.ReactNode;
}

/**
 * Provider for custom semantic theming.
 *
 * @remarks
 * Generates CSS custom properties for all tokens with `light-dark()` support.
 * Use with Oak components via `$background="custom-surface-primary"` etc.
 *
 * @example
 * ```tsx
 * <CustomThemeProvider config={myThemeConfig}>
 *   <OakBox $background="custom-surface-primary">
 *     Content with custom themed background
 *   </OakBox>
 * </CustomThemeProvider>
 * ```
 */
export function CustomThemeProvider({
  config,
  children,
}: CustomThemeProviderProps): JSX.Element {
  const css = useMemo(() => buildCss(config), [config]);
  return (
    <>
      <style id="custom-theme-vars">{css}</style>
      {children}
    </>
  );
}
