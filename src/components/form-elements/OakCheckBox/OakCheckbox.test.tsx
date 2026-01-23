import React from "react";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";

import { OakCheckBox } from "./OakCheckBox";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakCheckBox", () => {
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
});
