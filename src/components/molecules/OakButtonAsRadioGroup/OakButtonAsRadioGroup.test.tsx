import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakButtonAsRadioGroup } from "./OakButtonAsRadioGroup";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles/theme";
import { OakSecondaryButtonAsRadio } from "@/components/molecules/OakSecondaryButtonAsRadio";

describe("OakSecondaryButtonAsRadio", () => {
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
});
