import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { InternalCardWithBackgroundElement } from "./InternalCardWithBackgroundElement";

describe("InternalStyledSvg", () => {
  it("matches snapshot", () => {
    const tree = create(
      <InternalCardWithBackgroundElement backgroundElement={<svg />}>
        Card contents!
      </InternalCardWithBackgroundElement>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
