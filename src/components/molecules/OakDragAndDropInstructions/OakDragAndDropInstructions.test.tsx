import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakDragAndDropInstructions } from "./OakDragAndDropInstructions";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe(OakDragAndDropInstructions, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakDragAndDropInstructions />
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
