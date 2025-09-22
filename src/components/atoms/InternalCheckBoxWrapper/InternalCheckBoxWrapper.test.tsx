import React from "react";
import "@testing-library/jest-dom";

import { InternalCheckBoxWrapper } from "./InternalCheckBoxWrapper";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("InternalCheckBoxWrapper", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <InternalCheckBoxWrapper
        size={"all-spacing-6"}
        internalCheckbox={
          <input
            data-testid="test-input"
            type="checkbox"
            id="checkbox-1"
            value="Option 1"
          />
        }
        checkedIcon={<div data-testid="test-icon">Checked</div>}
      />,
    );
    expect(getByTestId("test-input")).toBeInTheDocument();
    expect(getByTestId("test-icon")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <InternalCheckBoxWrapper
        size={"all-spacing-6"}
        internalCheckbox={
          <input
            data-testid="test-input"
            type="checkbox"
            id="checkbox-1"
            value="Option 1"
          />
        }
        checkedIcon={<div data-testid="test-icon">Checked</div>}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
