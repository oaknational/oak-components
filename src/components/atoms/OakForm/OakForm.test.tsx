import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { OakForm } from "./OakForm";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("Component OakBox", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakForm data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakForm />);
    expect(container).toMatchSnapshot();
  });
});
