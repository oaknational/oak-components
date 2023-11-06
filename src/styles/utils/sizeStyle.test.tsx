import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { sizeStyle } from "@/styles/utils/sizeStyle";

describe("sizeStyle", () => {
  test.each([
    ["$width", "all-spacing-2", "width: 0.5rem;"],
    ["$minWidth", "all-spacing-2", "min-width: 0.5rem;"],
    ["$maxWidth", "all-spacing-2", "max-width: 0.5rem;"],
    ["$height", "all-spacing-2", "height: 0.5rem;"],
    ["$minHeight", "all-spacing-2", "min-height: 0.5rem;"],
    ["$maxHeight", "all-spacing-2", "max-height: 0.5rem;"],
  ])("should correctly handle props", (prop, value, expected) => {
    const props = {
      [prop]: value,
    };

    const StyledComponent = styled.div`
      ${sizeStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" {...props} />,
    );

    expect(getByTestId("test")).toHaveStyle(expected);
  });
});
