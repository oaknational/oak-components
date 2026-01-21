import React from "react";

import { OakFocusIndicator } from "./OakFocusIndicator";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("FocusIndicator", () => {
  test("render", async () => {
    const { baseElement } = renderWithTheme(<OakFocusIndicator />);

    expect(baseElement).toMatchSnapshot();
  });
});
