import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakCloseButton, OakCloseButtonProps } from "./OakCloseButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

const defaultArgs: OakCloseButtonProps = {
  onClose: () => {},
};

describe("OakCloseButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakCloseButton {...defaultArgs} data-testid="test" />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakCloseButton {...defaultArgs}>Click Me</OakCloseButton>
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls onClose method", () => {
    const onClose = jest.fn();
    const { getByTestId } = renderWithTheme(
      <OakCloseButton {...defaultArgs} data-testid="test" onClose={onClose} />,
    );
    getByTestId("test").click();
    expect(onClose).toHaveBeenCalled();
  });
});
