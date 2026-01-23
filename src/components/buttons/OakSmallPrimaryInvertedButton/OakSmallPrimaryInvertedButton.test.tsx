import React from "react";
import "@testing-library/jest-dom";

import {
  OakSmallPrimaryInvertedButton,
  OakSmallPrimaryInvertedButtonProps,
} from "./OakSmallPrimaryInvertedButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const defaultArgs: OakSmallPrimaryInvertedButtonProps = {
  iconName: "arrow-right",
};

describe("OakSmallPrimaryInvertedButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakSmallPrimaryInvertedButton {...defaultArgs} data-testid="test">
        Click
      </OakSmallPrimaryInvertedButton>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakSmallPrimaryInvertedButton {...defaultArgs}>
        Click Me
      </OakSmallPrimaryInvertedButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the chidren", () => {
    const { getByText } = renderWithTheme(
      <OakSmallPrimaryInvertedButton {...defaultArgs}>
        Click
      </OakSmallPrimaryInvertedButton>,
    );
    expect(getByText("Click")).toBeInTheDocument();
  });

  it("calls onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderWithTheme(
      <OakSmallPrimaryInvertedButton
        {...defaultArgs}
        data-testid="test"
        onClick={onClick}
      >
        Click
      </OakSmallPrimaryInvertedButton>,
    );
    getByTestId("test").click();
    expect(onClick).toHaveBeenCalled();
  });
});
