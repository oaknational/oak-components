import React from "react";
import "@testing-library/jest-dom";

import { OakTertiaryButton } from "./OakTertiaryButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakTertiaryButton", () => {
  it("renders", () => {
    const { getByRole } = renderWithTheme(
      <OakTertiaryButton>Click Me</OakTertiaryButton>,
    );

    expect(getByRole("button")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakTertiaryButton>Click Me</OakTertiaryButton>,
    );

    expect(container).toMatchSnapshot();
  });
});
