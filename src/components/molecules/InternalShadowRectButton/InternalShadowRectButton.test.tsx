import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";

import {
  InternalShadowRectButton,
  InternalShadowRectButtonProps,
} from "./InternalShadowRectButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const defaultArgs: InternalShadowRectButtonProps = {
  iconName: "arrow-right",
  defaultBackground: "bg-decorative1-main",
  defaultTextColor: "mint30",
  defaultBorderColor: "mint50",
  hoverBackground: "bg-decorative5-main",
  hoverBorderColor: "lemon30",
  hoverTextColor: "lemon50",
  disabledBackground: "bg-neutral",
  disabledBorderColor: "grey30",
  disabledTextColor: "grey40",
};

describe("InternalShadowRectButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <InternalShadowRectButton {...defaultArgs} data-testid="test">
        Click
      </InternalShadowRectButton>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <InternalShadowRectButton {...defaultArgs}>
        Click Me
      </InternalShadowRectButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the children", () => {
    const { getByText } = render(
      <InternalShadowRectButton {...defaultArgs}>
        Click
      </InternalShadowRectButton>,
    );
    expect(getByText("Click")).toBeInTheDocument();
  });

  it("calls onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderWithTheme(
      <InternalShadowRectButton
        {...defaultArgs}
        data-testid="test"
        onClick={onClick}
      >
        Click
      </InternalShadowRectButton>,
    );
    getByTestId("test").click();
    expect(onClick).toHaveBeenCalled();
  });

  it("calls onHovered method when a mouseover and mouseout event has happened", () => {
    const onHovered = jest.fn();
    const { getByTestId } = renderWithTheme(
      <InternalShadowRectButton
        {...defaultArgs}
        data-testid="test"
        onHovered={onHovered}
      >
        Click
      </InternalShadowRectButton>,
    );

    fireEvent.mouseEnter(getByTestId("test"));
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("calls doesn't call onHovered method before a mouseout event happens", () => {
    const onHovered = jest.fn();
    const { getByTestId } = renderWithTheme(
      <InternalShadowRectButton
        {...defaultArgs}
        data-testid="test"
        onHovered={onHovered}
      >
        Click
      </InternalShadowRectButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));
    expect(onHovered).not.toHaveBeenCalled();
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("correctly applies default styles", () => {
    const { getByTestId } = renderWithTheme(
      <InternalShadowRectButton {...defaultArgs} data-testid="test">
        Click
      </InternalShadowRectButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));

    expect(getByTestId("test")).toHaveStyle({
      "background-color": "#bef2bd",
      color: "#ebfbeb",
      "border-color": "#dff9de",
    });
  });

  it("correctly captures the duration of the hover event", () => {
    const onHovered = jest.fn();
    const { getByTestId } = renderWithTheme(
      <InternalShadowRectButton
        {...defaultArgs}
        data-testid="test"
        onHovered={onHovered}
      >
        Click
      </InternalShadowRectButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));
    jest.advanceTimersByTime(1000);
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledWith(expect.anything(), 1000);
  });
});
