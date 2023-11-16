import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakLoadingSpinner } from "./OakLoadingSpinner";

describe("OakLoadingSpinner", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakLoadingSpinner data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakLoadingSpinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has accessible text", () => {
    const { getByText } = render(<OakLoadingSpinner />);
    expect(getByText("Loading")).toBeInTheDocument();
  });

  it("hides accessible text", () => {
    const { getByDisplayValue } = render(<OakLoadingSpinner />);
    expect(() => getByDisplayValue("accessible text")).toThrow();
  });
});
