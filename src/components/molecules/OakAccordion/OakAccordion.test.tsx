import React from "react";
import { act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { OakAccordion } from "./OakAccordion";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakAccordion, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakAccordion
        initialOpen
        header="See more"
        headerAfterSlot="After"
        id="see-more"
      >
        Here it is
      </OakAccordion>,
    );

    expect(container).toMatchSnapshot();
  });

  it("toggles open and closed", () => {
    const { queryByRole, queryByText, getByText } = renderWithTheme(
      <OakAccordion header="See more" id="see-more">
        Here it is
      </OakAccordion>,
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
