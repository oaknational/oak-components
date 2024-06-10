import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakFieldset } from "./OakFieldset";

describe("Component OakFieldset", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakFieldset data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakFieldset />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
