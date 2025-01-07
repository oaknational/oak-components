import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakSvg } from "./OakSvg";

import { oakDefaultTheme } from "@/styles";

describe("OakSvg", () => {
  it("renders", () => {
    const { container } = render(<OakSvg name="header-underline" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakSvg name="header-underline" />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
