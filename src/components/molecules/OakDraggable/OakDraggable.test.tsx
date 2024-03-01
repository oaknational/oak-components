import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import React from "react";

import { OakDraggable } from "./OakDraggable";

import { oakDefaultTheme } from "@/styles";

describe("OakDraggable", () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakDraggable>Elephant</OakDraggable>
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
