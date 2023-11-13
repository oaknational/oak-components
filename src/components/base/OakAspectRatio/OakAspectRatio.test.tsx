import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakAspectRatio } from "./OakAspectRatio";

describe("OakAspectRatio", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <OakAspectRatio data-testid="test" ratio={"16:9"} />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakAspectRatio ratio={"16:9"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("parse ratio to percentage", () => {
    const { getByTestId } = render(
      <OakAspectRatio data-testid="test" ratio={"16:9"} />,
    );
    expect(getByTestId("test")).toHaveStyle("padding-top: 56.25%");
  });
});
