/**
 * ThemePreview component for previewing themes with explicit mode/contrast.
 *
 * Unlike CustomThemeProvider which uses CSS light-dark(), this component
 * directly applies the token values for a specific mode. This enables
 * Storybook to show light and dark themes side-by-side without relying
 * on browser color-scheme detection.
 *
 * @example
 * ```tsx
 * <ThemePreview theme={generatedTheme} mode="dark">
 *   <MyComponent />
 * </ThemePreview>
 * ```
 */
import React from "react";

import type { GeneratedTheme, GeneratedThemeColors } from "./themeTypes";

export interface ThemePreviewProps {
  /** The generated theme containing light/dark token sets */
  theme: GeneratedTheme;
  /** Which mode to display */
  mode: "light" | "dark";
  /** Contrast preference (defaults to "normal") */
  contrast?: "normal" | "high" | "low";
  /** Child components to render within the theme context */
  children: React.ReactNode;
  /** Optional className for the wrapper */
  className?: string;
}

/**
 * Selects the appropriate Token Set based on mode and contrast.
 */
function selectTokenSet(
  theme: GeneratedTheme,
  mode: "light" | "dark",
  contrast: "normal" | "high" | "low",
): GeneratedThemeColors {
  if (contrast === "high") {
    return mode === "light" ? theme.highContrastLight : theme.highContrastDark;
  }

  if (contrast === "low") {
    return mode === "light" ? theme.lowContrastLight : theme.lowContrastDark;
  }

  return mode === "light" ? theme.light : theme.dark;
}

/**
 * Generates inline CSS variables from a token set.
 */
function tokensToCssVars(tokens: GeneratedThemeColors): React.CSSProperties {
  const vars: Record<string, string> = {};

  // Surface tokens
  if (tokens.surface) {
    vars["--custom-surface-primary"] = tokens.surface.primary;
    vars["--custom-surface-secondary"] = tokens.surface.secondary;
    vars["--custom-surface-accent"] = tokens.surface.accent;
    vars["--custom-surface-inverse"] = tokens.surface.inverse;
  }

  // Text tokens
  if (tokens.text) {
    vars["--custom-text-primary"] = tokens.text.primary;
    vars["--custom-text-muted"] = tokens.text.muted;
    vars["--custom-text-inverse"] = tokens.text.inverse;
    vars["--custom-text-accent"] = tokens.text.accent;
  }

  // Border tokens
  if (tokens.border) {
    vars["--custom-border-subtle"] = tokens.border.subtle;
    vars["--custom-border-strong"] = tokens.border.strong;
    vars["--custom-border-accent"] = tokens.border.accent;
  }

  // Interactive tokens
  if (tokens.interactive) {
    vars["--custom-interactive-primary"] = tokens.interactive.primary;
    vars["--custom-interactive-hover"] = tokens.interactive.hover;
    vars["--custom-interactive-active"] = tokens.interactive.active;
    vars["--custom-interactive-focus"] = tokens.interactive.focus;
  }

  // Shadow tokens
  if (tokens.shadow) {
    vars["--custom-shadow-subtle"] = tokens.shadow.subtle;
    vars["--custom-shadow-strong"] = tokens.shadow.strong;
  }

  return vars as React.CSSProperties;
}

/**
 * Preview a theme with explicit mode selection.
 *
 * This bypasses CSS light-dark() and directly applies token values,
 * enabling side-by-side light/dark comparisons in Storybook.
 */
export function ThemePreview({
  theme,
  mode,
  contrast = "normal",
  children,
  className,
}: ThemePreviewProps): React.ReactElement {
  const tokenSet = selectTokenSet(theme, mode, contrast);
  const cssVars = tokensToCssVars(tokenSet);

  return (
    <div
      className={className}
      style={{
        ...cssVars,
        // Use actual theme surface.primary for background to show real contrast
        backgroundColor:
          tokenSet.surface?.primary ??
          (mode === "light" ? "#ffffff" : "#1a1a1a"),
        color:
          tokenSet.text?.primary ?? (mode === "light" ? "#1a1a1a" : "#f0f0f0"),
        padding: "1rem",
        borderRadius: "8px",
        // Add subtle border using theme border.subtle for visibility
        border: `1px solid ${tokenSet.border?.subtle ?? "rgba(0,0,0,0.1)"}`,
      }}
      data-theme-mode={mode}
      data-theme-contrast={contrast}
    >
      {children}
    </div>
  );
}

export default ThemePreview;
