import React from "react";
import "@testing-library/jest-dom";

import { OakBasicAccordion } from "./OakBasicAccordion";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakP } from "@/components/typography/OakP";
import { OakHeading } from "@/components/typography/OakHeading";

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
    const { container } = renderWithTheme(
      <OakBasicAccordion
        id={"1"}
        header={<OakHeading tag="h1">Heading</OakHeading>}
        data-testid="test"
      >
        <OakP>Body</OakP>
      </OakBasicAccordion>,
    );
    expect(container).toMatchSnapshot();
  });
});
