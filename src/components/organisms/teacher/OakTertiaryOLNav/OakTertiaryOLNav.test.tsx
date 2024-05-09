import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakTertiaryOLNav, OakTertiaryOLNavProps } from "./OakTertiaryOLNav";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

const baseProps: OakTertiaryOLNavProps = {
  items: [
    { title: "Item 1", href: "#item1" },
    { title: "Item 2", href: "#item2" },
  ],
  ariaLabel: "navigation",
};

describe("Component OakTertiaryOLNav", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakTertiaryOLNav {...baseProps} data-testid="test" />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });
  it("conditionally renders the title", () => {
    const { queryByText } = renderWithTheme(
      <OakTertiaryOLNav {...baseProps} title="Contents" />,
    );
    expect(queryByText("Contents")).toBeInTheDocument();
  });

  it("renders items with correct title and href", () => {
    const { getByText } = renderWithTheme(<OakTertiaryOLNav {...baseProps} />);
    const link1 = getByText("Item 1");
    const link2 = getByText("Item 2");
    expect(link1.closest("a")).toHaveAttribute("href", "#item1");
    expect(link2.closest("a")).toHaveAttribute("href", "#item2");
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakTertiaryOLNav {...baseProps} />,
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
