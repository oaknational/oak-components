import { parseSpacing } from "@/styles/helpers/parseSpacing";

describe("parseSpacing", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseSpacing(null)).toBeUndefined();
    expect(parseSpacing()).toBeUndefined();
  });

  it("should return the corresponding css value for an OakAllSpacing type", () => {
    expect(parseSpacing("all-spacing-2")).toBe("0.5rem");
  });

  it("should return the corresponding css value for an OakInnerPadding type", () => {
    expect(parseSpacing("inner-padding-xs")).toBe("0.5rem");
  });

  it("should return the corresponding css value for an OakSpaceBetween type", () => {
    expect(parseSpacing("space-between-ssx")).toBe("0.5rem");
  });

  it("should pass through percentages", () => {
    expect(parseSpacing("100%")).toBe("100%");
  });

  it("should pass through accepted numbers", () => {
    expect(parseSpacing(0)).toBe(0);
  });

  it("should pass through accepted css values", () => {
    expect(parseSpacing("auto")).toBe("auto");
  });
});
