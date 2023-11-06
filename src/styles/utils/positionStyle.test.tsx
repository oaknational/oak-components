import React from "react";
import styled from "styled-components";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { positionStyle } from "./positionStyle";

describe("positionStyle", () => {
  test("should correctly handle prop 'position' as string", async () => {
    const StyledComponent = styled.div`
      ${positionStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $position="absolute" />,
    );

    expect(getByTestId("test")).toHaveStyle("position: absolute");
  });

  test("should correctly handle prop 'position' as array", async () => {
    const StyledComponent = styled.div`
      ${positionStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $position={["fixed"]} />,
    );

    expect(getByTestId("test")).toHaveStyle("position: fixed");
  });

  test.each([
    ["$top", "space-between-ssx", "top: 0.5rem;"],
    ["$bottom", "space-between-ssx", "bottom: 0.5rem;"],
    ["$left", "space-between-ssx", "left: 0.5rem;"],
    ["$right", "space-between-ssx", "right: 0.5rem;"],
    ["$overflow", "visible", "overflow: visible;"],
    ["$overflowX", "visible", "overflow-x: visible;"],
    ["$overflowY", "visible", "overflow-y: visible;"],
    ["$objectFit", "none", "object-fit: none;"],
    ["$pointerEvents", "none", "pointer-events: none;"],
    ["$visibility", "none", "visibility: none;"],
  ])("should correctly handle props", (prop, value, expected) => {
    const props = {
      [prop]: value,
    };

    const StyledComponent = styled.div`
      ${positionStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" {...props} />,
    );

    expect(getByTestId("test")).toHaveStyle(expected);
  });
});
