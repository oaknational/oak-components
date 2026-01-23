import React from "react";
import "@testing-library/jest-dom";

import { OakHandDrawnCard } from "./OakHandDrawnCard";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakHandDrawnCard, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakHandDrawnCard>Content goes here</OakHandDrawnCard>,
    );

    expect(container).toMatchSnapshot();
  });
});
