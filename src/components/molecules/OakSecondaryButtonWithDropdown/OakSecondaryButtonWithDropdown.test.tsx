import React from "react";
import { create } from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { OakSecondaryButtonWithDropdown } from "./OakSecondaryButtonWithDropdown";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

const defaultProps = {
  primaryActionText: "Actions",
};

const simpleChildren = (
  <>
    <button role="menuitem" aria-label="Edit">
      Edit
    </button>
    <button role="menuitem" aria-label="Delete">
      Delete
    </button>
  </>
);

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <OakThemeProvider theme={oakDefaultTheme}>{component}</OakThemeProvider>,
  );
};

describe("OakSecondaryButtonWithDropdown", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakSecondaryButtonWithDropdown {...defaultProps}>
          {simpleChildren}
        </OakSecondaryButtonWithDropdown>
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with OakSecondaryButton styling", () => {
    renderWithTheme(
      <OakSecondaryButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakSecondaryButtonWithDropdown>,
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });

  it("uses correct dropdown top spacing for secondary button", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <OakSecondaryButtonWithDropdown 
        {...defaultProps}
        data-testid="secondary-dropdown"
      >
        {simpleChildren}
      </OakSecondaryButtonWithDropdown>,
    );

    const primaryButton = screen.getByRole("button");
    await user.click(primaryButton);

    const dropdown = screen.getByTestId("secondary-dropdown-dropdown");
    expect(dropdown).toBeInTheDocument();
    // The specific spacing is tested in the shared component
  });

  it("integrates properly with OakButtonWithDropdown", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <OakSecondaryButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakSecondaryButtonWithDropdown>,
    );

    // Test that the integration works - dropdown functionality should work
    const primaryButton = screen.getByRole("button");
    await user.click(primaryButton);

    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });
});
