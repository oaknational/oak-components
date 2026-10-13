import { renderHook } from "@testing-library/react";
import React from "react";

import { useHoverDuration } from "./useHoverDuration";

const mouseEvent = (timeStamp: number) =>
  ({ timeStamp }) as React.MouseEvent<HTMLInputElement>;

describe("useHoverDuration", () => {
  it("calls onHovered with value, id and duration on mouse leave", () => {
    const onHovered = jest.fn();
    const { result } = renderHook(() =>
      useHoverDuration("a-value", "an-id", onHovered),
    );

    result.current.handleMouseEnter(mouseEvent(1000));
    result.current.handleMouseLeave(mouseEvent(1250));

    expect(onHovered).toHaveBeenCalledTimes(1);
    expect(onHovered).toHaveBeenCalledWith("a-value", "an-id", 250);
  });

  it("does not call onHovered if mouse leaves without entering", () => {
    const onHovered = jest.fn();
    const { result } = renderHook(() =>
      useHoverDuration("a-value", "an-id", onHovered),
    );

    result.current.handleMouseLeave(mouseEvent(1250));

    expect(onHovered).not.toHaveBeenCalled();
  });

  it("resets after leave so a second leave does not fire", () => {
    const onHovered = jest.fn();
    const { result } = renderHook(() =>
      useHoverDuration("a-value", "an-id", onHovered),
    );

    result.current.handleMouseEnter(mouseEvent(1000));
    result.current.handleMouseLeave(mouseEvent(1100));
    result.current.handleMouseLeave(mouseEvent(1200));

    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("does not throw when onHovered is not provided", () => {
    const { result } = renderHook(() => useHoverDuration("a-value", "an-id"));

    result.current.handleMouseEnter(mouseEvent(1000));

    expect(() =>
      result.current.handleMouseLeave(mouseEvent(1100)),
    ).not.toThrow();
  });
});
