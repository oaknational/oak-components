import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";

import { colorStyle, ColorProps } from "./colorStyle";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("colorStyle", () => {
  test("should correctly handle prop color set to OakColor", async () => {
    const StyledComponent = styled.div<ColorProps>`
      ${colorStyle}
    `;
    const { getByTestId } = renderWithTheme(
      <StyledComponent data-testid="test" $color="mint" />,
    );

    expect(getByTestId("test")).toHaveStyle("color: #bef2bd");
  });
  test("should correctly handle prop 'color' as array", async () => {
    const StyledComponent = styled.div<ColorProps>`
      ${colorStyle}
    `;
    const { getByTestId } = renderWithTheme(
      <StyledComponent data-testid="test" $color={["mint"]} />,
    );

    expect(getByTestId("test")).toHaveStyle("color: #bef2bd");
  });

  test("should correctly handle prop set to OakUiRole", async () => {
    const StyledComponent = styled.div<ColorProps>`
      ${colorStyle}
    `;
    const { getByTestId } = renderWithTheme(
      <StyledComponent data-testid="test" $color={"text-error"} />,
    );

    expect(getByTestId("test")).toHaveStyle("color: #dd0035");
  });
});
