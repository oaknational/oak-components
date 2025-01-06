import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakKbd } from "./OakKbd";

import { OakThemeProvider } from "@/components/atoms/OakThemeProvider";
import { oakDefaultTheme } from "@/styles";

describe(OakKbd, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakKbd>Tab</OakKbd>
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
