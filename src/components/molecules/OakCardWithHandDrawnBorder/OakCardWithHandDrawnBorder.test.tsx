import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakCardWithHandDrawnBorder } from "./OakCardWithHandDrawnBorder";

import { oakDefaultTheme } from "@/styles";

describe(OakCardWithHandDrawnBorder, () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakCardWithHandDrawnBorder>
          Content goes here
        </OakCardWithHandDrawnBorder>
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
