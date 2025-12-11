import React from "react";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";

import {
  InternalShadowIconButton,
  InternalShadowIconButtonProps,
} from "./InternalShadowIconButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const defaultArgs: InternalShadowIconButtonProps = {
  iconName: "arrow-right",
  defaultTextColor: "text-subdued",
  hoverTextColor: "text-promo",
  disabledTextColor: "text-disabled",
};

describe("InternalShadowIconButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <InternalShadowIconButton {...defaultArgs} data-testid="test">
        Click
      </InternalShadowIconButton>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <InternalShadowIconButton {...defaultArgs}>
        Click Me
      </InternalShadowIconButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the chidren", () => {
    const { getByText } = renderWithTheme(
      <InternalShadowIconButton {...defaultArgs}>
        Click
      </InternalShadowIconButton>,
    );
    expect(getByText("Click")).toBeInTheDocument();
  });

  it("calls onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderWithTheme(
      <InternalShadowIconButton
        {...defaultArgs}
        data-testid="test"
        onClick={onClick}
      >
        Click
      </InternalShadowIconButton>,
    );
    getByTestId("test").click();
    expect(onClick).toHaveBeenCalled();
  });

  it("calls onHovered method when a mouseover and mouseout event has happened", () => {
    const onHovered = jest.fn();
    const { getByTestId } = renderWithTheme(
      <InternalShadowIconButton
        {...defaultArgs}
        data-testid="test"
        onHovered={onHovered}
      >
        Click
      </InternalShadowIconButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("calls doesn't call onHovered method before a mouseout event happens", () => {
    const onHovered = jest.fn();
    const { getByTestId } = renderWithTheme(
      <InternalShadowIconButton
        {...defaultArgs}
        data-testid="test"
        onHovered={onHovered}
      >
        Click
      </InternalShadowIconButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));
    expect(onHovered).not.toHaveBeenCalled();
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("correctly captures the duration of the hover event", () => {
    const onHovered = jest.fn();
    const { getByTestId } = renderWithTheme(
      <InternalShadowIconButton
        {...defaultArgs}
        data-testid="test"
        onHovered={onHovered}
      >
        Click
      </InternalShadowIconButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));
    jest.advanceTimersByTime(1000);
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledWith(expect.anything(), 1000);
  });
});
