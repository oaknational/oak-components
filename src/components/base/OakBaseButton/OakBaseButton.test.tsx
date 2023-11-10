import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakBaseButton } from "./OakBaseButton";

describe("OakBaseButton", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakBaseButton data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakBaseButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
