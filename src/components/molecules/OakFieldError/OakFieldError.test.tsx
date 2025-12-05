import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { OakFieldError } from "./OakFieldError";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakFieldError", () => {
  it("renders", () => {
    const { getByText } = renderWithTheme(
      <OakFieldError> Oak Field Error</OakFieldError>,
    );
    expect(getByText("Oak Field Error")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakFieldError />);
    expect(container).toMatchSnapshot();
  });

  it("renders nothing when there's no children", () => {
    const { container } = render(<OakFieldError />);
    expect(container).toBeEmptyDOMElement();
  });
});
