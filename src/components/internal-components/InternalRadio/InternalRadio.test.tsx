import React, { createRef } from "react";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";

import { InternalRadio } from "./InternalRadio";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("InternalRadio", () => {
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
});
