import { getFontSize } from "./getFontSize";

describe("getFontSize", () => {
  it("returns the correct font size in pixels for heading-1", () => {
    expect(getFontSize("heading-1")).toBe(56);
  });
  it("returns the correct font size in pixels for body-1", () => {
    expect(getFontSize("body-1")).toBe(18);
  });
  it("returns the correct font size in pixels for code-1", () => {
    expect(getFontSize("code-1")).toBe(24);
  });
});
