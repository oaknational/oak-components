import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakGrid } from "./OakGrid";

import { OakGridArea } from "@/components/atoms/OakGridArea";

describe("OakGrid", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(
      <OakGrid data-testid="oak-grid" $cg={"all-spacing-1"} />,
    );
    expect(getByTestId("oak-grid")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakGrid />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("is a grid", () => {
    const { getByTestId } = render(<OakGrid data-testid="oak-grid" />);
    expect(getByTestId("oak-grid")).toHaveStyle("display: grid;");
  });

  it("has 12 columns", () => {
    const { getByTestId } = render(<OakGrid data-testid="oak-grid" />);
    expect(getByTestId("oak-grid")).toHaveStyle(
      "grid-template-columns: repeat(12, 1fr);",
    );
  });

  it("adjusts column gap via $cg", () => {
    const { getByTestId } = render(
      <OakGrid data-testid="oak-grid" $cg={"all-spacing-1"}>
        <OakGridArea $colSpan={1} />
      </OakGrid>,
    );
    expect(getByTestId("oak-grid")).toHaveStyle("column-gap: 0.25rem;");
  });
});
