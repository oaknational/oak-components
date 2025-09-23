import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakMultilineText } from "./OakMultilineText";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakMultilineText", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakMultilineText
        data-testid="test"
        $charLimit={200}
        $height="all-spacing-10"
      />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakMultilineText
        $charLimit={200}
        $height="all-spacing-10"
      ></OakMultilineText>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
