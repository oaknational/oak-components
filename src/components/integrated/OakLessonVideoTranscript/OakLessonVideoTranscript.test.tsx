import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakLessonVideoTranscript } from "./OakLessonVideoTranscript";

import { oakDefaultTheme } from "@/styles";

describe(OakLessonVideoTranscript, () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakLessonVideoTranscript id="transcript-element">
          Transcript goes here
        </OakLessonVideoTranscript>
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
