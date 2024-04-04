import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakHandDrawnHR } from "./OakHandDrawnHR";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakHandDrawnHR", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakHandDrawnHR data-testid="test" />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakHandDrawnHR />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
