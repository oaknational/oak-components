import React from "react";

import { OakFocusIndicator } from "./OakFocusIndicator";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakFocusIndicator", () => {
  test("default render", () => {
    const { baseElement } = renderWithTheme(<OakFocusIndicator />);

    expect(baseElement).toMatchSnapshot();
  });

  test("renders correctly with props set", () => {
    const { container } = renderWithTheme(
      <OakFocusIndicator
        hoverBackground="bg-btn-secondary"
        dropShadow="drop-shadow-centered-grey"
        hoverDropShadow="drop-shadow-centered-grey"
        activeDropShadow="drop-shadow-none"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  test("renders correctly with props as='li'", () => {
    const { container } = renderWithTheme(
      <OakFocusIndicator
        as="li"
        hoverBackground="bg-btn-secondary"
        dropShadow="drop-shadow-centered-grey"
        hoverDropShadow="drop-shadow-centered-grey"
        activeDropShadow="drop-shadow-none"
      />,
    );

    expect(container.firstElementChild!.tagName).toBe("LI");
    expect(container).toMatchSnapshot();
  });
});
