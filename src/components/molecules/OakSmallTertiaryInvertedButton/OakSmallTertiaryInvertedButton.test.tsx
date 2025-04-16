import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import {
  OakSmallTertiaryInvertedButton,
  OakSmallTertiaryInvertedButtonProps,
} from "./OakSmallTertiaryInvertedButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

const defaultArgs: OakSmallTertiaryInvertedButtonProps = {
  iconName: "arrow-right",
  iconSize: "all-spacing-05",
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
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakSmallTertiaryInvertedButton {...defaultArgs}>
          Click Me
        </OakSmallTertiaryInvertedButton>
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
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
