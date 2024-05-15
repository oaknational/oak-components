import { create } from "react-test-renderer";
import React from "react";
import "@testing-library/jest-dom";

import { OakThemeProvider } from "../OakThemeProvider";

import { InternalTooltip } from "./InternalTooltip";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

describe(InternalTooltip, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <InternalTooltip>Hello there</InternalTooltip>
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders children", () => {
    const { getByText } = renderWithTheme(
      <InternalTooltip>Hello there</InternalTooltip>,
    );

    expect(getByText("Hello there")).toBeInTheDocument();
  });

  it('positions the arrow based on the "tooltipPosition" prop', () => {
    const { rerender, getByTestId } = renderWithTheme(
      <InternalTooltip>Hello there</InternalTooltip>,
    );

    expect(getByTestId("tooltip-arrow")).toHaveStyle("top: -1rem; left: 0rem");

    rerender(
      <InternalTooltip tooltipPosition="bottom-right">
        Hello there
      </InternalTooltip>,
    );

    expect(getByTestId("tooltip-arrow")).toHaveStyle("top: -1rem; right: 0rem");

    rerender(
      <InternalTooltip tooltipPosition="top-right">
        Hello there
      </InternalTooltip>,
    );

    expect(getByTestId("tooltip-arrow")).toHaveStyle(
      "bottom: -1rem; right: 0rem",
    );

    rerender(
      <InternalTooltip tooltipPosition="top-left">Hello there</InternalTooltip>,
    );

    expect(getByTestId("tooltip-arrow")).toHaveStyle(
      "bottom: -1rem; left: 0rem",
    );
  });
});