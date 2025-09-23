import React from "react";
import "@testing-library/jest-dom";

import { formatTimeCode, OakTimer } from "./OakTimer";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakTimer", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakTimer timeCode={670.34} />);
    expect(container).toMatchSnapshot();
  });
});

describe("formatTimeCode", () => {
  it("formats time code correctly", () => {
    expect(formatTimeCode(670.34)).toBe("11:10");
  });
});
