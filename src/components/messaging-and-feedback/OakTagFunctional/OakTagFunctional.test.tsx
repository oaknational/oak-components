import React from "react";
import "@testing-library/jest-dom";

import { OakTagFunctional } from "./OakTagFunctional";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakTagFunctional", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakTagFunctional label="Select one answer" />,
    );
    expect(container).toMatchSnapshot();
  });
});
