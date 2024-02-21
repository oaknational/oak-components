import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakFlex } from "./OakFlex";

describe("Component OakBox", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakFlex data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakFlex />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
