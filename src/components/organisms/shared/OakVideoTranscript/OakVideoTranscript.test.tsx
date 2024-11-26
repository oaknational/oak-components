import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakVideoTranscript } from "./OakVideoTranscript";

import { oakDefaultTheme } from "@/styles";

describe(OakVideoTranscript, () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakVideoTranscript id="transcript-element">
          Transcript goes here
        </OakVideoTranscript>
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
