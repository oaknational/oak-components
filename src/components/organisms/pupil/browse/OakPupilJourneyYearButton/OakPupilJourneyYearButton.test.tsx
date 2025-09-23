import React from "react";
import "@testing-library/jest-dom";

import { OakPupilJourneyYearButton } from "./OakPupilJourneyYearButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakPupilJourneyYearButton", () => {
  it("renders", () => {
    const { getByRole } = renderWithTheme(
      <OakPupilJourneyYearButton phase="primary">
        Year 1
      </OakPupilJourneyYearButton>,
    );
    expect(getByRole("button", { name: "Year 1" })).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakPupilJourneyYearButton phase="primary">
        Year 1
      </OakPupilJourneyYearButton>,
    );
    expect(container).toMatchSnapshot();
  });
});
