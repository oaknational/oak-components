import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { opacityStyle, OpacityStyleProps } from "@/styles/utils/opacityStyle";
import { OakOpacityToken } from "@/styles/theme";

describe("opacityStyle", () => {
  test.each([
    ["semi-opaque", "opacity: 0.5;"],
    ["semi-transparent", "opacity: 0.25"],
  ])("should correctly handle props", (value, expected) => {
    const props = {
      $opacity: value as OakOpacityToken,
    };

    const StyledComponent = styled.div<OpacityStyleProps>`
      ${opacityStyle}
    `;

    const { getByTestId } = render(
      <StyledComponent data-testid="test" {...props} />,
    );

    expect(getByTestId("test")).toHaveStyle(expected);
  });
});
