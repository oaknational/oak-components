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
        <InternalTooltip tooltip="Hello there" isOpen>
          Trigger!
        </InternalTooltip>
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders children", () => {
    const { getByText } = renderWithTheme(
      <InternalTooltip tooltip="Hello there" isOpen={false}>
        Trigger!
      </InternalTooltip>,
    );

    expect(getByText("Trigger!")).toBeInTheDocument();
  });

  it("renders a tooltip when `isOpen` is true", () => {
    const { rerender, queryByRole } = renderWithTheme(
      <InternalTooltip tooltip="Hello there" isOpen={false} />,
    );

    expect(queryByRole("tooltip")).not.toBeInTheDocument();

    rerender(
      <InternalTooltip tooltip="Hello there" isOpen>
        Trigger!
      </InternalTooltip>,
    );

    expect(queryByRole("tooltip")).toBeInTheDocument();
  });
});
