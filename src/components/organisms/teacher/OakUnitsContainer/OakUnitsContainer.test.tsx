import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakUnitsContainer } from "./OakUnitsContainer";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";
import { OakBox } from "@/components/atoms";

const props = {
  isLegacy: false,
  showHeader: true,
  unitCards: [
    <OakBox>Unit 1 </OakBox>,
    <OakBox>Unit 2 </OakBox>,
    <OakBox>Unit 3 </OakBox>,
    <OakBox>Unit 4 </OakBox>,
  ],
  subject: "maths",
  phase: "secondary",
  curriculumHref: "https://www.thenational.academy",
};

describe("OakUnitsContainer", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakUnitsContainer data-testid="test" {...props} />
      </ThemeProvider>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakUnitsContainer {...props}></OakUnitsContainer>
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
