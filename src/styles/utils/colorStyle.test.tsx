import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";

import { colorStyle, ColorProps } from "@/styles/utils/colorStyle";

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

  test("should correctly handle prop 'color' set to OakUiRole", async () => {
    const StyledComponent = styled.div<ColorProps>`
      ${colorStyle}
    `;
    const { getByTestId } = renderWithTheme(
      <StyledComponent data-testid="test" $color={"text-error"} />,
    );

    expect(getByTestId("test")).toHaveStyle("color: #dd0035");
  });

  test("should correctly handle prop 'background' set to OakUiRole", async () => {
    const StyledComponent = styled.div<ColorProps>`
      ${colorStyle}
    `;
    const { getByTestId } = renderWithTheme(
      <StyledComponent data-testid="test" $background={"text-error"} />,
    );

    expect(getByTestId("test")).toHaveStyle("background: #dd0035");
  });

  test("should correctly handle setting both background and color", async () => {
    const StyledComponent = styled.div<ColorProps>`
      ${colorStyle}
    `;
    const { getByTestId } = renderWithTheme(
      <StyledComponent
        data-testid="test"
        $background={"mint"}
        $color={"black"}
      />,
    );

    expect(getByTestId("test")).toHaveStyle(
      "background: #bef2bd; color: #222222",
    );
  });
});
