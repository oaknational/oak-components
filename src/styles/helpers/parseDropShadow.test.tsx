import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

describe("parseDropShadow", () => {
  it("should return none if value is null", () => {
    expect(parseDropShadow(null)).toBe("none");
  });

  it("should return undefined if undefined", () => {
    expect(parseDropShadow()).toBeUndefined();
  });
});
