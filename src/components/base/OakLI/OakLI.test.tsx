import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import OakLI from "./OakLI";

describe("Component OakLI", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakLI data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakLI />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
