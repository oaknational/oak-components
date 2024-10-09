import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakFieldset } from "./OakFieldset";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakFieldset", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(<OakFieldset data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakFieldset />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
