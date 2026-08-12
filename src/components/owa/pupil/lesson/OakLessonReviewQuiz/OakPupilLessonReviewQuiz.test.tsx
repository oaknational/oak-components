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

  it("gives each results button a section-specific accessible name and unique id", () => {
    const { getByRole, container } = renderWithTheme(
      <>
        <OakLessonReviewQuiz
          lessonSectionName="starter-quiz"
          completed={true}
          numQuestions={6}
          grade={4}
          resultsSlot={<div>Starter quiz results content</div>}
        />
        <OakLessonReviewQuiz
          lessonSectionName="exit-quiz"
          completed={true}
          numQuestions={6}
          grade={5}
          resultsSlot={<div>Exit quiz results content</div>}
        />
      </>,
    );

    const starterResultsButton = getByRole("button", {
      name: "Starter quiz results",
    });
    const exitResultsButton = getByRole("button", {
      name: "Exit quiz results",
    });

    expect(starterResultsButton).toHaveAttribute("aria-expanded", "false");
    expect(exitResultsButton).toHaveAttribute("aria-expanded", "false");
    expect(container.querySelector("#quiz-review-accordion-starter-quiz")).toBe(
      starterResultsButton,
    );
    expect(container.querySelector("#quiz-review-accordion-exit-quiz")).toBe(
      exitResultsButton,
    );
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
