import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { opacityStyle } from "./opacityStyle";

describe("opacityStyle", () => {
  test.each([["$opacity", 0.5, "opacity: 0.5;"]])(
    "should correctly handle props",
    (prop, value, expected) => {
      const props = {
        [prop]: value,
      };

      const StyledComponent = styled.div`
        ${opacityStyle}
      `;
      const { getByTestId } = render(
        <StyledComponent data-testid="test" {...props} />,
      );

      expect(getByTestId("test")).toHaveStyle(expected);
    },
  );
});
