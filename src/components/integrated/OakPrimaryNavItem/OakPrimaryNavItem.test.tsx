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
    const { getByText } = renderWithTheme(
      <OakPrimaryNavItem {...defaultArgs} />,
    );
    expect(getByText("Base nav item")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakPrimaryNavItem {...defaultArgs} />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders <a> tag for items with isCurrent set to false", () => {
    const { getByRole } = renderWithTheme(
      <OakPrimaryNavItem {...defaultArgs} />,
    );
    expect(getByRole("link")).toBeInTheDocument();
  });

  it("renders <span> for items with isCurrent set to true", () => {
    const currentItem: OakPrimaryNavItemProps = {
      isCurrent: true,
      href: "/",
      shallow: true,
      label: "Current nav item",
    };

    const { getByText } = renderWithTheme(
      <OakPrimaryNavItem {...currentItem} />,
    );

    const currentNavItem = getByText("Current nav item");
    expect(currentNavItem).toBeInTheDocument();
    expect(currentNavItem.tagName).toEqual("SPAN");
  });
});
