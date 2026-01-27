import React from "react";
import "@testing-library/jest-dom";

import {
  OakLeftAlignedButtonProps,
  OakLeftAlignedButton,
} from "./OakLeftAlignedButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const defaultArgs: OakLeftAlignedButtonProps = {
  iconName: "arrow-right",
};

describe("OakLeftAlignedButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakLeftAlignedButton {...defaultArgs} data-testid="test">
        Click
      </OakLeftAlignedButton>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakLeftAlignedButton {...defaultArgs}>Click Me</OakLeftAlignedButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the chidren", () => {
    const { getByText } = renderWithTheme(
      <OakLeftAlignedButton {...defaultArgs}>Click</OakLeftAlignedButton>,
    );
    expect(getByText("Click")).toBeInTheDocument();
  });

  it("calls onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderWithTheme(
      <OakLeftAlignedButton
        {...defaultArgs}
        data-testid="test"
        onClick={onClick}
      >
        Click
      </OakLeftAlignedButton>,
    );
    getByTestId("test").click();
    expect(onClick).toHaveBeenCalled();
  });

  describe("Icon positioning logic", () => {
    it("renders icon before text with justify-content start when both isTrailingIcon and rightAlignIcon are false", () => {
      const { getByTestId } = renderWithTheme(
        <OakLeftAlignedButton
          iconName="arrow-right"
          isTrailingIcon={false}
          rightAlignIcon={false}
        >
          Click Me
        </OakLeftAlignedButton>,
      );

      const flexContainer = getByTestId("left-aligned-btn-flex-container");
      expect(flexContainer).toBeInTheDocument();

      // Check that justify-content is start
      expect(flexContainer).toHaveStyle({ justifyContent: "start" });

      // Icon should be the first child, text should be second
      const children = Array.from(flexContainer.children);
      expect(children[1]?.textContent).toBe("Click Me");
    });

    it("renders icon after text with justify-content start when isTrailingIcon is true but rightAlignIcon is false", () => {
      const { getByTestId } = renderWithTheme(
        <OakLeftAlignedButton
          iconName="arrow-right"
          isTrailingIcon={true}
          rightAlignIcon={false}
        >
          Click Me
        </OakLeftAlignedButton>,
      );
      const flexContainer = getByTestId("left-aligned-btn-flex-container");
      expect(flexContainer).toBeInTheDocument();

      // Check that justify-content is start
      expect(flexContainer).toHaveStyle({ justifyContent: "start" });

      // Text should be first, icon should be second
      const children = Array.from(flexContainer.children);
      expect(children[0]?.textContent).toBe("Click Me");
    });

    it("renders icon after text with justify-content space-between when rightAlignIcon is true", () => {
      const { getByTestId } = renderWithTheme(
        <OakLeftAlignedButton iconName="arrow-right" rightAlignIcon={true}>
          Click Me
        </OakLeftAlignedButton>,
      );

      const flexContainer = getByTestId("left-aligned-btn-flex-container");
      expect(flexContainer).toBeInTheDocument();

      // Check that justify-content is space-between
      expect(flexContainer).toHaveStyle({ justifyContent: "space-between" });

      // Text should be first, icon should be second
      const children = Array.from(flexContainer.children);
      expect(children[0]?.textContent).toBe("Click Me");
    });

    it("renders icon after text with justify-content space-between when both isTrailingIcon and rightAlignIcon are true", () => {
      const { getByTestId } = renderWithTheme(
        <OakLeftAlignedButton
          iconName="arrow-right"
          isTrailingIcon={true}
          rightAlignIcon={true}
        >
          Click Me
        </OakLeftAlignedButton>,
      );

      const flexContainer = getByTestId("left-aligned-btn-flex-container");
      expect(flexContainer).toBeInTheDocument();

      // Check that justify-content is space-between (rightAlignIcon takes precedence)
      expect(flexContainer).toHaveStyle({ justifyContent: "space-between" });

      // Text should be first, icon should be second
      const children = Array.from(flexContainer.children);
      expect(children[0]?.textContent).toBe("Click Me");
    });
  });
});
