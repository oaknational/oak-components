import React from "react";
import "@testing-library/jest-dom";

import { OakPupilJourneyProgrammeOptions } from "./OakPupilJourneyProgrammeOptions";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakPupilJourneyList", () => {
  it("should render successfully", () => {
    const { getByText } = renderWithTheme(
      <OakPupilJourneyProgrammeOptions
        phase="primary"
        optionTitleSlot={<div>Option Title Slot Here</div>}
      >
        <p>Hello World</p>
      </OakPupilJourneyProgrammeOptions>,
    );
    expect(getByText("Hello World")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakPupilJourneyProgrammeOptions
        phase="primary"
        optionTitleSlot={<div>Option Title Slot Here</div>}
      >
        <p>Hello World</p>
      </OakPupilJourneyProgrammeOptions>,
    );
    expect(container).toMatchSnapshot();
  });
});
