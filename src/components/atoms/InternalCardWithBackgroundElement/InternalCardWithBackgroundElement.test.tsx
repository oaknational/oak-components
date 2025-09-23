import React from "react";
import "@testing-library/jest-dom";

import { InternalCardWithBackgroundElement } from "./InternalCardWithBackgroundElement";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("InternalStyledSvg", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <InternalCardWithBackgroundElement backgroundElement={<svg />}>
        Card contents!
      </InternalCardWithBackgroundElement>,
    );

    expect(container).toMatchSnapshot();
  });
});
