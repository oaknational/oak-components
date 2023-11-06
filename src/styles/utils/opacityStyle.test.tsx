import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { opacityStyle } from "@/styles/utils/opacityStyle";

describe("opacityStyle", () => {
  test.each([["opacity: 0.5;"]])(
    "should correctly handle props",
    (expected) => {
      const StyledComponent = styled.div`
        ${opacityStyle}
      `;
      const { getByTestId } = render(
        <StyledComponent data-testid="test" $opacity={"semiOpaque"} />,
      );

      expect(getByTestId("test")).toHaveStyle(expected);
    },
  );
});
