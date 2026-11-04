import React from "react";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";

import { OakIconButton } from "./OakIconButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakIconButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders correctly", () => {
    const { container } = renderWithTheme(
      <OakIconButton
        iconName="question-mark"
        $colorScheme="primary"
        $size="md"
        $variant="primary"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("responds to click events", () => {
    const fn = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakIconButton
        iconName="question-mark"
        $colorScheme="primary"
        $size="md"
        $variant="primary"
        onClick={fn}
      />,
    );
    fireEvent.click(getByRole("button"));
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
