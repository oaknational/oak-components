import React from "react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";

import {
  OakPupilContentGuidance,
  OakPupilJourneyContentGuidance,
} from "./OakPupilJourneyContentGuidance";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

const contentGuidanceDescimination: OakPupilContentGuidance = {
  contentguidanceLabel: "Contains depictions of discriminatory behaviour.",
  contentguidanceArea: "Language/ Discrimination",
  contentguidanceDescription: "legacy content guidance",
};
const contentGuidanceUpsetting: OakPupilContentGuidance = {
  contentguidanceLabel:
    "Contains subject matter which individuals may find upsetting.",
  contentguidanceArea: "Upsetting content",
  contentguidanceDescription: "Smoking or alcohol use",
};
const contentGuidance: OakPupilContentGuidance[] = [
  contentGuidanceDescimination,
  contentGuidanceUpsetting,
];
const supervisionLevel = "Adult supervision suggested.";

describe("OakPupilJourneyContentGuidance", () => {
  it("shows the guidence content", () => {
    const { getByText } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakPupilJourneyContentGuidance
          isOpen
          onAccept={() => {}}
          onDecline={() => {}}
          contentGuidance={contentGuidance}
          supervisionLevel={supervisionLevel}
        />
      </ThemeProvider>,
    );

    expect(
      getByText(contentGuidanceDescimination.contentguidanceLabel),
    ).toBeInTheDocument();
    expect(
      getByText(contentGuidanceUpsetting.contentguidanceLabel),
    ).toBeInTheDocument();
  });

  it("shows the supivisor level", () => {
    const { getByText } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakPupilJourneyContentGuidance
          isOpen
          onAccept={() => {}}
          onDecline={() => {}}
          contentGuidance={contentGuidance}
          supervisionLevel={supervisionLevel}
        />
      </ThemeProvider>,
    );

    expect(getByText(supervisionLevel)).toBeInTheDocument();
  });

  it("calls onAccept when 'I understand' is clicked", () => {
    const onAccept = jest.fn();
    const { getByTestId } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakPupilJourneyContentGuidance
          isOpen
          onAccept={onAccept}
          onDecline={() => {}}
          contentGuidance={contentGuidance}
          supervisionLevel={supervisionLevel}
        />
      </ThemeProvider>,
    );

    getByTestId("acceptButton").click();

    expect(onAccept).toHaveBeenCalled();
  });

  it("calls onDecline when 'take me home' is clicked", () => {
    const onDecline = jest.fn();
    const { getByTestId } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakPupilJourneyContentGuidance
          isOpen
          onAccept={() => {}}
          onDecline={onDecline}
          contentGuidance={contentGuidance}
          supervisionLevel={supervisionLevel}
        />
      </ThemeProvider>,
    );

    getByTestId("declineButton").click();

    expect(onDecline).toHaveBeenCalled();
  });
});
