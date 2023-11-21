import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { OakRadioButton } from "@/components/ui/OakRadioButton";
import { OakRadioGroup } from "@/components/ui/OakRadioGroup";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("RadioGroup", () => {
  it("renders a RadioGroup", () => {
    renderWithTheme(
      <OakRadioGroup name={"test"}>
        <OakRadioButton value="1" label="Option 1" />
        <OakRadioButton value="2" label="Option 2" />
        <OakRadioButton value="3" label="Option 3" />
      </OakRadioGroup>,
    );

    const radioGroup = screen.getByRole("radiogroup");
    expect(radioGroup).toBeInTheDocument();
  });

  it("renders a label", () => {
    renderWithTheme(
      <OakRadioGroup name={"test"} label={"Select one of the following:"}>
        <OakRadioButton value="1" label="Option 1" />
        <OakRadioButton value="2" label="Option 2" />
        <OakRadioButton value="3" label="Option 3" />
      </OakRadioGroup>,
    );

    const label = screen.getByText("Select one of the following:");

    expect(label).toBeInTheDocument();
  });

  it("allows you to select a radio on click of label", async () => {
    const { getAllByTestId, rerender } = renderWithTheme(
      <OakRadioGroup name={"test"}>
        <OakRadioButton value="1" label="Option 1" data-testid={"radio-1"} />
        <OakRadioButton value="2" label="Option 2" data-testid={"radio-2"} />
        <OakRadioButton value="3" label="Option 3" data-testid={"radio-3"} />
      </OakRadioGroup>,
    );

    const radio1 = getAllByTestId("radio-1");
    const radio2 = getAllByTestId("radio-2");
    const firstRadio = radio1[0] as HTMLElement;
    const secondRadio = radio2[0] as HTMLElement;

    await userEvent.click(firstRadio);
    rerender(
      <OakRadioGroup name={"test"}>
        <OakRadioButton value="1" label="Option 1" data-testid={"radio-1"} />
        <OakRadioButton value="2" label="Option 2" data-testid={"radio-2"} />
        <OakRadioButton value="3" label="Option 3" data-testid={"radio-3"} />
      </OakRadioGroup>,
    );

    expect(firstRadio).toBeChecked();
    expect(secondRadio).not.toBeChecked();
  });

  it("changes on keyboard input", async () => {
    const { rerender, getAllByTestId } = renderWithTheme(
      <OakRadioGroup name={"test"}>
        <OakRadioButton value="1" label="Option 1" data-testid={"radio-1"} />
        <OakRadioButton value="2" label="Option 2" data-testid={"radio-2"} />
        <OakRadioButton value="3" label="Option 3" data-testid={"radio-3"} />
      </OakRadioGroup>,
    );

    const radio1 = getAllByTestId("radio-1");
    const radio2 = getAllByTestId("radio-2");
    const firstRadio = radio1[0] as HTMLElement;
    const secondRadio = radio2[0] as HTMLElement;

    const user = userEvent.setup();

    expect(firstRadio).not.toBeChecked();
    expect(secondRadio).not.toBeChecked();

    await user.tab();
    await user.keyboard("[ArrowDown]");
    await user.keyboard(" ");

    rerender(
      <OakRadioGroup name={"test"}>
        <OakRadioButton value="1" label="Option 1" data-testid={"radio-1"} />
        <OakRadioButton value="2" label="Option 2" data-testid={"radio-2"} />
        <OakRadioButton value="3" label="Option 3" data-testid={"radio-3"} />
      </OakRadioGroup>,
    );

    expect(firstRadio).not.toBeChecked();
    expect(secondRadio).toBeChecked();
  });
  it("input change fires onChange", async () => {
    const onChange = jest.fn();
    const { getAllByTestId } = renderWithTheme(
      <OakRadioGroup name={"test"} onChange={onChange}>
        <OakRadioButton value="1" label="Option 1" data-testid={"radio-1"} />
        <OakRadioButton value="2" label="Option 2" data-testid={"radio-2"} />
        <OakRadioButton value="3" label="Option 3" data-testid={"radio-3"} />
      </OakRadioGroup>,
    );

    const radio1 = getAllByTestId("radio-1");
    const firstRadio = radio1[0] as HTMLElement;

    await userEvent.click(firstRadio);

    expect(onChange).toHaveBeenCalled();
  });
  it("handles $font and $gap as props and return expexted style", () => {
    const { getAllByTestId } = renderWithTheme(
      <OakRadioGroup name={"test"} $font={"body-1"} $gap={"space-between-m"}>
        <OakRadioButton value="1" label="Option 1" data-testid={"radio-1"} />
        <OakRadioButton value="2" label="Option 2" data-testid={"radio-2"} />
        <OakRadioButton value="3" label="Option 3" data-testid={"radio-3"} />
      </OakRadioGroup>,
    );

    const radio1 = getAllByTestId("radio-1");
    const firstRadio = radio1[0] as HTMLElement;

    expect(firstRadio).toHaveStyle("font-weight: ");
    expect(firstRadio).toHaveStyle("font-size: ");
    expect(firstRadio).toHaveStyle("line-height: normal");
    expect(firstRadio).toHaveStyle("letter-spacing: normal");
    expect(firstRadio).toHaveStyle("gap: ");
  });
});
