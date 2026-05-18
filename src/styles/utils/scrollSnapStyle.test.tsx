import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { scrollSnapStyle } from "./scrollSnapStyle";

describe("scrollSnapStyle", () => {
  test("should correctly handle prop 'scrollMarginTop'", async () => {
    const StyledComponent = styled.div`
      ${scrollSnapStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $scrollMarginTop={"spacing-8"} />,
    );

    expect(getByTestId("test")).toHaveStyle("scroll-margin-top: 0.5rem");
  });

  test("should correctly handle prop 'scrollMarginLeft'", async () => {
    const StyledComponent = styled.div`
      ${scrollSnapStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $scrollMarginLeft={"spacing-8"} />,
    );

    expect(getByTestId("test")).toHaveStyle("scroll-margin-left: 0.5rem");
  });
});
