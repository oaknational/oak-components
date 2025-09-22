import React from "react";

import { InternalDroppableHoldingPen } from "./InternalDroppableHoldingPen";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { installMockResizeObserver } from "@/test-helpers";

installMockResizeObserver();

describe("InternalDroppableHoldingPen", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(<InternalDroppableHoldingPen />);

    expect(container).toMatchSnapshot();
  });
});
