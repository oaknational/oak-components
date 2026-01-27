import React from "react";
import "@testing-library/jest-dom";

import { OakSideMenuNavLink } from "./OakSideMenuNavLink";

import renderWithTheme from "@/test-helpers/renderWithTheme";

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
});
