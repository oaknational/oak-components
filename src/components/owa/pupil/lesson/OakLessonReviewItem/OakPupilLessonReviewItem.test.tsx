import React from "react";
import "@testing-library/jest-dom";

import { OakLessonReviewItem } from "./OakPupilLessonReviewItem";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakLessonReviewItem, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakLessonReviewItem lessonSectionName="intro" completed={false} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders copy for each lesson section that has not been completed", () => {
    const { getByTestId } = renderWithTheme(
      <>
        <OakLessonReviewItem
          data-testid="intro"
          lessonSectionName="intro"
          completed={false}
        />
        <OakLessonReviewItem
          data-testid="starter-quiz"
          lessonSectionName="starter-quiz"
          completed={false}
          numQuestions={6}
          grade={0}
        />
        <OakLessonReviewItem
          data-testid="video"
          lessonSectionName="video"
          completed={false}
        />
        <OakLessonReviewItem
          data-testid="exit-quiz"
          lessonSectionName="exit-quiz"
          completed={false}
          numQuestions={6}
          grade={5}
        />
      </>,
    );

    expect(getByTestId("intro").textContent).toContain("Prepare");
    expect(getByTestId("starter-quiz").textContent).toContain(
      "Activate - 6 questions",
    );
    expect(getByTestId("exit-quiz").textContent).toContain(
      "Check - 6 questions",
    );
    expect(getByTestId("video").textContent).toContain("Learn");
  });

  it("renders copy for each lesson section that has completed", () => {
    const { getByTestId } = renderWithTheme(
      <>
        <OakLessonReviewItem
          data-testid="intro"
          lessonSectionName="intro"
          completed={true}
        />
        <OakLessonReviewItem
          data-testid="starter-quiz"
          lessonSectionName="starter-quiz"
          completed={true}
          numQuestions={6}
          grade={0}
        />
        <OakLessonReviewItem
          data-testid="video"
          lessonSectionName="video"
          completed={true}
        />
        <OakLessonReviewItem
          data-testid="exit-quiz"
          lessonSectionName="exit-quiz"
          completed={true}
          numQuestions={6}
          grade={5}
        />
      </>,
    );

    expect(getByTestId("intro").textContent).toContain("Completed");
    expect(getByTestId("starter-quiz").textContent).toContain("Completed");
    expect(getByTestId("exit-quiz").textContent).toContain("Completed");
    expect(getByTestId("video").textContent).toContain("Completed");
  });
});
