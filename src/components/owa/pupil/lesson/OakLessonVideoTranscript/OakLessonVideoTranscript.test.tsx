import React from "react";
import "@testing-library/jest-dom";

import { OakLessonVideoTranscript } from "./OakLessonVideoTranscript";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakLessonVideoTranscript, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakLessonVideoTranscript id="transcript-element">
        Transcript goes here
      </OakLessonVideoTranscript>,
    );

    expect(container).toMatchSnapshot();
  });
});
