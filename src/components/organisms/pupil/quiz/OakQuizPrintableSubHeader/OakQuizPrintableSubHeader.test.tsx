import React from "react";
import "@testing-library/jest-dom";

import { OakQuizPrintableSubHeader } from "./OakQuizPrintableSubHeader";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakQuizPrintableSubHeader", () => {
  it("renders", () => {
    const { getByText } = renderWithTheme(
      <OakQuizPrintableSubHeader
        grade={4}
        numQuestions={10}
        attempts={2}
        title="Pupil Journey Header"
        data-testid="test"
      />,
    );
    expect(getByText("Pupil Journey Header")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakQuizPrintableSubHeader
        grade={4}
        numQuestions={10}
        attempts={2}
        title="Pupil Journey Header"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
