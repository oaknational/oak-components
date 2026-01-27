import React from "react";
import "@testing-library/jest-dom";

import { OakQuizFeedback } from "./OakQuizFeedback";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakQuizFeedback, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <>
        <OakQuizFeedback feedback="correct" answerFeedback="Well done!" />
        <OakQuizFeedback feedback="incorrect" answerFeedback="Keep trying" />
        <OakQuizFeedback feedback="correct" answerFeedback="Nearly there" />
      </>,
    );

    expect(container).toMatchSnapshot();
  });
});
