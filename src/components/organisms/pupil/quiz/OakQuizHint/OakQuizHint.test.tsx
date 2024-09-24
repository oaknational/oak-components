import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakQuizHint } from "./OakQuizHint";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";
import { fireEvent } from "@testing-library/react";
import renderWithTheme from "@/test-helpers/renderWithTheme";
import {
  installMockIntersectionObserver,
  installMockResizeObserver,
} from "@/test-helpers";

installMockResizeObserver();
installMockIntersectionObserver();

describe(OakQuizHint, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakQuizHint
          hint="The answer is right in front of your eyes"
          id="quiz-hint"
        />
        ,
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("calls hintToggled when hint button is clicked", () => {
    const hintToggled = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakQuizHint
          hint="The answer is right in front of your eyes"
          id="quiz-hint"
          hintToggled={hintToggled}
        />
        ,
      </OakThemeProvider>,
    );

    fireEvent.click(getByRole("button"));

    expect(hintToggled).toHaveBeenCalledTimes(1);
    expect(hintToggled).toHaveBeenCalledWith({ isOpen: true });
  });
});
