import {
  generateTheme,
  type BrandColors,
  type GenerateThemeResult,
} from "./generateTheme";
import { checkContrast } from "./contrastUtils";

describe("generateTheme", () => {
  describe("single color input", () => {
    it("generates complete theme from single brand color", () => {
      const brand: BrandColors = { primary: "#287c34" };
      const result: GenerateThemeResult = generateTheme(brand);

      // Both light and dark modes are complete
      expect(result.theme.light).toBeDefined();
      expect(result.theme.dark).toBeDefined();

      // All categories present
      expect(result.theme.light.surface.primary).toBeDefined();
      expect(result.theme.light.text.primary).toBeDefined();
      expect(result.theme.light.border.subtle).toBeDefined();
      expect(result.theme.light.interactive.primary).toBeDefined();
      expect(result.theme.light.shadow.subtle).toBeDefined();
    });

    it("ensures all text passes AA contrast", () => {
      const result = generateTheme({ primary: "#287c34" });

      const lightContrast = checkContrast(
        result.theme.light.text.primary,
        result.theme.light.surface.primary,
      );
      expect(lightContrast.passesAA).toBe(true);

      const darkContrast = checkContrast(
        result.theme.dark.text.primary,
        result.theme.dark.surface.primary,
      );
      expect(darkContrast.passesAA).toBe(true);
    });

    it("returns empty warnings for valid input", () => {
      const result = generateTheme({ primary: "#287c34" });
      expect(Array.isArray(result.warnings)).toBe(true);
      expect(result.warnings).toHaveLength(0);
    });
  });

  describe("two color input", () => {
    it("uses secondary color for accents", () => {
      const result = generateTheme({
        primary: "#287c34",
        secondary: "#7c2834",
      });

      expect(result.theme.light.text.accent).toBeDefined();
      expect(result.theme.light.border.accent).toBeDefined();
    });

    it("generates complete theme with two colors", () => {
      const result = generateTheme({
        primary: "#287c34",
        secondary: "#7c2834",
      });

      expect(result.theme.light).toBeDefined();
      expect(result.theme.dark).toBeDefined();
    });
  });

  describe("options", () => {
    it("generates high contrast variants when requested", () => {
      const result = generateTheme(
        { primary: "#287c34" },
        { includeHighContrast: true },
      );

      expect(result.theme.highContrastLight).toBeDefined();
      expect(result.theme.highContrastDark).toBeDefined();
    });

    it("ensures AAA contrast when requested", () => {
      const result = generateTheme({ primary: "#287c34" }, { contrast: "AAA" });

      const contrast = checkContrast(
        result.theme.light.text.primary,
        result.theme.light.surface.primary,
      );
      expect(contrast.passesAAA).toBe(true);
    });
  });

  describe("input validation", () => {
    it("throws for invalid hex", () => {
      expect(() => generateTheme({ primary: "#gggggg" })).toThrow(TypeError);
      expect(() => generateTheme({ primary: "" })).toThrow(TypeError);
      expect(() => generateTheme({ primary: "ffffff" })).toThrow(TypeError);
    });

    it("accepts 3-char hex", () => {
      const result = generateTheme({ primary: "#abc" });
      expect(result.theme.light).toBeDefined();
    });

    it("throws for invalid secondary color", () => {
      expect(() =>
        generateTheme({ primary: "#287c34", secondary: "#invalid" }),
      ).toThrow(TypeError);
    });
  });

  describe("edge cases", () => {
    it("handles very light colors", () => {
      const result = generateTheme({ primary: "#fafafa" });
      expect(result.theme.light).toBeDefined();
      expect(result.theme.dark).toBeDefined();
    });

    it("handles very dark colors", () => {
      const result = generateTheme({ primary: "#0a0a0a" });
      expect(result.theme.light).toBeDefined();
      expect(result.theme.dark).toBeDefined();
    });

    it("handles pure white", () => {
      const result = generateTheme({ primary: "#ffffff" });
      expect(result.theme.light).toBeDefined();
    });

    it("handles pure black", () => {
      const result = generateTheme({ primary: "#000000" });
      expect(result.theme.dark).toBeDefined();
    });
  });
});
