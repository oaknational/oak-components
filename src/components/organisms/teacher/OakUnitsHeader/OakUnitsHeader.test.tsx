import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakUnitsHeader } from "./OakUnitsHeader";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const props = {
  isLegacy: false,
  subject: "maths",
};

describe("OakUnitsHeader", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitsHeader data-testid="test" {...props} />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakUnitsHeader {...props}></OakUnitsHeader>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
