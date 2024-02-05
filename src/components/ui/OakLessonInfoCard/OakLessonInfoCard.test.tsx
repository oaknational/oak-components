import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakCardHeader, OakLessonInfoCard } from "./OakLessonInfoCard";

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
    const tree = create(
      <OakLessonInfoCard>
        <OakCardHeader tag="h1" iconName="question-mark">
          Header title
        </OakCardHeader>
        Children of the compoent goes here.
      </OakLessonInfoCard>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
