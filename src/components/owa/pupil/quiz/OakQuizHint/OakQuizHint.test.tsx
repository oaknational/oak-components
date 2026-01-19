import React from "react";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";

import { OakQuizHint } from "./OakQuizHint";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import {
  installMockIntersectionObserver,
  installMockResizeObserver,
} from "@/test-helpers";

installMockResizeObserver();
installMockIntersectionObserver();

describe(OakQuizHint, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakQuizHint
        hint="The answer is right in front of your eyes"
        id="quiz-hint"
      />,
    );

    expect(container).toMatchSnapshot();
  });
  it("calls hintToggled when hint button is clicked", () => {
    const hintToggled = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakQuizHint
        hint="The answer is right in front of your eyes"
        id="quiz-hint"
        hintToggled={hintToggled}
      />,
    );

    fireEvent.click(getByRole("button"));

    expect(hintToggled).toHaveBeenCalledTimes(1);
    expect(hintToggled).toHaveBeenCalledWith({ isOpen: true });
  });
});
