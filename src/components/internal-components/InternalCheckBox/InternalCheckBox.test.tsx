import React, { createRef } from "react";
import "@testing-library/jest-dom";
import { createEvent, fireEvent } from "@testing-library/react";

import { InternalCheckBox } from "./InternalCheckBox";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("InternalCheckBox", () => {
  it("does not read Date.now during rendering or rerendering", () => {
    const dateNow = jest.spyOn(Date, "now");
    try {
      const { rerender } = renderWithTheme(
        <InternalCheckBox id="checkbox-1" value="Option 1" />,
      );
      rerender(<InternalCheckBox id="checkbox-1" value="Option 2" />);
      expect(dateNow).not.toHaveBeenCalled();
    } finally {
      dateNow.mockRestore();
    }
  });

  it("renders a checkbox", () => {
    const { getByRole } = renderWithTheme(
      <InternalCheckBox
        id="checkbox-1"
        value="Option 1"
        data-testid="test-1"
      />,
    );
    expect(getByRole("checkbox")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <InternalCheckBox id="checkbox-1" value="Option 1" />,
    );
    expect(container).toMatchSnapshot();
  });

  it("has a role of checkbox", () => {
    const { getByRole } = renderWithTheme(
      <InternalCheckBox id="checkbox-1" value="Option 1" />,
    );

    expect(getByRole("checkbox")).toBeInTheDocument();
  });

  it("has a name attribute of value id", () => {
    const { getByRole } = renderWithTheme(
      <InternalCheckBox id="checkbox-1" value="Option 1" />,
    );

    expect(getByRole("checkbox")).toHaveAttribute("name", "checkbox-1");
  });

  it("can be checked and unchecked through clicking", () => {
    const { getByRole } = renderWithTheme(
      <InternalCheckBox id="checkbox-1" value="Option 1" />,
    );
    getByRole("checkbox").click();
    expect(getByRole("checkbox")).toBeChecked();
    getByRole("checkbox").click();
    expect(getByRole("checkbox")).not.toBeChecked();
  });

  it("can be clicked through its ref", () => {
    const ref = createRef<HTMLInputElement>();
    const { getByRole } = renderWithTheme(
      <InternalCheckBox id="checkbox-1" value="Option 1" ref={ref} />,
    );
    ref.current?.click();
    expect(getByRole("checkbox")).toBeChecked();
    ref.current?.click();
    expect(getByRole("checkbox")).not.toBeChecked();
  });

  it("is uncheckable when disabled", () => {
    const { getByRole } = renderWithTheme(
      <InternalCheckBox id="checkbox-1" value="Option 1" disabled />,
    );
    getByRole("checkbox").click();
    expect(getByRole("checkbox")).not.toBeChecked();
  });

  it("calls onChange method when checked and unchecked", () => {
    const onChange = jest.fn();
    const { getByRole } = renderWithTheme(
      <InternalCheckBox id="checkbox-1" value="Option 1" onChange={onChange} />,
    );
    getByRole("checkbox").click();
    getByRole("checkbox").click();
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it("calls onFocus and onBlur with focus and blur", () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const { getByRole } = renderWithTheme(
      <InternalCheckBox
        id="checkbox-1"
        value="Option 1"
        onFocus={onFocus}
        onBlur={onBlur}
      />,
    );
    getByRole("checkbox").focus();
    getByRole("checkbox").blur();
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it("calls onHovered with mouseenter and mouseleave", () => {
    const onHovered = jest.fn();
    const { getByRole } = renderWithTheme(
      <InternalCheckBox
        id="checkbox-1"
        value="Option 1"
        onHovered={onHovered}
      />,
    );
    fireEvent.mouseEnter(getByRole("checkbox"));
    fireEvent.mouseLeave(getByRole("checkbox"));
    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("captures event timestamp durations across repeated hovers", () => {
    const onHovered = jest.fn();
    const { getByRole } = renderWithTheme(
      <InternalCheckBox
        id="checkbox-1"
        value="Option 1"
        onHovered={onHovered}
      />,
    );
    const checkbox = getByRole("checkbox");

    for (const [start, end] of [
      [100, 1100],
      [2000, 2250],
    ] as const) {
      const mouseEnter = createEvent.mouseOver(checkbox);
      const mouseLeave = createEvent.mouseOut(checkbox);
      Object.defineProperty(mouseEnter, "timeStamp", { value: start });
      Object.defineProperty(mouseLeave, "timeStamp", { value: end });
      fireEvent(checkbox, mouseEnter);
      fireEvent(checkbox, mouseLeave);
    }

    expect(onHovered).toHaveBeenCalledTimes(2);
    expect(onHovered).toHaveBeenNthCalledWith(
      1,
      "Option 1",
      "checkbox-1",
      1000,
    );
    expect(onHovered).toHaveBeenNthCalledWith(2, "Option 1", "checkbox-1", 250);
  });

  it("ignores mouse-leave events without a matching mouse-enter", () => {
    const onHovered = jest.fn();
    const { getByRole } = renderWithTheme(
      <InternalCheckBox
        id="checkbox-1"
        value="Option 1"
        onHovered={onHovered}
      />,
    );
    const checkbox = getByRole("checkbox");

    fireEvent.mouseLeave(checkbox);
    expect(onHovered).not.toHaveBeenCalled();
    fireEvent.mouseEnter(checkbox);
    fireEvent.mouseLeave(checkbox);
    fireEvent.mouseLeave(checkbox);
    expect(onHovered).toHaveBeenCalledTimes(1);
  });
});
