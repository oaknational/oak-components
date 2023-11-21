import React from "react";
import "@testing-library/jest-dom";

import { OakRadioGroup } from "@/components/ui/OakRadioGroup";

import { OakRadioButton } from "@/components/ui/OakRadioButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("RadioGroup", () => {
  it("renders a RadioGroup", () => {
    const { getByRole } = renderWithTheme(
      <OakRadioGroup name={"test"}>
        <OakRadioButton value="1" label="Option 1" />
        <OakRadioButton value="2" label="Option 2" />
        <OakRadioButton value="3" label="Option 3" />
      </OakRadioGroup>,
    );

    const radioGroup = getByRole("radiogroup");
    expect(radioGroup).toBeInTheDocument();
  });
  it("handles $gap, $font and $color as props", () => {
    const { getByTestId } = renderWithTheme(
      <OakRadioGroup name={"test"}>
        <OakRadioButton
          value="1"
          label="Option 1"
          $gap="space-between-m"
          $font="body-1-bold"
          $color="black"
          data-testid={"radio-1"}
        />
        <OakRadioButton
          value="2"
          label="Option 2"
          $gap="space-between-m"
          $font="body-1-bold"
          $color="black"
        />
        <OakRadioButton
          value="3"
          label="Option 3"
          $gap="space-between-m"
          $font="body-1-bold"
          $color="black"
        />
      </OakRadioGroup>,
    );

    const firstRadio = getByTestId("radio-1");
    expect(firstRadio).toHaveStyle("font-weight: ");
    expect(firstRadio).toHaveStyle("font-size: ");
    expect(firstRadio).toHaveStyle("line-height: normal");
    expect(firstRadio).toHaveStyle("letter-spacing: normal");
    expect(firstRadio).toHaveStyle("gap: ");
  });
});
