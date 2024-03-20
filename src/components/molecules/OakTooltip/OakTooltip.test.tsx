import { create } from "react-test-renderer";
import React, { ReactNode } from "react";
import "@testing-library/jest-dom";

import { OakTooltip } from "./OakTooltip";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";
import { OakThemeProvider } from "@/components/atoms";

jest.mock("react-dom", () => {
  return {
    ...jest.requireActual("react-dom"),
    createPortal: (node: ReactNode) => node,
  };
});

class MockResizeObserver implements ResizeObserver {
  disconnect() {}
  observe() {}
  unobserve() {}
}
window.ResizeObserver = window.ResizeObserver ?? MockResizeObserver;

describe(OakTooltip, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakTooltip tooltip="Hello there" isOpen>
          <div>Trigger!</div>
        </OakTooltip>
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders", () => {
    const { getByRole } = renderWithTheme(
      <OakTooltip tooltip="Hello there" isOpen>
        <div>Trigger!</div>
      </OakTooltip>,
    );

    expect(getByRole("tooltip")).toBeInTheDocument();
  });
});
