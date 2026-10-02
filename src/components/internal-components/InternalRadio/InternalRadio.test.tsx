import React, { createRef } from "react";
import "@testing-library/jest-dom";
import { createEvent, fireEvent } from "@testing-library/react";

import { InternalRadio } from "./InternalRadio";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("InternalRadio", () => {
  it("does not read Date.now during rendering or rerendering", () => {
    const dateNow = jest.spyOn(Date, "now");
    try {
      const { rerender } = renderWithTheme(
        <InternalRadio id="radio-1" value="Option 1" />,
      );
      rerender(<InternalRadio id="radio-1" value="Option 2" />);
      expect(dateNow).not.toHaveBeenCalled();
    } finally {
      dateNow.mockRestore();
    }
  });

  it("renders a radio", () => {
    const { getByRole } = renderWithTheme(
      <InternalRadio id="radio-1" value="Option 1" data-testid="test-1" />,
    );
    expect(getByRole("radio")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <InternalRadio
        id="radio-1"
        name="internal-radio-group"
        value="Option 1"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("has a role of radio", () => {
    const { getByRole } = renderWithTheme(
      <InternalRadio id="radio-1" value="Option 1" />,
    );

    expect(getByRole("radio")).toBeInTheDocument();
  });

  it("can be checked and unchecked through clicking", () => {
    const { getByRole } = renderWithTheme(
      <InternalRadio id="radio-1" value="Option 1" />,
    );
    getByRole("radio").click();
    expect(getByRole("radio")).toBeChecked();
  });

  it("can be clicked through its ref", () => {
    const ref = createRef<HTMLInputElement>();
    const { getByRole } = renderWithTheme(
      <InternalRadio id="radio-1" value="Option 1" ref={ref} />,
    );
    ref.current?.click();
    expect(getByRole("radio")).toBeChecked();
  });

  it("is unselectable when disabled", () => {
    const { getByRole } = renderWithTheme(
      <InternalRadio id="radio-1" value="Option 1" disabled />,
    );
    getByRole("radio").click();
    expect(getByRole("radio")).not.toBeChecked();
  });

  it("calls onChange method when changed", () => {
    const onChange = jest.fn();
    const { getAllByRole } = renderWithTheme(
      <div>
        <InternalRadio id="radio-1" value="Option 1" onChange={onChange} />
        <InternalRadio id="radio-1" value="Option 2" onChange={onChange} />
      </div>,
    );
    const radios = getAllByRole("radio");
    radios[0]!.click();
    // Note this doesn't trigger as its already selected
    radios[0]!.click();
    radios[1]!.click();
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it("calls onFocus and onBlur with focus and blur", () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const { getByRole } = renderWithTheme(
      <InternalRadio
        id="radio-1"
        value="Option 1"
        onFocus={onFocus}
        onBlur={onBlur}
      />,
    );
    getByRole("radio").focus();
    getByRole("radio").blur();
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it("calls onHovered with mouseenter and mouseleave", () => {
    const onHovered = jest.fn();
    const { getByRole } = renderWithTheme(
      <InternalRadio id="radio-1" value="Option 1" onHovered={onHovered} />,
    );
    fireEvent.mouseEnter(getByRole("radio"));
    fireEvent.mouseLeave(getByRole("radio"));
    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("captures event timestamp durations across repeated hovers", () => {
    const onHovered = jest.fn();
    const { getByRole } = renderWithTheme(
      <InternalRadio id="radio-1" value="Option 1" onHovered={onHovered} />,
    );
    const radio = getByRole("radio");

    for (const [start, end] of [
      [100, 1100],
      [2000, 2250],
    ] as const) {
      const mouseEnter = createEvent.mouseOver(radio);
      const mouseLeave = createEvent.mouseOut(radio);
      Object.defineProperty(mouseEnter, "timeStamp", { value: start });
      Object.defineProperty(mouseLeave, "timeStamp", { value: end });
      fireEvent(radio, mouseEnter);
      fireEvent(radio, mouseLeave);
    }

    expect(onHovered).toHaveBeenCalledTimes(2);
    expect(onHovered).toHaveBeenNthCalledWith(1, "Option 1", "radio-1", 1000);
    expect(onHovered).toHaveBeenNthCalledWith(2, "Option 1", "radio-1", 250);
  });

  it("ignores mouse-leave events without a matching mouse-enter", () => {
    const onHovered = jest.fn();
    const { getByRole } = renderWithTheme(
      <InternalRadio id="radio-1" value="Option 1" onHovered={onHovered} />,
    );
    const radio = getByRole("radio");

    fireEvent.mouseLeave(radio);
    expect(onHovered).not.toHaveBeenCalled();
    fireEvent.mouseEnter(radio);
    fireEvent.mouseLeave(radio);
    fireEvent.mouseLeave(radio);
    expect(onHovered).toHaveBeenCalledTimes(1);
  });
});
