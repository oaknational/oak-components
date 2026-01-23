import React from "react";
import "@testing-library/jest-dom";

import {
  OakPrimaryInvertedButton,
  OakPrimaryInvertedButtonProps,
} from "./OakPrimaryInvertedButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const defaultArgs: OakPrimaryInvertedButtonProps = {
  iconName: "arrow-right",
};

describe("OakPrimaryInvertedButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakPrimaryInvertedButton {...defaultArgs} data-testid="test">
        Click
      </OakPrimaryInvertedButton>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakPrimaryInvertedButton {...defaultArgs}>
        Click Me
      </OakPrimaryInvertedButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the chidren", () => {
    const { getByText } = renderWithTheme(
      <OakPrimaryInvertedButton {...defaultArgs}>
        Click
      </OakPrimaryInvertedButton>,
    );
    expect(getByText("Click")).toBeInTheDocument();
  });

  it("calls onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderWithTheme(
      <OakPrimaryInvertedButton
        {...defaultArgs}
        data-testid="test"
        onClick={onClick}
      >
        Click
      </OakPrimaryInvertedButton>,
    );
    getByTestId("test").click();
    expect(onClick).toHaveBeenCalled();
  });
});
