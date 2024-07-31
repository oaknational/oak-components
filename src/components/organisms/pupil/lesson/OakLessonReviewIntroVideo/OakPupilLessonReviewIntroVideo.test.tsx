import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakLessonReviewIntroVideo } from "./OakPupilLessonReviewIntroVideo";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakLessonReviewIntroVideo, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakLessonReviewIntroVideo
          lessonSectionName="intro"
          completed={false}
        />
        ,
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
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
