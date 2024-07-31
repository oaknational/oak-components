import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakQuizFeedback } from "./OakQuizFeedback";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe(OakQuizFeedback, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakQuizFeedback feedback="correct" answerFeedback="Well done!" />
        <OakQuizFeedback feedback="incorrect" answerFeedback="Keep trying" />
        <OakQuizFeedback feedback="correct" answerFeedback="Nearly there" />
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
