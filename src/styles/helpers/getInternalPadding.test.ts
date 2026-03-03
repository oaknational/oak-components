import { getInternalPadding, MAX_PADDING } from "./getInternalPadding";

describe("getInternalPadding", () => {
  it("returns the correct padding value for a single height string", () => {
    const height = "spacing-32";
    const expectedPadding = Math.floor((32 - Math.ceil(18 * 1.4)) / 2) - 1;
    expect(getInternalPadding(height)).toBe(`${expectedPadding}px`);
  });

  it("returns the padding for a height of 40 when no valid height is provided", () => {
    const expectedPadding = Math.floor((40 - Math.ceil(18 * 1.4)) / 2) - 1;
    expect(getInternalPadding(undefined)).toBe(`${expectedPadding}px`);
  });

  it("returns the max padding if height is more than line height plus twice the default padding", () => {
    expect(getInternalPadding("spacing-120")).toBe(`${MAX_PADDING}px`);
  });

  it("returns zero padding if height is less than line height plus twice the default padding", () => {
    expect(getInternalPadding("spacing-8")).toBe(`0px`);
  });
});
