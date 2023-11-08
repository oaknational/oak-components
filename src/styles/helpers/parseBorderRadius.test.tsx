import { parseRadius } from "@/styles/helpers/parseBorderRadius";

describe("parseRadius", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseRadius(null)).toBeUndefined();
    expect(parseRadius()).toBeUndefined();
  });
});