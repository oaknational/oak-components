import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import {
  OakSmallSecondaryButton,
  OakSmallSecondaryButtonProps,
} from "./OakSmallSecondaryButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

const defaultArgs: OakSmallSecondaryButtonProps = {
  iconName: "arrow-right",
};

describe("OakSmallSecondaryButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakSmallSecondaryButton {...defaultArgs} data-testid="test">
        Click
      </OakSmallSecondaryButton>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakSmallSecondaryButton {...defaultArgs}>
          Click Me
        </OakSmallSecondaryButton>
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the chidren", () => {
    const { getByText } = renderWithTheme(
      <OakSmallSecondaryButton {...defaultArgs}>Click</OakSmallSecondaryButton>,
    );
    expect(getByText("Click")).toBeInTheDocument();
  });

  it("calls onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderWithTheme(
      <OakSmallSecondaryButton
        {...defaultArgs}
        data-testid="test"
        onClick={onClick}
      >
        Click
      </OakSmallSecondaryButton>,
    );
    getByTestId("test").click();
    expect(onClick).toHaveBeenCalled();
  });
});
