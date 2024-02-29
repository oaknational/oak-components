import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import React from "react";

import { OakSortableSlot } from "./OakSortableSlot";

import { oakDefaultTheme } from "@/styles";

describe(OakSortableSlot, () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakSortableSlot>Children</OakSortableSlot>
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
