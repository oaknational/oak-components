import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakRoundIcon } from "./OakRoundIcon";

import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakRoundIcon", () => {
  it("renders", () => {
    const { getByRole } = renderWithTheme(<OakRoundIcon iconName="home" />);

    expect(getByRole("img")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakRoundIcon iconName="home" />
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
