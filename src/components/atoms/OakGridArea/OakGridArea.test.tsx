import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { OakGridArea } from "./OakGridArea";

import { OakGrid } from "@/components/atoms/OakGrid";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakGrid", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(
      <OakGrid>
        <OakGridArea data-testid="oak-grid-area" $colSpan={1} />
      </OakGrid>,
    );
    expect(getByTestId("oak-grid-area")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakGrid>
        <OakGridArea $colSpan={1} />
      </OakGrid>,
    );
    expect(container).toMatchSnapshot();
  });
});
