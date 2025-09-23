import React from "react";
import "@testing-library/jest-dom";

import { OakPrimaryNavItem, OakPrimaryNavItemProps } from "./OakPrimaryNavItem";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const defaultArgs: OakPrimaryNavItemProps = {
  isCurrent: false,
  href: "/",
  shallow: true,
  children: "Base nav item",
};

describe("OakPrimaryNavItem", () => {
  it("renders", () => {
    const { getByText } = renderWithTheme(
      <OakPrimaryNavItem {...defaultArgs}>Base nav item</OakPrimaryNavItem>,
    );
    expect(getByText("Base nav item")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakPrimaryNavItem {...defaultArgs} />,
    );
    expect(container).toMatchSnapshot();
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
      children: "Current nav item",
    };

    const { getByText } = renderWithTheme(
      <OakPrimaryNavItem {...currentItem} />,
    );

    const currentNavItem = getByText("Current nav item");
    expect(currentNavItem).toBeInTheDocument();
    expect(currentNavItem.tagName).toEqual("SPAN");
  });
});
