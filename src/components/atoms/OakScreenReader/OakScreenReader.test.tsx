import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { OakScreenReader } from "./OakScreenReader";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakScreenReader", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakScreenReader data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakScreenReader />);
    expect(container).toMatchSnapshot();
  });

  it("the child text is hidden", () => {
    const { getByDisplayValue } = render(
      <OakScreenReader>accessible text</OakScreenReader>,
    );
    expect(() => getByDisplayValue("accessible text")).toThrow();
  });

  it("the child text is accessible to screen reader", () => {
    const { getByText } = render(
      <OakScreenReader>accessible text</OakScreenReader>,
    );
    expect(getByText("accessible text")).toBeInTheDocument();
  });
});
