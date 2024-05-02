import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakPupilJourneySubjectButton } from "./OakPupilJourneySubjectButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("OakPupilJourneySubjectButton", () => {
  it("renders", () => {
    const { getByRole } = renderWithTheme(
      <OakPupilJourneySubjectButton phase="primary">
        Year 1
      </OakPupilJourneySubjectButton>,
    );
    expect(getByRole("button", { name: "Year 1" })).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakPupilJourneySubjectButton phase="primary">
          Year 1
        </OakPupilJourneySubjectButton>
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
