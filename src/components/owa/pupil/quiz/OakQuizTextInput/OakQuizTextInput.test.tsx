import React from "react";
import "@testing-library/jest-dom";

import { OakQuizTextInput } from "./OakQuizTextInput";

import renderWithTheme from "@/test-helpers/renderWithTheme";

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
    const { container } = renderWithTheme(
      <OakQuizTextInput defaultValue="An answer to a question" />,
    );

    expect(container).toMatchSnapshot();
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
