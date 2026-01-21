import React from "react";

import { OakFocusIndicator } from "./OakFocusIndicator";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakFocusIndicator", () => {
  test("default render", () => {
    const { baseElement } = renderWithTheme(<OakFocusIndicator />);

    expect(baseElement).toMatchSnapshot();
  });

  test("with props set", () => {
    const { baseElement } = renderWithTheme(
      <OakFocusIndicator
        hoverBackground="bg-btn-secondary"
        dropShadow="drop-shadow-centered-grey"
        hoverDropShadow="drop-shadow-centered-grey"
        activeDropShadow="drop-shadow-none"
      />,
    );

    expect(baseElement).toMatchSnapshot();
  });
});
