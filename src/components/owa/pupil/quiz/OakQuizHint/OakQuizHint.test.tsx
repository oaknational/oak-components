import React from "react";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

  it("does not associate tooltip content with the trigger before it is opened", () => {
    const { getByRole } = renderWithTheme(
      <OakQuizHint
        hint="The answer is right in front of your eyes"
        id="quiz-hint"
      />,
    );

    const button = getByRole("button", { name: "Need a hint?" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).not.toHaveAttribute("aria-describedby");
  });

  it("associates tooltip content with the trigger when opened", async () => {
    const { getByRole, getByTestId } = renderWithTheme(
      <OakQuizHint
        hint="The answer is right in front of your eyes"
        id="quiz-hint"
      />,
    );
    const user = userEvent.setup();

    await user.click(getByRole("button", { name: "Need a hint?" }));

    const button = getByRole("button", { name: "Close hint" });
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(button).toHaveAttribute("aria-describedby", "quiz-hint");

    const description = getByTestId("quiz-hint-description");
    expect(description).toHaveTextContent(
      "The answer is right in front of your eyes",
    );
  });
});
