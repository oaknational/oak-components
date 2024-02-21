import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { OakThemeProvider } from "./OakThemeProvider";

import { oakDefaultTheme } from "@/styles";

describe("OakSpan", () => {
  it("renders children", () => {
    const { getByTestId } = render(
      <OakThemeProvider theme={oakDefaultTheme}>
        <div data-testid="test">Test</div>
      </OakThemeProvider>,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });
});
