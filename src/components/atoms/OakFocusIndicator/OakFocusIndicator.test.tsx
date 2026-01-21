import React from "react";

import { OakFocusIndicator } from "./OakFocusIndicator";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("FocusIndicator", () => {
  test("default render", async () => {
    const { baseElement } = renderWithTheme(<OakFocusIndicator />);

    expect(baseElement).toMatchSnapshot();
  });

  test("with props set", async () => {
    const { baseElement } = renderWithTheme(
      <OakFocusIndicator
        hoverBackground="pink"
        dropShadow="drop-shadow-centered-grey"
        hoverDropShadow="drop-shadow-centered-grey"
        activeDropShadow="drop-shadow-none"
      />,
    );

    expect(baseElement).toMatchSnapshot();
  });
});
