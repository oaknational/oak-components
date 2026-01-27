import React from "react";
import "@testing-library/jest-dom";

import { OakPrimaryButton, OakPrimaryButtonProps } from "./OakPrimaryButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const defaultArgs: OakPrimaryButtonProps = {
  iconName: "arrow-right",
};

describe("OakPrimaryButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakPrimaryButton {...defaultArgs} data-testid="test">
        Click
      </OakPrimaryButton>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakPrimaryButton {...defaultArgs}>Click Me</OakPrimaryButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the chidren", () => {
    const { getByText } = renderWithTheme(
      <OakPrimaryButton {...defaultArgs}>Click</OakPrimaryButton>,
    );
    expect(getByText("Click")).toBeInTheDocument();
  });

  it("calls onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderWithTheme(
      <OakPrimaryButton {...defaultArgs} data-testid="test" onClick={onClick}>
        Click
      </OakPrimaryButton>,
    );
    getByTestId("test").click();
    expect(onClick).toHaveBeenCalled();
  });
});
