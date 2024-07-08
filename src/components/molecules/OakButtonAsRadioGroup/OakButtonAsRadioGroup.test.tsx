import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { render, waitFor } from "@testing-library/react";

import { OakButtonAsRadioGroup } from "./OakButtonAsRadioGroup";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles/theme";
import { OakSecondaryButtonAsRadio } from "@/components/molecules/OakSecondaryButtonAsRadio";

describe("OakButtonAsRadioGroup", () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakButtonAsRadioGroup name={"test"} ariaLabel="test">
          <OakSecondaryButtonAsRadio value="1">
            Display Value
          </OakSecondaryButtonAsRadio>
        </OakButtonAsRadioGroup>
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("will not render without a label of some kind", () => {
    jest.spyOn(console, "error").mockImplementation(() => jest.fn());
    expect(() =>
      render(
        <OakThemeProvider theme={oakDefaultTheme}>
          <OakButtonAsRadioGroup name={"test"}>
            <OakSecondaryButtonAsRadio value="1">
              Display Value
            </OakSecondaryButtonAsRadio>
          </OakButtonAsRadioGroup>
        </OakThemeProvider>,
      ),
    ).toThrow(
      "OakButtonAsRadioGroup: At least one of label, ariaLabel or ariaLabelledby is required",
    );
    jest.restoreAllMocks();
  });

  it("calls the onChange callback passing the selected value when a radio button is clicked", async () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakButtonAsRadioGroup
          name={"test"}
          ariaLabel="test"
          onChange={onChange}
        >
          <OakSecondaryButtonAsRadio value="1">
            Display Value
          </OakSecondaryButtonAsRadio>
        </OakButtonAsRadioGroup>
      </OakThemeProvider>,
    );

    const button = getByRole("radio");
    button.click();
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith("1");
    });
  });

  it("sets the default value when defaultValue is provided", async () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakButtonAsRadioGroup
          name={"test"}
          ariaLabel="test"
          onChange={onChange}
          defaultValue="2"
        >
          <OakSecondaryButtonAsRadio value="1">
            Value 1
          </OakSecondaryButtonAsRadio>
          <OakSecondaryButtonAsRadio value="2">
            Value 2
          </OakSecondaryButtonAsRadio>
        </OakButtonAsRadioGroup>
      </OakThemeProvider>,
    );

    const buttonSpan = getByText("Value 2");
    const button = buttonSpan.closest('[role="radio"]');
    expect(button).toHaveAttribute("aria-checked", "true");
  });
});
