import React from "react";
import "@testing-library/jest-dom";

import { OakLink } from "./OakLink";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakLink", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakLink>Content goes here</OakLink>);

    expect(container).toMatchSnapshot();
  });
});
