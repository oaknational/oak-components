import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakP } from "./OakP";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("P", () => {
  it("should set the correct font-family", () => {
    const { getByTestId } = renderWithTheme(
      <OakP data-testid="paragraph">Here is some paragraph text</OakP>,
    );
    expect(getByTestId("paragraph")).toHaveStyle(
      "font-family:__Lexend_866216,__Lexend_Fallback_866216,Lexend,sans-serif",
    );
  });

  it("matches snapshot", () => {
    const tree = create(<OakP />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
