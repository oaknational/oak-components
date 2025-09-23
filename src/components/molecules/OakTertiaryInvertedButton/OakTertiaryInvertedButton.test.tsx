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
});
