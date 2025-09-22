import React from "react";
import "@testing-library/jest-dom";

import { OakQuizCounter } from "./OakQuizCounter";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakQuizCounter, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakQuizCounter counter={5} total={6} />,
    );

    expect(container).toMatchSnapshot();
  });
});
