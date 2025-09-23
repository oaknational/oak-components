import React from "react";
import "@testing-library/jest-dom";

import {
  OakSmallTertiaryInvertedButton,
  OakSmallTertiaryInvertedButtonProps,
} from "./OakSmallTertiaryInvertedButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const defaultArgs: OakSmallTertiaryInvertedButtonProps = {
  iconName: "arrow-right",
};

describe("OakSmallTertiaryInvertedButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakSmallTertiaryInvertedButton {...defaultArgs} data-testid="test">
        Click
      </OakSmallTertiaryInvertedButton>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakSmallTertiaryInvertedButton {...defaultArgs}>
        Click Me
      </OakSmallTertiaryInvertedButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the chidren", () => {
    const { getByText } = renderWithTheme(
      <OakSmallTertiaryInvertedButton {...defaultArgs}>
        Click
      </OakSmallTertiaryInvertedButton>,
    );
    expect(getByText("Click")).toBeInTheDocument();
  });

  it("calls onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderWithTheme(
      <OakSmallTertiaryInvertedButton
        {...defaultArgs}
        data-testid="test"
        onClick={onClick}
      >
        Click
      </OakSmallTertiaryInvertedButton>,
    );
    getByTestId("test").click();
    expect(onClick).toHaveBeenCalled();
  });
});
