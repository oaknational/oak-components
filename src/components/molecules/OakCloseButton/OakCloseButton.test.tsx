import React from "react";
import "@testing-library/jest-dom";

import { OakCloseButton, OakCloseButtonProps } from "./OakCloseButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

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
});
