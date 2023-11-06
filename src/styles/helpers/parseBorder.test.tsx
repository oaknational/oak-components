import { parseBorder } from "./parseBorder";

describe("parseBorder", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseBorder(null)).toBeUndefined();
    expect(parseBorder()).toBeUndefined();
  });
});
