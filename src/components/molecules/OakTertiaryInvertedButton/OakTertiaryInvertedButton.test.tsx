import React from "react";
import "@testing-library/jest-dom";

import { OakTertiaryInvertedButton } from "./OakTertiaryInvertedButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakTertiaryInvertedButton", () => {
  it("renders", () => {
    const { getByRole } = renderWithTheme(
      <OakTertiaryInvertedButton>Click Me</OakTertiaryInvertedButton>,
    );

    expect(getByRole("button")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakTertiaryInvertedButton>Click Me</OakTertiaryInvertedButton>,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders with both custom iconColorFilter and iconBorderColor", () => {
    const { container } = renderWithTheme(
      <OakTertiaryInvertedButton
        iconName="chevron-right"
        iconColorFilter="black"
        iconBorderColor="black"
      >
        Click Me
      </OakTertiaryInvertedButton>,
    );

    expect(container).toMatchSnapshot();
  });
});
