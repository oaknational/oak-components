import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { transformStyle } from "@/styles/utils/transformStyle";

describe("transformStyle", () => {
  test('should correctly handle prop "transform" as string', async () => {
    const StyledComponent = styled.div`
      ${transformStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $transform="rotate(90deg)" />,
    );
    expect(getByTestId("test")).toHaveStyle("transform: rotate(90deg)");
  });
  test('should correctly handle prop "transform" as array', async () => {
    const StyledComponent = styled.div`
      ${transformStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $transform={["rotate(90deg)"]} />,
    );
    expect(getByTestId("test")).toHaveStyle("transform: rotate(90deg)");
  });
  test.each([
    ["$transformOrigin", "center", "transform-origin: center;"],
    ["$transform", "rotate(90deg)", "transform: rotate(90deg);"],
  ])("should correctly handle props", (prop, value, expected) => {
    const props = {
      [prop]: value,
    };

    const StyledComponent = styled.div`
      ${transformStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" {...props} />,
    );

    expect(getByTestId("test")).toHaveStyle(expected);
  });
});
