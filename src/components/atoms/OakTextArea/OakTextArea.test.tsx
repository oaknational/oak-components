import React from "react";
import "@testing-library/jest-dom";

import { OakTextArea } from "./OakTextArea";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakTextArea", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakTextArea
        data-testid="test"
        disabled={false}
        placeholder="Start typing answer..."
      />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakTextArea />);
    expect(container).toMatchSnapshot();
  });
});
