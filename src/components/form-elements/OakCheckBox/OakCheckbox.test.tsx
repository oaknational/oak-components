import React from "react";
import "@testing-library/jest-dom";
import { createEvent, fireEvent } from "@testing-library/react";

import { OakCheckBox } from "./OakCheckBox";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakCheckBox", () => {
  it("does not read Date.now during rendering or rerendering", () => {
    const dateNow = jest.spyOn(Date, "now");
    try {
      const { rerender } = renderWithTheme(
        <OakCheckBox id="checkbox-1" value="Option 1" />,
      );
      rerender(<OakCheckBox id="checkbox-1" value="Option 2" />);
      expect(dateNow).not.toHaveBeenCalled();
    } finally {
      dateNow.mockRestore();
    }
  });

  it("renders a checkbox", () => {
    const { getByTestId } = renderWithTheme(
      <OakCheckBox id="checkbox-1" value="Option 1" data-testid="test-1" />,
    );
    expect(getByTestId("test-1")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakCheckBox id="checkbox-1" value="Option 1" />,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders value as a label", () => {
    const { getByLabelText } = renderWithTheme(
      <OakCheckBox id="checkbox-1" value="Option 1" />,
    );

    expect(getByLabelText("Option 1")).toBeInTheDocument();
  });

  it("has a role of checkbox", () => {
    const { getByRole } = renderWithTheme(
      <OakCheckBox id="checkbox-1" value="Option 1" />,
    );

    expect(getByRole("checkbox")).toBeInTheDocument();
  });

  it("has a name attribute of value id", () => {
    const { getByRole } = renderWithTheme(
      <OakCheckBox id="checkbox-1" value="Option 1" />,
    );

    expect(getByRole("checkbox")).toHaveAttribute("name", "checkbox-1");
  });

  it("can be checked and unchecked through clicking", () => {
    const { getByRole } = renderWithTheme(
      <OakCheckBox id="checkbox-1" value="Option 1" />,
    );
    getByRole("checkbox").click();
    expect(getByRole("checkbox")).toBeChecked();
    getByRole("checkbox").click();
    expect(getByRole("checkbox")).not.toBeChecked();
  });

  it("is uncheckable when disabled", () => {
    const { getByRole } = renderWithTheme(
      <OakCheckBox id="checkbox-1" value="Option 1" disabled />,
    );
    getByRole("checkbox").click();
    expect(getByRole("checkbox")).not.toBeChecked();
  });

  it("calls onChange method when checked and unchecked", () => {
    const onChange = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakCheckBox id="checkbox-1" value="Option 1" onChange={onChange} />,
    );
    getByRole("checkbox").click();
    getByRole("checkbox").click();
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it("calls onFocus and onBlur with focus and blur", () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakCheckBox
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
    const { getByLabelText } = renderWithTheme(
      <OakCheckBox id="checkbox-1" value="Option 1" onHovered={onHovered} />,
    );
    fireEvent.mouseEnter(getByLabelText("Option 1"));
    fireEvent.mouseLeave(getByLabelText("Option 1"));
    expect(onHovered).toHaveBeenCalledTimes(1);
  });

  it("captures event timestamp durations across repeated hovers", () => {
    const onHovered = jest.fn();
    const { getByText } = renderWithTheme(
      <OakCheckBox id="checkbox-1" value="Option 1" onHovered={onHovered} />,
    );
    const label = getByText("Option 1");

    for (const [start, end] of [
      [100, 1100],
      [2000, 2250],
    ] as const) {
      const mouseEnter = createEvent.mouseOver(label);
      const mouseLeave = createEvent.mouseOut(label);
      Object.defineProperty(mouseEnter, "timeStamp", { value: start });
      Object.defineProperty(mouseLeave, "timeStamp", { value: end });
      fireEvent(label, mouseEnter);
      fireEvent(label, mouseLeave);
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
    const { getByText } = renderWithTheme(
      <OakCheckBox id="checkbox-1" value="Option 1" onHovered={onHovered} />,
    );
    const label = getByText("Option 1");

    fireEvent.mouseLeave(label);
    expect(onHovered).not.toHaveBeenCalled();
    fireEvent.mouseEnter(label);
    fireEvent.mouseLeave(label);
    fireEvent.mouseLeave(label);
    expect(onHovered).toHaveBeenCalledTimes(1);
  });
});
