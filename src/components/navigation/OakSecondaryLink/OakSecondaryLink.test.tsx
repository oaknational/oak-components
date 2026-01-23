import React from "react";
import "@testing-library/jest-dom";

import { OakSecondaryLink } from "./OakSecondaryLink";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakSecondaryLink", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakSecondaryLink>Content goes here</OakSecondaryLink>,
    );

    expect(container).toMatchSnapshot();
  });
});
