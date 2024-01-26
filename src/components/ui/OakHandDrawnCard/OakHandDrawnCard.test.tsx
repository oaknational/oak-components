import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakHandDrawnCard } from "./OakHandDrawnCard";

import { oakDefaultTheme } from "@/styles";

describe(OakHandDrawnCard, () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakHandDrawnCard>Content goes here</OakHandDrawnCard>
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
