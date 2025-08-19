import React from "react";
import { create } from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
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

  it("renders primary action button with correct text", () => {
    renderWithTheme(
      <OakSecondaryButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakSecondaryButtonWithDropdown>,
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });

  it("opens dropdown when primary button is clicked", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <OakSecondaryButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakSecondaryButtonWithDropdown>,
    );

    const primaryButton = screen.getByRole("button");
    await user.click(primaryButton);

    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });

  it("renders children content when dropdown is open", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <OakSecondaryButtonWithDropdown {...defaultProps}>
        <div data-testid="custom-content">Custom dropdown content</div>
      </OakSecondaryButtonWithDropdown>,
    );

    // Initially closed - content should not be visible
    expect(screen.queryByTestId("custom-content")).not.toBeInTheDocument();

    // Open dropdown
    const primaryButton = screen.getByRole("button");
    await user.click(primaryButton);

    // Content should now be visible
    expect(screen.getByTestId("custom-content")).toBeInTheDocument();
  });

  it("handles keyboard navigation", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <OakSecondaryButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakSecondaryButtonWithDropdown>,
    );

    const primaryButton = screen.getByRole("button");
    await user.click(primaryButton);

    // Test Escape key
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("closes dropdown when clicking outside", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <div>
        <OakSecondaryButtonWithDropdown {...defaultProps}>
          {simpleChildren}
        </OakSecondaryButtonWithDropdown>
        <button data-testid="outside-button">Outside</button>
      </div>,
    );

    const primaryButton = screen.getByRole("button", { name: /actions/i });
    await user.click(primaryButton);

    expect(screen.getByRole("menu")).toBeInTheDocument();

    // Click outside
    const outsideButton = screen.getByTestId("outside-button");
    fireEvent.mouseDown(outsideButton);

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("toggles dropdown open/closed state", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <OakSecondaryButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakSecondaryButtonWithDropdown>,
    );

    const primaryButton = screen.getByRole("button");

    // Initially closed
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();

    // Click to open
    await user.click(primaryButton);
    expect(screen.getByRole("menu")).toBeInTheDocument();

    // Click to close
    await user.click(primaryButton);
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("sets proper ARIA attributes", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <OakSecondaryButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakSecondaryButtonWithDropdown>,
    );

    const primaryButton = screen.getByRole("button");

    // Initially closed
    expect(primaryButton).toHaveAttribute("aria-expanded", "false");
    expect(primaryButton).toHaveAttribute("aria-haspopup", "menu");

    // Open dropdown
    await user.click(primaryButton);
    expect(primaryButton).toHaveAttribute("aria-expanded", "true");
  });

  it("handles loading state", () => {
    renderWithTheme(
      <OakSecondaryButtonWithDropdown {...defaultProps} isLoading={true}>
        {simpleChildren}
      </OakSecondaryButtonWithDropdown>,
    );

    const primaryButton = screen.getByRole("button");
    expect(primaryButton).toBeInTheDocument();
  });

  it("handles disabled state", () => {
    renderWithTheme(
      <OakSecondaryButtonWithDropdown {...defaultProps} disabled={true}>
        {simpleChildren}
      </OakSecondaryButtonWithDropdown>,
    );

    const primaryButton = screen.getByRole("button");
    expect(primaryButton).toBeDisabled();
  });

  it("supports custom aria labels and descriptions", () => {
    renderWithTheme(
      <OakSecondaryButtonWithDropdown
        primaryActionText="Custom Menu"
        ariaLabel="Custom dropdown menu"
        ariaDescription="A custom description for the dropdown"
        data-testid="custom-dropdown"
      >
        {simpleChildren}
      </OakSecondaryButtonWithDropdown>,
    );

    const section = screen.getByLabelText("Custom dropdown menu");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute(
      "aria-describedby",
      "custom-dropdown-description",
    );
  });
});
