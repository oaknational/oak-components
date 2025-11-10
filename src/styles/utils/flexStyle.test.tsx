import React from "react";
import styled from "styled-components";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { flexStyle } from "@/styles/utils/flexStyle";

describe("flexStyle", () => {
  const StyledComponent = styled.div`
    ${flexStyle}
  `;

  test("defaults to display: flex", () => {
    const { getByTestId } = render(<StyledComponent data-testid="test" />);

    expect(getByTestId("test")).toHaveStyle("display: flex;");
  });

  test.each([
    ["$display", "inline flex", "display: inline flex"],
    ["$flexDirection", "row", "flex-direction: row;"],
    ["$flexWrap", "wrap", "flex-wrap: wrap;"],
    ["$alignItems", "center", "align-items: center;"],
    ["$justifyContent", "center", "justify-content: center;"],
    ["$alignSelf", "center", "align-self: center;"],
    ["$flexGrow", "1", "flex-grow: 1;"],
    ["$flexShrink", "1", "flex-shrink: 1;"],
    ["$order", "1", "order: 1;"],
    ["$flexBasis", "spacing-8", "flex-basis: 0.5rem;"],
    ["$gap", "spacing-8", "gap: 0.5rem;"],
    ["$columnGap", "spacing-8", "column-gap: 0.5rem;"],
    ["$rowGap", "spacing-8", "row-gap: 0.5rem;"],
  ])("should correctly handle prop '%s'", (prop, value, expected) => {
    const props = {
      [prop]: value,
    };

    const { getByTestId } = render(
      <StyledComponent data-testid="test" {...props} />,
    );

    expect(getByTestId("test")).toHaveStyle(expected);
  });
});
