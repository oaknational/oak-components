import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakInfoButton } from "./OakInfoButton";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe(OakInfoButton, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakInfoButton hint="The answer is right in front of your eyes" />,
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
