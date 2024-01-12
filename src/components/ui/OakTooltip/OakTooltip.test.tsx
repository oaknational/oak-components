import { create } from "react-test-renderer";
import React from "react";
import "@testing-library/jest-dom";

import { OakTooltip } from "./OakTooltip";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";
import { OakThemeProvider } from "@/components/base";

describe(OakTooltip, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakTooltip tooltip="Hello there" isOpen>
          Trigger!
        </OakTooltip>
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders", () => {
    const { getByRole } = renderWithTheme(
      <OakTooltip tooltip="Hello there" isOpen>
        Trigger!
      </OakTooltip>,
    );

    expect(getByRole("tooltip")).toBeInTheDocument();
  });
});
