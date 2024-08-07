import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakLessonReviewQuiz } from "./OakPupilLessonReviewQuiz";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakLessonReviewQuiz, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakLessonReviewQuiz
          lessonSectionName="exit-quiz"
          completed={false}
          numQuestions={0}
          grade={0}
        />
        ,
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders copy for each lesson section that has not been completed", () => {
    const { getByTestId } = renderWithTheme(
      <>
        <OakLessonReviewQuiz
          data-testid="starter-quiz"
          lessonSectionName="starter-quiz"
          completed={false}
          numQuestions={6}
          grade={0}
        />
        <OakLessonReviewQuiz
          data-testid="exit-quiz"
          lessonSectionName="exit-quiz"
          completed={false}
          numQuestions={6}
          grade={5}
        />
      </>,
    );

    expect(getByTestId("starter-quiz").textContent).toContain(
      "Activate - 6 questions",
    );
    expect(getByTestId("exit-quiz").textContent).toContain(
      "Check - 6 questions",
    );
  });

  it("renders copy for each lesson section that has completed", () => {
    const { getByTestId } = renderWithTheme(
      <>
        <OakLessonReviewQuiz
          data-testid="starter-quiz"
          lessonSectionName="starter-quiz"
          completed={true}
          numQuestions={6}
          grade={0}
        />

        <OakLessonReviewQuiz
          data-testid="exit-quiz"
          lessonSectionName="exit-quiz"
          completed={true}
          numQuestions={6}
          grade={5}
        />
      </>,
    );
    expect(getByTestId("starter-quiz").textContent).toContain("Completed");
    expect(getByTestId("exit-quiz").textContent).toContain("Completed");
  });
});
