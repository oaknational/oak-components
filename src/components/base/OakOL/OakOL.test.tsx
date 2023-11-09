import React from "react";
import "@testing-library/jest-dom";
import renderWithTheme from "@/test-helpers/renderWithTheme";
import { create } from "react-test-renderer";

import OakOL from "./OakOL";

describe("Component OakOL", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(<OakOL data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });
  it("matches snapshot", () => {
    const tree = create(<OakOL />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
