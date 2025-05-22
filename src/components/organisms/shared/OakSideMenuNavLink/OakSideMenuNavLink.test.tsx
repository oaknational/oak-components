import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakSideMenuNavLink } from "./OakSideMenuNavLink";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

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
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        {" "}
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
        />
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
