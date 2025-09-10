import React from "react";
import { create } from "react-test-renderer";
import { act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { InternalUnstyledChevronAccordion } from "./InternalUnstyledChevronAccordion";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(InternalUnstyledChevronAccordion, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <InternalUnstyledChevronAccordion
          initialOpen
          header="See more"
          id="see-more"
        >
          Here it is
        </InternalUnstyledChevronAccordion>
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("toggles open and closed", () => {
    const { queryByRole, queryByText, getByText, getByRole } = renderWithTheme(
      <InternalUnstyledChevronAccordion header="See more" id="see-more">
        Here it is
      </InternalUnstyledChevronAccordion>,
    );

    expect(queryByRole("region")).not.toBeInTheDocument();

    act(() => {
      fireEvent.click(getByRole("button"));
    });

    expect(queryByRole("region")).toBeVisible();
    expect(queryByText("Here it is")).toBeInTheDocument();

    act(() => {
      fireEvent.click(getByRole("button"));
    });

    expect(queryByRole("region")).not.toBeInTheDocument();
  });
});
