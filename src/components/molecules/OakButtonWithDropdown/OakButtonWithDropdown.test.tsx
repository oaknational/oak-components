import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { OakButtonWithDropdown } from "./OakButtonWithDropdown";

import { OakSecondaryButton } from "@/components/molecules/OakSecondaryButton";
import renderWithTheme from "@/test-helpers/renderWithTheme";

const defaultProps = {
  primaryActionText: "Actions",
  buttonComponent: OakSecondaryButton,
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

describe("OakButtonWithDropdown", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakButtonWithDropdown>,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders primary action button with correct text", () => {
    renderWithTheme(
      <OakButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakButtonWithDropdown>,
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });

  it("opens dropdown when primary button is clicked", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <OakButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakButtonWithDropdown>,
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
      <OakButtonWithDropdown {...defaultProps}>
        <div data-testid="custom-content">Custom dropdown content</div>
      </OakButtonWithDropdown>,
    );

    // Initially closed - content should not be visible
    expect(screen.queryByTestId("custom-content")).not.toBeInTheDocument();

    // Open dropdown
    const primaryButton = screen.getByRole("button");
    await user.click(primaryButton);

    // Content should now be visible
    expect(screen.getByTestId("custom-content")).toBeInTheDocument();
  });

  it("handles keyboard navigation with arrow keys", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <OakButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakButtonWithDropdown>,
    );

    const primaryButton = screen.getByRole("button");
    await user.click(primaryButton);

    const editButton = screen.getByLabelText("Edit");
    const deleteButton = screen.getByLabelText("Delete");

    // Focus first item and test ArrowDown
    editButton.focus();
    expect(editButton).toHaveFocus();

    // Simulate ArrowDown keypress on the dropdown container
    await user.keyboard("{ArrowDown}");
    expect(deleteButton).toHaveFocus();

    // Test ArrowUp (should wrap to first)
    await user.keyboard("{ArrowUp}");
    expect(editButton).toHaveFocus();
  });

  it("closes dropdown on Escape key", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <OakButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakButtonWithDropdown>,
    );

    const primaryButton = screen.getByRole("button");
    await user.click(primaryButton);

    expect(screen.getByRole("menu")).toBeInTheDocument();

    // Test Escape key
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("closes dropdown when clicking outside", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <div>
        <OakButtonWithDropdown {...defaultProps}>
          {simpleChildren}
        </OakButtonWithDropdown>
        <button data-testid="outside-button">Outside</button>
      </div>,
    );

    const primaryButton = screen.getByRole("button", { name: /actions/i });
    await user.click(primaryButton);

    expect(screen.getByRole("menu")).toBeInTheDocument();

    // Click outside
    const outsideButton = screen.getByTestId("outside-button");
    await user.click(outsideButton);

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("toggles dropdown open/closed state", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <OakButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakButtonWithDropdown>,
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
      <OakButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakButtonWithDropdown>,
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
      <OakButtonWithDropdown {...defaultProps} isLoading={true}>
        {simpleChildren}
      </OakButtonWithDropdown>,
    );

    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it("handles disabled state", () => {
    renderWithTheme(
      <OakButtonWithDropdown {...defaultProps} disabled={true}>
        {simpleChildren}
      </OakButtonWithDropdown>,
    );

    const primaryButton = screen.getByRole("button");
    expect(primaryButton).toBeDisabled();
  });

  it("supports custom aria labels and descriptions", () => {
    renderWithTheme(
      <OakButtonWithDropdown
        {...defaultProps}
        primaryActionText="Custom Menu"
        ariaLabel="Custom dropdown menu"
        ariaDescription="A custom description for the dropdown"
        data-testid="custom-dropdown"
      >
        {simpleChildren}
      </OakButtonWithDropdown>,
    );

    const section = screen.getByLabelText("Custom dropdown menu");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute(
      "aria-describedby",
      "custom-dropdown-description",
    );
  });

  it("calls onPrimaryAction when button is clicked", async () => {
    const onPrimaryAction = jest.fn();
    const user = userEvent.setup();

    renderWithTheme(
      <OakButtonWithDropdown
        {...defaultProps}
        onPrimaryAction={onPrimaryAction}
      >
        {simpleChildren}
      </OakButtonWithDropdown>,
    );

    const primaryButton = screen.getByRole("button");
    await user.click(primaryButton);

    expect(onPrimaryAction).toHaveBeenCalledTimes(1);
  });

  it("supports custom dropdown positioning with dropdownTopSpacing", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <OakButtonWithDropdown
        {...defaultProps}
        dropdownTopSpacing="spacing-40"
        data-testid="custom-spacing-dropdown"
      >
        {simpleChildren}
      </OakButtonWithDropdown>,
    );

    const primaryButton = screen.getByRole("button");
    await user.click(primaryButton);

    const dropdown = screen.getByTestId("custom-spacing-dropdown-dropdown");
    expect(dropdown).toBeInTheDocument();
  });

  it("supports custom flex width", () => {
    renderWithTheme(
      <OakButtonWithDropdown {...defaultProps} flexWidth={["100%"]}>
        {simpleChildren}
      </OakButtonWithDropdown>,
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("supports leading button icon", () => {
    const leadingIcon = <span data-testid="leading-icon">★</span>;

    renderWithTheme(
      <OakButtonWithDropdown {...defaultProps} leadingButtonIcon={leadingIcon}>
        {simpleChildren}
      </OakButtonWithDropdown>,
    );

    expect(screen.getByTestId("leading-icon")).toBeInTheDocument();
  });

  it("handles empty focusable elements gracefully", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <OakButtonWithDropdown {...defaultProps}>
        <div>No focusable content</div>
      </OakButtonWithDropdown>,
    );

    const primaryButton = screen.getByRole("button");
    await user.click(primaryButton);

    // Should not throw error when pressing arrow keys with no focusable elements
    await user.keyboard("{ArrowDown}");
    await user.keyboard("{ArrowUp}");

    expect(screen.getByRole("menu")).toBeInTheDocument();
  });
});
