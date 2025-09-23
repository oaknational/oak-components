import React from "react";
import "@testing-library/jest-dom";

import { OakTextInput } from "./OakTextInput";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakTextInput", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakTextInput
        defaultValue="A nice text value"
        data-testid="text-input"
      />,
    );

    expect(getByTestId("text-input")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakTextInput defaultValue="A nice text value" />,
    );

    expect(container).toMatchSnapshot();
  });
});
