import React from "react";
import "@testing-library/jest-dom";

import { OakHandDrawnFocusUnderline } from "./OakHandDrawnFocusUnderline";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakHandDrawnFocusUnderline", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakHandDrawnFocusUnderline data-testid="test" />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakHandDrawnFocusUnderline />);
    expect(container).toMatchSnapshot();
  });

  it("passes color through correctly", () => {
    const { container } = renderWithTheme(
      <OakHandDrawnFocusUnderline fillColor={"border-primary"} />,
    );
    expect(container).toMatchSnapshot();
  });
});
