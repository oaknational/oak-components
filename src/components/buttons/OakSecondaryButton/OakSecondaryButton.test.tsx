import React from "react";
import "@testing-library/jest-dom";

import {
  OakSecondaryButton,
  OakSecondaryButtonProps,
} from "./OakSecondaryButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const defaultArgs: OakSecondaryButtonProps = {
  iconName: "arrow-right",
};

describe("OakSecondaryButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakSecondaryButton {...defaultArgs} data-testid="test">
        Click
      </OakSecondaryButton>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakSecondaryButton {...defaultArgs}>Click Me</OakSecondaryButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the chidren", () => {
    const { getByText } = renderWithTheme(
      <OakSecondaryButton {...defaultArgs}>Click</OakSecondaryButton>,
    );
    expect(getByText("Click")).toBeInTheDocument();
  });

  it("calls onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderWithTheme(
      <OakSecondaryButton {...defaultArgs} data-testid="test" onClick={onClick}>
        Click
      </OakSecondaryButton>,
    );
    getByTestId("test").click();
    expect(onClick).toHaveBeenCalled();
  });
});
