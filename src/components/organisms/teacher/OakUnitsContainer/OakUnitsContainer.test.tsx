import React from "react";
import "@testing-library/jest-dom";

import { OakUnitsContainer } from "./OakUnitsContainer";

import renderWithTheme from "@/test-helpers/renderWithTheme";
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
      <OakUnitsContainer data-testid="test" {...props} />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakUnitsContainer {...props}></OakUnitsContainer>,
    );
    expect(container).toMatchSnapshot();
  });
});
