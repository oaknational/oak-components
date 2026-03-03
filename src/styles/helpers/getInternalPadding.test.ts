import { getInternalPadding } from "./getInternalPadding";

describe("getInternalPadding", () => {
  it("returns the correct padding value for a single height string", () => {
    const height = "spacing-80";
    const expectedPadding = Math.floor((80 - Math.ceil(18 * 1.4)) / 2) - 1;
    expect(getInternalPadding(height)).toBe(`${expectedPadding}px`);
  });

  it("returns the padding for a height of 56 when no valid height is provided", () => {
    const expectedPadding = Math.floor((56 - Math.ceil(18 * 1.4)) / 2) - 1;
    expect(getInternalPadding(undefined)).toBe(`${expectedPadding}px`);
  });
});
