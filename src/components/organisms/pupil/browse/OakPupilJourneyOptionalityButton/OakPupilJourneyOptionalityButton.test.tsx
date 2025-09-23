import React from "react";
import "@testing-library/jest-dom";

import { OakPupilJourneyOptionalityButton } from "./OakPupilJourneyOptionalityButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakPupilJourneyOptionalityButton, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakPupilJourneyOptionalityButton numberOfLessons={6} title="Lesson 1" />,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders a div when the item is disabled", () => {
    const { getByTestId } = renderWithTheme(
      <>
        <OakPupilJourneyOptionalityButton
          data-testid="intro"
          numberOfLessons={6}
          title="Lesson 1"
          disabled
        />
      </>,
    );

    expect(getByTestId("intro").tagName).toBe("DIV");
  });
  it("renders a button when the item is not disabled", () => {
    const { getByTestId } = renderWithTheme(
      <>
        <OakPupilJourneyOptionalityButton
          data-testid="intro"
          numberOfLessons={6}
          title="Lesson 1"
        />
      </>,
    );

    expect(getByTestId("intro").tagName).toBe("A");
  });
  it("renders the number of lessons when provided", () => {
    const { getByTestId } = renderWithTheme(
      <>
        <OakPupilJourneyOptionalityButton
          data-testid="intro"
          title="Lesson 1"
          numberOfLessons={6}
        />
      </>,
    );

    expect(getByTestId("intro").textContent).toContain("6");
  });
});
