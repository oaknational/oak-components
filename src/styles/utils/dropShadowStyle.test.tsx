import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { dropShadowStyle } from "@/styles/utils/dropShadowStyle";

describe("dropShadowStyle", () => {
  test('should correctly handle prop "dropShadow" as string', async () => {
    const StyledComponent = styled.div`
      ${dropShadowStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $dropShadow={"dropShadowStandard"} />,
    );
    expect(getByTestId("test")).toHaveStyle(
      "box-shadow:  0 8px 8px rgba(92,92,92,20%);",
    );
  });
});
