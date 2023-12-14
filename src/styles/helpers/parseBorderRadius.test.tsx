import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";

describe("parseBorderRadius", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseBorderRadius(null)).toBeUndefined();
    expect(parseBorderRadius()).toBeUndefined();
  });
});
