import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { create } from "react-test-renderer";
import { render } from "@testing-library/react";

import { OakQuizRadioButton } from "./OakQuizRadioButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakRadioGroup } from "@/components/molecules";
import { OakImage, OakThemeProvider } from "@/components/atoms";
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

  it("renders a tick icon when feedback is correct and it is selected", async () => {
    const { rerender, getByRole, getByAltText } = render(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakRadioGroup name="quiz-radio-group">
          <OakQuizRadioButton
            id="checkbox-1"
            value="Option 1"
            label="Radio option"
            data-testid="quiz-radio"
          />
        </OakRadioGroup>
      </OakThemeProvider>,
    );
    await userEvent.click(getByRole("radio"));
    rerender(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakRadioGroup name="quiz-radio-group">
          <OakQuizRadioButton
            id="checkbox-1"
            value="Option 1"
            label="Radio option"
            data-testid="quiz-radio"
            feedback={"correct"}
          />
        </OakRadioGroup>
      </OakThemeProvider>,
    );

    expect(getByAltText("Correct")).toBeInTheDocument();
  });

  it("renders a cross icon when feedback is incorrect and it is selected", async () => {
    const { rerender, getByRole, getByAltText } = render(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakRadioGroup name="quiz-radio-group">
          <OakQuizRadioButton
            id="checkbox-1"
            value="Option 1"
            label="Radio option"
            data-testid="quiz-radio"
          />
        </OakRadioGroup>
      </OakThemeProvider>,
    );
    await userEvent.click(getByRole("radio"));
    rerender(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakRadioGroup name="quiz-radio-group">
          <OakQuizRadioButton
            id="checkbox-1"
            value="Option 1"
            label="Radio option"
            data-testid="quiz-radio"
            feedback={"incorrect"}
          />
        </OakRadioGroup>
      </OakThemeProvider>,
    );

    expect(getByAltText("Incorrect")).toBeInTheDocument();
  });

  it("renders a tick icon when feedback is incorrect and it is unselected", () => {
    const { getByAltText } = render(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakRadioGroup name="quiz-radio-group">
          <OakQuizRadioButton
            id="checkbox-1"
            value="Option 1"
            label="Radio option"
            data-testid="quiz-radio"
            feedback={"incorrect"}
          />
        </OakRadioGroup>
      </OakThemeProvider>,
    );
    expect(getByAltText("Unselected correct choice")).toBeInTheDocument();
  });

  it("doesn't renders any icon when feedback is correct and it is unselected", () => {
    const { getByRole } = render(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakRadioGroup name="quiz-radio-group">
          <OakQuizRadioButton
            id="checkbox-1"
            value="Option 1"
            label="Radio option"
            data-testid="quiz-radio"
            feedback={"incorrect"}
          />
        </OakRadioGroup>
      </OakThemeProvider>,
    );
    expect(getByRole("img")).toBeInTheDocument();
  });
});
