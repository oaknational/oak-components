import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { OakAspectRatio } from "./OakAspectRatio";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakAspectRatio", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <OakAspectRatio data-testid="test" ratio={"16:9"} />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakAspectRatio ratio={"16:9"} />);
    expect(container).toMatchSnapshot();
  });
  it("parse ratio to percentage", () => {
    const { getByTestId } = render(
      <OakAspectRatio data-testid="test" ratio={"16:9"} />,
    );
    expect(getByTestId("test")).toHaveStyle("padding-top: 56.25%");
  });
});
