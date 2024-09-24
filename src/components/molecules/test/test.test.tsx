import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { CopyPasteThisComponent } from "./testComp";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("CopyPasteThisComponent", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <CopyPasteThisComponent data-testid="test" />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <CopyPasteThisComponent>Click Me</CopyPasteThisComponent>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
