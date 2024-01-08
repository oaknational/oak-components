import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakQuizTextInput } from "./OakQuizTextInput";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

describe("OakQuizTextInput", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakQuizTextInput
        defaultValue="An answer to a question"
        data-testid="quiz-input"
      />,
    );

    expect(getByTestId("quiz-input")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakQuizTextInput defaultValue="An answer to a question" />,
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('sets the input to read-only when feedback is "correct"', () => {
    const { getByRole, getByAltText } = renderWithTheme(
      <OakQuizTextInput
        defaultValue="An answer to a question"
        feedback="correct"
      />,
    );

    expect(getByRole("textbox")).toHaveAttribute("readonly");
    expect(getByAltText("Correct")).toBeInTheDocument();
  });

  it('sets the input to read-only when feedback is "incorrect"', () => {
    const { getByRole, getByAltText } = renderWithTheme(
      <OakQuizTextInput
        defaultValue="An answer to a question"
        feedback="incorrect"
      />,
    );

    expect(getByRole("textbox")).toHaveAttribute("readonly");
    expect(getByAltText("Incorrect")).toBeInTheDocument();
  });
});
