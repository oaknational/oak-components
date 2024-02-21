import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakBox } from "./OakBox";

describe("Component OakBox", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakBox data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
