import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakRadioButton } from "@/components/molecules/OakRadioButton";
import { OakRadioGroup } from "@/components/molecules/OakRadioGroup";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("RadioGroup", () => {
  it("renders a RadioGroup", () => {
    renderWithTheme(
      <OakRadioGroup name={"test"}>
        <OakRadioButton id="radio-1" value="1" label="Option 1" />
        <OakRadioButton id="radio-2" value="2" label="Option 2" />
        <OakRadioButton id="radio-3" value="3" label="Option 3" />
      </OakRadioGroup>,
    );

    const radioGroup = screen.getByRole("radiogroup");
    expect(radioGroup).toBeInTheDocument();
  });

  it("renders a label", () => {
    renderWithTheme(
      <OakRadioGroup name={"test"} label="Select one of the following:">
        <OakRadioButton id="radio-1" value="1" label="Option 1" />
        <OakRadioButton id="radio-2" value="2" label="Option 2" />
        <OakRadioButton id="radio-3" value="3" label="Option 3" />
      </OakRadioGroup>,
    );

    const label = screen.getByText("Select one of the following:");

    expect(label).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakRadioGroup name={"test"}>
        <OakRadioButton
          value="1"
          id="radio-1"
          label="Option 1"
          $labelGap="space-between-m"
          $font="body-1-bold"
          $color="black"
          data-testid={"radio-1"}
        />
        <OakRadioButton
          value="2"
          id="radio-2"
          label="Option 2"
          $labelGap="space-between-m"
          $font="body-1-bold"
          $color="black"
        />
        <OakRadioButton
          value="3"
          id="radio-3"
          label="Option 3"
          $labelGap="space-between-m"
          $font="body-1-bold"
          $color="black"
        />
      </OakRadioGroup>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("allows you to select a radio on click of label", async () => {
    const { getByLabelText, rerender } = renderWithTheme(
      <OakRadioGroup name={"test"}>
        <OakRadioButton
          id="radio-1"
          value="1"
          label="Option 1"
          data-testid={"radio-1"}
        />
        <OakRadioButton
          id="radio-2"
          value="2"
          label="Option 2"
          data-testid={"radio-2"}
        />
        <OakRadioButton
          id="radio-3"
          value="3"
          label="Option 3"
          data-testid={"radio-3"}
        />
      </OakRadioGroup>,
    );

    const radio1 = getByLabelText("Option 1");
    const radio2 = getByLabelText("Option 2");

    await userEvent.click(radio1);
    rerender(
      <OakRadioGroup name={"test"}>
        <OakRadioButton
          id="radio-1"
          value="1"
          label="Option 1"
          data-testid={"radio-1"}
        />
        <OakRadioButton
          id="radio-2"
          value="2"
          label="Option 2"
          data-testid={"radio-2"}
        />
        <OakRadioButton
          id="radio-3"
          value="3"
          label="Option 3"
          data-testid={"radio-3"}
        />
      </OakRadioGroup>,
    );

    expect(radio1).toBeChecked();
    expect(radio2).not.toBeChecked();
  });

  it("changes on keyboard input", async () => {
    const { rerender, getByLabelText } = renderWithTheme(
      <OakRadioGroup name={"test"}>
        <OakRadioButton
          id="radio-1"
          value="1"
          label="Option 1"
          data-testid={"radio-1"}
        />
        <OakRadioButton
          id="radio-2"
          value="2"
          label="Option 2"
          data-testid={"radio-2"}
        />
        <OakRadioButton
          id="radio-3"
          value="3"
          label="Option 3"
          data-testid={"radio-3"}
        />
      </OakRadioGroup>,
    );

    const radio1 = getByLabelText("Option 1");
    const radio2 = getByLabelText("Option 2");

    const user = userEvent.setup();

    expect(radio1).not.toBeChecked();
    expect(radio2).not.toBeChecked();

    await user.tab();
    await user.keyboard("[ArrowDown]");
    await user.keyboard(" ");

    rerender(
      <OakRadioGroup name={"test"}>
        <OakRadioButton
          id="radio-1"
          value="1"
          label="Option 1"
          data-testid={"radio-1"}
        />
        <OakRadioButton
          id="radio-2"
          value="2"
          label="Option 2"
          data-testid={"radio-2"}
        />
        <OakRadioButton
          id="radio-3"
          value="3"
          label="Option 3"
          data-testid={"radio-3"}
        />
      </OakRadioGroup>,
    );

    expect(radio1).not.toBeChecked();
    expect(radio2).toBeChecked();
  });

  it("fires onChange when the input changes", async () => {
    const onChange = jest.fn();
    const { getByTestId } = renderWithTheme(
      <OakRadioGroup name={"test"} onChange={onChange}>
        <OakRadioButton
          id="radio-1"
          value="1"
          label="Option 1"
          data-testid={"radio-1"}
        />
        <OakRadioButton
          id="radio-2"
          value="2"
          label="Option 2"
          data-testid={"radio-2"}
        />
        <OakRadioButton
          id="radio-3"
          value="3"
          label="Option 3"
          data-testid={"radio-3"}
        />
      </OakRadioGroup>,
    );

    const radio1 = getByTestId("radio-1");

    await userEvent.click(radio1);

    expect(onChange).toHaveBeenCalled();
  });

  it("handles $font and $labelGap as props and return expected style", () => {
    const { getByTestId, getByText } = renderWithTheme(
      <OakRadioGroup
        name={"test"}
        $font={"body-1-bold"}
        $gap={"space-between-m"}
        label="Select one of the following:"
        data-testid="radio-group"
      >
        <OakRadioButton id="radio-1" value="1" label="Option 1" />
        <OakRadioButton id="radio-2" value="2" label="Option 2" />
        <OakRadioButton id="radio-3" value="3" label="Option 3" />
      </OakRadioGroup>,
    );

    const radioGroupLabel = getByText("Select one of the following:");

    expect(radioGroupLabel).toHaveStyle("font-size: 1.125rem");
    expect(radioGroupLabel).toHaveStyle("font-weight: 700");
    expect(radioGroupLabel).toHaveStyle("line-height: 1.75rem");
    expect(radioGroupLabel).toHaveStyle("letter-spacing: -0.005rem");

    const radioGroup = getByTestId("radio-group");
    expect(radioGroup).toHaveStyle("gap: 1.5rem");
  });

  it.todo("disables all radios when disabled prop is passed to RadioGroup");

  it("allows the initial value to be set with defaultValue", () => {
    const { getByLabelText } = renderWithTheme(
      <OakRadioGroup name="test" defaultValue="2">
        <OakRadioButton id="radio-1" value="1" label="Option 1" />
        <OakRadioButton id="radio-2" value="2" label="Option 2" />
      </OakRadioGroup>,
    );

    expect(getByLabelText("Option 2")).toBeChecked();
  });

  it("value can be controlled by passing a `value` prop", async () => {
    const { getByLabelText } = renderWithTheme(
      <OakRadioGroup name="test" value="1">
        <OakRadioButton id="radio-1" value="1" label="Option 1" />
        <OakRadioButton id="radio-2" value="2" label="Option 2" />
      </OakRadioGroup>,
    );

    const option2 = getByLabelText("Option 2");

    await userEvent.click(option2);

    // The `value` prop should prevent the value from changing
    expect(getByLabelText("Option 1")).toBeChecked();
  });
});
