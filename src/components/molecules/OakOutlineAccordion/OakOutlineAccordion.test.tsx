import React from "react";
import { create } from "react-test-renderer";
import { act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { OakOutlineAccordion } from "./OakOutlineAccordion";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakOutlineAccordion, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakOutlineAccordion initialOpen header="See more" id="see-more">
          Here it is
        </OakOutlineAccordion>
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
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
