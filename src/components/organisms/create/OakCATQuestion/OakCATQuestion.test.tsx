import React from "react";
import "@testing-library/jest-dom";

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
        status="neutral"
        questionTypeInput={<div>Question Type Input</div>}
        questionTextInput={<div>Question Text Input</div>}
        hintInput={<div>Hint Input</div>}
        feedbackInput={<div>Feedback Input</div>}
        answersSection={<div>Answers Section</div>}
        hintInputId="hintInputId"
        feedbackInputId="feedbackInputId"
      />,
    );
    expect(getByText("1.")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakCATQuestion
          data-testid="test"
          questionNumber={1}
          status="neutral"
          questionTypeInput={<div>Question Type Input</div>}
          questionTextInput={<div>Question Text Input</div>}
          hintInput={<div>Hint Input</div>}
          feedbackInput={<div>Feedback Input</div>}
          answersSection={<div>Answers Section</div>}
          hintInputId="hintInputId"
          feedbackInputId="feedbackInputId"
        />
      </OakThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders image above question text input when specified", () => {
    const { getByText, getByAltText } = renderWithTheme(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakCATQuestion
          data-testid="test"
          questionNumber={1}
          status="neutral"
          questionTypeInput={<div>Question Type Input</div>}
          questionTextInput={<div>Question Text Input</div>}
          questionImage={
            <img
              src="https://oaknationalacademy-res.cloudinary.com/image/upload/v1755009886/hc2moqkbq4rlsouotg2c.jpg"
              alt="Watercolour painting"
            ></img>
          }
          questionImagePosition="above"
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

    expect(image.compareDocumentPosition(textInput)).toEqual(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
  });

  it("renders image below question text input when specified", () => {
    const { getByText, getByAltText } = renderWithTheme(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakCATQuestion
          data-testid="test"
          questionNumber={1}
          status="neutral"
          questionTypeInput={<div>Question Type Input</div>}
          questionTextInput={<div>Question Text Input</div>}
          questionImage={
            <img
              src="https://oaknationalacademy-res.cloudinary.com/image/upload/v1755009886/hc2moqkbq4rlsouotg2c.jpg"
              alt="Watercolour painting"
            ></img>
          }
          questionImagePosition="below"
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

    expect(image.compareDocumentPosition(textInput)).toEqual(
      Node.DOCUMENT_POSITION_PRECEDING,
    );
  });
});
