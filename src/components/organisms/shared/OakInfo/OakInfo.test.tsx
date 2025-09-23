import React from "react";
import "@testing-library/jest-dom";

import { OakInfo } from "./OakInfo";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import {
  installMockIntersectionObserver,
  installMockResizeObserver,
} from "@/test-helpers";

installMockIntersectionObserver();
installMockResizeObserver();

describe("OakInfo", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakInfo
        hint="The answer is right in front of your eyes"
        id="info-tooltip"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
