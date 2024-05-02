import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakPupilJourneyYearButton } from "./OakPupilJourneyYearButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

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
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakPupilJourneyYearButton phase="primary">
          Year 1
        </OakPupilJourneyYearButton>
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
