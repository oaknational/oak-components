import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { OakLoadingSpinner } from "./OakLoadingSpinner";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakLoadingSpinner", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakLoadingSpinner data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakLoadingSpinner />);
    expect(container).toMatchSnapshot();
  });

  it("has accessible text", () => {
    const { getByText } = render(<OakLoadingSpinner />);
    expect(getByText("Loading")).toBeInTheDocument();
  });

  it("hides accessible text", () => {
    const { getByDisplayValue } = render(<OakLoadingSpinner />);
    expect(() => getByDisplayValue("accessible text")).toThrow();
  });

  it("can have a delayed appearance", () => {
    const { getByTestId } = render(
      <OakLoadingSpinner data-testid="loader" $delay={300} />,
    );

    expect(getByTestId("loader")).toHaveStyleRule("animation-delay", "0.3s");
  });
});
