import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { transitionStyle } from "./transitionStyle";

describe("transitionStyle", () => {
  test('should correctly handle prop "transition" as string', async () => {
    const StyledComponent = styled.div`
      ${transitionStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $transition={"transition-1"} />,
    );
    expect(getByTestId("test")).toHaveStyle("transition: all 0.3s ease");
  });
  test('should correctly handle prop "transition" as array', async () => {
    const StyledComponent = styled.div`
      ${transitionStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $transition={"transition-1"} />,
    );
    expect(getByTestId("test")).toHaveStyle("transition: all 0.3s ease");
  });
  test.each([["$transition", "transition-1", "transition: all 0.3s ease;"]])(
    "should correctly handle props",
    (prop, value, expected) => {
      const props = {
        [prop]: value,
      };

      const StyledComponent = styled.div`
        ${transitionStyle}
      `;
      const { getByTestId } = render(
        <StyledComponent data-testid="test" {...props} />,
      );

      expect(getByTestId("test")).toHaveStyle(expected);
    },
  );
});
