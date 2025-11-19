import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { OakQuizRadioButton } from "./OakQuizRadioButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakRadioGroup } from "@/components/molecules";
import { OakImage } from "@/components/atoms";

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
    const { container } = renderWithTheme(
      <OakRadioGroup name="quiz-radio-group">
        <OakQuizRadioButton
          id="checkbox-1"
          value="Option 1"
          label="Radio option"
        />
      </OakRadioGroup>,
    );
    expect(container).toMatchSnapshot();
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

  it("renders a tick icon when feedback is correct and it is selected", async () => {
    const { rerender, getByRole, getByAltText } = renderWithTheme(
      <OakRadioGroup name="quiz-radio-group">
        <OakQuizRadioButton
          id="checkbox-1"
          value="Option 1"
          label="Radio option"
          data-testid="quiz-radio"
        />
      </OakRadioGroup>,
    );
    await userEvent.click(getByRole("radio"));
    rerender(
      <OakRadioGroup name="quiz-radio-group">
        <OakQuizRadioButton
          id="checkbox-1"
          value="Option 1"
          label="Radio option"
          data-testid="quiz-radio"
          feedback={"correct"}
        />
      </OakRadioGroup>,
    );

    expect(getByAltText("Correct")).toBeInTheDocument();
  });

  it("renders a cross icon when feedback is incorrect and it is selected", async () => {
    const { rerender, getByRole, getByAltText } = renderWithTheme(
      <OakRadioGroup name="quiz-radio-group">
        <OakQuizRadioButton
          id="checkbox-1"
          value="Option 1"
          label="Radio option"
          data-testid="quiz-radio"
        />
      </OakRadioGroup>,
    );
    await userEvent.click(getByRole("radio"));
    rerender(
      <OakRadioGroup name="quiz-radio-group">
        <OakQuizRadioButton
          id="checkbox-1"
          value="Option 1"
          label="Radio option"
          data-testid="quiz-radio"
          feedback={"incorrect"}
        />
      </OakRadioGroup>,
    );

    expect(getByAltText("Incorrect")).toBeInTheDocument();
  });

  it("renders a tick icon when feedback is incorrect and it is unselected", () => {
    const { getByAltText } = renderWithTheme(
      <OakRadioGroup name="quiz-radio-group">
        <OakQuizRadioButton
          id="checkbox-1"
          value="Option 1"
          label="Radio option"
          data-testid="quiz-radio"
          feedback={"incorrect"}
        />
      </OakRadioGroup>,
    );
    expect(getByAltText("Unselected correct choice")).toBeInTheDocument();
  });

  it("doesn't renders any icon when feedback is correct and it is unselected", () => {
    const { getByRole } = renderWithTheme(
      <OakRadioGroup name="quiz-radio-group">
        <OakQuizRadioButton
          id="checkbox-1"
          value="Option 1"
          label="Radio option"
          data-testid="quiz-radio"
          feedback={"incorrect"}
        />
      </OakRadioGroup>,
    );
    expect(getByRole("img")).toBeInTheDocument();
  });
});
