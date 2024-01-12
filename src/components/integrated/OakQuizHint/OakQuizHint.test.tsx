import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakQuizHint } from "./OakQuizHint";

import { OakThemeProvider } from "@/components/base";
import { oakDefaultTheme } from "@/styles";

describe(OakQuizHint, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakQuizHint hint="The answer is right in front of your eyes" />,
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
