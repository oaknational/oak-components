import React from "react";
import "@testing-library/jest-dom";

import { OakDragAndDropInstructions } from "./OakDragAndDropInstructions";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakDragAndDropInstructions, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakDragAndDropInstructions />);

    expect(container).toMatchSnapshot();
  });
});
