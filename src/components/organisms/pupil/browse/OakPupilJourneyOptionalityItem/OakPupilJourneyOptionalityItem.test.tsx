import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakPupilJourneyOptionalityItem } from "./OakPupilJourneyOptionalityItem";

import { OakPupilJourneyOptionalityButton } from "@/components/organisms/pupil/browse/OakPupilJourneyOptionalityButton";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("OakPupilJourneyOptionalityItem component test", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <OakThemeProvider theme={oakDefaultTheme}>
        {" "}
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
        </OakPupilJourneyOptionalityItem>
      </OakThemeProvider>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
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
        </OakPupilJourneyOptionalityItem>
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
