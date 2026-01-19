import React from "react";

import { OakDraggable } from "./OakDraggable";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakDraggable", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakDraggable>Elephant</OakDraggable>,
    );

    expect(container).toMatchSnapshot();
  });
});
