import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakQuizCounter } from "./OakQuizCounter";

import { OakThemeProvider } from "@/components/base";
import { oakDefaultTheme } from "@/styles";

describe(OakQuizCounter, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakQuizCounter counter={5} total={6} />
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
