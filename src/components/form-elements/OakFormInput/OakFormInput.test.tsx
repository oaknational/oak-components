import React from "react";
import "@testing-library/jest-dom";

import { OakFormInput } from "./OakFormInput";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakFormInput", () => {
  it("should render correctly", () => {
    const { getByPlaceholderText } = renderWithTheme(
      <OakFormInput placeholder="Test input" />,
    );
    expect(getByPlaceholderText("Test input")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = renderWithTheme(
      <OakFormInput
        value="Sample text"
        onChange={() => null}
        placeholder="Test input"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should handle disabled state", () => {
    const { getByPlaceholderText } = renderWithTheme(
      <OakFormInput placeholder="Disabled input" disabled />,
    );
    const input = getByPlaceholderText("Disabled input");
    expect(input).toBeDisabled();
  });

  it("should handle invalid state", () => {
    const { getByPlaceholderText } = renderWithTheme(
      <OakFormInput placeholder="Invalid input" invalid />,
    );
    const input = getByPlaceholderText("Invalid input");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });
});
