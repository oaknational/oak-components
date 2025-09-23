import React from "react";
import { act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { InternalReviewAccordion } from "./InternalReviewAccordion";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(InternalReviewAccordion, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <InternalReviewAccordion initialOpen id="see-more">
        Here it is
      </InternalReviewAccordion>,
    );

    expect(container).toMatchSnapshot();
  });

  it("toggles open and closed", () => {
    const { queryByRole, queryByText, getByText } = renderWithTheme(
      <InternalReviewAccordion id="see-more" initialOpen={false}>
        Here it is
      </InternalReviewAccordion>,
    );

    expect(queryByRole("region")).not.toBeInTheDocument();

    act(() => {
      fireEvent.click(getByText("Results"));
    });

    expect(queryByRole("region")).toBeVisible();
    expect(queryByText("Here it is")).toBeInTheDocument();

    act(() => {
      fireEvent.click(getByText("Results"));
    });

    expect(queryByRole("region")).not.toBeInTheDocument();
  });
});
