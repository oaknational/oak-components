import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakSmallSecondaryButtonWithDropdown } from "./OakSmallSecondaryButtonWithDropdown";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

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
  it("calls onPrimaryAction when primary button is clicked", async () => {
    const user = userEvent.setup();
    const onPrimaryAction = jest.fn();
    const { getByText } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown
        {...defaultProps}
        onPrimaryAction={onPrimaryAction}
      >
        {simpleChildren}
      </OakSmallSecondaryButtonWithDropdown>,
    );
    await user.click(getByText("Menu Trigger"));
    expect(onPrimaryAction).toHaveBeenCalledTimes(1);
  });

  it("renders children content when dropdown is open", async () => {
    const user = userEvent.setup();
    const { getByText } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown {...defaultProps}>
        <div data-testid="custom-content">Custom dropdown content</div>
      </OakSmallSecondaryButtonWithDropdown>,
    );

    // Initially closed - content should not be visible
    expect(() => getByText("Custom dropdown content")).toThrow();

    // Open dropdown
    await user.click(getByText("Menu Trigger"));

    // Content should now be visible
    expect(getByText("Custom dropdown content")).toBeInTheDocument();
  });

  it("supports keyboard navigation with arrow keys", async () => {
    const user = userEvent.setup();
    const { getByText } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakSmallSecondaryButtonWithDropdown>,
    );

    // Open dropdown
    await user.click(getByText("Menu Trigger"));

    // Focus should be manageable with arrow keys
    const option1 = getByText("Option 1");
    const option2 = getByText("Option 2");

    option1.focus();
    expect(document.activeElement).toBe(option1);

    // Simulate arrow down key
    await user.keyboard("{ArrowDown}");
    expect(document.activeElement).toBe(option2);
  });

  it("displays disabled state on primary button", () => {
    const { getByText } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown {...defaultProps} disabled={true}>
        {simpleChildren}
      </OakSmallSecondaryButtonWithDropdown>,
    );
    const button = getByText("Menu Trigger").closest("button");
    expect(button).toBeDisabled();
  });

  it("closes dropdown when escape key is pressed", async () => {
    const user = userEvent.setup();
    const { getByText, queryByRole } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakSmallSecondaryButtonWithDropdown>,
    );

    // Open dropdown
    await user.click(getByText("Menu Trigger"));
    expect(queryByRole("menu")).toBeInTheDocument();

    // Press escape key
    await user.keyboard("{Escape}");
    expect(queryByRole("menu")).not.toBeInTheDocument();
  });

  it("toggles dropdown open/closed when primary button is clicked", async () => {
    const user = userEvent.setup();
    const { getByText, queryByRole } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakSmallSecondaryButtonWithDropdown>,
    );

    // Initially closed
    expect(queryByRole("menu")).not.toBeInTheDocument();

    // Click to open
    await user.click(getByText("Menu Trigger"));
    expect(queryByRole("menu")).toBeInTheDocument();

    // Click to close
    await user.click(getByText("Menu Trigger"));
    expect(queryByRole("menu")).not.toBeInTheDocument();
  });

  it("closes dropdown when clicking outside", async () => {
    const user = userEvent.setup();
    const { getByText, queryByRole } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakSmallSecondaryButtonWithDropdown>,
    );

    // Open dropdown
    await user.click(getByText("Menu Trigger"));
    expect(queryByRole("menu")).toBeInTheDocument();

    // Click outside (simulate by clicking on document body)
    await user.click(document.body);
    expect(queryByRole("menu")).not.toBeInTheDocument();
  });

  it("sets proper ARIA attributes on primary button", () => {
    const { getByText } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakSmallSecondaryButtonWithDropdown>,
    );

    const button = getByText("Menu Trigger").closest("button");
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveAttribute("aria-haspopup", "menu");
  });

  it("updates aria-expanded when dropdown is opened", async () => {
    const user = userEvent.setup();
    const { getByText } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown {...defaultProps}>
        {simpleChildren}
      </OakSmallSecondaryButtonWithDropdown>,
    );

    const button = getByText("Menu Trigger").closest("button");

    // Initially closed
    expect(button).toHaveAttribute("aria-expanded", "false");

    // Open dropdown
    await user.click(getByText("Menu Trigger"));
    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("renders with custom aria-label and description", () => {
    const { container } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown
        primaryActionText="Test"
        ariaLabel="Custom menu"
        ariaDescription="Custom description"
        data-testid="test-dropdown"
      >
        {simpleChildren}
      </OakSmallSecondaryButtonWithDropdown>,
    );

    const section = container.querySelector('[aria-label="Custom menu"]');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute(
      "aria-describedby",
      "test-dropdown-description",
    );
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakSmallSecondaryButtonWithDropdown {...defaultProps}>
          {simpleChildren}
        </OakSmallSecondaryButtonWithDropdown>
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
