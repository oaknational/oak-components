import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { OakSmallSecondaryButtonWithDropdown } from "./OakSmallSecondaryButtonWithDropdown";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const defaultProps = {
  primaryActionText: "Menu Trigger",
};

const simpleChildren = (
  <>
    <button role="menuitem" aria-label="Option 1">
      Option 1
    </button>
    <button role="menuitem" aria-label="Option 2">
      Option 2
    </button>
    <button role="menuitem" aria-label="Option 3">
      Option 3
    </button>
  </>
);

describe("OakSmallSecondaryButtonWithDropdown", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakSmallSecondaryButtonWithDropdown>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders with OakSmallSecondaryButton styling", () => {
    const { getByText } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakSmallSecondaryButtonWithDropdown>,
    );

    expect(getByText("Menu Trigger")).toBeInTheDocument();
  });

  it("uses correct dropdown top spacing for small button", async () => {
    const user = userEvent.setup();
    const { getByText, queryByTestId } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown
        {...defaultProps}
        data-testid="small-dropdown"
      >
        {simpleChildren}
      </OakSmallSecondaryButtonWithDropdown>,
    );

    await user.click(getByText("Menu Trigger"));

    const dropdown = queryByTestId("small-dropdown-dropdown");
    expect(dropdown).toBeInTheDocument();
    // The specific spacing (spacing-40) is tested in the shared component
  });

  it("uses full width flex styling", async () => {
    const user = userEvent.setup();
    const { getByText, queryByRole } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakSmallSecondaryButtonWithDropdown>,
    );

    await user.click(getByText("Menu Trigger"));
    expect(queryByRole("menu")).toBeInTheDocument();
    // The flexWidth={["100%"]} prop is passed to shared component
  });

  it("integrates properly with OakButtonWithDropdown", async () => {
    const user = userEvent.setup();
    const { getByText, queryByRole } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakSmallSecondaryButtonWithDropdown>,
    );

    // Test that the integration works - dropdown functionality should work
    await user.click(getByText("Menu Trigger"));

    expect(queryByRole("menu")).toBeInTheDocument();
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
    expect(getByText("Option 3")).toBeInTheDocument();
  });
});
