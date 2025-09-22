import React from "react";
import "@testing-library/jest-dom";

import { OakPupilJourneyListItemSubheading } from "./OakPupilJourneyListItemSubheading";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakPupilJourneyListCounter } from "@/components/organisms/pupil";

describe("OakPupilJourneyListItemSubheading", () => {
  it("renders", () => {
    const { getByText } = renderWithTheme(
      <OakPupilJourneyListItemSubheading
        textSlot={
          <OakPupilJourneyListCounter
            tag="h1"
            count={5}
            countHeader="Previously released lessons"
          />
        }
        listItems={["Year 7", "Maths", "Higher"]}
        data-testid="test"
      />,
    );
    expect(getByText(`Previously released lessons`)).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakPupilJourneyListItemSubheading
        textSlot={
          <OakPupilJourneyListCounter
            tag="h1"
            count={5}
            countHeader="Previously released lessons"
          />
        }
        listItems={["Year 7", "Maths", "Higher"]}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
