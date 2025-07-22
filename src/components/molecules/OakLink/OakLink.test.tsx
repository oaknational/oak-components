import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakLink } from "./OakLink";

import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakLink", () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakLink>Content goes here</OakLink>
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("overrides default colors with colorOverride prop", () => {
    const { getByText } = renderWithTheme(
      <OakLink colorOverride="text-primary">Hello</OakLink>,
    );

    const link = getByText("Hello");
    expect(link).toHaveStyle("color: rgb(34, 34, 34)");
  });
});
