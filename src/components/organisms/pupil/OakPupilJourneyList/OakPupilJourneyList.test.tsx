import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakPupilJourneyList } from "./OakPupilJourneyList";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("OakPupilJourneyList", () => {
  it("should render successfully", () => {
    const { getByText } = renderWithTheme(
      <OakPupilJourneyList
        phase="primary"
        subheadingSlot={<div>Subheading Slot Here</div>}
      >
        <p>Hello World</p>
      </OakPupilJourneyList>,
    );
    expect(getByText("Hello World")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakPupilJourneyList
          phase="primary"
          subheadingSlot={<div>Subheading Slot Here</div>}
        >
          <p>Hello World</p>
        </OakPupilJourneyList>
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
