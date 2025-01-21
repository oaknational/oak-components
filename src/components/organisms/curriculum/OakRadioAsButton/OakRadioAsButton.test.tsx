import React, { createRef } from "react";
import "@testing-library/jest-dom";
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
        value="Option 1"
        data-testid="test-1"
        icon={"subject-history"}
        displayValue="Option 1"
        aria-label="Select an option"
      />,
    );
    expect(getByRole("radio")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakRadioAsButton
          name="radio-1"
          value="Option 1"
          icon={"subject-history"}
          displayValue="Option 1"
          aria-label="Select an option"
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
        aria-label="Select an option"
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
        aria-label="Select an option"
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
        aria-label="Select an option"
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
        aria-label="Select an option"
      />,
    );

    const iconElement = container.querySelector("img");
    const labelElement = getByText("Display Text");

    expect(iconElement).toBeInTheDocument();
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
          aria-label="Select option 1"
        />
        <OakRadioAsButton
          value="Option 2"
          onChange={onChange}
          icon={"subject-biology"}
          displayValue="Option 2"
          aria-label="Select option 2"
        />
      </OakRadioGroup>,
    );
    const radios = getAllByRole("radio");
    expect(radios).toHaveLength(2);
    radios[0]!.click();
    radios[0]!.click();
    radios[1]!.click();
    expect(onChange).toHaveBeenCalledTimes(2);
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
        aria-label="Select an option"
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
        aria-label="Select an option"
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
        aria-label="Select an option"
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
        aria-label="Select an option"
      />,
    );
    getByRole("radio").click();
    expect(onChange).not.toHaveBeenCalled();
  });

  it("can be checked and unchecked using a ref", () => {
    const ref = createRef<HTMLInputElement>();
    const { getByRole } = renderWithTheme(
      <OakRadioAsButton
        name="radio-1"
        value="Option 1"
        innerRef={ref}
        icon={"subject-history"}
        displayValue="Option 1"
        aria-label="Select an option"
      />,
    );
    ref.current?.click();
    expect(getByRole("radio")).toBeChecked();
  });

  it("renders with aria-labelledby attribute", () => {
    const { container } = renderWithTheme(
      <>
        <h2 id="group-label">Select an option</h2>
        <OakRadioAsButton
          name="radio-1"
          value="Option 1"
          displayValue="Option 1"
          icon={"subject-history"}
          aria-labelledby="group-label"
        />
      </>,
    );

    const radioGroup = container.querySelector('[role="radiogroup"]');
    expect(radioGroup).toHaveAttribute("aria-labelledby", "group-label");
  });

  it("renders with aria-label attribute", () => {
    const { container } = renderWithTheme(
      <OakRadioAsButton
        name="radio-1"
        value="Option 1"
        displayValue="Option 1"
        icon={"subject-history"}
        aria-label="Select an option"
      />,
    );

    const radioGroup = container.querySelector('[role="radiogroup"]');
    expect(radioGroup).toHaveAttribute("aria-label", "Select an option");
  });
});
