import { create } from "react-test-renderer";
import React from "react";
import "@testing-library/jest-dom";

import { InternalTooltip } from "./InternalTooltip";

import { OakThemeProvider } from "@/components/atoms/OakThemeProvider";
import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

describe(InternalTooltip, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <InternalTooltip id={"tooltip"}>Hello there</InternalTooltip>
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders children", () => {
    const { getByText } = renderWithTheme(
      <InternalTooltip id={"tooltip"}>Hello there</InternalTooltip>,
    );

    expect(getByText("Hello there")).toBeInTheDocument();
  });

  it('positions the arrow based on the "tooltipPosition" prop', () => {
    const { rerender, getByTestId } = renderWithTheme(
      <InternalTooltip id={"tooltip"}>Hello there</InternalTooltip>,
    );

    expect(getByTestId("tooltip-arrow")).toHaveStyle("top: -1rem; left: 0rem");

    rerender(
      <InternalTooltip tooltipPosition="bottom-right" id={"tooltip"}>
        Hello there
      </InternalTooltip>,
    );

    expect(getByTestId("tooltip-arrow")).toHaveStyle("top: -1rem; right: 0rem");

    rerender(
      <InternalTooltip tooltipPosition="top-right" id={"tooltip"}>
        Hello there
      </InternalTooltip>,
    );

    expect(getByTestId("tooltip-arrow")).toHaveStyle(
      "bottom: -1rem; right: 0rem",
    );

    rerender(
      <InternalTooltip tooltipPosition="top-left" id={"tooltip"}>
        Hello there
      </InternalTooltip>,
    );

    expect(getByTestId("tooltip-arrow")).toHaveStyle(
      "bottom: -1rem; left: 0rem",
    );
  });
});
