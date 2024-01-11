import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakTertiaryButton } from "./OakTertiaryButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

describe("OakTertiaryButton", () => {
  it("renders", () => {
    const { getByRole } = renderWithTheme(
      <OakTertiaryButton>Click</OakTertiaryButton>,
    );

    expect(getByRole("button")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakTertiaryButton>Click Me</OakTertiaryButton>
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
