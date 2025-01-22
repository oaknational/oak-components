import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakSmallSecondaryToggleButton } from "./OakSmallSecondaryToggleButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("OakSmallSecondaryToggleButton component", () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakSmallSecondaryToggleButton toggleOn={true} />
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
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
