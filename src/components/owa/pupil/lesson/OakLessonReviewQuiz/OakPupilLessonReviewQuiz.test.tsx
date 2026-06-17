import React from "react";
import "@testing-library/jest-dom";

import { OakLessonReviewQuiz } from "./OakPupilLessonReviewQuiz";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakLessonReviewQuiz, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakLessonReviewQuiz
        lessonSectionName="exit-quiz"
        completed={false}
        numQuestions={0}
        grade={0}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("gives the results button an accessible name including the section", () => {
    const { getByRole } = renderWithTheme(
      <OakLessonReviewQuiz
        lessonSectionName="starter-quiz"
        completed={true}
        numQuestions={6}
        grade={0}
        resultsSlot={<div>Starter quiz results content</div>}
      />,
    );

    expect(
      getByRole("button", { name: "Starter quiz results" }),
    ).toBeInTheDocument();
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
