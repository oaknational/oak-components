import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { OakTabs, OakTabsProps } from "./OakTabs";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const onClickCallback = jest.fn();
const props: OakTabsProps<string> = {
  sizeVariant: "default",
  colorVariant: "black",
  tabs: [
    { type: "button", label: "Tab one" },
    { type: "button", label: "Tab two" },
    { type: "button", label: "Tab three" },
  ],
  activeTab: "Tab one",
  onTabClick: (tab) => onClickCallback(tab),
};

describe("OakTabs", () => {
  it("renders tabs with correct styling for black variant", () => {
    renderWithTheme(<OakTabs {...props} />);
    const tabOne = screen.getByRole("button", { name: "Tab one" });
    expect(tabOne).toBeInTheDocument();

    expect(tabOne).toHaveStyle({
      background: "#bef2bd",
    });

    const tabTwo = screen.getByRole("button", { name: "Tab two" });
    expect(tabTwo).toBeInTheDocument();
    expect(tabTwo).toHaveStyle({ background: "#222222" });

    const tabThree = screen.getByRole("button", { name: "Tab three" });
    expect(tabThree).toBeInTheDocument();
    expect(tabThree).toHaveStyle({ background: "#222222" });
  });
  it("renders tabs with correct styling for white variant", () => {
    renderWithTheme(<OakTabs {...props} colorVariant="white" />);
    const tabOne = screen.getByRole("button", { name: "Tab one" });
    expect(tabOne).toBeInTheDocument();

    expect(tabOne).toHaveStyle({
      background: "#bef2bd",
    });

    const tabTwo = screen.getByRole("button", { name: "Tab two" });
    expect(tabTwo).toBeInTheDocument();
    expect(tabTwo).toHaveStyle({ background: "#ffffff" });

    const tabThree = screen.getByRole("button", { name: "Tab three" });
    expect(tabThree).toBeInTheDocument();
    expect(tabThree).toHaveStyle({ background: "#ffffff" });
  });
  it("calls on click callback with tab value", async () => {
    renderWithTheme(<OakTabs {...props} />);
    const tabTwo = screen.getByRole("button", { name: "Tab two" });
    const user = userEvent.setup();
    await user.click(tabTwo);
    expect(onClickCallback).toHaveBeenCalledWith("Tab two");
  });
  it("renders tabs as links", async () => {
    renderWithTheme(
      <OakTabs
        {...props}
        tabs={[
          { label: "Tab one", type: "link", href: "fakeUrl-1.com" },
          { label: "Tab two", type: "link", href: "fakeUrl-2.com" },
          { label: "Tab three", type: "link", href: "fakeUrl-3.com" },
        ]}
        onTabClick={(tab, event) => {
          event.preventDefault();
          onClickCallback(tab);
        }}
      />,
    );
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
    if (!links[0]) {
      throw new Error("Cannot find first link");
    }
    expect(links[0]).toHaveProperty("href");
    const user = userEvent.setup();
    await user.click(links[0]);
    expect(onClickCallback).toHaveBeenCalledWith("Tab one");
  });
});
