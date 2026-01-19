import React from "react";
import "@testing-library/jest-dom";

import {
  InternalAccordionButton,
  InternalAccordionContent,
} from "./InternalAccordion";
import AccordionProvider from "./InternalAccordionProvider";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";

describe("InternalAccordion", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <AccordionProvider isInitialOpen={true}>
        <OakFlex id={"internal-accordion"} data-testid="test">
          <InternalAccordionButton id={"internal-accordion"}>
            accordion button
          </InternalAccordionButton>
          <InternalAccordionContent aria-labelledby={"internal-accordion"}>
            accordion content
          </InternalAccordionContent>
        </OakFlex>
      </AccordionProvider>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <AccordionProvider isInitialOpen={true}>
        <OakFlex id={"internal-accordion"} data-testid="test">
          <InternalAccordionButton id={"internal-accordion"}>
            accordion button
          </InternalAccordionButton>
          <InternalAccordionContent aria-labelledby={"internal-accordion"}>
            accordion content
          </InternalAccordionContent>
        </OakFlex>
      </AccordionProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
