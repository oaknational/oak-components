import { buildCss } from "./buildCss";
import type { CustomThemeConfig } from "./CustomThemeProvider";

describe("buildCss", () => {
  const minimalConfig: CustomThemeConfig = {
    light: {
      surface: { primary: "#ffffff" },
      text: { primary: "#222222" },
    },
    dark: {
      surface: { primary: "#1a1a1a" },
      text: { primary: "#f0f0f0" },
    },
  };

  it("generates :root with color-scheme declaration", () => {
    const css = buildCss(minimalConfig);
    expect(css).toContain(":root {");
    expect(css).toContain("color-scheme: light dark;");
  });

  it("generates light-dark() for tokens defined in both modes", () => {
    const css = buildCss(minimalConfig);
    expect(css).toContain(
      "--custom-surface-primary: light-dark(#ffffff, #1a1a1a);",
    );
    expect(css).toContain(
      "--custom-text-primary: light-dark(#222222, #f0f0f0);",
    );
  });

  it("omits tokens not defined in both modes", () => {
    const partialConfig: CustomThemeConfig = {
      light: { surface: { primary: "#fff" }, text: { primary: "#000" } },
      dark: { surface: { primary: "#000" }, text: {} },
    };
    const css = buildCss(partialConfig);
    expect(css).not.toContain("--custom-text-primary");
  });

  it("generates all defined tokens", () => {
    const fullConfig: CustomThemeConfig = {
      light: {
        surface: { primary: "#fff", secondary: "#f5f5f5" },
        text: { primary: "#222", muted: "#666" },
        border: { subtle: "#e0e0e0" },
        interactive: { primary: "#287c34" },
        shadow: { subtle: "rgba(0,0,0,0.1)" },
      },
      dark: {
        surface: { primary: "#1a1a1a", secondary: "#2a2a2a" },
        text: { primary: "#f0f0f0", muted: "#999" },
        border: { subtle: "#3a3a3a" },
        interactive: { primary: "#4a9f54" },
        shadow: { subtle: "rgba(0,0,0,0.2)" },
      },
    };
    const css = buildCss(fullConfig);
    expect(css).toContain("--custom-surface-secondary");
    expect(css).toContain("--custom-text-muted");
    expect(css).toContain("--custom-border-subtle");
    expect(css).toContain("--custom-interactive-primary");
    expect(css).toContain("--custom-shadow-subtle");
  });

  it("generates high-contrast media query when highContrast modes provided", () => {
    const hcConfig: CustomThemeConfig = {
      ...minimalConfig,
      highContrastLight: {
        surface: { primary: "#ffffff" },
        text: { primary: "#000000" },
      },
      highContrastDark: {
        surface: { primary: "#000000" },
        text: { primary: "#ffffff" },
      },
    };
    const css = buildCss(hcConfig);
    expect(css).toContain("@media (prefers-contrast: more)");
    expect(css).toContain("light-dark(#000000, #ffffff)");
  });

  it("does not generate high-contrast when modes not provided", () => {
    const css = buildCss(minimalConfig);
    expect(css).not.toContain("@media (prefers-contrast: more)");
  });

  it("generates low-contrast media query when lowContrast modes provided", () => {
    const lcConfig: CustomThemeConfig = {
      ...minimalConfig,
      lowContrastLight: {
        surface: { primary: "#fafafa" },
        text: { primary: "#404040" },
      },
      lowContrastDark: {
        surface: { primary: "#2a2a2a" },
        text: { primary: "#c0c0c0" },
      },
    };
    const css = buildCss(lcConfig);
    expect(css).toContain("@media (prefers-contrast: less)");
  });

  it("is a pure function - same input produces same output", () => {
    const css1 = buildCss(minimalConfig);
    const css2 = buildCss(minimalConfig);
    expect(css1).toBe(css2);
  });
});
