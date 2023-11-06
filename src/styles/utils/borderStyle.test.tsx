import React from "react";
import styled from "styled-components";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { borderStyle } from "./borderStyle";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("borderStyle", () => {
  test("should correctly handle prop 'borderStyle' as string", async () => {
    const StyledComponent = styled.div`
      ${borderStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $ba={"solid-S"} />,
    );
    expect(getByTestId("test")).toHaveStyle("border: 0.063rem solid;");
  });
  test("should correctly handle prop 'bv'", async () => {
    const StyledComponent = styled.div`
      ${borderStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $bv={"solid-S"} />,
    );
    expect(getByTestId("test")).toHaveStyle("border-top: 0.063rem solid;");
    expect(getByTestId("test")).toHaveStyle("border-bottom: 0.063rem solid;");
  });
  test("should correctly handle prop 'bh'", async () => {
    const StyledComponent = styled.div`
      ${borderStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $bh={"solid-S"} />,
    );
    expect(getByTestId("test")).toHaveStyle("border-left: 0.063rem solid;");
    expect(getByTestId("test")).toHaveStyle("border-right: 0.063rem solid;");
  });
  test.each([
    ["$ba", "solid-S", "border: 0.063rem solid;"],
    [
      "$bv",
      "solid-S",
      "border-top: 0.063rem solid; border-bottom: 0.063rem solid;",
    ],
    [
      "$bh",
      "solid-S",
      "border-left: 0.063rem solid; border-right: 0.063rem solid;",
    ],
    ["$br", "solid-S", "border-right: 0.063rem solid"],
    ["$bb", "solid-S", "border-bottom: 0.063rem solid"],
    ["$bl", "solid-S", "border-left: 0.063rem solid"],
    ["$bt", "solid-S", "border-top: 0.063rem solid"],
  ])("should correctly handle props", (prop, value, expected) => {
    const props = {
      [prop]: value,
    };

    const StyledComponent = styled.div`
      ${borderStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" {...props} />,
    );

    expect(getByTestId("test")).toHaveStyle(expected);
  });
  test("should correctly handle prop 'borderColor'", async () => {
    const StyledComponent = styled.div`
      ${borderStyle}
    `;
    const { getByTestId } = renderWithTheme(
      <StyledComponent
        data-testid="test"
        $borderColor={"border-primary"}
        $ba={"solid-S"}
      />,
    );

    expect(getByTestId("test")).toHaveStyle("border: 0.063rem solid");
    expect(getByTestId("test")).toHaveStyle("border-color: #222222");
  });
  test("should correctly handle prop 'borderRadius'", async () => {
    const StyledComponent = styled.div`
      ${borderStyle}
    `;
    const { getByTestId } = renderWithTheme(
      <StyledComponent data-testid="test" $borderRadius={"Border-radius-S"} />,
    );

    expect(getByTestId("test")).toHaveStyle("border-radius: 0.25rem");
  });
});
