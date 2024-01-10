import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { create } from "react-test-renderer";

import { OakQuizRadioButton } from "./OakQuizRadioButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakRadioGroup } from "@/components/ui";
import { OakImage, OakThemeProvider } from "@/components/base";
import { oakDefaultTheme } from "@/styles";

describe("OakQuizRadioButton", () => {
  it("renders a radio button", () => {
    const { getByRole } = renderWithTheme(
      <OakRadioGroup name="quiz-radio-group">
        <OakQuizRadioButton
          id="checkbox-1"
          value="Option 1"
          label="Radio option"
        />
      </OakRadioGroup>,
    );

    expect(getByRole("radio")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakQuizRadioButton
          id="checkbox-1"
          value="Option 1"
          label="Radio option"
        />
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("gives the radio focus on click", async () => {
    const { getByTestId, getByRole } = renderWithTheme(
      <OakRadioGroup name="quiz-radio-group">
        <OakQuizRadioButton
          id="checkbox-1"
          value="Option 1"
          label="Radio option"
          data-testid="quiz-radio"
        />
      </OakRadioGroup>,
    );
    await userEvent.click(getByTestId("quiz-radio"));

    expect(getByRole("radio")).toHaveFocus();
  });

  it("can render an image as part of the label", async () => {
    const { getByRole } = renderWithTheme(
      <OakRadioGroup name="quiz-radio-group">
        <OakQuizRadioButton
          id="checkbox-1"
          value="Option 1"
          label="Radio option"
          data-testid="quiz-radio"
          image={
            <OakImage src="https://via.placeholder.com/150" alt="Placeholder" />
          }
        />
      </OakRadioGroup>,
    );

    expect(getByRole("img")).toBeInTheDocument();
  });
});
