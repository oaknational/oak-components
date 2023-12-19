import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { fireEvent } from "@testing-library/react";

import { OakQuizCheckBox } from "./OakQuizCheckBox";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/base";
import { oakDefaultTheme } from "@/styles";

describe("OakQuizCheckBox", () => {
  it("renders a checkbox", () => {
    const { getByRole } = renderWithTheme(
      <OakQuizCheckBox id="checkbox-1" value="Option 1" data-testid="test-1" />,
    );
    expect(getByRole("checkbox")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakQuizCheckBox id="checkbox-1" value="Option 1" />,
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has a label", () => {
    const { getByLabelText } = renderWithTheme(
      <OakQuizCheckBox id="checkbox-1" value="Option 1" />,
    );
    expect(getByLabelText("Option 1")).toBeInTheDocument();
  });

  it("calls onChange when clicked", () => {
    const onChange = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakQuizCheckBox id="checkbox-1" value="Option 1" onChange={onChange} />,
    );
    getByRole("checkbox").click();
    expect(onChange).toHaveBeenCalled();
  });

  it("calls onFocus when focused", () => {
    const onFocus = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakQuizCheckBox id="checkbox-1" value="Option 1" onFocus={onFocus} />,
    );
    getByRole("checkbox").focus();
    expect(onFocus).toHaveBeenCalled();
  });

  it("calls onBlur when blurred", () => {
    const onBlur = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakQuizCheckBox id="checkbox-1" value="Option 1" onBlur={onBlur} />,
    );
    getByRole("checkbox").focus();
    getByRole("checkbox").blur();
    expect(onBlur).toHaveBeenCalled();
  });

  it("calls onHovered when mouse entered and left", () => {
    const onHovered = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakQuizCheckBox
        id="checkbox-1"
        value="Option 1"
        onHovered={onHovered}
      />,
    );
    fireEvent.mouseEnter(getByRole("checkbox"));
    fireEvent.mouseLeave(getByRole("checkbox"));
    expect(onHovered).toHaveBeenCalled();
  });

  it("is not clickable when disabled", () => {
    const onChange = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakQuizCheckBox
        id="checkbox-1"
        value="Option 1"
        onChange={onChange}
        disabled
      />,
    );
    getByRole("checkbox").click();
    expect(onChange).not.toHaveBeenCalled();
  });

  it("renders a tick when isCorrect is true and isFeedback is true", () => {
    const { getByAltText } = renderWithTheme(
      <OakQuizCheckBox id="checkbox-1" value="Option 1" isCorrect isFeedback />,
    );
    expect(getByAltText("Correct")).toBeInTheDocument();
  });

  it("renders a cross when isCorrect is false and isFeedback is true", () => {
    const { getByAltText } = renderWithTheme(
      <OakQuizCheckBox id="checkbox-1" value="Option 1" isFeedback />,
    );
    expect(getByAltText("Incorrect")).toBeInTheDocument();
  });

  it("does not render a checkbox when in feedback mode", () => {
    const { queryByRole } = renderWithTheme(
      <OakQuizCheckBox id="checkbox-1" value="Option 1" isFeedback />,
    );
    expect(queryByRole("checkbox")).not.toBeInTheDocument();
  });

  it("is initially checked when defaultChecked is true", () => {
    const { getByRole } = renderWithTheme(
      <OakQuizCheckBox id="checkbox-1" value="Option 1" defaultChecked />,
    );
    expect(getByRole("checkbox")).toBeChecked();
  });
});
