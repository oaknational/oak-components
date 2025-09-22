import React from "react";
import "@testing-library/jest-dom";

import { OakFieldset } from "./OakFieldset";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakFieldset", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(<OakFieldset data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakFieldset />);
    expect(container).toMatchSnapshot();
  });
});
