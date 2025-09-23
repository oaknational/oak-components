import React from "react";
import "@testing-library/jest-dom";

import { OakJauntyAngleLabel } from "./OakJauntyAngleLabel";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakjauntyAngleLabel", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakJauntyAngleLabel label="Select one answer" />,
    );
    expect(container).toMatchSnapshot();
  });
});
