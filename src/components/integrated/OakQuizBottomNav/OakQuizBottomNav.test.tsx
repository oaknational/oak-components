import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakQuizBottomNav } from "./OakQuizBottomNav";

import { OakThemeProvider } from "@/components/base";
import { oakDefaultTheme } from "@/styles";

describe(OakQuizBottomNav, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakQuizBottomNav hint="The answer is right in front of your eyes" />
        <OakQuizBottomNav feedback="correct" answerFeedback="Well done!" />
        <OakQuizBottomNav feedback="incorrect" answerFeedback="Keep trying" />
        <OakQuizBottomNav feedback="correct" answerFeedback="Nearly there" />
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
