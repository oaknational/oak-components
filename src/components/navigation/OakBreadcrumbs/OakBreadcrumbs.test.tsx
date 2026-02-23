import React from "react";
import "@testing-library/jest-dom";

import { OakBreadcrumbs } from "./OakBreadcrumbs";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakBreadcrumbs", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakBreadcrumbs
        breadcrumbs={[
          { text: "Test 1", href: "#test1" },
          { text: "Test 2", href: "#test2" },
          { text: "Test 3", href: "#test3" },
        ]}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
