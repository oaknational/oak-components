import React from "react";
import { act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { UnstyledChevronAccordion } from "./UnstyledChevronAccordion";

import { OakThemeProvider } from "@/components/OakThemeProvider";
import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(UnstyledChevronAccordion, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakThemeProvider theme={oakDefaultTheme}>
        <UnstyledChevronAccordion
          isInitiallyOpen
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
      <UnstyledChevronAccordion
        isInitiallyOpen={false}
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

  it("operates as a controlled component when isOpen and onOpenChange are provided", () => {
    const onOpenChange = jest.fn();
    const { getByRole, queryByRole, rerender } = renderWithTheme(
      <UnstyledChevronAccordion
        isOpen={false}
        onOpenChange={onOpenChange}
        header="See more"
        content={<div>Here it is</div>}
        id="see-more"
      />,
    );

    expect(queryByRole("region")).toBeNull();

    act(() => {
      fireEvent.click(getByRole("button"));
    });

    // Parent owns state - prop hasn't changed, so content stays hidden
    expect(queryByRole("region")).toBeNull();
    expect(onOpenChange).toHaveBeenCalledWith(true);

    rerender(
      <UnstyledChevronAccordion
        isOpen={true}
        onOpenChange={onOpenChange}
        header="See more"
        content={<div>Here it is</div>}
        id="see-more"
      />,
    );

    expect(getByRole("region")).toBeVisible();
  });

  it("changes aria-label based on open state", () => {
    const { getByRole } = renderWithTheme(
      <UnstyledChevronAccordion
        isInitiallyOpen={false}
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
