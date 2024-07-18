import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakPupilJourneyPreviousLessons } from "./OakPupilJourneyPreviousLessons";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";
import { OakPupilJourneyListCounter } from "@/components/organisms";

describe("OakPupilJourneyPreviousLessons", () => {
  it("renders", () => {
    const { getByText } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakPupilJourneyPreviousLessons
          textSlot={
            <OakPupilJourneyListCounter
              tag="h1"
              count={5}
              countHeader="Previously released lessons"
            />
          }
          listItems={["Year 7", "Maths", "Higher"]}
          data-testid="test"
        />
      </ThemeProvider>,
    );
    expect(getByText(`Previously released lessons`)).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        {" "}
        <OakPupilJourneyPreviousLessons
          textSlot={
            <OakPupilJourneyListCounter
              tag="h1"
              count={5}
              countHeader="Previously released lessons"
            />
          }
          listItems={["Year 7", "Maths", "Higher"]}
        />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
