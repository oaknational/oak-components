import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakPrimaryNav, OakPrimaryNavProps } from "./OakPrimaryNav";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

const navItems = [
  {
    href: "/",
    isCurrent: false,
    children: "nav item 1",
  },
  {
    href: "/",
    isCurrent: true,
    children: "nav item 2",
  },
  {
    href: "/",
    isCurrent: false,
    children: "nav item 3",
  },
  {
    href: "/",
    isCurrent: false,
    children: "nav item 4",
  },
];

const defaultArgs: OakPrimaryNavProps = {
  navItems,
};

describe("OakPrimaryNav", () => {
  it("renders", () => {
    const { getByRole } = renderWithTheme(
      <OakPrimaryNav {...defaultArgs} data-testid="test" />,
    );
    expect(getByRole("navigation")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakPrimaryNav {...defaultArgs} />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correct amount of nav items", () => {
    const { getByRole } = renderWithTheme(<OakPrimaryNav {...defaultArgs} />);
    expect(getByRole("list").childElementCount).toEqual(4);
  });

  it("renders correct aria-label if provided", () => {
    const argsWithAriaLabel: OakPrimaryNavProps = {
      navItems,
      ariaLabel: "primary navigation",
    };

    const { getByRole } = renderWithTheme(
      <OakPrimaryNav {...argsWithAriaLabel} />,
    );
    expect(getByRole("navigation")).toHaveAttribute(
      "aria-label",
      "primary navigation",
    );
  });
});
