import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakBulletList } from "./OakBulletList";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakBulletList", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakBulletList
        data-testid="test"
        listItems={["first", "second", "third"]}
      />,
    );

    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakBulletList
        data-testid="test"
        listItems={["first", "second", "third"]}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
