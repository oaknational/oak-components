import React from "react";
import "@testing-library/jest-dom";
import { act, fireEvent } from "@testing-library/react";

import { OakVideoTranscript } from "./OakVideoTranscript";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakVideoTranscript, () => {
  const copyLinkControl = <p>copy link control</p>;
  const signLanguageControl = <p>sign language control</p>;

  const defaultProps = {
    id: "transcript-element",
    copyLinkControl,
    signLanguageControl,
  };

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakVideoTranscript
        id="transcript-element"
        copyLinkControl={copyLinkControl}
        signLanguageControl={signLanguageControl}
      >
        Transcript goes here
      </OakVideoTranscript>,
    );

    expect(container).toMatchSnapshot();
  });

  it("handles transcript click correctly", () => {
    const { getAllByText } = renderWithTheme(
      <OakVideoTranscript {...defaultProps}>children</OakVideoTranscript>,
    );

    const transcriptButton = getAllByText("Show transcript")[0];

    expect(transcriptButton).toHaveTextContent("Show transcript");

    act(() => {
      transcriptButton && fireEvent.click(transcriptButton);
    });

    expect(transcriptButton).toHaveTextContent("Hide transcript");
  });
});
