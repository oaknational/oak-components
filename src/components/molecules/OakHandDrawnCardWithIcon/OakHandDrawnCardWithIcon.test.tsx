import React from "react";
import "@testing-library/jest-dom";

import { OakHandDrawnCardWithIcon } from "./OakHandDrawnCardWithIcon";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakHandDrawnCardWithIcon, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakHandDrawnCardWithIcon iconName="worksheet-3" />,
    );

    expect(container).toMatchSnapshot();
  });
});
