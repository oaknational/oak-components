import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import React from "react";

import { OakDroppable } from "./OakDroppable";

import { oakDefaultTheme } from "@/styles";

describe("OakDroppable", () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakDroppable>Children</OakDroppable>
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
