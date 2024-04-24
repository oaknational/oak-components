import React, { createRef } from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { fireEvent } from "@testing-library/react";

import { OakSearchFilterCheckBox } from "./OakSearchFilterCheckBox";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("OakSearchFilterCheckBox", () => {
  it("renders a checkbox", () => {
    const { getByRole } = renderWithTheme(
      <OakSearchFilterCheckBox
        id="checkbox-1"
        value="Option 1"
        data-testid="test-1"
        icon={"subject-history"}
        displayValue="Option 1"
      />,
    );
    expect(getByRole("checkbox")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakSearchFilterCheckBox
          id="checkbox-1"
          value="Option 1"
          icon={"subject-history"}
          displayValue="Option 1"
        />
        ,
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has a label", () => {
    const { getByLabelText } = renderWithTheme(
      <OakSearchFilterCheckBox
        id="checkbox-1"
        displayValue="Option 1"
        value="1"
        icon={"subject-history"}
      />,
    );
    expect(getByLabelText("Option 1")).toBeInTheDocument();
  });

  it("calls onChange when clicked", () => {
    const onChange = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakSearchFilterCheckBox
        id="checkbox-1"
        value="Option 1"
        onChange={onChange}
        icon={"subject-history"}
        displayValue="Option 1"
      />,
    );
    getByRole("checkbox").click();
    expect(onChange).toHaveBeenCalled();
  });

  it("calls onFocus when focused", () => {
    const onFocus = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakSearchFilterCheckBox
        id="checkbox-1"
        value="Option 1"
        onFocus={onFocus}
        icon={"subject-history"}
        displayValue="Option 1"
      />,
    );
    getByRole("checkbox").focus();
    expect(onFocus).toHaveBeenCalled();
  });

  it("calls onBlur when blurred", () => {
    const onBlur = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakSearchFilterCheckBox
        id="checkbox-1"
        value="Option 1"
        onBlur={onBlur}
        icon={"subject-history"}
        displayValue="Option 1"
      />,
    );
    getByRole("checkbox").focus();
    getByRole("checkbox").blur();
    expect(onBlur).toHaveBeenCalled();
  });

  it("calls onHovered when mouse entered and left", () => {
    const onHovered = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakSearchFilterCheckBox
        id="checkbox-1"
        value="Option 1"
        onHovered={onHovered}
        icon={"subject-history"}
        displayValue="Option 1"
      />,
    );
    fireEvent.mouseEnter(getByRole("checkbox"));
    fireEvent.mouseLeave(getByRole("checkbox"));
    expect(onHovered).toHaveBeenCalled();
  });

  it("is not clickable when disabled", () => {
    const onChange = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakSearchFilterCheckBox
        id="checkbox-1"
        value="Option 1"
        onChange={onChange}
        disabled
        icon={"subject-history"}
        displayValue="Option 1"
      />,
    );
    getByRole("checkbox").click();
    expect(onChange).not.toHaveBeenCalled();
  });

  it("can be checked and unchecked using a ref", () => {
    const ref = createRef<HTMLInputElement>();
    const { getByRole } = renderWithTheme(
      <OakSearchFilterCheckBox
        id="checkbox-1"
        value="Option 1"
        innerRef={ref}
        icon={"subject-history"}
        displayValue="Option 1"
      />,
    );
    ref.current?.click();
    expect(getByRole("checkbox")).toBeChecked();
    ref.current?.click();
    expect(getByRole("checkbox")).not.toBeChecked();
  });
});
