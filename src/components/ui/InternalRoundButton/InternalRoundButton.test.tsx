import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { create } from "react-test-renderer";

import {
  InternalRoundButton,
  InternalRoundButtonProps,
} from "./InternalRoundButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const defaultArgs: InternalRoundButtonProps = {
  iconName: "arrow-right",
  defaultIconBackground: "mint",
  defaultTextColor: "mint30",
  hoverTextColor: "lemon50",
  disabledIconBackground: "grey20",
  disabledTextColor: "grey40",
  hoverIconBackground: "mint",
  iconBackgroundSize: "all-spacing-7",
  iconSize: "all-spacing-6",
};

describe("InternalRoundButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <InternalRoundButton {...defaultArgs} data-testid="test">
        Click
      </InternalRoundButton>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <InternalRoundButton {...defaultArgs}>Click Me</InternalRoundButton>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the chidren", () => {
    const { getByText } = render(
      <InternalRoundButton {...defaultArgs}>Click</InternalRoundButton>,
    );
    expect(getByText("Click")).toBeInTheDocument();
  });

  it("calls onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <InternalRoundButton
        {...defaultArgs}
        data-testid="test"
        onClick={onClick}
      >
        Click
      </InternalRoundButton>,
    );
    getByTestId("test").click();
    expect(onClick).toHaveBeenCalled();
  });

  it("calls onHovered method when a mouseover and mouseout event has happened", () => {
    const onHovered = jest.fn();
    const { getByTestId } = render(
      <InternalRoundButton
        {...defaultArgs}
        data-testid="test"
        onHovered={onHovered}
      >
        Click
      </InternalRoundButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("calls doesn't call onHovered method before a mouseout event happens", () => {
    const onHovered = jest.fn();
    const { getByTestId } = render(
      <InternalRoundButton
        {...defaultArgs}
        data-testid="test"
        onHovered={onHovered}
      >
        Click
      </InternalRoundButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));
    expect(onHovered).not.toHaveBeenCalled();
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("correctly applies default styles", () => {
    const { getByTestId } = renderWithTheme(
      <InternalRoundButton {...defaultArgs} data-testid="test">
        Click
      </InternalRoundButton>,
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
      <InternalRoundButton
        {...defaultArgs}
        data-testid="test"
        onHovered={onHovered}
      >
        Click
      </InternalRoundButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));
    jest.advanceTimersByTime(1000);
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledWith(expect.anything(), 1000);
  });
});
