import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakCollapsibleContent } from "./OakCollapsibleContent";

import { oakDefaultTheme } from "@/styles";

describe(OakCollapsibleContent, () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakCollapsibleContent isOpen>Content goes here</OakCollapsibleContent>
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
