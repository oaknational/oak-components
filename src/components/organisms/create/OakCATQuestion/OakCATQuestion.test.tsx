import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakCATQuestion } from "./OakCATQuestion";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("OakCATQuestion", () => {
  it("renders", () => {
    const { getByText } = renderWithTheme(
      <OakCATQuestion
        data-testid="test"
        questionNumber={1}
        status="draft"
        availableQuestionTypes={["multiple-choice", "short-answer"]}
        chosenQuestionType="multiple-choice"
        onQuestionTypeChange={(type: string) => {
          console.log(type);
        }}
        questionTextInput={<div>Question Text Input</div>}
        hintInput={<div>Hint Input</div>}
        feedbackInput={<div>Feedback Input</div>}
        answersSection={<div>Answers Section</div>}
      />,
    );
    expect(getByText("1.")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakCATQuestion
          data-testid="test"
          questionNumber={1}
          status="draft"
          availableQuestionTypes={["multiple-choice", "short-answer"]}
          chosenQuestionType="multiple-choice"
          onQuestionTypeChange={(type: string) => {
            console.log(type);
          }}
          questionTextInput={<div>Question Text Input</div>}
          hintInput={<div>Hint Input</div>}
          feedbackInput={<div>Feedback Input</div>}
          answersSection={<div>Answers Section</div>}
        />
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
