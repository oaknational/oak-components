import React from "react";
import "@testing-library/jest-dom";

import { OakButton, OakButtonProps } from "./OakButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const defaultArgs: OakButtonProps = {
  iconName: "arrow-right",
  variant: "primary",
};

describe("OakButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakButton {...defaultArgs} data-testid="test">
        Click
      </OakButton>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakButton {...defaultArgs}>Click Me</OakButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the chidren", () => {
    const { getByText } = renderWithTheme(
      <OakButton {...defaultArgs}>Click</OakButton>,
    );
    expect(getByText("Click")).toBeInTheDocument();
  });

  it("calls onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderWithTheme(
      <OakButton {...defaultArgs} data-testid="test" onClick={onClick}>
        Click
      </OakButton>,
    );
    getByTestId("test").click();
    expect(onClick).toHaveBeenCalled();
  });
});
