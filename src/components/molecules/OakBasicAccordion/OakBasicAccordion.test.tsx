import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakBasicAccordion } from "./OakBasicAccordion";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakHeading, OakP } from "@/components/atoms";

describe("OakBasicAccordion", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakBasicAccordion
        id={"1"}
        header={<OakHeading tag="h1">Heading</OakHeading>}
        data-testid="test"
      >
        <OakP>Body</OakP>
      </OakBasicAccordion>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakBasicAccordion
        id={"1"}
        header={<OakHeading tag="h1">Heading</OakHeading>}
        data-testid="test"
      >
        <OakP>Body</OakP>
      </OakBasicAccordion>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
