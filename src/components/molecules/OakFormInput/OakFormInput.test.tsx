import React from "react";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";

import { OakFormInput } from "./OakFormInput";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

describe("OakFormInput", () => {
  it("should render correctly", () => {
    const { getByPlaceholderText } = renderWithTheme(
      <OakFormInput value="" placeholder="Test input" />,
    );
    expect(getByPlaceholderText("Test input")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakFormInput value="Sample text" placeholder="Test input" />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should handle disabled state", () => {
    const { getByPlaceholderText } = renderWithTheme(
      <OakFormInput value="" placeholder="Disabled input" disabled />,
    );
    const input = getByPlaceholderText("Disabled input");
    expect(input).toBeDisabled();
  });

  it("should handle invalid state", () => {
    const { getByPlaceholderText } = renderWithTheme(
      <OakFormInput value="" placeholder="Invalid input" invalid />,
    );
    const input = getByPlaceholderText("Invalid input");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });
});
