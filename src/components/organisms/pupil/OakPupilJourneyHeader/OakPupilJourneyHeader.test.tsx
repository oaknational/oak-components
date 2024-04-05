import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakPupilJourneyHeader } from "./OakPupilJourneyHeader";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

describe("OakPupilJourneyHeader", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakPupilJourneyHeader
          iconBackground="primary"
          iconName="subject-science"
          alt="icon"
          listItems={["first", "second", "third", "fourth"]}
          title="Pupil Journey Header"
          data-testid="test"
        />
      </ThemeProvider>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        {" "}
        <OakPupilJourneyHeader
          iconBackground="primary"
          iconName="subject-science"
          alt="icon"
          listItems={["first", "second", "third", "fourth"]}
          title="Pupil Journey Header"
        />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
