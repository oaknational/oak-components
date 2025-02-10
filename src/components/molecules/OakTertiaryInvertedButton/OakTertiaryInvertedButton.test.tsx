import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakTertiaryInvertedButton } from "./OakTertiaryInvertedButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

describe("OakTertiaryInvertedButton", () => {
  it("renders", () => {
    const { getByRole } = renderWithTheme(
      <OakTertiaryInvertedButton>Click Me</OakTertiaryInvertedButton>,
    );

    expect(getByRole("button")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakTertiaryInvertedButton>Click Me</OakTertiaryInvertedButton>
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
