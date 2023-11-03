import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { dropShadowStyle } from "./dropShadowStyle";

describe("dropShadowStyle", () => {
  test('should correctly handle prop "dropShadow" as string', async () => {
    const StyledComponent = styled.div`
      ${dropShadowStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent
        data-testid="test"
        $dropShadow={"interactiveCardHover"}
      />,
    );
    expect(getByTestId("test")).toHaveStyle(
      "box-shadow:  3px 3px 8px rgba(0,0,0,70%);",
    );
  });
});
