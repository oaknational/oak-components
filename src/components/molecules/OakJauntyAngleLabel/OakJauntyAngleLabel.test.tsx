import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakJauntyAngleLabel } from "./OakJauntyAngleLabel";

import { oakDefaultTheme } from "@/styles";

describe("OakjauntyAngleLabel", () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakJauntyAngleLabel type="starter" label="Select one answer" />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
