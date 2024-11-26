import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakSignLanguageButton } from "./OakSignLanguageButton";

import { oakDefaultTheme } from "@/styles";

describe(OakSignLanguageButton, () => {
  it("matches snapshot", () => {
    const onClick = jest.fn();

    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakSignLanguageButton onClick={onClick} />
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
