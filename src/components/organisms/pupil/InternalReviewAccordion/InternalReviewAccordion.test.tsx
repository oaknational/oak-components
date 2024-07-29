import React from "react";
import { create } from "react-test-renderer";
import { act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { InternalReviewAccordion } from "./InternalReviewAccordion";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(InternalReviewAccordion, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <InternalReviewAccordion
          initialOpen
          expandableLabel="See more"
          id="see-more"
        >
          Here it is
        </InternalReviewAccordion>
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("toggles open and closed", () => {
    const { queryByRole, queryByText, getByText } = renderWithTheme(
      <InternalReviewAccordion
        expandableLabel="See more"
        id="see-more"
        initialOpen={false}
      >
        Here it is
      </InternalReviewAccordion>,
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
