import React from "react";

import { OakHoverLink } from "./OakHoverLink";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakHoverLink", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakHoverLink>Content goes here</OakHoverLink>,
    );

    expect(container).toMatchSnapshot();
  });
});
