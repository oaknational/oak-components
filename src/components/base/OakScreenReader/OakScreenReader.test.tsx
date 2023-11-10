import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakScreenReader } from "./OakScreenReader";

describe("OakScreenReader", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakScreenReader data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakScreenReader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
