import React from "react";
import "@testing-library/jest-dom";

import { InternalStyledSvg } from "./InternalStyledSvg";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("InternalStyledSvg", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <InternalStyledSvg
        $fill="amber30"
        $stroke="amber50"
        $strokeWidth="border-solid-m"
      >
        <path d="M0 1 2 3Z" />
      </InternalStyledSvg>,
    );

    expect(container).toMatchSnapshot();
  });
});
