import React from "react";
import "@testing-library/jest-dom";

import { OakCollapsibleContent } from "./OakCollapsibleContent";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakCollapsibleContent, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakCollapsibleContent isOpen>Content goes here</OakCollapsibleContent>,
    );

    expect(container).toMatchSnapshot();
  });
});
