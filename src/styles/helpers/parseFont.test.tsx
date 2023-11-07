import {
  parseFontSize,
  parseFontWeight,
  parseLetterSpacing,
  parseLineHeight,
} from "./parseFont";

describe("parseFontSize", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseFontSize(null)).toBeUndefined();
    expect(parseFontSize()).toBeUndefined();
  });
});
describe("parseLineHeight", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseLineHeight(null)).toBeUndefined();
    expect(parseLineHeight()).toBeUndefined();
  });
});
describe("parseLetterSpacing", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseLetterSpacing(null)).toBeUndefined();
    expect(parseLetterSpacing()).toBeUndefined();
  });
});
describe("parseFontWeight", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseFontWeight(null)).toBeUndefined();
    expect(parseFontWeight()).toBeUndefined();
  });
});
