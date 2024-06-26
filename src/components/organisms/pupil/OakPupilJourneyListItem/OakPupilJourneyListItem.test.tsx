import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakPupilJourneyListItem } from "./OakPupilJourneyListItem";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakPupilJourneyListItem, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakPupilJourneyListItem as="a" title="Lesson 1" index={1} />,
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders a div when the item is disabled", () => {
    const { getByTestId } = renderWithTheme(
      <>
        <OakPupilJourneyListItem
          data-testid="intro"
          as="a"
          title="Lesson 1"
          index={1}
          disabled
        />
      </>,
    );

    expect(getByTestId("intro").tagName).toBe("DIV");
  });
  it("renders a button when the item is not disabled", () => {
    const { getByTestId } = renderWithTheme(
      <>
        <OakPupilJourneyListItem
          data-testid="intro"
          as="a"
          title="Lesson 1"
          index={1}
        />
      </>,
    );

    expect(getByTestId("intro").tagName).toBe("A");
  });
  it("renders the number of lessons when provided", () => {
    const { getByTestId } = renderWithTheme(
      <>
        <OakPupilJourneyListItem
          data-testid="intro"
          as="a"
          title="Lesson 1"
          index={1}
          numberOfLessons={6}
        />
      </>,
    );

    expect(getByTestId("intro").textContent).toContain("6");
  });
});
