import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import styled from "styled-components";

import { typographyStyle } from "@/styles/utils/typographyStyle";

describe("typographyStyle", () => {
  test("should correctly handle prop 'font'", async () => {
    const StyledComponent = styled.div`
      ${typographyStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" $font={"heading-1"} />,
    );
    expect(getByTestId("test")).toHaveStyle("font-weight: 600");
    expect(getByTestId("test")).toHaveStyle(
      "font-family: __Lexend_866216,__Lexend_Fallback_866216,Lexend,sans-serif",
    );
    expect(getByTestId("test")).toHaveStyle("line-height: 4rem");
    expect(getByTestId("test")).toHaveStyle("letter-spacing:0.0115rem");
    expect(getByTestId("test")).toHaveStyle("font-size: 3.5rem");
  });
  test.each([
    ["$textDecoration", "underline", "text-decoration: underline"],
    ["$textAlign", "center", "text-align: center"],
    ["$whiteSpace", "nowrap", "white-space: nowrap"],
    ["$wordWrap", "break-word", "word-wrap: break-word"],
    ["$textOverflow", "ellipsis", "text-overflow: ellipsis"],
  ])("should correctly handle props", (prop, value, expected) => {
    const props = {
      [prop]: value,
    };

    const StyledComponent = styled.div`
      ${typographyStyle}
    `;
    const { getByTestId } = render(
      <StyledComponent data-testid="test" {...props} />,
    );

    expect(getByTestId("test")).toHaveStyle(expected);
  });
});
