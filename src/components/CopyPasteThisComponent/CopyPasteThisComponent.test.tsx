import React from "react";
import "@testing-library/jest-dom";

import { CopyPasteThisComponent } from "./CopyPasteThisComponent";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("CopyPasteThisComponent", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <CopyPasteThisComponent data-testid="test" />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <CopyPasteThisComponent>Click Me</CopyPasteThisComponent>,
    );
    expect(container).toMatchSnapshot();
  });
});
