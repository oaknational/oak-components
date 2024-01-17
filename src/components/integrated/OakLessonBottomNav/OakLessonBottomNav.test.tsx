import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakLessonBottomNav } from "./OakLessonBottomNav";

import { OakThemeProvider } from "@/components/base";
import { oakDefaultTheme } from "@/styles";

describe(OakLessonBottomNav, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakLessonBottomNav hint="The answer is right in front of your eyes" />
        <OakLessonBottomNav feedback="correct" answerFeedback="Well done!" />
        <OakLessonBottomNav feedback="incorrect" answerFeedback="Keep trying" />
        <OakLessonBottomNav feedback="correct" answerFeedback="Nearly there" />
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
