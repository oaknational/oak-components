import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import {
  OakScaleImageButton,
  OakScaleImageButtonProps,
} from "./OakScaleImageButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

const defaultArgs: OakScaleImageButtonProps = {
  onImageScaleCallback: jest.fn(),
  isExpanded: false,
};

describe("OakScaleImageButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakScaleImageButton {...defaultArgs} />,
    );
    expect(getByTestId("expand-image-button")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakScaleImageButton {...defaultArgs}>Click Me</OakScaleImageButton>
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls onImageScaleCallback method", () => {
    const onImageScaleCallback = jest.fn();
    const { getByTestId } = renderWithTheme(
      <OakScaleImageButton
        {...defaultArgs}
        onImageScaleCallback={onImageScaleCallback}
      />,
    );
    getByTestId("expand-image-button").click();
    expect(onImageScaleCallback).toHaveBeenCalled();
  });
});
