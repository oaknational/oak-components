import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { sizeStyle } from "@/styles/utils/sizeStyle";

describe("sizeStyle", () => {
  test.each([
    ["$width", "spacing-8", "width: 0.5rem;"],
    ["$minWidth", "spacing-8", "min-width: 0.5rem;"],
    ["$maxWidth", "spacing-8", "max-width: 0.5rem;"],
    ["$height", "spacing-8", "height: 0.5rem;"],
    ["$minHeight", "spacing-8", "min-height: 0.5rem;"],
    ["$maxHeight", "spacing-8", "max-height: 0.5rem;"],
    ["$aspectRatio", "16 / 9", "aspect-ratio: 16 / 9;"],
    ["$boxSizing", "content-box", "box-sizing: content-box;"],
  ])("should correctly handle %p prop", (prop, value, expected) => {
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
