import React from "react";
import styled from "styled-components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { listItemStyle } from "./listStyle";

describe("listStyle", () => {
  test("should correctly handle prop 'listStyle' as string", async () => {
    const StyledComponent = styled.div`
      ${listItemStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $listStyle={"none"} />,
    );
    expect(getByTestId("test")).toHaveStyle("display: block");
  });
});