import React from "react";
import "@testing-library/jest-dom";

import { OakFormInputWithLabels } from "./OakFormInputWithLabels";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakFormInputWithLabels", () => {
  it("should render correctly", () => {
    const { getByLabelText } = renderWithTheme(
      <OakFormInputWithLabels label="Test Input" placeholder="Enter text" />,
    );
    expect(getByLabelText("Test Input")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = renderWithTheme(
      <OakFormInputWithLabels
        label="Sample Input"
        placeholder="Enter text"
        value="Sample text"
      />,
    );
    expect(container).toMatchSnapshot();
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
