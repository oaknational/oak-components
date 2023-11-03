import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { zIndexStyle } from "./zIndexStyle";

describe("zIndexStyle", () => {
  test("should correctly handle prop 'zIndex' as string", async () => {
    const StyledComponent = styled.div`
      ${zIndexStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $zIndex={"behind"} />,
    );
    expect(getByTestId("test")).toHaveStyle("zIndex: -1");
  });
  test("should correctly handle prop 'zIndex' as array", async () => {
    const StyledComponent = styled.div`
      ${zIndexStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $zIndex={["behind", "neutral"]} />,
    );
    expect(getByTestId("test")).toHaveStyle("zIndex: -1");
  });
});
