import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakUL } from "./OakUL";

describe("Component OakUL", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakUL data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakUL />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
