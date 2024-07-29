import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakQuizResultItem } from "./OakQuizResultItem";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakQuizResultItem", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakQuizResultItem data-testid="test" />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakQuizResultItem>Click Me</OakQuizResultItem>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
