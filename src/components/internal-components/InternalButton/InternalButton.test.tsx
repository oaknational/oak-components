import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, createEvent } from "@testing-library/react";

import { InternalButton } from "./InternalButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("InternalButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders", () => {
    const { getByTestId } = render(
      <InternalButton data-testid="test">Click</InternalButton>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("does not read Date.now during rendering or rerendering", () => {
    const dateNow = jest.spyOn(Date, "now");
    try {
      const { rerender } = render(<InternalButton>Click</InternalButton>);
      rerender(<InternalButton>Updated</InternalButton>);
      expect(dateNow).not.toHaveBeenCalled();
    } finally {
      dateNow.mockRestore();
    }
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <InternalButton>Click Me</InternalButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the chidren", () => {
    const { getByText } = render(<InternalButton>Click</InternalButton>);
    expect(getByText("Click")).toBeInTheDocument();
  });

  it("calls onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <InternalButton data-testid="test" onClick={onClick}>
        Click
      </InternalButton>,
    );
    getByTestId("test").click();
    expect(onClick).toHaveBeenCalled();
  });

  it("calls onHovered method when a mouseover and mouseout event has happened", () => {
    const onHovered = jest.fn();
    const { getByTestId } = render(
      <InternalButton data-testid="test" onHovered={onHovered}>
        Click
      </InternalButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("calls doesn't call onHovered method before a mouseout event happens", () => {
    const onHovered = jest.fn();
    const { getByTestId } = render(
      <InternalButton data-testid="test" onHovered={onHovered}>
        Click
      </InternalButton>,
    );
    fireEvent.mouseEnter(getByTestId("test"));
    expect(onHovered).not.toHaveBeenCalled();
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("correctly captures the duration of the hover event", () => {
    const onHovered = jest.fn();
    const { getByTestId } = render(
      <InternalButton data-testid="test" onHovered={onHovered}>
        Click
      </InternalButton>,
    );
    const button = getByTestId("test");
    const mouseEnter = createEvent.mouseOver(button);
    const mouseLeave = createEvent.mouseOut(button);
    Object.defineProperty(mouseEnter, "timeStamp", { value: 100 });
    Object.defineProperty(mouseLeave, "timeStamp", { value: 1100 });

    fireEvent(button, mouseEnter);
    fireEvent(button, mouseLeave);
    expect(onHovered).toHaveBeenNthCalledWith(1, expect.anything(), 1000);

    const nextMouseEnter = createEvent.mouseOver(button);
    const nextMouseLeave = createEvent.mouseOut(button);
    Object.defineProperty(nextMouseEnter, "timeStamp", { value: 2000 });
    Object.defineProperty(nextMouseLeave, "timeStamp", { value: 2250 });

    fireEvent(button, nextMouseEnter);
    fireEvent(button, nextMouseLeave);
    expect(onHovered).toHaveBeenNthCalledWith(2, expect.anything(), 250);
  });

  it("does not call onHovered without a matching mouse-enter event", () => {
    const onHovered = jest.fn();
    const { getByRole } = render(
      <InternalButton onHovered={onHovered}>Click</InternalButton>,
    );
    const button = getByRole("button");

    fireEvent.mouseLeave(button);
    expect(onHovered).not.toHaveBeenCalled();

    fireEvent.mouseEnter(button);
    fireEvent.mouseLeave(button);
    fireEvent.mouseLeave(button);
    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("correctly fires for a form matching the id from its form props", () => {
    const onSubmit = jest.fn((e) => e.preventDefault());
    const { getByRole } = render(
      <div>
        <form id="test-form" onSubmit={onSubmit}>
          <input />
        </form>

        <InternalButton data-testid="test" form="test-form" type="submit">
          Click
        </InternalButton>
      </div>,
    );
    getByRole("button").click();
    expect(onSubmit).toHaveBeenCalled();
  });
});
