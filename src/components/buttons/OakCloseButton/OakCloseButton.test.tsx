import React from "react";
import "@testing-library/jest-dom";

import { OakCloseButton, OakCloseButtonProps } from "./OakCloseButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakIcon } from "@/components/images-and-icons/OakIcon";

const iconFilter = (container: HTMLElement) =>
  getComputedStyle(container.querySelector("img") as HTMLElement).filter;

const defaultArgs: OakCloseButtonProps = {
  onClose: () => {},
};

describe("OakCloseButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakCloseButton {...defaultArgs} data-testid="test" />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakCloseButton {...defaultArgs}>Click Me</OakCloseButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it("calls onClose method", () => {
    const onClose = jest.fn();
    const { getByTestId } = renderWithTheme(
      <OakCloseButton {...defaultArgs} data-testid="test" onClose={onClose} />,
    );
    getByTestId("test").click();
    expect(onClose).toHaveBeenCalled();
  });

  it("is labelled 'Close'", () => {
    const { getByRole } = renderWithTheme(<OakCloseButton {...defaultArgs} />);
    expect(getByRole("button", { name: "Close" })).toBeInTheDocument();
  });

  it("is 24px (spacing-24) by default", () => {
    const { container } = renderWithTheme(<OakCloseButton {...defaultArgs} />);
    expect(container.querySelector(".icon-container")).toHaveStyle({
      width: "1.5rem",
    });
  });

  it("uses the size prop for the icon and its background", () => {
    const { container } = renderWithTheme(
      <OakCloseButton {...defaultArgs} size="spacing-32" />,
    );
    expect(container.querySelector(".icon-container")).toHaveStyle({
      width: "2rem",
    });
  });

  it("has a dark icon by default", () => {
    const { container } = renderWithTheme(<OakCloseButton {...defaultArgs} />);
    const { container: reference } = renderWithTheme(
      <OakIcon iconName="cross" $colorFilter="icon-primary" />,
    );
    expect(iconFilter(container)).toBeTruthy();
    expect(iconFilter(container)).toBe(iconFilter(reference));
  });

  it("has a white icon for dark backgrounds with the inverted variant", () => {
    const { container } = renderWithTheme(
      <OakCloseButton {...defaultArgs} variant="inverted" />,
    );
    const { container: reference } = renderWithTheme(
      <OakIcon iconName="cross" $colorFilter="icon-inverted" />,
    );
    expect(iconFilter(container)).toBeTruthy();
    expect(iconFilter(container)).toBe(iconFilter(reference));
  });
});
