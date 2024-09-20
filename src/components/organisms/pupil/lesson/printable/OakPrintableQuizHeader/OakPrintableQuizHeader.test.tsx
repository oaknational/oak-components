import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakPrintableQuizHeader } from "./OakPrintableQuizHeader";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

describe("OakPrintableQuizHeader", () => {
  it("renders", () => {
    const { getByText } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakPrintableQuizHeader
          grade={4}
          numQuestions={10}
          attempts={2}
          title="Pupil Journey Header"
          data-testid="test"
        />
      </ThemeProvider>,
    );
    expect(getByText("Pupil Journey Header")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        {" "}
        <OakPrintableQuizHeader
          grade={4}
          numQuestions={10}
          attempts={2}
          title="Pupil Journey Header"
        />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
