import { parseColorFilter } from "./parseColorFilter";

describe("parseColor", () => {
  it("should return undefined if value is undefined", () => {
    expect(parseColorFilter()).toBeUndefined();
  });

  it("should return undefined if value is null", () => {
    expect(parseColorFilter(null)).toBeUndefined();
  });

  it("should return the correct filter if value is a valid colorFIlterToken", () => {
    expect(parseColorFilter("red")).toBe(
      "invert(13%) sepia(78%) saturate(5255%) hue-rotate(337deg) brightness(88%) contrast(111%)",
    );
  });
});
