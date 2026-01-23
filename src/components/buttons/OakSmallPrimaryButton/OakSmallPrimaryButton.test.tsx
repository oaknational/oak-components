import React from "react";
import "@testing-library/jest-dom";

import {
  OakSmallPrimaryButton,
  OakSmallPrimaryButtonProps,
} from "./OakSmallPrimaryButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const defaultArgs: OakSmallPrimaryButtonProps = {
  iconName: "arrow-right",
};

describe("OakSmallPrimaryButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakSmallPrimaryButton {...defaultArgs} data-testid="test">
        Click
      </OakSmallPrimaryButton>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakSmallPrimaryButton {...defaultArgs}>Click Me</OakSmallPrimaryButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the chidren", () => {
    const { getByText } = renderWithTheme(
      <OakSmallPrimaryButton {...defaultArgs}>Click</OakSmallPrimaryButton>,
    );
    expect(getByText("Click")).toBeInTheDocument();
  });

  it("calls onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderWithTheme(
      <OakSmallPrimaryButton
        {...defaultArgs}
        data-testid="test"
        onClick={onClick}
      >
        Click
      </OakSmallPrimaryButton>,
    );
    getByTestId("test").click();
    expect(onClick).toHaveBeenCalled();
  });
});
