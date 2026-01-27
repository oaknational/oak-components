import React from "react";

import { OakDroppable } from "./OakDroppable";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakDroppable", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakDroppable>Children</OakDroppable>,
    );

    expect(container).toMatchSnapshot();
  });
});
