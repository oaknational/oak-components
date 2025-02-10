import "@testing-library/jest-dom";
import React from "react";
import { create } from "react-test-renderer";
import { fireEvent } from "@testing-library/react";

import { OakRadioAsButton } from "./OakRadioAsButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";
import { OakRadioGroup } from "@/components/molecules";

describe("OakRadioAsButton", () => {
  it("renders a radio", () => {
    const { getByRole } = renderWithTheme(
      <OakRadioAsButton
        name="radio-1"
        value="history"
        icon={"subject-history"}
        displayValue="History"
      />,
    );
    expect(getByRole("radio")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakRadioAsButton
          name="radio-1"
          value="history"
          icon={"subject-history"}
          displayValue="History"
        />
        ,
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has a label", () => {
    const { getByLabelText } = renderWithTheme(
      <OakRadioAsButton
        name="radio-1"
        displayValue="Option 1"
        value="1"
        icon={"subject-history"}
      />,
    );
    expect(getByLabelText("Option 1")).toBeInTheDocument();
  });

  it("renders without an icon when only label provided", () => {
    const { container } = renderWithTheme(
      <OakRadioAsButton
        name="radio-1"
        value="Option 1"
        displayValue="Option 1"
      />,
    );

    const iconElement = container.querySelector("img");
    expect(iconElement).not.toBeInTheDocument();
  });

  it("renders the correct icon when a valid icon name is provided", async () => {
    const { container } = renderWithTheme(
      <OakRadioAsButton
        name="radio-1"
        value="Option 1"
        displayValue="Option 1"
        icon="subject-history"
      />,
    );

    const iconElement = container.querySelector("img");
    expect(iconElement).toBeInTheDocument();
  });

  it("renders both icon and label", async () => {
    const { container, getByText } = renderWithTheme(
      <OakRadioAsButton
        name="radio-1"
        value="Option 1"
        displayValue="Display Text"
        icon="subject-history"
      />,
    );

    const iconElement = container.querySelector("img");
    expect(iconElement).toBeInTheDocument();

    const labelElement = getByText("Display Text");
    expect(labelElement).toBeInTheDocument();
  });

  it("calls onChange when clicked", () => {
    const onChange = jest.fn();
    const { getAllByRole } = renderWithTheme(
      <OakRadioGroup name="test">
        <OakRadioAsButton
          value="Option 1"
          onChange={onChange}
          icon={"subject-history"}
          displayValue="Option 1"
        />
        <OakRadioAsButton
          value="Option 2"
          onChange={onChange}
          icon={"subject-biology"}
          displayValue="Option 2"
        />
      </OakRadioGroup>,
    );
    const radios = getAllByRole("radio");
    expect(radios).toHaveLength(2);

    // Click each twice to make sure we don't register clicks twice
    radios[0]!.click();
    radios[0]!.click();
    radios[1]!.click();
    radios[1]!.click();
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it("should update checked attribute in DOM", () => {
    const { getAllByRole } = renderWithTheme(
      <OakRadioGroup name="test-group" value="option1">
        <OakRadioAsButton value="option1" displayValue="Option 1" />
        <OakRadioAsButton value="option2" displayValue="Option 2" />
      </OakRadioGroup>,
    );

    const radios = getAllByRole("radio") as HTMLInputElement[];
    fireEvent.click(radios[0]!);

    expect(radios[0]!.checked).toBe(true);
  });

  it("should uncheck previous selection", () => {
    const { getAllByRole } = renderWithTheme(
      <OakRadioGroup name="test-group">
        <OakRadioAsButton value="option1" displayValue="Option 1" />
        <OakRadioAsButton value="option2" displayValue="Option 2" />
      </OakRadioGroup>,
    );

    const radios = getAllByRole("radio") as HTMLInputElement[];

    fireEvent.click(radios[0]!);
    fireEvent.click(radios[1]!);
    expect(radios[0]).not.toBeChecked();
    expect(radios[1]).toBeChecked();
  });

  it("should maintain single value in group", () => {
    let groupValue = "";
    const { getAllByRole } = renderWithTheme(
      <OakRadioGroup
        name="test-group"
        onChange={(e) => (groupValue = e.target.value)}
      >
        <OakRadioAsButton value="option1" displayValue="Option 1" />
        <OakRadioAsButton value="option2" displayValue="Option 2" />
      </OakRadioGroup>,
    );

    fireEvent.click(getAllByRole("radio")[0]!);
    fireEvent.click(getAllByRole("radio")[1]!);

    expect(groupValue).toBe("option2");
  });

  it("should pass the correct value in onChange", () => {
    let lastValue = "";
    const { getAllByRole } = renderWithTheme(
      <OakRadioGroup
        name="test-group"
        onChange={(e) => (lastValue = e.target.value)}
      >
        <OakRadioAsButton value="option1" displayValue="Option 1" />
        <OakRadioAsButton value="option2" displayValue="Option 2" />
      </OakRadioGroup>,
    );

    fireEvent.click(getAllByRole("radio")[1]!);
    expect(lastValue).toBe("option2");
  });

  it("inputs to all have name of radio group", () => {
    const onChange = jest.fn();
    const { getAllByRole, getByRole } = renderWithTheme(
      <OakRadioGroup name="test">
        <OakRadioAsButton
          value="Option 1"
          onChange={onChange}
          icon={"subject-history"}
          displayValue="Option 1"
        />
        <OakRadioAsButton
          value="Option 2"
          onChange={onChange}
          icon={"subject-biology"}
          displayValue="Option 2"
        />
      </OakRadioGroup>,
    );
    const radioGroup = getByRole("radiogroup");
    const radios = getAllByRole("radio");
    expect(radios).toHaveLength(2);
    expect(radioGroup);
    expect(radios[0]).toHaveAttribute("name", "test");
    expect(radios[1]).toHaveAttribute("name", "test");
  });

  it("radio group value sets the correct input to checked", () => {
    const { getAllByRole, getByRole } = renderWithTheme(
      <OakRadioGroup name="test" value="option_2">
        <OakRadioAsButton
          value="option_1"
          icon={"subject-history"}
          displayValue="Option 1"
        />
        <OakRadioAsButton
          value="option_2"
          icon={"subject-biology"}
          displayValue="Option 2"
        />
        <OakRadioAsButton
          value="option_3"
          icon={"subject-biology"}
          displayValue="Option 3"
        />
      </OakRadioGroup>,
    );
    const radioGroup = getByRole("radiogroup");
    const radios = getAllByRole("radio");
    expect(radios).toHaveLength(3);
    expect(radioGroup);
    expect(radios[0]).not.toBeChecked();
    expect(radios[1]).toBeChecked();
    expect(radios[2]).not.toBeChecked();
  });

  it("calls onFocus when focused", () => {
    const onFocus = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakRadioAsButton
        name="radio-1"
        value="Option 1"
        onFocus={onFocus}
        icon={"subject-history"}
        displayValue="Option 1"
      />,
    );
    getByRole("radio").focus();
    expect(onFocus).toHaveBeenCalled();
  });

  it("calls onBlur when blurred", () => {
    const onBlur = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakRadioAsButton
        name="radio-1"
        value="Option 1"
        onBlur={onBlur}
        icon={"subject-history"}
        displayValue="Option 1"
      />,
    );
    getByRole("radio").focus();
    getByRole("radio").blur();
    expect(onBlur).toHaveBeenCalled();
  });

  it("calls onHovered when mouse entered and left", () => {
    const onHovered = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakRadioAsButton
        name="radio-1"
        value="Option 1"
        onHovered={onHovered}
        icon={"subject-history"}
        displayValue="Option 1"
      />,
    );
    fireEvent.mouseEnter(getByRole("radio"));
    fireEvent.mouseLeave(getByRole("radio"));
    expect(onHovered).toHaveBeenCalled();
  });

  it("is not clickable when disabled", () => {
    const onChange = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakRadioAsButton
        name="radio-1"
        value="Option 1"
        onChange={onChange}
        disabled
        icon={"subject-history"}
        displayValue="Option 1"
      />,
    );
    getByRole("radio").click();
    expect(onChange).not.toHaveBeenCalled();
  });

  it("clicking radio triggers onChange", async () => {
    const onChange = jest.fn();
    const { getAllByRole } = renderWithTheme(
      <OakRadioGroup name="test" onChange={onChange}>
        <OakRadioAsButton
          value="option_1"
          icon={"subject-history"}
          displayValue="Option 1"
        />
        <OakRadioAsButton
          value="option_2"
          icon={"subject-biology"}
          displayValue="Option 2"
        />
        <OakRadioAsButton
          value="option_3"
          icon={"subject-biology"}
          displayValue="Option 3"
        />
      </OakRadioGroup>,
    );
    getAllByRole("radio")[1]?.click();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "option_2" }),
      }),
    );
  });

  it("renders with aria-label attribute", () => {
    const { getByRole } = renderWithTheme(
      <OakRadioAsButton
        name="radio-1"
        value="history"
        displayValue="History"
        icon={"subject-history"}
        aria-label="History"
      />,
    );

    const radioButton = getByRole("radio");
    expect(radioButton).toHaveAttribute("aria-label", "History");
  });
});
