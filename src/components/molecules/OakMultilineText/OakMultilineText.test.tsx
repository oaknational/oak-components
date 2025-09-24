import React from "react";
import "@testing-library/jest-dom";

import { OakMultilineText } from "./OakMultilineText";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakMultilineText", () => {
  it("renders", () => {
    const { getByPlaceholderText } = renderWithTheme(
      <OakMultilineText
        charLimit={200}
        $height="all-spacing-10"
        placeholder="Start typing answer..."
        disabled={false}
      />,
    );
    expect(getByPlaceholderText("Start typing answer...")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakMultilineText
        charLimit={200}
        $height="all-spacing-10"
        disabled={false}
      ></OakMultilineText>,
    );
    expect(container).toMatchSnapshot();
  });
});
