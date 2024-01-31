import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakPromoTag } from "./OakPromoTag";

import { oakDefaultTheme } from "@/styles";

describe(OakPromoTag, () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakPromoTag />
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
