import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakQuizPrintableHeader } from "./OakQuizPrintableHeader";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

describe("OakQuizPrintableHeader", () => {
  it("renders", () => {
    const { getByText } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakQuizPrintableHeader
          iconName="subject-science"
          alt="icon"
          breadcrumbs={["first", "second", "third", "fourth"]}
          title="Pupil Journey Header"
          worksheetDownloaded={true}
          videoPercentage={80}
          data-testid="test"
          workSheetAvailable={true}
        />
      </ThemeProvider>,
    );
    expect(getByText("Pupil Journey Header")).toBeInTheDocument();
  });
  it("renders worksheet downloaded when applicable", () => {
    const { getByText } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakQuizPrintableHeader
          iconName="subject-science"
          alt="icon"
          breadcrumbs={["first", "second", "third", "fourth"]}
          title="Pupil Journey Header"
          worksheetDownloaded={true}
          videoPercentage={80}
          data-testid="test"
          workSheetAvailable={true}
        />
      </ThemeProvider>,
    );
    expect(getByText("Worksheet downloaded - Yes")).toBeInTheDocument();
  });
  it("renders worksheet not downloaded when applicable", () => {
    const { getByText } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakQuizPrintableHeader
          iconName="subject-science"
          alt="icon"
          breadcrumbs={["first", "second", "third", "fourth"]}
          title="Pupil Journey Header"
          worksheetDownloaded={false}
          videoPercentage={80}
          data-testid="test"
          workSheetAvailable={true}
        />
      </ThemeProvider>,
    );
    expect(getByText("Worksheet downloaded - No")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        {" "}
        <OakQuizPrintableHeader
          iconName="subject-science"
          alt="icon"
          breadcrumbs={["first", "second", "third", "fourth"]}
          title="Pupil Journey Header"
          worksheetDownloaded={true}
          videoPercentage={80}
          workSheetAvailable={true}
        />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
