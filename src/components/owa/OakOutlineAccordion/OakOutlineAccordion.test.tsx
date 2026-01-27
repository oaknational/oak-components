import React from "react";
import { act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { OakOutlineAccordion } from "./OakOutlineAccordion";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakOutlineAccordion, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakOutlineAccordion initialOpen header="See more" id="see-more">
        Here it is
      </OakOutlineAccordion>,
    );

    expect(container).toMatchSnapshot();
  });

  it("toggles open and closed", () => {
    const { queryByRole, queryByText, getByText } = renderWithTheme(
      <OakOutlineAccordion header="See more" id="see-more">
        Here it is
      </OakOutlineAccordion>,
    );

    expect(queryByRole("region")).not.toBeInTheDocument();

    act(() => {
      fireEvent.click(getByText("See more"));
    });

    expect(queryByRole("region")).toBeVisible();
    expect(queryByText("Here it is")).toBeInTheDocument();

    act(() => {
      fireEvent.click(getByText("See more"));
    });

    expect(queryByRole("region")).not.toBeInTheDocument();
  });
});
