import { parseDropShadow } from "./parseDropShadow";

describe("parseDropShadow", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseDropShadow(null)).toBeUndefined();
    expect(parseDropShadow()).toBeUndefined();
  });
});
