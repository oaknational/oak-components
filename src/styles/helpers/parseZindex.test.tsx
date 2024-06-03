import { parseZIndex } from "@/styles/helpers/parseZIndex";
import { OakZIndexToken } from "@/styles/theme/zIndex";

describe("parseZindex", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseZIndex(null)).toBeUndefined();
    expect(parseZIndex()).toBeUndefined();
  });

  it.each([
    ["in-front", 1],
    ["mobile-filters", 2],
    ["always-on-top", 9999],
  ])("should correctly handle props", (value, expected) => {
    expect(parseZIndex(value as OakZIndexToken)).toBe(expected);
  });
});
