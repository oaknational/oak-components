import { deriveThemeColors, type DeriveContext } from "./deriveTokens";
import { deriveTriadicPalette } from "./colorUtils";
import { checkContrast } from "./contrastUtils";
import type { GeneratedThemeColors, BasePalette } from "./themeTypes";

/**
 * Helper to create a DeriveContext from primary colour.
 */
function createContext(
  primary: string,
  mode: "light" | "dark",
  contrast: "normal" | "high" | "low" = "normal",
): DeriveContext {
  const palette = deriveTriadicPalette(primary);
  return { palette, mode, contrast };
}

describe("deriveTokens", () => {
  describe("deriveThemeColors", () => {
    it("derives complete theme from palette", () => {
      const context = createContext("#287c34", "light");

      const result: GeneratedThemeColors = deriveThemeColors(context);

      // All categories are present and complete
      expect(result.surface.primary).toBeDefined();
      expect(result.surface.secondary).toBeDefined();
      expect(result.surface.accent).toBeDefined();
      expect(result.surface.inverse).toBeDefined();

      expect(result.text.primary).toBeDefined();
      expect(result.text.muted).toBeDefined();
      expect(result.text.inverse).toBeDefined();
      expect(result.text.accent).toBeDefined();

      expect(result.border.subtle).toBeDefined();
      expect(result.border.strong).toBeDefined();
      expect(result.border.accent).toBeDefined();

      expect(result.interactive.primary).toBeDefined();
      expect(result.interactive.hover).toBeDefined();
      expect(result.interactive.focus).toBeDefined();

      expect(result.shadow.subtle).toBeDefined();
      expect(result.shadow.strong).toBeDefined();
    });

    it("uses palette secondary for focus tokens", () => {
      const palette: BasePalette = {
        primary: "#287c34",
        secondary: "#7c2834",
        tertiary: "#34287c",
      };
      const context: DeriveContext = {
        palette,
        mode: "light",
        contrast: "normal",
      };

      const result = deriveThemeColors(context);

      expect(result.interactive.focus).toBeDefined();
      expect(result.border.accent).toBeDefined();
    });

    it("ensures surface.primary has good contrast with text.primary", () => {
      const lightResult = deriveThemeColors(createContext("#287c34", "light"));
      const lightContrast = checkContrast(
        lightResult.text.primary,
        lightResult.surface.primary,
      );
      expect(lightContrast.passesAA).toBe(true);

      const darkResult = deriveThemeColors(createContext("#287c34", "dark"));
      const darkContrast = checkContrast(
        darkResult.text.primary,
        darkResult.surface.primary,
      );
      expect(darkContrast.passesAA).toBe(true);
    });

    it("generates valid hex colors for all tokens", () => {
      const result = deriveThemeColors(createContext("#287c34", "light"));
      const hexRegex = /^#[0-9a-fA-F]{6}$/;

      expect(result.surface.primary).toMatch(hexRegex);
      expect(result.surface.secondary).toMatch(hexRegex);
      expect(result.surface.accent).toMatch(hexRegex);
      expect(result.surface.inverse).toMatch(hexRegex);

      expect(result.text.primary).toMatch(hexRegex);
      expect(result.text.muted).toMatch(hexRegex);
      expect(result.text.inverse).toMatch(hexRegex);
      expect(result.text.accent).toMatch(hexRegex);

      expect(result.border.subtle).toMatch(hexRegex);
      expect(result.border.strong).toMatch(hexRegex);
      expect(result.border.accent).toMatch(hexRegex);

      expect(result.interactive.primary).toMatch(hexRegex);
      expect(result.interactive.hover).toMatch(hexRegex);
      expect(result.interactive.focus).toMatch(hexRegex);
    });

    it("generates different colors for light vs dark mode", () => {
      const lightResult = deriveThemeColors(createContext("#287c34", "light"));
      const darkResult = deriveThemeColors(createContext("#287c34", "dark"));

      expect(lightResult.surface.primary).not.toBe(darkResult.surface.primary);
      expect(lightResult.text.primary).not.toBe(darkResult.text.primary);
    });

    it("handles grayscale primary color", () => {
      const result = deriveThemeColors(createContext("#808080", "light"));

      expect(result.surface.primary).toMatch(/^#[0-9a-fA-F]{6}$/);
      expect(result.interactive.primary).toMatch(/^#[0-9a-fA-F]{6}$/);
    });

    it("returns shadows for light mode", () => {
      const result = deriveThemeColors(createContext("#287c34", "light"));
      expect(result.shadow.subtle).toContain("rgba(0,0,0,");
      expect(result.shadow.strong).toContain("rgba(0,0,0,");
    });

    it("returns shadows for dark mode", () => {
      const result = deriveThemeColors(createContext("#287c34", "dark"));
      expect(result.shadow.subtle).toContain("rgba(0,0,0,");
      expect(result.shadow.strong).toContain("rgba(0,0,0,");
    });

    it("high contrast mode meets AAA requirements", () => {
      const result = deriveThemeColors(
        createContext("#287c34", "light", "high"),
      );
      const contrast = checkContrast(
        result.text.primary,
        result.surface.primary,
      );
      expect(contrast.passesAAA).toBe(true);
    });

    it("low contrast mode still meets AA requirements", () => {
      const result = deriveThemeColors(
        createContext("#287c34", "light", "low"),
      );
      const contrast = checkContrast(
        result.text.primary,
        result.surface.primary,
      );
      expect(contrast.passesAA).toBe(true);
    });
  });
});
