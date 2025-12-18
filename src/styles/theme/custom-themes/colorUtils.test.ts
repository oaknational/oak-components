import {
  hexToOklch,
  oklchToHex,
  getContrastRatio,
  adjustLightness,
  adjustHue,
  isValidHex,
  expandHex,
  parseColor,
} from "./colorUtils";

describe("colorUtils", () => {
  describe("isValidHex", () => {
    it("returns true for valid 6-char hex", () => {
      expect(isValidHex("#ffffff")).toBe(true);
      expect(isValidHex("#000000")).toBe(true);
      expect(isValidHex("#287c34")).toBe(true);
    });

    it("returns true for valid 3-char hex", () => {
      expect(isValidHex("#fff")).toBe(true);
      expect(isValidHex("#abc")).toBe(true);
    });

    it("returns false for invalid hex", () => {
      expect(isValidHex("#gggggg")).toBe(false);
      expect(isValidHex("ffffff")).toBe(false);
      expect(isValidHex("#12345")).toBe(false);
      expect(isValidHex("")).toBe(false);
    });
  });

  describe("expandHex", () => {
    it("expands 3-char hex to 6-char", () => {
      expect(expandHex("#fff")).toBe("#ffffff");
      expect(expandHex("#abc")).toBe("#aabbcc");
      expect(expandHex("#000")).toBe("#000000");
    });

    it("returns 6-char hex unchanged", () => {
      expect(expandHex("#ffffff")).toBe("#ffffff");
      expect(expandHex("#287c34")).toBe("#287c34");
    });
  });

  describe("hexToOklch", () => {
    it("converts white to OKLCH", () => {
      const result = hexToOklch("#ffffff");
      expect(result.l).toBeCloseTo(1, 1); // Lightness ~1
      expect(result.c).toBeCloseTo(0, 2); // Chroma ~0 (achromatic)
    });

    it("converts black to OKLCH", () => {
      const result = hexToOklch("#000000");
      expect(result.l).toBeCloseTo(0, 1); // Lightness ~0
      expect(result.c).toBeCloseTo(0, 2); // Chroma ~0 (achromatic)
    });

    it("converts chromatic color", () => {
      const result = hexToOklch("#287c34"); // Oak green
      expect(result.l).toBeGreaterThan(0.3);
      expect(result.l).toBeLessThan(0.6);
      expect(result.c).toBeGreaterThan(0.05); // Has chroma
      expect(result.h).toBeGreaterThan(100); // Green hue range
      expect(result.h).toBeLessThan(160);
    });
  });

  describe("oklchToHex", () => {
    it("converts white OKLCH to hex", () => {
      const result = oklchToHex({ l: 1, c: 0, h: 0 });
      expect(result).toBe("#ffffff");
    });

    it("converts black OKLCH to hex", () => {
      const result = oklchToHex({ l: 0, c: 0, h: 0 });
      expect(result).toBe("#000000");
    });

    it("roundtrips chromatic color", () => {
      const original = "#287c34";
      const oklch = hexToOklch(original);
      const roundtrip = oklchToHex(oklch);
      // Allow slight variance due to color space conversion
      expect(roundtrip.toLowerCase()).toBe(original.toLowerCase());
    });
  });

  describe("getContrastRatio", () => {
    it("returns 21:1 for black on white", () => {
      const ratio = getContrastRatio("#000000", "#ffffff");
      expect(ratio).toBeCloseTo(21, 0);
    });

    it("returns 21:1 for white on black", () => {
      const ratio = getContrastRatio("#ffffff", "#000000");
      expect(ratio).toBeCloseTo(21, 0);
    });

    it("returns 1:1 for same colors", () => {
      const ratio = getContrastRatio("#287c34", "#287c34");
      expect(ratio).toBeCloseTo(1, 1);
    });

    it("calculates mid-range contrast correctly", () => {
      // Gray on white should be around 4-5:1
      const ratio = getContrastRatio("#767676", "#ffffff");
      expect(ratio).toBeGreaterThanOrEqual(4);
      expect(ratio).toBeLessThan(5);
    });
  });

  describe("adjustLightness", () => {
    it("lightens a color", () => {
      const lighter = adjustLightness("#287c34", 0.2);
      const originalOklch = hexToOklch("#287c34");
      const lighterOklch = hexToOklch(lighter);
      expect(lighterOklch.l).toBeGreaterThan(originalOklch.l);
    });

    it("darkens a color", () => {
      const darker = adjustLightness("#287c34", -0.2);
      const originalOklch = hexToOklch("#287c34");
      const darkerOklch = hexToOklch(darker);
      expect(darkerOklch.l).toBeLessThan(originalOklch.l);
    });

    it("clamps lightness to valid range", () => {
      const maxLight = adjustLightness("#ffffff", 0.5);
      const maxLightOklch = hexToOklch(maxLight);
      expect(maxLightOklch.l).toBeLessThanOrEqual(1);

      const minLight = adjustLightness("#000000", -0.5);
      const minLightOklch = hexToOklch(minLight);
      expect(minLightOklch.l).toBeGreaterThanOrEqual(0);
    });
  });

  describe("adjustHue", () => {
    it("rotates hue by positive degrees", () => {
      const original = hexToOklch("#287c34");
      const rotated = adjustHue("#287c34", 30);
      const rotatedOklch = hexToOklch(rotated);

      // Hue should be shifted approximately 30 degrees (allow ±10 for OKLCH variance)
      const hueDiff = Math.abs(rotatedOklch.h - original.h);
      expect(hueDiff).toBeGreaterThan(20);
      expect(hueDiff).toBeLessThan(40);
    });

    it("rotates hue by negative degrees", () => {
      const original = hexToOklch("#287c34");
      const rotated = adjustHue("#287c34", -30);
      const rotatedOklch = hexToOklch(rotated);

      // Hue should wrap correctly
      expect(rotatedOklch.h).not.toBe(original.h);
    });

    it("wraps hue around 360", () => {
      const rotated = adjustHue("#287c34", 360);
      const original = "#287c34";
      // Full rotation should return similar color
      expect(rotated.toLowerCase()).toBe(original.toLowerCase());
    });
  });

  describe("parseColor", () => {
    it("parses hex colors", () => {
      expect(parseColor("#ffffff")).toBe("#ffffff");
      expect(parseColor("#fff")).toBe("#ffffff");
      expect(parseColor("#287c34")).toBe("#287c34");
    });

    it("parses rgb() colors", () => {
      expect(parseColor("rgb(255, 255, 255)")).toBe("#ffffff");
      expect(parseColor("rgb(0, 0, 0)")).toBe("#000000");
      expect(parseColor("rgb(40, 124, 52)")).toBe("#287c34");
    });

    it("parses rgba() colors (ignores alpha)", () => {
      expect(parseColor("rgba(255, 255, 255, 0.5)")).toBe("#ffffff");
      expect(parseColor("rgba(0, 0, 0, 1)")).toBe("#000000");
    });

    it("parses hsl() colors", () => {
      expect(parseColor("hsl(0, 0%, 100%)")).toBe("#ffffff");
      expect(parseColor("hsl(0, 0%, 0%)")).toBe("#000000");
      // Green: approximately 129deg, 51% sat, 32% light
      const parsed = parseColor("hsl(129, 51%, 32%)");
      expect(parsed).toMatch(/^#[0-9a-f]{6}$/i);
    });

    it("parses hsla() colors (ignores alpha)", () => {
      expect(parseColor("hsla(0, 0%, 100%, 0.5)")).toBe("#ffffff");
      expect(parseColor("hsla(0, 0%, 0%, 1)")).toBe("#000000");
    });

    it("returns null for invalid colors", () => {
      expect(parseColor("invalid")).toBe(null);
      expect(parseColor("")).toBe(null);
      expect(parseColor("red")).toBe(null); // Named colors not supported
    });
  });
});
