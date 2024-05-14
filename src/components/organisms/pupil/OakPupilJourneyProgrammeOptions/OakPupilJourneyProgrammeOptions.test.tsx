import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakPupilJourneyProgrammeOptions } from "./OakPupilJourneyProgrammeOptions";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

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
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakPupilJourneyProgrammeOptions
          phase="primary"
          optionTitleSlot={<div>Option Title Slot Here</div>}
        >
          <p>Hello World</p>
        </OakPupilJourneyProgrammeOptions>
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
