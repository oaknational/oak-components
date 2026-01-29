import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";

import { colorFilterStyle } from "./colorFilterStyle";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("colorFilterStyle", () => {
  it("should correctly handle prop 'filter' set to OakUiRoleToken", () => {
    const StyledComponent = styled.div`
      ${colorFilterStyle}
    `;
    const { getByTestId } = renderWithTheme(
      <StyledComponent data-testid="test" $colorFilter="bg-error" />,
    );
    expect(getByTestId("test")).toHaveStyle(
      "filter: invert(13%) sepia(78%) saturate(5255%) hue-rotate(337deg) brightness(88%) contrast(111%)",
    );
  });
});
