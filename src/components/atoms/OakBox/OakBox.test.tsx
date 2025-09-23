import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { OakBox } from "./OakBox";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("Component OakBox", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakBox data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakBox />);
    expect(container).toMatchSnapshot();
  });
});
