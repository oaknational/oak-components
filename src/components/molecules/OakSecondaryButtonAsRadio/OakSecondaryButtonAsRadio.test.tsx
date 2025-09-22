import React from "react";
import "@testing-library/jest-dom";

import { OakSecondaryButtonAsRadio } from "./OakSecondaryButtonAsRadio";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakSecondaryButtonAsRadio", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakSecondaryButtonAsRadio value="1">
        Display Value
      </OakSecondaryButtonAsRadio>,
    );
    expect(container).toMatchSnapshot();
  });
});
