import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import {
  InternalAccordion,
  InternalAccordionButton,
  InternalAccordionContent,
} from "./InternalAccordion";
import AccordionProvider from "./InternalAccordionProvider";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("InternalAccordion", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <AccordionProvider isInitialOpen={true}>
        <InternalAccordion id={"internal-accordion"} data-testid="test">
          <InternalAccordionButton id={"internal-accordion"}>
            accordion button
          </InternalAccordionButton>
          <InternalAccordionContent id={"internal-accordion"}>
            accordion content
          </InternalAccordionContent>
        </InternalAccordion>
      </AccordionProvider>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <AccordionProvider isInitialOpen={true}>
        <InternalAccordion id={"internal-accordion"} data-testid="test">
          <InternalAccordionButton id={"internal-accordion"}>
            accordion button
          </InternalAccordionButton>
          <InternalAccordionContent id={"internal-accordion"}>
            accordion content
          </InternalAccordionContent>
        </InternalAccordion>
      </AccordionProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
