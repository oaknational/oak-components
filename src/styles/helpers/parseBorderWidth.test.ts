import { parseBorderWidth } from "./parseBorderWidth";

describe(parseBorderWidth, () => {
  it("turns a border width token into the corresponding value in rems", () => {
    expect(parseBorderWidth("border-solid-m")).toEqual("0.125rem");
  });

  it("should return undefined if value is null or undefined", () => {
    expect(parseBorderWidth(null)).toBeUndefined();
    expect(parseBorderWidth(undefined)).toBeUndefined();
  });
});
