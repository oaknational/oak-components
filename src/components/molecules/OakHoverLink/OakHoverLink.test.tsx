import React from "react";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakHoverLink } from "./OakHoverLink";

import { oakDefaultTheme } from "@/styles";

describe("OakHoverLink", () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakHoverLink>Content goes here</OakHoverLink>
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
