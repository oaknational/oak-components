import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakMaxWidth } from "./OakMaxWidth";

describe("OakMaxWidth", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakMaxWidth data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakMaxWidth />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("has has max-width when screen width is large", () => {
    const { getByTestId } = render(<OakMaxWidth data-testid="test" />);
    expect(getByTestId("test")).toHaveStyle("max-width: 30rem");
  });
});
