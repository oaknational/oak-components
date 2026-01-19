import React from "react";
import "@testing-library/jest-dom";

import { InternalLink } from "./InternalLink";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("InternalLink", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <InternalLink
        color="text-link-active"
        hoverColor="text-link-hover"
        activeColor="text-link-pressed"
        disabledColor="text-disabled"
        visitedColor="text-link-visited"
      >
        Content goes here
      </InternalLink>,
    );

    expect(container).toMatchSnapshot();
  });
});
