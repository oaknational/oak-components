import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { OakUL } from "./OakUL";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("Component OakUL", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakUL data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakUL />);
    expect(container).toMatchSnapshot();
  });
});
