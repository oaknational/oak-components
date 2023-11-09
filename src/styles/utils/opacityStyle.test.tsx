import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { opacityStyle } from "@/styles/utils/opacityStyle";
import { OakAllOpacity } from "@/styles/theme";

describe("opacityStyle", () => {
  test.each([
    ["semi-opaque", "opacity: 0.5;"],
    ["semi-transparent", "opacity: 0.25"],
  ])("should correctly handle props", (value, expected) => {
    const props = {
      $opacity: value as OakAllOpacity,
    };

    const StyledComponent = styled.div`
      ${opacityStyle}
    `;

    const { getByTestId } = render(
      <StyledComponent data-testid="test" {...props} />,
    );

    expect(getByTestId("test")).toHaveStyle(expected);
  });
});
