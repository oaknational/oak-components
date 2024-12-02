import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { act, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { OakVideoTranscript } from "./OakVideoTranscript";

import { oakDefaultTheme } from "@/styles";
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
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakVideoTranscript
          id="transcript-element"
          copyLinkControl={copyLinkControl}
          signLanguageControl={signLanguageControl}
        >
          Transcript goes here
        </OakVideoTranscript>
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("handles transcript click correctly", () => {
    const { getByAltText, getAllByText } = renderWithTheme(
      <OakVideoTranscript {...defaultProps}>children</OakVideoTranscript>,
    );

    const transcriptButton = getAllByText("Show transcript")[0];
    const chevronIcon = getByAltText("chevron-down");

    expect(transcriptButton).toHaveTextContent("Show transcript");
    expect(chevronIcon).toBeInTheDocument();

    act(() => {
      transcriptButton && fireEvent.click(transcriptButton);
    });

    expect(transcriptButton).toHaveTextContent("Hide transcript");
    expect(chevronIcon).toHaveAttribute("alt", "chevron-up");
  });
});
