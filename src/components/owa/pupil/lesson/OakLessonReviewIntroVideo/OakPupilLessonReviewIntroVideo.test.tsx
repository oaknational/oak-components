import React from "react";
import "@testing-library/jest-dom";

import { OakLessonReviewIntroVideo } from "./OakPupilLessonReviewIntroVideo";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakLessonReviewIntroVideo, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakLessonReviewIntroVideo lessonSectionName="intro" completed={false} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders copy for each lesson section that has not been completed", () => {
    const { getByTestId } = renderWithTheme(
      <>
        <OakLessonReviewIntroVideo
          data-testid="intro"
          lessonSectionName="intro"
          completed={false}
        />

        <OakLessonReviewIntroVideo
          data-testid="video"
          lessonSectionName="video"
          completed={false}
        />
      </>,
    );

    expect(getByTestId("intro").textContent).toContain("Prepare");
    expect(getByTestId("video").textContent).toContain("Learn");
  });

  it("renders copy for each lesson section that has completed", () => {
    const { getByTestId } = renderWithTheme(
      <>
        <OakLessonReviewIntroVideo
          data-testid="intro"
          lessonSectionName="intro"
          completed={true}
        />

        <OakLessonReviewIntroVideo
          data-testid="video"
          lessonSectionName="video"
          completed={true}
        />
      </>,
    );

    expect(getByTestId("intro").textContent).toContain("Completed");
    expect(getByTestId("video").textContent).toContain("Completed");
  });
});
