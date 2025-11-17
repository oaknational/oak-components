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

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakThemeProvider theme={oakDefaultTheme}>
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
        />
      </OakThemeProvider>,
    );
    expect(container).toMatchSnapshot();
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
