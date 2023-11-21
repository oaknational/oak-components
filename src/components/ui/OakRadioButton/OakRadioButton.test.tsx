import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

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
  it("matches snapshot", () => {
    const tree = create(
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
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("handles $gap, $font and $color as props", () => {
    const { getAllByTestId } = renderWithTheme(
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

    const radio1 = getAllByTestId("radio-1");
    const firstRadio = radio1[0] as HTMLElement;

    expect(firstRadio).toHaveStyle("font-weight: 700");
    expect(firstRadio).toHaveStyle("font-size: 1rem");
    expect(firstRadio).toHaveStyle("line-height: 1.75rem");
    expect(firstRadio).toHaveStyle("letter-spacing: -0.005em");
    expect(firstRadio).toHaveStyle("gap: 1.5rem");
  });
});
