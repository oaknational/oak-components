import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

import { OakSideMenuNav } from "./OakSideMenuNav";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const baseProps = {
  heading: "Test Heading",
  anchorTargetId: "side-menu-header",
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
    const { container } = renderWithTheme(<OakSideMenuNav {...baseProps} />);
    expect(container).toMatchSnapshot();
  });
});
