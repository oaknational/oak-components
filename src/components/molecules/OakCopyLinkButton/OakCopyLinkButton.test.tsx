import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakCopyLinkButton } from "./OakCopyLinkButton";

import { oakDefaultTheme } from "@/styles";

describe(OakCopyLinkButton, () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakCopyLinkButton href={"/copy-this-link"} />
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
