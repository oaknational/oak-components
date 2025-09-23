import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakTextArea } from "./OakTextArea";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakTextArea", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakTextArea
        data-testid="test"
        disabled={false}
        placeholder="Start typing answer..."
      />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakTextArea
        disabled={false}
        placeholder="Start typing answer..."
      ></OakTextArea>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
