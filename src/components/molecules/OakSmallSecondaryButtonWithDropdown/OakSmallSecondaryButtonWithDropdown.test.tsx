import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakSmallSecondaryButtonWithDropdown } from "./OakSmallSecondaryButtonWithDropdown";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakFlex, OakSpan } from "@/components/atoms";
import { OakSmallPrimaryInvertedButton } from "@/components/molecules";
import { oakDefaultTheme } from "@/styles";

const defaultProps = {
  primaryActionText: "Create more with AI",
  items: [
    { label: "Glossary" },
    { label: "Comprehension task" },
    { label: "Lesson narrative" },
    { label: "More starter quiz questions" },
    { label: "More exit quiz questions" },
  ],
  footer: (
    <OakFlex
      $flexDirection="column"
      $alignItems="center"
      $gap="space-between-xs"
    >
      <OakSpan $font="heading-light-7" $color="text-primary">
        Learn more about Aila, Oak's AI lesson assistant
      </OakSpan>
      <OakSmallPrimaryInvertedButton element="a" href="#" iconName="external">
        Learn more
      </OakSmallPrimaryInvertedButton>
    </OakFlex>
  ),
};

describe("OakSmallSecondaryButtonWithDropdown", () => {
  it("calls onPrimaryAction when primary button is clicked", async () => {
    const user = userEvent.setup();
    const onPrimaryAction = jest.fn();
    const { getByText } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown
        {...defaultProps}
        onPrimaryAction={onPrimaryAction}
      />,
    );
    await user.click(getByText("Create more with AI"));
    expect(onPrimaryAction).toHaveBeenCalledTimes(1);
  });

  it("calls onClick handler when item is clicked", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    const items = [{ label: "Test Item", onClick }];
    const { getByText, getByRole } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown {...defaultProps} items={items} />,
    );

    await user.click(getByText("Create more with AI"));

    const itemButton = getByRole("menuitem", { name: /Test Item/i });
    await user.click(itemButton);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders external link when href is provided and dropdown is open", async () => {
    const user = userEvent.setup();
    const items = [{ label: "External Link", href: "https://example.com" }];
    const { getByText, container } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown {...defaultProps} items={items} />,
    );

    await user.click(getByText("Create more with AI"));

    const link = container.querySelector("a");
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("displays disabled state on primary button", () => {
    const { getByText } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown {...defaultProps} disabled={true} />,
    );
    const button = getByText("Create more with AI").closest("button");
    expect(button).toBeDisabled();
  });

  it("renders without footer when not provided", () => {
    const { queryByRole } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown
        primaryActionText="Test Action"
        items={[{ label: "Test Item" }]}
      />,
    );

    const separator = queryByRole("separator");
    expect(separator).not.toBeInTheDocument();
  });

  it("toggles dropdown open/closed when primary button is clicked", async () => {
    const user = userEvent.setup();
    const { getByText, queryByRole } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown {...defaultProps} />,
    );

    // Initially closed
    expect(queryByRole("menu")).not.toBeInTheDocument();

    // Click to open
    await user.click(getByText("Create more with AI"));
    expect(queryByRole("menu")).toBeInTheDocument();

    // Click to close
    await user.click(getByText("Create more with AI"));
    expect(queryByRole("menu")).not.toBeInTheDocument();
  });

  it("closes dropdown when clicking outside", async () => {
    const user = userEvent.setup();
    const { getByText, queryByRole } = renderWithTheme(
      <OakSmallSecondaryButtonWithDropdown {...defaultProps} />,
    );

    // Open dropdown
    await user.click(getByText("Create more with AI"));
    expect(queryByRole("menu")).toBeInTheDocument();

    // Click outside (simulate by clicking on document body)
    await user.click(document.body);
    expect(queryByRole("menu")).not.toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakSmallSecondaryButtonWithDropdown {...defaultProps}>
          Click Me
        </OakSmallSecondaryButtonWithDropdown>
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
