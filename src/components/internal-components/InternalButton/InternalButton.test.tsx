import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";

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
    fireEvent.mouseEnter(getByTestId("test"));
    jest.advanceTimersByTime(1000);
    fireEvent.mouseLeave(getByTestId("test"));
    expect(onHovered).toHaveBeenCalledWith(expect.anything(), 1000);
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
