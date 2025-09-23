import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { OakMaxWidth } from "./OakMaxWidth";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakMaxWidth", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakMaxWidth data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakMaxWidth />);
    expect(container).toMatchSnapshot();
  });

  it("has has max-width: 80rem when screen width is large", () => {
    const { getByTestId } = render(
      <OakMaxWidth data-testid="test" $maxWidth={"all-spacing-24"} />,
    );
    expect(getByTestId("test")).toHaveStyle("max-width: 80rem");
  });
});
