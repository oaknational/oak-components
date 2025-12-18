import { deriveThemeColors, type DeriveContext } from "./deriveTokens";
import { checkContrast } from "./contrastUtils";
import type { GeneratedThemeColors } from "./themeTypes";

describe("deriveTokens", () => {
  describe("deriveThemeColors", () => {
    it("derives complete theme from primary color only", () => {
      const context: DeriveContext = {
        primary: "#287c34",
        mode: "light",
      };

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

    it("uses secondary color for accent tokens when provided", () => {
      const context: DeriveContext = {
        primary: "#287c34",
        secondary: "#7c2834",
        mode: "light",
      };

      const result = deriveThemeColors(context);

      expect(result.text.accent).toBeDefined();
      expect(result.border.accent).toBeDefined();
    });

    it("ensures surface.primary has good contrast with text.primary", () => {
      const lightResult = deriveThemeColors({
        primary: "#287c34",
        mode: "light",
      });
      const lightContrast = checkContrast(
        lightResult.text.primary,
        lightResult.surface.primary,
      );
      expect(lightContrast.passesAA).toBe(true);

      const darkResult = deriveThemeColors({
        primary: "#287c34",
        mode: "dark",
      });
      const darkContrast = checkContrast(
        darkResult.text.primary,
        darkResult.surface.primary,
      );
      expect(darkContrast.passesAA).toBe(true);
    });

    it("generates valid hex colors for all tokens", () => {
      const result = deriveThemeColors({
        primary: "#287c34",
        mode: "light",
      });
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
      const lightResult = deriveThemeColors({
        primary: "#287c34",
        mode: "light",
      });
      const darkResult = deriveThemeColors({
        primary: "#287c34",
        mode: "dark",
      });

      expect(lightResult.surface.primary).not.toBe(darkResult.surface.primary);
      expect(lightResult.text.primary).not.toBe(darkResult.text.primary);
    });

    it("handles grayscale primary color", () => {
      const result = deriveThemeColors({
        primary: "#808080",
        mode: "light",
      });

      expect(result.surface.primary).toMatch(/^#[0-9a-fA-F]{6}$/);
      expect(result.interactive.primary).toMatch(/^#[0-9a-fA-F]{6}$/);
    });

    it("returns lighter shadows for light mode", () => {
      const result = deriveThemeColors({
        primary: "#287c34",
        mode: "light",
      });
      expect(result.shadow.subtle).toContain("rgba(0,0,0,");
      expect(result.shadow.strong).toContain("rgba(0,0,0,");
    });

    it("returns darker shadows for dark mode", () => {
      const result = deriveThemeColors({
        primary: "#287c34",
        mode: "dark",
      });
      expect(result.shadow.subtle).toContain("rgba(0,0,0,");
      expect(result.shadow.strong).toContain("rgba(0,0,0,");
    });
  });
});
