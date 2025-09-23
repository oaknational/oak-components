import React from "react";
import "@testing-library/jest-dom";

import { InternalCheckBoxLabel } from "./InternalCheckBoxLabel";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("InternalCheckBoxLabel", () => {
  it("renders a label", () => {
    const { getByTestId } = renderWithTheme(
      <InternalCheckBoxLabel htmlFor="checkbox-1" data-testid="test-1">
        Value
      </InternalCheckBoxLabel>,
    );
    expect(getByTestId("test-1")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <InternalCheckBoxLabel htmlFor="checkbox-1" data-testid="test-1">
        Value
      </InternalCheckBoxLabel>,
    );
    expect(container).toMatchSnapshot();
  });
});
