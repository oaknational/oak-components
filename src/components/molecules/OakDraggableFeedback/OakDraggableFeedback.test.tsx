import React from "react";
import "@testing-library/jest-dom";

import { OakDraggableFeedback } from "./OakDraggableFeedback";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakDraggableFeedback, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakDraggableFeedback feedback="correct">Elephant</OakDraggableFeedback>,
    );

    expect(container).toMatchSnapshot();
  });

  it("applies an appropriate alt text for the icon", () => {
    const { queryByAltText, rerender } = renderWithTheme(
      <OakDraggableFeedback feedback="correct">Elephant</OakDraggableFeedback>,
    );

    expect(queryByAltText("correct")).toBeInTheDocument();

    rerender(
      <OakDraggableFeedback feedback="incorrect">
        Elephant
      </OakDraggableFeedback>,
    );

    expect(queryByAltText("incorrect")).toBeInTheDocument();
  });
});
