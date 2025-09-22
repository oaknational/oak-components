import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { OakFlex } from "./OakFlex";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("Component OakBox", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakFlex data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakFlex />);
    expect(container).toMatchSnapshot();
  });
});
