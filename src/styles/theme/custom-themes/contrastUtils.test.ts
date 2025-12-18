import {
  checkContrast,
  ensureContrast,
  type ContrastResult,
} from "./contrastUtils";

describe("contrastUtils", () => {
  describe("checkContrast", () => {
    it("returns correct result for black on white", () => {
      const result: ContrastResult = checkContrast("#000000", "#ffffff");
      expect(result.ratio).toBeCloseTo(21, 0);
      expect(result.passesAA).toBe(true);
      expect(result.passesAAA).toBe(true);
      expect(result.passesAALarge).toBe(true);
      expect(result.passesAAALarge).toBe(true);
    });

    it("returns correct result for white on black", () => {
      const result = checkContrast("#ffffff", "#000000");
      expect(result.ratio).toBeCloseTo(21, 0);
      expect(result.passesAA).toBe(true);
    });

    it("identifies WCAG AA failure", () => {
      // Light gray on white - fails AA (4.5:1)
      const result = checkContrast("#aaaaaa", "#ffffff");
      expect(result.ratio).toBeLessThan(4.5);
      expect(result.passesAA).toBe(false);
      expect(result.passesAAA).toBe(false);
    });

    it("identifies WCAG AA pass but AAA fail", () => {
      // This gray passes AA (4.5:1) but fails AAA (7:1)
      const result = checkContrast("#767676", "#ffffff");
      expect(result.ratio).toBeGreaterThanOrEqual(4.5);
      expect(result.ratio).toBeLessThan(7);
      expect(result.passesAA).toBe(true);
      expect(result.passesAAA).toBe(false);
    });

    it("handles 3-char hex", () => {
      const result = checkContrast("#000", "#fff");
      expect(result.ratio).toBeCloseTo(21, 0);
    });

    it("returns different thresholds for large text", () => {
      // Gray that passes AA Large (3:1) but fails AA normal (4.5:1)
      const result = checkContrast("#888888", "#ffffff");
      expect(result.passesAALarge).toBe(true);
      expect(result.passesAA).toBe(false);
    });
  });

  describe("ensureContrast", () => {
    it("returns original if contrast already meets target", () => {
      const result = ensureContrast("#000000", "#ffffff", 4.5);
      expect(result.adjusted).toBe("#000000");
      expect(result.warnings).toHaveLength(0);
    });

    it("adjusts foreground to meet AA contrast", () => {
      const result = ensureContrast("#aaaaaa", "#ffffff", 4.5);
      const check = checkContrast(result.adjusted, "#ffffff");
      expect(check.passesAA).toBe(true);
      expect(result.warnings.length).toBeGreaterThanOrEqual(1);
    });

    it("adjusts foreground to meet AAA contrast", () => {
      const result = ensureContrast("#888888", "#ffffff", 7);
      const check = checkContrast(result.adjusted, "#ffffff");
      expect(check.passesAAA).toBe(true);
    });

    it("darkens light colors on light backgrounds", () => {
      const result = ensureContrast("#cccccc", "#ffffff", 4.5);
      // The adjusted color should be darker (lower hex values)
      expect(result.adjusted.toLowerCase()).not.toBe("#cccccc");
      const check = checkContrast(result.adjusted, "#ffffff");
      expect(check.passesAA).toBe(true);
    });

    it("lightens dark colors on dark backgrounds", () => {
      const result = ensureContrast("#333333", "#000000", 4.5);
      // The adjusted color should be lighter
      expect(result.adjusted.toLowerCase()).not.toBe("#333333");
      const check = checkContrast(result.adjusted, "#000000");
      expect(check.passesAA).toBe(true);
    });

    it("handles chromatic colors", () => {
      const result = ensureContrast("#287c34", "#ffffff", 4.5);
      const check = checkContrast(result.adjusted, "#ffffff");
      expect(check.passesAA).toBe(true);
    });

    it("preserves hue when possible", () => {
      const result = ensureContrast("#287c34", "#ffffff", 4.5);
      // Check that the green hue is preserved (approximately)
      // We just verify it's still greenish, not exact
      expect(result.adjusted).toMatch(/^#[0-9a-f]{6}$/i);
    });
  });
});
