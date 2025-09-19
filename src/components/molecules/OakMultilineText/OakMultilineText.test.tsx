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
        disabled={false}
        placeholder="Start typing answer..."
        charLimit={200}
        singleLine={false}
        allowCarriageReturn={true}
        label=""
      />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakMultilineText
        disabled={false}
        placeholder="Start typing answer..."
        charLimit={200}
        singleLine={false}
        allowCarriageReturn={true}
        label=""
      ></OakMultilineText>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
