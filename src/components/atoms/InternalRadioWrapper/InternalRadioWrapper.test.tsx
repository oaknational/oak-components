import React from "react";
import "@testing-library/jest-dom";

import { InternalRadioWrapper } from "./InternalRadioWrapper";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("InternalRadioWrapper", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <InternalRadioWrapper
        size={"spacing-24"}
        internalRadio={
          <input
            data-testid="test-input"
            type="radio"
            id="checkbox-1"
            value="Option 1"
          />
        }
      />,
    );
    expect(getByTestId("test-input")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <InternalRadioWrapper
        size={"spacing-24"}
        internalRadio={
          <input
            data-testid="test-input"
            type="radio"
            id="checkbox-1"
            value="Option 1"
          />
        }
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
