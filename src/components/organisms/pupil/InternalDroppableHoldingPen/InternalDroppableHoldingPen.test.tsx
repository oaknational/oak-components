import { ThemeProvider } from "styled-components";
import { create } from "react-test-renderer";
import React from "react";

import { InternalDroppableHoldingPen } from "./InternalDroppableHoldingPen";

import { oakDefaultTheme } from "@/styles";

describe("InternalDroppableHoldingPen", () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <InternalDroppableHoldingPen />
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
