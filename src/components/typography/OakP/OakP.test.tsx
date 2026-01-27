import React from "react";
import "@testing-library/jest-dom";

import { OakP } from "./OakP";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("P", () => {
  it("should set the correct font-family", () => {
    const { getByTestId } = renderWithTheme(
      <OakP data-testid="paragraph">Here is some paragraph text</OakP>,
    );
    expect(getByTestId("paragraph")).toHaveStyle(
      "font-family:--var(google-font),Lexend,sans-serif",
    );
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakP />);
    expect(container).toMatchSnapshot();
  });
});
