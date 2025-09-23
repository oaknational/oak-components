import React from "react";
import "@testing-library/jest-dom";

import { OakPupilJourneyOptionalityItem } from "./OakPupilJourneyOptionalityItem";

import { OakPupilJourneyOptionalityButton } from "@/components/organisms/pupil/browse/OakPupilJourneyOptionalityButton";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakPupilJourneyOptionalityItem component test", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakPupilJourneyOptionalityItem
        data-testid="test"
        title="title"
        index={1}
      >
        <OakPupilJourneyOptionalityButton
          title="Unit 1"
          numberOfLessons={7}
          href="#"
        />
        <OakPupilJourneyOptionalityButton
          title="Unit 2"
          numberOfLessons={8}
          href="#"
        />
      </OakPupilJourneyOptionalityItem>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakPupilJourneyOptionalityItem
        data-testid="test"
        title="title"
        index={1}
      >
        <OakPupilJourneyOptionalityButton
          title="Unit 1"
          numberOfLessons={7}
          href="#"
        />
        <OakPupilJourneyOptionalityButton
          title="Unit 2"
          numberOfLessons={8}
          href="#"
        />
      </OakPupilJourneyOptionalityItem>,
    );
    expect(container).toMatchSnapshot();
  });
});
