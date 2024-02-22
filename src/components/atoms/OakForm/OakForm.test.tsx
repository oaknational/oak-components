import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakForm } from "./OakForm";

describe("Component OakBox", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakForm data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
