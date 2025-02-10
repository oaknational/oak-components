import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakUnitsHeader } from "./OakUnitsHeader";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

const props = {
  isLegacy: false,
  subject: "maths",
  phase: "secondary",
  curriculumHref: "https://www.thenational.academy",
};

describe("OakUnitsHeader", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakUnitsHeader data-testid="test" {...props} />
      </ThemeProvider>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakUnitsHeader {...props}></OakUnitsHeader>
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
