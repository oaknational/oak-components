import React, { createRef } from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { fireEvent } from "@testing-library/react";

import { InternalCheckBox } from "./InternalCheckBox";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms/OakThemeProvider";
import { oakDefaultTheme } from "@/styles";

describe("InternalCheckBox", () => {
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
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <InternalCheckBox id="checkbox-1" value="Option 1" />
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
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
});
