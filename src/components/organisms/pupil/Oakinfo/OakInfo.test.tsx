import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakInfo } from "./OakInfo";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("OakInfo", () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakInfo
          hint="The answer is right in front of your eyes"
          id="info-tooltip"
        />
        ,
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
