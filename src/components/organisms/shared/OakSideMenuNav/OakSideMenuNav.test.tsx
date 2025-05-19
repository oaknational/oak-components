import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { create } from "react-test-renderer";

import OakSideMenuNav from "./OakSideMenuNav";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

const baseProps = {
  heading: "Test Heading",
  menuItems: [
    {
      heading: "Test Item 1",
      subheading: "Test Subheading 1",
      href: "#test1",
    },
    {
      heading: "Test Item 2",
      subheading: "Test Subheading 2",
      href: "#test2",
    },
  ],
};

describe("OakSideMenuNav", () => {
  it("renders a heading", () => {
    renderWithTheme(<OakSideMenuNav {...baseProps} />);
    const heading = screen.getByRole("heading", { name: /Test Heading/i });
    expect(heading).toBeInTheDocument();
  });
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakSideMenuNav {...baseProps} />,
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
