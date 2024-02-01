import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakPrimaryNavItem, OakPrimaryNavItemProps } from "./OakPrimaryNavItem";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

const defaultArgs: OakPrimaryNavItemProps = {
  isCurrent: false,
  href: "/",
  shallow: true,
  label: "Base nav item",
};

describe("OakPrimaryNavItem", () => {
  it("renders", () => {
    const { getByLabelText } = renderWithTheme(
      <OakPrimaryNavItem {...defaultArgs} />,
    );
    expect(getByLabelText("Base nav item")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakPrimaryNavItem {...defaultArgs} />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
