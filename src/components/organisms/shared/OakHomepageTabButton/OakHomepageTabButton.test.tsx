import React from "react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { create } from "react-test-renderer";

import { OakHomepageTabButton } from "./OakHomepageTabButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

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
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakHomepageTabButton
          data-testid="test"
          title="Test button"
          iconName="homepage-robot-waving"
        />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
