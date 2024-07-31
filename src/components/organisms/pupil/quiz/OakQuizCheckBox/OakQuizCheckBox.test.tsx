import React, { createRef } from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react";

import { OakQuizCheckBox } from "./OakQuizCheckBox";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
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
      <OakQuizCheckBox id="checkbox-1" displayValue="Option 1" value="1" />,
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

  it("renders a tick when is correct and is selected", async () => {
    const { getByAltText, getByRole, rerender } = render(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakQuizCheckBox id="checkbox-1" value="Option 1" />
      </OakThemeProvider>,
    );

    await getByRole("checkbox").click();

    rerender(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakQuizCheckBox
          id="checkbox-1"
          value="Option 1"
          feedback={"correct"}
        />
      </OakThemeProvider>,
    );
    expect(getByAltText("Correct")).toBeInTheDocument();
  });

  it("renders a cross feedback is incorrect and is selected", async () => {
    const { getByAltText, getByRole, rerender } = render(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakQuizCheckBox id="checkbox-1" value="Option 1" />
      </OakThemeProvider>,
    );

    await getByRole("checkbox").click();

    rerender(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakQuizCheckBox
          id="checkbox-1"
          value="Option 1"
          feedback={"incorrect"}
        />
      </OakThemeProvider>,
    );
    expect(getByAltText("Incorrect")).toBeInTheDocument();
  });

  it("renders a tick when is incorrect but is not selected", () => {
    const { getByAltText } = renderWithTheme(
      <OakQuizCheckBox
        id="checkbox-1"
        value="Option 1"
        feedback={"incorrect"}
      />,
    );
    expect(getByAltText("Unselected correct choice")).toBeInTheDocument();
  });

  it("doesn't render a tick or cross when feedback is correct and unselected", () => {
    const { queryByRole } = renderWithTheme(
      <OakQuizCheckBox id="checkbox-1" value="Option 1" feedback={"correct"} />,
    );
    expect(queryByRole("img")).not.toBeInTheDocument();
  });

  it("is disabled when in feedback mode ", () => {
    const onChange = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakQuizCheckBox
        id="checkbox-1"
        value="Option 1"
        feedback={"incorrect"}
        onChange={onChange}
      />,
    );
    getByRole("checkbox").click();
    expect(onChange).not.toHaveBeenCalled();
  });

  it("can be checked and unchecked using a ref", () => {
    const ref = createRef<HTMLInputElement>();
    const { getByRole } = renderWithTheme(
      <OakQuizCheckBox id="checkbox-1" value="Option 1" innerRef={ref} />,
    );
    ref.current?.click();
    expect(getByRole("checkbox")).toBeChecked();
    ref.current?.click();
    expect(getByRole("checkbox")).not.toBeChecked();
  });
});
