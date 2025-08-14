import React from "react";
import styled from "styled-components";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { borderStyle, BorderStyleProps } from "@/styles/utils/borderStyle";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("borderStyle", () => {
  test("should correctly handle prop 'borderStyle' as string", async () => {
    const StyledComponent = styled.div<BorderStyleProps>`
      ${borderStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $ba={"border-solid-s"} />,
    );
    expect(getByTestId("test")).toHaveStyle("border: 0.063rem solid;");
  });
  test("should correctly handle prop 'bv'", async () => {
    const StyledComponent = styled.div<BorderStyleProps>`
      ${borderStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $bv={"border-solid-s"} />,
    );
    expect(getByTestId("test")).toHaveStyle("border-top: 0.063rem solid;");
    expect(getByTestId("test")).toHaveStyle("border-bottom: 0.063rem solid;");
  });
  test("should correctly handle prop 'bh'", async () => {
    const StyledComponent = styled.div<BorderStyleProps>`
      ${borderStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $bh={"border-solid-s"} />,
    );
    expect(getByTestId("test")).toHaveStyle("border-left: 0.063rem solid;");
    expect(getByTestId("test")).toHaveStyle("border-right: 0.063rem solid;");
  });
  test.each([
    ["$ba", "border-solid-s", "border: 0.063rem solid;"],
    [
      "$bv",
      "border-solid-s",
      "border-top: 0.063rem solid; border-bottom: 0.063rem solid;",
    ],
    [
      "$bh",
      "border-solid-s",
      "border-left: 0.063rem solid; border-right: 0.063rem solid;",
    ],
    ["$br", "border-solid-s", "border-right: 0.063rem solid"],
    ["$bb", "border-solid-s", "border-bottom: 0.063rem solid"],
    ["$bl", "border-solid-s", "border-left: 0.063rem solid"],
    ["$bt", "border-solid-s", "border-top: 0.063rem solid"],
    ["$borderStyle", "dashed", "border-style: dashed;"],
  ])("should correctly handle props", (prop, value, expected) => {
    const props = {
      [prop]: value,
    };

    const StyledComponent = styled.div<BorderStyleProps>`
      ${borderStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" {...props} />,
    );

    expect(getByTestId("test")).toHaveStyle(expected);
  });
  test("should correctly handle prop 'borderColor'", async () => {
    const StyledComponent = styled.div<BorderStyleProps>`
      ${borderStyle}
    `;
    const { getByTestId } = renderWithTheme(
      <StyledComponent
        data-testid="test"
        $borderColor={"border-primary"}
        $ba={"border-solid-s"}
      />,
    );

    expect(getByTestId("test")).toHaveStyle("border: 0.063rem solid");
    expect(getByTestId("test")).toHaveStyle("border-color: #222222");
  });
  test("should correctly handle prop 'borderRadius'", async () => {
    const StyledComponent = styled.div<BorderStyleProps>`
      ${borderStyle}
    `;
    const { getByTestId } = renderWithTheme(
      <StyledComponent data-testid="test" $borderRadius={"border-radius-s"} />,
    );

    expect(getByTestId("test")).toHaveStyle("border-radius: 0.25rem");
  });
});
