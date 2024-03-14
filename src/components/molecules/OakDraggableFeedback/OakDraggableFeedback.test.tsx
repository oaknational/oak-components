import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import React from "react";
import "@testing-library/jest-dom";

import { OakDraggableFeedback } from "./OakDraggableFeedback";

import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakDraggableFeedback, () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakDraggableFeedback feedback="correct">Elephant</OakDraggableFeedback>
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
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
