import React from "react";
import "@testing-library/jest-dom";

import { OakInfoButton } from "./OakInfoButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakInfoButton, () => {
  it("matches snapshot", () => {
    const handleClick = () => jest.fn();
    const { container } = renderWithTheme(
      <OakInfoButton
        isOpen={false}
        isLoading={false}
        onClick={handleClick}
        buttonProps={{ "aria-describedby": "info-tooltip" }}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
