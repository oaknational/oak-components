import React from "react";
import "@testing-library/jest-dom";
import { act, waitFor } from "@testing-library/react";

import { OakButtonAsRadioGroup } from "./OakButtonAsRadioGroup";

import { OakSecondaryButtonAsRadio } from "@/components/form-elements/OakSecondaryButtonAsRadio";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakButtonAsRadioGroup", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakButtonAsRadioGroup name={"test"} ariaLabel="test">
        <OakSecondaryButtonAsRadio value="1">
          Display Value
        </OakSecondaryButtonAsRadio>
      </OakButtonAsRadioGroup>,
    );
    expect(container).toMatchSnapshot();
  });

  it("will not render without a label of some kind", () => {
    jest.spyOn(console, "error").mockImplementation(() => jest.fn());
    expect(() =>
      renderWithTheme(
        <OakButtonAsRadioGroup name={"test"}>
          <OakSecondaryButtonAsRadio value="1">
            Display Value
          </OakSecondaryButtonAsRadio>
        </OakButtonAsRadioGroup>,
      ),
    ).toThrow(
      "OakButtonAsRadioGroup: At least one of label, ariaLabel or ariaLabelledby is required",
    );
    jest.restoreAllMocks();
  });

  it("calls the onChange callback passing the selected value when a radio button is clicked", async () => {
    const onChange = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakButtonAsRadioGroup name={"test"} ariaLabel="test" onChange={onChange}>
        <OakSecondaryButtonAsRadio value="1">
          Display Value
        </OakSecondaryButtonAsRadio>
      </OakButtonAsRadioGroup>,
    );

    const button = getByRole("radio");
    act(() => {
      button.click();
    });
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith("1");
    });
  });

  it("sets the default value when defaultValue is provided", async () => {
    const onChange = jest.fn();
    const { getByText } = renderWithTheme(
      <OakButtonAsRadioGroup
        name={"test"}
        ariaLabel="test"
        onChange={onChange}
        defaultValue="2"
      >
        <OakSecondaryButtonAsRadio value="1">Value 1</OakSecondaryButtonAsRadio>
        <OakSecondaryButtonAsRadio value="2">Value 2</OakSecondaryButtonAsRadio>
      </OakButtonAsRadioGroup>,
    );

    const buttonSpan = getByText("Value 2");
    const button = buttonSpan.closest('[role="radio"]');
    expect(button).toHaveAttribute("aria-checked", "true");
  });
});
