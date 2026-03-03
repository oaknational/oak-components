import React from "react";
import "@testing-library/jest-dom";

import { OakCATQuestion } from "./OakCATQuestion";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/OakThemeProvider";
import { oakDefaultTheme } from "@/styles";

const mockProps = {
  "data-testid": "test",
  questionNumber: 1,
  status: "neutral" as const,
  questionTypeInput: <div>Question Type Input</div>,
  questionStem: <div>Question Text Input</div>,

  hintInput: <div>Hint Input</div>,
  feedbackInput: <div>Feedback Input</div>,
  answersSection: <div>Answers Section</div>,
  hintInputId: "hintInputId",
  feedbackInputId: "feedbackInputId",
};

describe("OakCATQuestion", () => {
  it("renders", () => {
    const { getByText } = renderWithTheme(
      <OakCATQuestion
        data-testid="test"
        questionNumber={1}
        status="neutral"
        questionTypeInput={<div>Question Type Input</div>}
        questionStem={<div>Question Text Input</div>}
        hintInput={<div>Hint Input</div>}
        feedbackInput={<div>Feedback Input</div>}
        answersSection={<div>Answers Section</div>}
        hintInputId="hintInputId"
        feedbackInputId="feedbackInputId"
      />,
    );
    expect(getByText("1.")).toBeInTheDocument();
  });

  it("includes question stem text", () => {
    const { getByText } = renderWithTheme(<OakCATQuestion {...mockProps} />);

    const questionText = getByText("Question Text Input");
    expect(questionText).toBeInTheDocument();
  });

  it("includes question type", () => {
    const { getByText } = renderWithTheme(<OakCATQuestion {...mockProps} />);

    const questionType = getByText("Question Type Input");
    expect(questionType).toBeInTheDocument();
  });

  it("includes body content but doesn't display them initially", () => {
    const { queryByText } = renderWithTheme(<OakCATQuestion {...mockProps} />);

    const answersSection = queryByText("Answers Section");
    expect(answersSection).toBeInTheDocument();
    expect(answersSection).not.toBeVisible();
  });

  it("includes hint in the DOM but doesn't display them initially", () => {
    const { queryByText } = renderWithTheme(<OakCATQuestion {...mockProps} />);

    const hint = queryByText("Hint Input");
    expect(hint).toBeInTheDocument();
    expect(hint).not.toBeVisible();
  });

  it("includes feedback in the DOM but doesn't display them initially", () => {
    const { queryByText } = renderWithTheme(<OakCATQuestion {...mockProps} />);

    const feedback = queryByText("Feedback Input");
    expect(feedback).toBeInTheDocument();
    expect(feedback).not.toBeVisible();
  });

  it("renders image in question stem", () => {
    const { getByText, getByAltText } = renderWithTheme(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakCATQuestion
          data-testid="test"
          questionNumber={1}
          status="neutral"
          questionTypeInput={<div>Question Type Input</div>}
          questionStem={
            <div>
              <div>Question Text Input</div>
              <img
                src="https://oaknationalacademy-res.cloudinary.com/image/upload/v1755009886/hc2moqkbq4rlsouotg2c.jpg"
                alt="Watercolour painting"
              ></img>
            </div>
          }
          hintInput={<div>Hint Input</div>}
          feedbackInput={<div>Feedback Input</div>}
          answersSection={<div>Answers Section</div>}
          hintInputId="hintInputId"
          feedbackInputId="feedbackInputId"
        />
      </OakThemeProvider>,
    );

    const textInput = getByText("Question Text Input");
    const image = getByAltText("Watercolour painting");

    expect(textInput).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
