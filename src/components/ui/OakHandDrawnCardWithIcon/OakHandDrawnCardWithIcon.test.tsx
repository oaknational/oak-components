import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakHandDrawnCardWithIcon } from "./OakHandDrawnCardWithIcon";

import { oakDefaultTheme } from "@/styles";

describe(OakHandDrawnCardWithIcon, () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakHandDrawnCardWithIcon iconName="worksheet-3" />
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
