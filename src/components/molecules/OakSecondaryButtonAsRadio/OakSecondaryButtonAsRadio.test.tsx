import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakSecondaryButtonAsRadio } from "./OakSecondaryButtonAsRadio";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles/theme";

describe("OakSecondaryButtonAsRadio", () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakSecondaryButtonAsRadio value="1">
          Display Value
        </OakSecondaryButtonAsRadio>
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
