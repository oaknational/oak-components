import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakLessonNavItem } from "./OakLessonNavItem";

import { OakThemeProvider } from "@/components/base";
import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakLessonNavItem, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakLessonNavItem lessonSectionName="intro" progress="not-started" />,
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders copy for each lesson section that has not been started", () => {
    const { getByTestId } = renderWithTheme(
      <>
        <OakLessonNavItem
          data-testid="intro"
          lessonSectionName="intro"
          progress="not-started"
        />
        <OakLessonNavItem
          data-testid="starter-quiz"
          lessonSectionName="starter-quiz"
          progress="not-started"
          numQuestions={6}
          grade={0}
        />
        <OakLessonNavItem
          data-testid="video"
          lessonSectionName="video"
          progress="not-started"
          videoLength={20}
        />
        <OakLessonNavItem
          data-testid="exit-quiz"
          lessonSectionName="exit-quiz"
          progress="not-started"
          numQuestions={6}
          grade={5}
        />
      </>,
    );

    expect(getByTestId("intro").textContent).toContain("Get ready");
    expect(getByTestId("starter-quiz").textContent).toContain("6 Questions");
    expect(getByTestId("exit-quiz").textContent).toContain(
      "Practice 6 questions",
    );
    expect(getByTestId("video").textContent).toContain("20 min");
  });

  it("renders copy for each lesson section that has not been started", () => {
    const { getByTestId } = renderWithTheme(
      <>
        <OakLessonNavItem
          data-testid="intro"
          lessonSectionName="intro"
          progress="in-progress"
        />
        <OakLessonNavItem
          data-testid="starter-quiz"
          lessonSectionName="starter-quiz"
          progress="in-progress"
          numQuestions={6}
          grade={0}
        />
        <OakLessonNavItem
          data-testid="video"
          lessonSectionName="video"
          progress="in-progress"
          videoLength={20}
        />
        <OakLessonNavItem
          data-testid="exit-quiz"
          lessonSectionName="exit-quiz"
          progress="in-progress"
          numQuestions={6}
          grade={5}
        />
      </>,
    );

    expect(getByTestId("intro").textContent).toContain("In progress...");
    expect(getByTestId("starter-quiz").textContent).toContain("In progress...");
    expect(getByTestId("exit-quiz").textContent).toContain("In progress...");
    expect(getByTestId("video").textContent).toContain("In progress...");
  });

  it("renders copy for each lesson section that has not been started", () => {
    const { getByTestId } = renderWithTheme(
      <>
        <OakLessonNavItem
          data-testid="intro"
          lessonSectionName="intro"
          progress="complete"
        />
        <OakLessonNavItem
          data-testid="starter-quiz"
          lessonSectionName="starter-quiz"
          progress="complete"
          numQuestions={6}
          grade={0}
        />
        <OakLessonNavItem
          data-testid="video"
          lessonSectionName="video"
          progress="complete"
          videoLength={20}
        />
        <OakLessonNavItem
          data-testid="exit-quiz"
          lessonSectionName="exit-quiz"
          progress="complete"
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
