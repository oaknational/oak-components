import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";

import { colorStyle, ColorStyleProps } from "@/styles/utils/colorStyle";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("colorStyle", () => {
  test("should correctly handle prop color set to OakColor", async () => {
    const StyledComponent = styled.div<ColorStyleProps>`
      ${colorStyle}
    `;
    const { getByTestId } = renderWithTheme(
      <StyledComponent data-testid="test" $color="text-subdued" />,
    );

    expect(getByTestId("test")).toHaveStyle("color: #575757");
  });
  test("should correctly handle prop 'color' as array", async () => {
    const StyledComponent = styled.div<ColorStyleProps>`
      ${colorStyle}
    `;
    const { getByTestId } = renderWithTheme(
      <StyledComponent data-testid="test" $color={["text-subdued"]} />,
    );

    expect(getByTestId("test")).toHaveStyle("color: #575757");
  });

  test("should correctly handle prop 'color' set to OakUiRole", async () => {
    const StyledComponent = styled.div<ColorStyleProps>`
      ${colorStyle}
    `;
    const { getByTestId } = renderWithTheme(
      <StyledComponent data-testid="test" $color={"text-error"} />,
    );

    expect(getByTestId("test")).toHaveStyle("color: #dd0035");
  });

  test("should correctly handle prop 'background' set to OakUiRole", async () => {
    const StyledComponent = styled.div<ColorStyleProps>`
      ${colorStyle}
    `;
    const { getByTestId } = renderWithTheme(
      <StyledComponent data-testid="test" $background={"text-error"} />,
    );

    expect(getByTestId("test")).toHaveStyle("background: #dd0035");
  });

  test("should correctly handle setting both background and color", async () => {
    const StyledComponent = styled.div<ColorStyleProps>`
      ${colorStyle}
    `;
    const { getByTestId } = renderWithTheme(
      <StyledComponent
        data-testid="test"
        $background={"bg-decorative1-main"}
        $color={"text-primary"}
      />,
    );

    expect(getByTestId("test")).toHaveStyle(
      "background: #bef2bd; color: #222222",
    );
  });
});
