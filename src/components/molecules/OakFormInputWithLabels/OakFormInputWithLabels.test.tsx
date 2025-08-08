import React from "react";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";

import { OakFormInputWithLabels } from "./OakFormInputWithLabels";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

describe("OakFormInputWithLabels", () => {
  it("should render correctly", () => {
    const { getByLabelText } = renderWithTheme(
      <OakFormInputWithLabels label="Test Input" placeholder="Enter text" />,
    );
    expect(getByLabelText("Test Input")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakFormInputWithLabels
          label="Sample Input"
          placeholder="Enter text"
          value="Sample text"
        />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should handle disabled state", () => {
    const { getByLabelText } = renderWithTheme(
      <OakFormInputWithLabels
        label="Disabled Input"
        placeholder="Cannot edit"
        disabled={true}
      />,
    );
    const input = getByLabelText("Disabled Input");
    expect(input).toBeDisabled();
  });

  it("should handle invalid state", () => {
    const { getByLabelText, getByText } = renderWithTheme(
      <OakFormInputWithLabels
        label="Invalid Input"
        placeholder="Enter valid text"
        invalid={true}
        invalidText="This field is required"
      />,
    );
    const input = getByLabelText("Invalid Input");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(getByText("This field is required")).toBeInTheDocument();
  });
});
