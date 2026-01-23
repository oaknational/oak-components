import React from "react";
import "@testing-library/jest-dom";

import { OakPromoTag } from "./OakPromoTag";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakPromoTag, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakPromoTag />);

    expect(container).toMatchSnapshot();
  });
});
