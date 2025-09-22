import React from "react";
import "@testing-library/jest-dom";

import { OakPupilJourneyListCounter } from "./OakPupilJourneyListCounter";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakPupilJourneyListCount", () => {
  it("renders", () => {
    const { getByText } = renderWithTheme(
      <OakPupilJourneyListCounter
        count={5}
        countHeader={"Previously released lessons"}
        tag={"h2"}
      />,
    );
    expect(getByText(`Previously released lessons`)).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakPupilJourneyListCounter
        count={5}
        countHeader={"Lessons"}
        tag={"h2"}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
