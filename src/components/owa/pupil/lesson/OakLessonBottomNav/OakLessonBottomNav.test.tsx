import React from "react";
import "@testing-library/jest-dom";

import { OakLessonBottomNav } from "./OakLessonBottomNav";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import {
  installMockIntersectionObserver,
  installMockResizeObserver,
} from "@/test-helpers";

installMockIntersectionObserver();
installMockResizeObserver();

describe(OakLessonBottomNav, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <>
        <OakLessonBottomNav hint="The answer is right in front of your eyes" />
        <OakLessonBottomNav feedback="correct" answerFeedback="Well done!" />
        <OakLessonBottomNav feedback="incorrect" answerFeedback="Keep trying" />
        <OakLessonBottomNav feedback="correct" answerFeedback="Nearly there" />
      </>,
    );

    expect(container).toMatchSnapshot();
  });
});
