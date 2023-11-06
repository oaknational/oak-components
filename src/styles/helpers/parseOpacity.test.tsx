import { parseOpacity } from "./parseOpacity";

describe("parseOpacity", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseOpacity(null)).toBeUndefined();
    expect(parseOpacity()).toBeUndefined();
  });
});
