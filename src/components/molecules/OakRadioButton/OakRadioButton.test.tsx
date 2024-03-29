import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakRadioGroup } from "@/components/molecules/OakRadioGroup";
import { OakRadioButton } from "@/components/molecules/OakRadioButton";
import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("RadioGroup", () => {
  it("renders a RadioGroup", () => {
    const { getByRole } = renderWithTheme(
      <OakRadioGroup name={"test"}>
        <OakRadioButton id="radio-1" value="1" label="Option 1" />
        <OakRadioButton id="radio-2" value="2" label="Option 2" />
        <OakRadioButton id="radio-3" value="3" label="Option 3" />
      </OakRadioGroup>,
    );

    const radioGroup = getByRole("radiogroup");
    expect(radioGroup).toBeInTheDocument();
  });
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
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
        </OakRadioGroup>
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("handles $labelGap, $font and $color as props", () => {
    const { getAllByTestId } = renderWithTheme(
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
    );

    const radio1 = getAllByTestId("radio-1");
    const firstRadio = radio1[0] as HTMLElement;

    expect(firstRadio).toHaveStyle("font-weight: 700");
    expect(firstRadio).toHaveStyle("font-size: 1.125rem");
    expect(firstRadio).toHaveStyle("line-height: 1.75rem");
    expect(firstRadio).toHaveStyle("letter-spacing: -0.005rem");
    expect(firstRadio).toHaveStyle("gap: 1.5rem");
  });

  it.todo("disables the radio when the disabled prop is passed");
});
