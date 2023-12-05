import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import {
  OakSecondaryButton,
  OakSecondaryButtonProps,
} from "./OakSecondaryButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

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
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakSecondaryButton {...defaultArgs}>Click Me</OakSecondaryButton>
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
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
