import React from "react";
import { act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { InternalUnstyledChevronAccordion } from "./InternalUnstyledChevronAccordion";

import { OakThemeProvider } from "@/components/OakThemeProvider";
import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(InternalUnstyledChevronAccordion, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakThemeProvider theme={oakDefaultTheme}>
        <InternalUnstyledChevronAccordion
          initialOpen
          header="See more"
          content={<div>Here it is</div>}
          id="see-more"
        />
      </OakThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it("toggles open and closed", () => {
    const { queryByText, queryByRole, getByRole } = renderWithTheme(
      <InternalUnstyledChevronAccordion
        initialOpen={false}
        header="See more"
        content={<div>Here it is</div>}
        id="see-more"
      />,
    );

    // expect(getByRole("region")).not.toBeVisible();

    act(() => {
      fireEvent.click(getByRole("button"));
    });

    expect(getByRole("region")).toBeVisible();

    expect(queryByText("Here it is")).toBeInTheDocument();

    act(() => {
      fireEvent.click(getByRole("button"));
    });

    expect(queryByRole("region")).toBeNull();
    expect(queryByText("Here it is")).not.toBeVisible();

    act(() => {
      fireEvent.click(getByRole("button"));
    });

    expect(getByRole("region")).toBeInTheDocument();
  });

  it("changes aria-label based on open state", () => {
    const { getByRole } = renderWithTheme(
      <InternalUnstyledChevronAccordion
        initialOpen={false}
        header="See more"
        content={<div>Here it is</div>}
        id="see-more"
        ariaLabelOpen="Close accordion"
        ariaLabelClose="Open accordion"
      />,
    );

    expect(getByRole("button")).toHaveAttribute("aria-label", "Open accordion");

    act(() => {
      fireEvent.click(getByRole("button"));
    });

    expect(getByRole("button")).toHaveAttribute(
      "aria-label",
      "Close accordion",
    );
  });
});
