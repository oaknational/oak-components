import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { OakLabel } from "./OakLabel";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("Component OakLabel", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakLabel data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakLabel />);
    expect(container).toMatchSnapshot();
  });
});
