import React from "react";
import "@testing-library/jest-dom";

import { OakPupilJourneyList } from "./OakPupilJourneyList";

import renderWithTheme from "@/test-helpers/renderWithTheme";

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
    const { container } = renderWithTheme(
      <OakPupilJourneyList
        phase="primary"
        subheadingSlot={<div>Subheading Slot Here</div>}
      >
        <p>Hello World</p>
      </OakPupilJourneyList>,
    );
    expect(container).toMatchSnapshot();
  });
});
