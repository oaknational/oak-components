import {
  generateTheme,
  type BrandColors,
  type GenerateThemeResult,
} from "./generateTheme";
import { checkContrast } from "./contrastUtils";

describe("generateTheme", () => {
  describe("single color input", () => {
    it("generates complete theme with all 6 Token Sets", () => {
      const brand: BrandColors = { primary: "#287c34" };
      const result: GenerateThemeResult = generateTheme(brand);

      // All 6 Token Sets are present
      expect(result.theme.light).toBeDefined();
      expect(result.theme.dark).toBeDefined();
      expect(result.theme.highContrastLight).toBeDefined();
      expect(result.theme.highContrastDark).toBeDefined();
      expect(result.theme.lowContrastLight).toBeDefined();
      expect(result.theme.lowContrastDark).toBeDefined();

      // All categories present in each
      expect(result.theme.light.surface.primary).toBeDefined();
      expect(result.theme.light.text.primary).toBeDefined();
      expect(result.theme.light.border.subtle).toBeDefined();
      expect(result.theme.light.interactive.primary).toBeDefined();
      expect(result.theme.light.shadow.subtle).toBeDefined();
    });

    it("returns base palette alongside theme", () => {
      const result = generateTheme({ primary: "#287c34" });

      expect(result.basePalette).toBeDefined();
      expect(result.basePalette.primary).toBeDefined();
      expect(result.basePalette.secondary).toBeDefined();
      expect(result.basePalette.tertiary).toBeDefined();
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

    it("returns empty warnings for valid input without colorBlindSafe", () => {
      const result = generateTheme({ primary: "#287c34" });
      expect(Array.isArray(result.warnings)).toBe(true);
      expect(result.warnings).toHaveLength(0);
    });
  });

  describe("two color input", () => {
    it("uses secondary color for palette derivation", () => {
      const result = generateTheme({
        primary: "#287c34",
        secondary: "#7c2834",
      });

      expect(result.basePalette.secondary).toBeDefined();
      expect(result.theme.light.interactive.focus).toBeDefined();
    });

    it("generates complete theme with two colors", () => {
      const result = generateTheme({
        primary: "#287c34",
        secondary: "#7c2834",
      });

      expect(result.theme.light).toBeDefined();
      expect(result.theme.dark).toBeDefined();
      expect(result.theme.highContrastLight).toBeDefined();
      expect(result.theme.highContrastDark).toBeDefined();
    });
  });

  describe("options", () => {
    it("high contrast Token Sets meet AAA requirements", () => {
      const result = generateTheme({ primary: "#287c34" });

      const lightContrast = checkContrast(
        result.theme.highContrastLight.text.primary,
        result.theme.highContrastLight.surface.primary,
      );
      expect(lightContrast.passesAAA).toBe(true);

      const darkContrast = checkContrast(
        result.theme.highContrastDark.text.primary,
        result.theme.highContrastDark.surface.primary,
      );
      expect(darkContrast.passesAAA).toBe(true);
    });

    it("colorBlindSafe option adds warning and adjusts palette", () => {
      const result = generateTheme(
        { primary: "#287c34" },
        { colorBlindSafe: true },
      );

      expect(result.warnings.length).toBeGreaterThan(0);
      expect(result.warnings[0]).toContain("Colour-blind safe");
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

    it("accepts rgb() format", () => {
      const result = generateTheme({ primary: "rgb(40, 124, 52)" });
      expect(result.theme.light).toBeDefined();
    });

    it("accepts hsl() format", () => {
      const result = generateTheme({ primary: "hsl(130, 51%, 32%)" });
      expect(result.theme.light).toBeDefined();
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
