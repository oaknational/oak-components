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
      getByText(contentGuidanceDescimination.contentguidanceLabel as string),
    ).toBeInTheDocument();
    expect(
      getByText(contentGuidanceUpsetting.contentguidanceLabel as string),
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

  it("uses default title if title prop is not provided", () => {
    const { getByText } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakPupilJourneyContentGuidance
          isOpen
          onAccept={() => {}}
          onDecline={() => {}}
        />
      </ThemeProvider>,
    );

    expect(getByText("Content guidance")).toBeInTheDocument();
  });

  it("sets custom title if provided", () => {
    const { getByText } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakPupilJourneyContentGuidance
          isOpen
          onAccept={() => {}}
          onDecline={() => {}}
          title={"Custom title"}
        />
      </ThemeProvider>,
    );

    expect(getByText("Custom title")).toBeInTheDocument();
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
