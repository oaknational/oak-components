import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { create } from "react-test-renderer";

import {
  InternalShadowRoundButton,
  InternalShadowRoundButtonProps,
} from "./InternalShadowRoundButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const defaultArgs: InternalShadowRoundButtonProps = {
  iconName: "arrow-right",
  defaultIconBackground: "mint",
  defaultTextColor: "mint30",
  hoverTextColor: "lemon50",
  disabledIconBackground: "grey20",
  disabledTextColor: "grey40",
  hoverIconBackground: "mint",
  iconBackgroundSize: "spacing-32",
  iconSize: "spacing-24",
};

describe("InternalShadowRoundButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <InternalShadowRoundButton {...defaultArgs} data-testid="test">
        Click
      </InternalShadowRoundButton>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <InternalShadowRoundButton {...defaultArgs}>
        Click Me
      </InternalShadowRoundButton>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the chidren", () => {
    const { getByText } = render(
      <InternalShadowRoundButton {...defaultArgs}>
        Click
      </InternalShadowRoundButton>,
    );
    expect(getByText("Click")).toBeInTheDocument();
  });

  it("calls onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <InternalShadowRoundButton
        {...defaultArgs}
        data-testid="test"
        onClick={onClick}
      >
        Click
      </InternalShadowRoundButton>,
    );
    getByTestId("test").click();
    expect(onClick).toHaveBeenCalled();
  });

  it("calls onHovered method when a mouseover and mouseout event has happened", () => {
    const onHovered = jest.fn();
    const { getByTestId } = render(
      <InternalShadowRoundButton
        {...defaultArgs}
        data-testid="test"
        onHovered={onHovered}
      >
        Click
      </InternalShadowRoundButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("calls doesn't call onHovered method before a mouseout event happens", () => {
    const onHovered = jest.fn();
    const { getByTestId } = render(
      <InternalShadowRoundButton
        {...defaultArgs}
        data-testid="test"
        onHovered={onHovered}
      >
        Click
      </InternalShadowRoundButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));
    expect(onHovered).not.toHaveBeenCalled();
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("correctly applies default styles", () => {
    const { getByTestId } = renderWithTheme(
      <InternalShadowRoundButton {...defaultArgs} data-testid="test">
        Click
      </InternalShadowRoundButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));

    expect(getByTestId("test").firstChild?.firstChild).toHaveStyle({
      "background-color": "#bef2bd",
      color: "#ebfbeb",
    });
  });

  it("correctly captures the duration of the hover event", () => {
    const onHovered = jest.fn();
    const { getByTestId } = render(
      <InternalShadowRoundButton
        {...defaultArgs}
        data-testid="test"
        onHovered={onHovered}
      >
        Click
      </InternalShadowRoundButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));
    jest.advanceTimersByTime(1000);
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledWith(expect.anything(), 1000);
  });
});
