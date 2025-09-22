import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { OakGrid } from "./OakGrid";

import { OakGridArea } from "@/components/atoms/OakGridArea";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakGrid", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(
      <OakGrid data-testid="oak-grid" $cg={"all-spacing-1"} />,
    );
    expect(getByTestId("oak-grid")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakGrid />);
    expect(container).toMatchSnapshot();
  });

  it("is a grid", () => {
    const { getByTestId } = render(<OakGrid data-testid="oak-grid" />);
    expect(getByTestId("oak-grid")).toHaveStyle("display: grid;");
  });

  it("has 12 columns", () => {
    const { getByTestId } = render(<OakGrid data-testid="oak-grid" />);
    expect(getByTestId("oak-grid")).toHaveStyle(
      "grid-template-columns: repeat(12,1fr);",
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
