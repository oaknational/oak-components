import React from "react";
import "@testing-library/jest-dom";

import { OakSmallSecondaryToggleButton } from "./OakSmallSecondaryToggleButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakSmallSecondaryToggleButton component", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakSmallSecondaryToggleButton toggleOn={true} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakSmallSecondaryToggleButton onClick={handleClick} />,
    );
    getByRole("button").click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies correct styles when toggleOn is true", () => {
    const { getByRole } = renderWithTheme(
      <OakSmallSecondaryToggleButton toggleOn={true} />,
    );
    const button = getByRole("button");
    expect(button).toHaveAttribute("aria-pressed", "true");
  });

  it("applies correct styles when toggleOn is false", () => {
    const { getByRole } = renderWithTheme(
      <OakSmallSecondaryToggleButton toggleOn={false} />,
    );
    const button = getByRole("button");
    expect(button).toHaveAttribute("aria-pressed", "false");
  });
});
