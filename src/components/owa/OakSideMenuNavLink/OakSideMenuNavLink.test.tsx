import React from "react";
import "@testing-library/jest-dom";

import { OakSideMenuNavLink } from "./OakSideMenuNavLink";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { getBreakpoint } from "@/styles/utils/responsiveStyle";

describe("OakSideMenuNavLink", () => {
  it("renders", () => {
    const { getByText } = renderWithTheme(
      <OakSideMenuNavLink
        data-testid="test"
        isSelected={false}
        item={{
          heading: "Test",
          subheading: "Test Subheading",
          href: "/test",
        }}
        onClick={() => {
          // Do nothing
        }}
      />,
    );
    expect(getByText("Test")).toBeInTheDocument();
  });
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakSideMenuNavLink
        isSelected={false}
        item={{
          heading: "Test",
          subheading: "Test Subheading",
          href: "/test",
        }}
        onClick={() => {
          // Do nothing
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("supports custom selected and hover styling props", () => {
    const { getByTestId, getByText } = renderWithTheme(
      <OakSideMenuNavLink
        data-testid="test"
        isSelected={true}
        item={{
          heading: "Test",
          subheading: "Test Subheading",
          href: "/test",
        }}
        hoverBorderColor="border-neutral"
        selectedBackground="bg-neutral"
        selectedHeadingFont="heading-7"
        onClick={() => {
          // Do nothing
        }}
      />,
    );

    expect(getByTestId("test")).toHaveStyleRule("background-color", "#f2f2f2");
    expect(getByTestId("test")).toHaveStyleRule("border-color", "#808080", {
      media: `(min-width: ${getBreakpoint("small")}px)`,
      modifier: ":hover",
    });
    expect(getByText("Test")).toHaveStyleRule("font-weight", "600");
  });
});
