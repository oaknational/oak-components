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
  items: [
    { label: "Edit", onClick: jest.fn() },
    { label: "Delete", onClick: jest.fn() },
  ],
};

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
        <OakSecondaryButtonWithDropdown {...defaultProps} />
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders primary action button with correct text", () => {
    renderWithTheme(<OakSecondaryButtonWithDropdown {...defaultProps} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });

  it("opens dropdown when primary button is clicked", async () => {
    const user = userEvent.setup();
    renderWithTheme(<OakSecondaryButtonWithDropdown {...defaultProps} />);

    const primaryButton = screen.getByRole("button");
    await user.click(primaryButton);

    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });

  it("closes dropdown when item is clicked", async () => {
    const user = userEvent.setup();
    const mockOnClick = jest.fn();
    const props = {
      ...defaultProps,
      items: [{ label: "Edit", onClick: mockOnClick }],
    };

    renderWithTheme(<OakSecondaryButtonWithDropdown {...props} />);

    // Open dropdown
    const primaryButton = screen.getByRole("button");
    await user.click(primaryButton);

    // Click item
    const editButton = screen.getByText("Edit");
    await user.click(editButton);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("handles keyboard navigation", async () => {
    const user = userEvent.setup();
    renderWithTheme(<OakSecondaryButtonWithDropdown {...defaultProps} />);

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
        <OakSecondaryButtonWithDropdown {...defaultProps} />
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

  it("renders footer when provided", async () => {
    const user = userEvent.setup();
    const props = {
      ...defaultProps,
      footer: <div>Footer content</div>,
    };

    renderWithTheme(<OakSecondaryButtonWithDropdown {...props} />);

    const primaryButton = screen.getByRole("button");
    await user.click(primaryButton);

    expect(screen.getByText("Footer content")).toBeInTheDocument();
  });

  it("renders with href items as links", async () => {
    const user = userEvent.setup();
    const props = {
      ...defaultProps,
      items: [{ label: "External Link", href: "https://example.com" }],
    };

    renderWithTheme(<OakSecondaryButtonWithDropdown {...props} />);

    const primaryButton = screen.getByRole("button");
    await user.click(primaryButton);

    const link = screen.getByRole("link", { name: /external link/i });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("handles loading state", () => {
    const props = {
      ...defaultProps,
      isLoading: true,
    };

    renderWithTheme(<OakSecondaryButtonWithDropdown {...props} />);

    const primaryButton = screen.getByRole("button");
    expect(primaryButton).toBeInTheDocument();
  });

  it("handles disabled state", () => {
    const props = {
      ...defaultProps,
      disabled: true,
    };

    renderWithTheme(<OakSecondaryButtonWithDropdown {...props} />);

    const primaryButton = screen.getByRole("button");
    expect(primaryButton).toBeDisabled();
  });

  it("renders with custom icons", async () => {
    const user = userEvent.setup();
    const props = {
      ...defaultProps,
      leadingItemIcon: "download" as const,
      items: [
        {
          label: "Download",
          iconName: "download" as const,
          onClick: jest.fn(),
        },
      ],
    };

    renderWithTheme(<OakSecondaryButtonWithDropdown {...props} />);

    const primaryButton = screen.getByRole("button");
    await user.click(primaryButton);

    expect(screen.getByText("Download")).toBeInTheDocument();
  });
});
