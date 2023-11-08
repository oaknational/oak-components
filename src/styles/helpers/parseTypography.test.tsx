import {
  parseFontSize,
  parseFontWeight,
  parseLetterSpacing,
  parseLineHeight,
} from "./parseTypography";

describe("parseFontSize", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseFontSize(null)).toBeUndefined();
    expect(parseFontSize()).toBeUndefined();
  });
  it("should return correct string for value", () => {
    expect(parseFontSize("heading-1")).toBe("3.5rem");
  });
});
describe("parseLineHeight", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseLineHeight(null)).toBeUndefined();
    expect(parseLineHeight()).toBeUndefined();
  });
  it("should return correct string for value", () => {
    expect(parseLineHeight("heading-1")).toBe("4rem");
  });
});
describe("parseLetterSpacing", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseLetterSpacing(null)).toBeUndefined();
    expect(parseLetterSpacing()).toBeUndefined();
  });
  it("should return correct string for value", () => {
    expect(parseLetterSpacing("heading-1")).toBe("0.0115em");
  });
});
describe("parseFontWeight", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseFontWeight(null)).toBeUndefined();
    expect(parseFontWeight()).toBeUndefined();
  });
  it("should return correct string for value", () => {
    expect(parseFontWeight("heading-1")).toBe(600);
  });
});
