import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { InternalLink } from "./InternalLink";

import { oakDefaultTheme } from "@/styles";

describe("InternalLink", () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <InternalLink
          color="text-link-active"
          hoverColor="text-link-hover"
          activeColor="text-link-pressed"
          disabledColor="text-disabled"
          visitedColor="text-link-visited"
        >
          Content goes here
        </InternalLink>
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
