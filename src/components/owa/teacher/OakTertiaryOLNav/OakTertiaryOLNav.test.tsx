import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { OakTertiaryOLNav, OakTertiaryOLNavProps } from "./OakTertiaryOLNav";

import renderWithTheme from "@/test-helpers/renderWithTheme";

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
  it("renders anchor target if passed as prop", () => {
    const { getByTestId } = renderWithTheme(
      <OakTertiaryOLNav
        {...baseProps}
        anchorTarget="target"
        data-testid="test"
      />,
    );
    expect(getByTestId("test").querySelector("#target")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakTertiaryOLNav {...baseProps} />);
    expect(container).toMatchSnapshot();
  });
  it("applies aria-current to the current active link", async () => {
    const { getByText } = renderWithTheme(<OakTertiaryOLNav {...baseProps} />);

    const item1 = getByText("Item 1");
    await userEvent.tab();
    await userEvent.keyboard("{Enter}");

    expect(item1.closest("a")).toHaveAttribute("aria-current", "true");

    const item2 = getByText("Item 2");
    expect(item2.closest("a")).not.toHaveAttribute("aria-current");
  });
});
