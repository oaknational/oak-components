import React from "react";
import "@testing-library/jest-dom";

import { OakPupilJourneyHeader } from "./OakPupilJourneyHeader";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakPupilJourneyHeader", () => {
  it("renders", () => {
    const { getByText } = renderWithTheme(
      <OakPupilJourneyHeader
        iconBackground="primary"
        iconName="subject-science"
        alt="icon"
        breadcrumbs={["first", "second", "third", "fourth"]}
        title="Pupil Journey Header"
        data-testid="test"
      />,
    );
    expect(getByText("Pupil Journey Header")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakPupilJourneyHeader
        iconBackground="primary"
        iconName="subject-science"
        alt="icon"
        breadcrumbs={["first", "second", "third", "fourth"]}
        title="Pupil Journey Header"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
