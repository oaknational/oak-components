import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { OakViewBySwitcher, OakViewBySwitcherProps } from "./OakViewBySwitcher";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const onClickCallback = jest.fn();

const props: OakViewBySwitcherProps = {
  activeTab: "Key stage & year group",
  onTabClick: (tab) => onClickCallback(tab),
};

describe("OakViewBySwitcher", () => {
  it("renders inside a nav element labelled by the View by heading", () => {
    renderWithTheme(<OakViewBySwitcher {...props} />);
    expect(
      screen.getByRole("navigation", { name: "View by" }),
    ).toBeInTheDocument();
  });

  it("renders tabs inside a semantic list", () => {
    renderWithTheme(<OakViewBySwitcher {...props} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  it("applies white background to the selected tab", () => {
    renderWithTheme(<OakViewBySwitcher {...props} />);
    const selected = screen.getByRole("button", {
      name: "Key stage & year group",
    });
    expect(selected).toHaveStyle({ background: "#ffffff" });
  });

  it("applies black background to unselected tabs", () => {
    renderWithTheme(<OakViewBySwitcher {...props} />);
    const unselected = screen.getByRole("button", { name: "Strand" });
    expect(unselected).toHaveStyle({ background: "#222222" });
  });

  it("calls onTabClick with the tab label when a button is clicked", async () => {
    renderWithTheme(<OakViewBySwitcher {...props} />);
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Strand" }));
    expect(onClickCallback).toHaveBeenCalledWith("Strand");
  });

  it("marks the active tab with aria-current='true'", () => {
    renderWithTheme(<OakViewBySwitcher {...props} />);
    const active = screen.getByRole("button", {
      name: "Key stage & year group",
    });
    expect(active).toHaveAttribute("aria-current", "true");
  });

  it("does not mark inactive tabs with aria-current", () => {
    renderWithTheme(<OakViewBySwitcher {...props} />);
    const inactive = screen.getByRole("button", { name: "Strand" });
    expect(inactive).not.toHaveAttribute("aria-current");
  });

  describe("when rendered as links", () => {
    const linkProps = {
      ...props,
      keyStageYearGroupHref: "#key-stage",
      strandHref: "#strand",
    };

    it("renders both tabs as links with correct hrefs", () => {
      renderWithTheme(<OakViewBySwitcher {...linkProps} />);
      const links = screen.getAllByRole("link");
      expect(links).toHaveLength(2);
      expect(links[0]).toHaveAttribute("href", "#key-stage");
      expect(links[1]).toHaveAttribute("href", "#strand");
    });

    it("calls onTabClick when a link tab is clicked", async () => {
      renderWithTheme(<OakViewBySwitcher {...linkProps} />);
      const user = userEvent.setup();
      await user.click(screen.getByRole("link", { name: "Strand" }));
      expect(onClickCallback).toHaveBeenCalledWith("Strand");
    });

    it("marks the active link tab with aria-current='true'", () => {
      renderWithTheme(<OakViewBySwitcher {...linkProps} />);
      const activeLink = screen.getByRole("link", {
        name: "Key stage & year group",
      });
      expect(activeLink).toHaveAttribute("aria-current", "true");
    });

    it("does not mark inactive link tabs with aria-current", () => {
      renderWithTheme(<OakViewBySwitcher {...linkProps} />);
      const inactiveLink = screen.getByRole("link", { name: "Strand" });
      expect(inactiveLink).not.toHaveAttribute("aria-current");
    });
  });
});
