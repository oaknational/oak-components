import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { create } from "react-test-renderer";

import {
  InternalRectButton,
  InternalRectButtonProps,
} from "./InternalRectButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const defaultArgs: InternalRectButtonProps = {
  iconName: "arrow-right",
  defaultBackground: "mint",
  defaultTextColor: "mint30",
  defaultBorderColor: "mint50",
  hoverBackground: "lemon",
  hoverBorderColor: "lemon30",
  hoverTextColor: "lemon50",
  disabledBackground: "grey20",
  disabledBorderColor: "grey30",
  disabledTextColor: "grey40",
};

describe("InternalRectButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <InternalRectButton {...defaultArgs} data-testid="test">
        Click
      </InternalRectButton>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <InternalRectButton {...defaultArgs}>Click Me</InternalRectButton>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the children", () => {
    const { getByText } = render(
      <InternalRectButton {...defaultArgs}>Click</InternalRectButton>,
    );
    expect(getByText("Click")).toBeInTheDocument();
  });

  it("calls onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <InternalRectButton {...defaultArgs} data-testid="test" onClick={onClick}>
        Click
      </InternalRectButton>,
    );
    getByTestId("test").click();
    expect(onClick).toHaveBeenCalled();
  });

  it("calls onHovered method when a mouseover and mouseout event has happened", () => {
    const onHovered = jest.fn();
    const { getByTestId } = render(
      <InternalRectButton
        {...defaultArgs}
        data-testid="test"
        onHovered={onHovered}
      >
        Click
      </InternalRectButton>,
    );

    fireEvent.mouseEnter(getByTestId("test"));
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("calls doesn't call onHovered method before a mouseout event happens", () => {
    const onHovered = jest.fn();
    const { getByTestId } = render(
      <InternalRectButton
        {...defaultArgs}
        data-testid="test"
        onHovered={onHovered}
      >
        Click
      </InternalRectButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));
    expect(onHovered).not.toHaveBeenCalled();
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("correctly applies default styles", () => {
    const { getByTestId } = renderWithTheme(
      <InternalRectButton {...defaultArgs} data-testid="test">
        Click
      </InternalRectButton>,
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
    const { getByTestId } = render(
      <InternalRectButton
        {...defaultArgs}
        data-testid="test"
        onHovered={onHovered}
      >
        Click
      </InternalRectButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));
    jest.advanceTimersByTime(1000);
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledWith(expect.anything(), 1000);
  });
});
