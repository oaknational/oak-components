import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakBaseButton } from "./OakBaseButton";

describe("OakBaseButton", () => {
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = render(
      <OakBaseButton data-testid="test">Click</OakBaseButton>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakBaseButton>Click Me</OakBaseButton>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the chidren", () => {
    const { getByText } = render(<OakBaseButton>Click</OakBaseButton>);
    expect(getByText("Click")).toBeInTheDocument();
  });

  it("calls onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <OakBaseButton data-testid="test" onClick={onClick}>
        Click
      </OakBaseButton>,
    );
    getByTestId("test").click();
    expect(onClick).toHaveBeenCalled();
  });

  it("calls onHovered method when a mouseover and mouseout event has happened", () => {
    const onHovered = jest.fn();
    const { getByTestId } = render(
      <OakBaseButton data-testid="test" onHovered={onHovered}>
        Click
      </OakBaseButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("calls doesn't call onHovered method before a mouseout event happens", () => {
    const onHovered = jest.fn();
    const { getByTestId } = render(
      <OakBaseButton data-testid="test" onHovered={onHovered}>
        Click
      </OakBaseButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));
    expect(onHovered).not.toHaveBeenCalled();
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("correctly captures the duration of the hover event", () => {
    jest.useFakeTimers();
    const onHovered = jest.fn();
    const { getByTestId } = render(
      <OakBaseButton data-testid="test" onHovered={onHovered}>
        Click
      </OakBaseButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));
    jest.advanceTimersByTime(1000);
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledWith(expect.anything(), 1000);
  });
});
