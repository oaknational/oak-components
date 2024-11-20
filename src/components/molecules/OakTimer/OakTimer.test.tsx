import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { formatTimeCode, OakTimer } from "./OakTimer";

import { oakDefaultTheme } from "@/styles";

describe("OakTimer", () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakTimer timeCode={670.34} />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("formatTimeCode", () => {
  it("formats time code correctly", () => {
    expect(formatTimeCode(670.34)).toBe("11:10");
  });
});
