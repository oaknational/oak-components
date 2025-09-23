import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { OakCardHeader, OakLessonInfoCard } from "./OakLessonInfoCard";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakLessonInfoCard component test", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <OakLessonInfoCard data-testid="test">
        <OakCardHeader tag="h1" iconName="question-mark">
          Header title
        </OakCardHeader>
        Children of the compoent goes here.
      </OakLessonInfoCard>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakLessonInfoCard>
        <OakCardHeader tag="h1" iconName="question-mark">
          Header title
        </OakCardHeader>
        Children of the compoent goes here.
      </OakLessonInfoCard>,
    );
    expect(container).toMatchSnapshot();
  });
});
