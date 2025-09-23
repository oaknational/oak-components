import React from "react";
import "@testing-library/jest-dom";

import { OakHomepageTabButton } from "./OakHomepageTabButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakHomepageTabButton component", () => {
  it("renders ", () => {
    const { getByText } = renderWithTheme(
      <OakHomepageTabButton
        data-testid="test"
        title="Test button"
        iconName="homepage-robot-waving"
      />,
    );

    expect(getByText("Test button")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakHomepageTabButton
        data-testid="test"
        title="Test button"
        iconName="homepage-robot-waving"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
