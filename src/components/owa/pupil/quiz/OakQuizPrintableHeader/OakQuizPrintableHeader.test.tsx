import React from "react";
import "@testing-library/jest-dom";

import { OakQuizPrintableHeader } from "./OakQuizPrintableHeader";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakQuizPrintableHeader", () => {
  it("renders", () => {
    const { getByText } = renderWithTheme(
      <OakQuizPrintableHeader
        iconName="subject-science"
        alt="icon"
        breadcrumbs={["first", "second", "third", "fourth"]}
        title="Pupil Journey Header"
        worksheetDownloaded={true}
        videoPercentage={80}
        data-testid="test"
        workSheetAvailable={true}
      />,
    );
    expect(getByText("Pupil Journey Header")).toBeInTheDocument();
  });
  it("renders worksheet downloaded when applicable", () => {
    const { getByText } = renderWithTheme(
      <OakQuizPrintableHeader
        iconName="subject-science"
        alt="icon"
        breadcrumbs={["first", "second", "third", "fourth"]}
        title="Pupil Journey Header"
        worksheetDownloaded={true}
        videoPercentage={80}
        data-testid="test"
        workSheetAvailable={true}
      />,
    );
    expect(getByText("Worksheet downloaded - Yes")).toBeInTheDocument();
  });
  it("renders worksheet not downloaded when applicable", () => {
    const { getByText } = renderWithTheme(
      <OakQuizPrintableHeader
        iconName="subject-science"
        alt="icon"
        breadcrumbs={["first", "second", "third", "fourth"]}
        title="Pupil Journey Header"
        worksheetDownloaded={false}
        videoPercentage={80}
        data-testid="test"
        workSheetAvailable={true}
      />,
    );
    expect(getByText("Worksheet downloaded - No")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakQuizPrintableHeader
        iconName="subject-science"
        alt="icon"
        breadcrumbs={["first", "second", "third", "fourth"]}
        title="Pupil Journey Header"
        worksheetDownloaded={true}
        videoPercentage={80}
        workSheetAvailable={true}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
