import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakPreviousLessonsHeading } from "./OakPreviousLessonsHeading";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

describe("OakPreviousLessonsHeading", () => {
  it("renders", () => {
    const { getByText } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakPreviousLessonsHeading
          numberOfLessons={5}
          yearDescription={"Year 7"}
          subjectTitle={"Maths"}
          tierDescription="Higher"
          data-testid="test"
        />
      </ThemeProvider>,
    );
    expect(getByText(`Previously released lessons (5)`)).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        {" "}
        <OakPreviousLessonsHeading
          numberOfLessons={5}
          yearDescription={"Year 7"}
          subjectTitle={"Maths"}
          tierDescription={"Higher"}
        />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
