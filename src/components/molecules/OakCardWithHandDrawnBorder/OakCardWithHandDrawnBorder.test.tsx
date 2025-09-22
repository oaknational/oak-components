import React from "react";
import "@testing-library/jest-dom";

import { OakCardWithHandDrawnBorder } from "./OakCardWithHandDrawnBorder";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakCardWithHandDrawnBorder, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakCardWithHandDrawnBorder>
        Content goes here
      </OakCardWithHandDrawnBorder>,
    );

    expect(container).toMatchSnapshot();
  });
});
