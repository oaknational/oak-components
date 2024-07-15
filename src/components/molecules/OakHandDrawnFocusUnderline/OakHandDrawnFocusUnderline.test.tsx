import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

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
    const tree = create(<OakHandDrawnFocusUnderline />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
