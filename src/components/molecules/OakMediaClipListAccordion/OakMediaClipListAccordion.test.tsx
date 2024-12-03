import React from "react";
import { create } from "react-test-renderer";
import { act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { OakMediaClipListAccordion } from "./OakMediaClipListAccordion";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakMediaClipListAccordion, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakMediaClipListAccordion initialOpen header="See more" id="see-more">
          Here it is
        </OakMediaClipListAccordion>
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("toggles open and closed", () => {
    const { queryByRole, queryByText, getByText } = renderWithTheme(
      <OakMediaClipListAccordion header="See more" id="see-more">
        Here it is
      </OakMediaClipListAccordion>,
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
