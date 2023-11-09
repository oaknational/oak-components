import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import OakLabel from "./OakLabel";

describe("Component OakLabel", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakLabel data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakLabel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
