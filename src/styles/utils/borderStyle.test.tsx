import React from "react";
import styled from "styled-components";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { borderStyle, parseBorder, parseRadius } from "./borderStyle";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("borderStyle", () => {
  test("should correctly handle prop 'borderStyle' as string", async () => {
    const StyledComponent = styled.div`
      ${borderStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $ba={"border-width-1"} />,
    );
    expect(getByTestId("test")).toHaveStyle("border: 0.063rem solid;");
  });
  test("should correctly handle prop 'bv'", async () => {
    const StyledComponent = styled.div`
      ${borderStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $bv={"border-width-1"} />,
    );
    expect(getByTestId("test")).toHaveStyle("border-top: 0.063rem solid;");
    expect(getByTestId("test")).toHaveStyle("border-bottom: 0.063rem solid;");
  });
  test("should correctly handle prop 'bh'", async () => {
    const StyledComponent = styled.div`
      ${borderStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $bh={"border-width-1"} />,
    );
    expect(getByTestId("test")).toHaveStyle("border-left: 0.063rem solid;");
    expect(getByTestId("test")).toHaveStyle("border-right: 0.063rem solid;");
  });
  test.each([
    ["$ba", "border-width-1", "border: 0.063rem solid;"],
    [
      "$bv",
      "border-width-1",
      "border-top: 0.063rem solid; border-bottom: 0.063rem solid;",
    ],
    [
      "$bh",
      "border-width-1",
      "border-left: 0.063rem solid; border-right: 0.063rem solid;",
    ],
    ["$br", "border-width-1", "border-right: 0.063rem solid"],
    ["$bb", "border-width-1", "border-bottom: 0.063rem solid"],
    ["$bl", "border-width-1", "border-left: 0.063rem solid"],
    ["$bt", "border-width-1", "border-top: 0.063rem solid"],
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
        $ba={"border-width-1"}
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
      <StyledComponent data-testid="test" $borderRadius={"border-radius-1"} />,
    );

    expect(getByTestId("test")).toHaveStyle("border-radius: 0.625rem");
  });
  test("should correctly handle prop 'borderStyle' as string", async () => {
    const StyledComponent = styled.div`
      ${borderStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $borderStyle={"dashed"} />,
    );
    expect(getByTestId("test")).toHaveStyle("border-style: dashed");
  });
});
describe("parseBorder", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseBorder(null)).toBeUndefined();
    expect(parseBorder()).toBeUndefined();
  });
});
describe("parseRadius", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseRadius(null)).toBeUndefined();
    expect(parseRadius()).toBeUndefined();
  });
});
