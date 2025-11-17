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
      <StyledComponent data-testid="test" $ma={"spacing-8"} />,
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
      <StyledComponent data-testid="test" $mv={"spacing-8"} />,
    );

    expect(getByTestId("test")).toHaveStyle("margin-top: 0.5rem");
    expect(getByTestId("test")).toHaveStyle("margin-bottom: 0.5rem");
  });

  test("should correctly handle prop 'mh'", async () => {
    const StyledComponent = styled.div`
      ${marginStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $mh={"spacing-8"} />,
    );

    expect(getByTestId("test")).toHaveStyle("margin-left: 0.5rem");
    expect(getByTestId("test")).toHaveStyle("margin-right: 0.5rem");
  });

  test("should correctly handle prop 'pv'", async () => {
    const StyledComponent = styled.div`
      ${paddingStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $pv={"spacing-8"} />,
    );

    expect(getByTestId("test")).toHaveStyle("padding-top: 0.5rem");
    expect(getByTestId("test")).toHaveStyle("padding-bottom: 0.5rem");
  });

  test("should correctly handle prop 'ph'", async () => {
    const StyledComponent = styled.div`
      ${paddingStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $ph={"spacing-8"} />,
    );

    expect(getByTestId("test")).toHaveStyle("padding-left: 0.5rem");
    expect(getByTestId("test")).toHaveStyle("padding-right: 0.5rem");
  });

  test("should correctly handle prop 'pa'", async () => {
    const StyledComponent = styled.div`
      ${paddingStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $pa={"spacing-8"} />,
    );

    expect(getByTestId("test")).toHaveStyle("padding-left: 0.5rem");
    expect(getByTestId("test")).toHaveStyle("padding-top: 0.5rem");
    expect(getByTestId("test")).toHaveStyle("padding-bottom: 0.5rem");
    expect(getByTestId("test")).toHaveStyle("padding-right: 0.5rem");
  });

  test.each([
    ["$pl", "spacing-8", "padding-left: 0.5rem;"],
    ["$pr", "spacing-8", "padding-right: 0.5rem;"],
    ["$pt", "spacing-8", "padding-top: 0.5rem;"],
    ["$pb", "spacing-8", "padding-bottom: 0.5rem;"],
    ["$ml", "spacing-8", "margin-left: 0.5rem;"],
    ["$mr", "spacing-8", "margin-right: 0.5rem;"],
    ["$mt", "spacing-8", "margin-top: 0.5rem;"],
    ["$mb", "spacing-8", "margin-bottom: 0.5rem;"],
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
