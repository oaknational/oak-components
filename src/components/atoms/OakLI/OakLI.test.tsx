import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { OakLI } from "./OakLI";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("Component OakLI", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakLI data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakLI />);
    expect(container).toMatchSnapshot();
  });
});
