import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import React from "react";

import { OakSortableItem } from "./OakSortableItem";

import { oakDefaultTheme } from "@/styles";

describe("OakSortableItem", () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakSortableItem>Elephant</OakSortableItem>
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
