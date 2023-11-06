import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { marginStyle, paddingStyle } from "@/styles/utils/spacingStyle";

describe("spacingStyle", () => {
  test("should correctly handle prop 'ma'", async () => {
    const StyledComponent = styled.div`
      ${marginStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $ma={"space-between-ssx"} />,
    );

    expect(getByTestId("test")).toHaveStyle("margin-left: 0.5rem");
    expect(getByTestId("test")).toHaveStyle("margin-top: 0.5rem");
    expect(getByTestId("test")).toHaveStyle("margin-bottom: 0.5rem");
    expect(getByTestId("test")).toHaveStyle("margin-right: 0.5rem");
  });

  test("should correctly handle prop 'mv'", async () => {
    const StyledComponent = styled.div`
      ${marginStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $mv={"space-between-ssx"} />,
    );

    expect(getByTestId("test")).toHaveStyle("margin-top: 0.5rem");
    expect(getByTestId("test")).toHaveStyle("margin-bottom: 0.5rem");
  });

  test("should correctly handle prop 'mh'", async () => {
    const StyledComponent = styled.div`
      ${marginStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $mh={"space-between-ssx"} />,
    );

    expect(getByTestId("test")).toHaveStyle("margin-left: 0.5rem");
    expect(getByTestId("test")).toHaveStyle("margin-right: 0.5rem");
  });

  test("should correctly handle prop 'pv'", async () => {
    const StyledComponent = styled.div`
      ${paddingStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $pv={"inner-padding-xs"} />,
    );

    expect(getByTestId("test")).toHaveStyle("padding-top: 0.5rem");
    expect(getByTestId("test")).toHaveStyle("padding-bottom: 0.5rem");
  });

  test("should correctly handle prop 'ph'", async () => {
    const StyledComponent = styled.div`
      ${paddingStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $ph={"inner-padding-xs"} />,
    );

    expect(getByTestId("test")).toHaveStyle("padding-left: 0.5rem");
    expect(getByTestId("test")).toHaveStyle("padding-right: 0.5rem");
  });

  test("should correctly handle prop 'pa'", async () => {
    const StyledComponent = styled.div`
      ${paddingStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $pa={"inner-padding-xs"} />,
    );

    expect(getByTestId("test")).toHaveStyle("padding-left: 0.5rem");
    expect(getByTestId("test")).toHaveStyle("padding-top: 0.5rem");
    expect(getByTestId("test")).toHaveStyle("padding-bottom: 0.5rem");
    expect(getByTestId("test")).toHaveStyle("padding-right: 0.5rem");
  });

  test.each([
    ["$pl", "inner-padding-xs", "padding-left: 0.5rem;"],
    ["$pr", "inner-padding-xs", "padding-right: 0.5rem;"],
    ["$pt", "inner-padding-xs", "padding-top: 0.5rem;"],
    ["$pb", "inner-padding-xs", "padding-bottom: 0.5rem;"],
    ["$ml", "inner-padding-xs", "margin-left: 0.5rem;"],
    ["$mr", "inner-padding-xs", "margin-right: 0.5rem;"],
    ["$mt", "inner-padding-xs", "margin-top: 0.5rem;"],
    ["$mb", "inner-padding-xs", "margin-bottom: 0.5rem;"],
  ])("should correctly handle prop '%s'", (prop, value, expected) => {
    const props = {
      [prop]: value,
    };

    const StyledComponent = styled.div`
      ${marginStyle}
      ${paddingStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" {...props} />,
    );

    expect(getByTestId("test")).toHaveStyle(expected);
  });
});
