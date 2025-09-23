import React from "react";
import "@testing-library/jest-dom";

import { OakHintButton } from "./OakHintButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakHintButton", () => {
  it("renders", () => {
    const { getByRole } = renderWithTheme(<OakHintButton isOpen={false} />);

    expect(getByRole("button")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakHintButton
        isOpen={false}
        buttonProps={{ "aria-describedby": "hint-tooltip" }}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
