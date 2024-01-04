import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakTextInput } from "./OakTextInput";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

describe("OakTextInput", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakTextInput
        defaultValue="A nice text value"
        data-testid="text-input"
      />,
    );

    expect(getByTestId("text-input")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakTextInput defaultValue="A nice text value" />,
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
