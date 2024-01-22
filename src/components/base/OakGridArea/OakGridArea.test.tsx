import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakGridArea } from "./OakGridArea";

import { OakGrid } from "@/components/base/OakGrid";

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
    const tree = create(
      <OakGrid>
        <OakGridArea $colSpan={1} />
      </OakGrid>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
