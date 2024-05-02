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
      <OakPupilJourneySubjectButton
        phase="primary"
        subjectIconName="subject-english"
      >
        English
      </OakPupilJourneySubjectButton>,
    );
    expect(getByRole("button", { name: /English/ })).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakPupilJourneySubjectButton
          phase="primary"
          subjectIconName="subject-english"
        >
          English
        </OakPupilJourneySubjectButton>
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
