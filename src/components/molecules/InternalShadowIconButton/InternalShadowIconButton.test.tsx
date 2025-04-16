import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { create } from "react-test-renderer";

import {
  InternalShadowIconButton,
  InternalShadowIconButtonProps,
} from "./InternalShadowIconButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const defaultArgs: InternalShadowIconButtonProps = {
  iconName: "arrow-right",
  defaultTextColor: "mint30",
  hoverTextColor: "lemon50",
  disabledTextColor: "grey40",
  iconSize: "all-spacing-6",
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
    const tree = create(
      <InternalShadowIconButton {...defaultArgs}>
        Click Me
      </InternalShadowIconButton>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the chidren", () => {
    const { getByText } = render(
      <InternalShadowIconButton {...defaultArgs}>
        Click
      </InternalShadowIconButton>,
    );
    expect(getByText("Click")).toBeInTheDocument();
  });

  it("calls onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
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
    const { getByTestId } = render(
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
    const { getByTestId } = render(
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
    const { getByTestId } = render(
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
