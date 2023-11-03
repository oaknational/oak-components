import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { displayStyle } from "./displayStyle";


describe("displayStyle", () => {
  test("should correctly handle prop 'display' as string", async () => {
    const StyledComponent = styled.div`
      ${displayStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $display={"block"} />,
    );
    expect(getByTestId("test")).toHaveStyle("display: block");
  });
});
