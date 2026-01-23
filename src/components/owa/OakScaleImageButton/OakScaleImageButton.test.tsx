import React from "react";
import "@testing-library/jest-dom";

import {
  OakScaleImageButton,
  OakScaleImageButtonProps,
} from "./OakScaleImageButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

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
    const { container } = renderWithTheme(
      <OakScaleImageButton {...defaultArgs}>Click Me</OakScaleImageButton>,
    );
    expect(container).toMatchSnapshot();
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
