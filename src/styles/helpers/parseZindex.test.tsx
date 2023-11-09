import { parseZIndex } from "@/styles/helpers/parseZIndex";

// "in-front": 1,
// "mobile-filters": 2,
// "fixed-header": 100,
// "modal-close-button": 150,
// "modal-dialog": 300,

describe("parseZindex", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseZIndex(null)).toBeUndefined();
    expect(parseZIndex()).toBeUndefined();
  });

  // it.each([["in-front", "zIndex: 1;"]], (value, expected) => {
  //   expect(parseZIndex(value)).toBe(expected);
  // });
});
