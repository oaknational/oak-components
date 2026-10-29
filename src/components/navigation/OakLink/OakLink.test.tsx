import React from "react";
import "@testing-library/jest-dom";

import { OakLink } from "./OakLink";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakLink", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakLink>Content goes here</OakLink>);

    expect(container).toMatchSnapshot();
  });

  it("if target is _blank, it includes screen reader text", () => {
    const { container } = renderWithTheme(
      <OakLink target="_blank">Content goes here</OakLink>,
    );

    expect(container).toHaveTextContent("(opens in a new tab)");
    expect(container).toMatchSnapshot();
  });
});
