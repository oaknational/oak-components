import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { InternalStyledSvg } from "./InternalStyledSvg";

describe("InternalStyledSvg", () => {
  it("matches snapshot", () => {
    const tree = create(
      <InternalStyledSvg
        $fill="amber30"
        $stroke="amber50"
        $strokeWidth="border-solid-m"
      >
        <path d="M0 1 2 3Z" />
      </InternalStyledSvg>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
