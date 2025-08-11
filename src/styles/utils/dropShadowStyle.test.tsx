import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import {
  dropShadowStyle,
  DropShadowStyleProps,
} from "@/styles/utils/dropShadowStyle";

describe("dropShadowStyle", () => {
  test('should correctly handle prop "dropShadow" as string', async () => {
    const StyledComponent = styled.div<DropShadowStyleProps>`
      ${dropShadowStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent
        data-testid="test"
        $dropShadow={"drop-shadow-standard"}
      />,
    );
    expect(getByTestId("test")).toHaveStyle(
      "box-shadow:  0 0.5rem 0.5rem rgba(92,92,92,20%);",
    );
  });
});
