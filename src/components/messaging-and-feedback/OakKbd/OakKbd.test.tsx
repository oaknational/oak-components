import React from "react";
import "@testing-library/jest-dom";

import { OakKbd } from "./OakKbd";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakKbd, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakKbd>Tab</OakKbd>);

    expect(container).toMatchSnapshot();
  });
});
