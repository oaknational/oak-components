import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakSecondaryLink } from "./OakSecondaryLink";

import { oakDefaultTheme } from "@/styles";

describe("OakSecondaryLink", () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakSecondaryLink>Content goes here</OakSecondaryLink>
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
