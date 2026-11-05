import React from "react";
import styled from "styled-components";

import { focusStyles, OakFocusStyleProps } from "./focusStyles";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { getStylePropsForSelector } from "@/test-helpers/css";

describe("focusStyles", () => {
  it("returns correct CSS", () => {
    const Button = styled.button<OakFocusStyleProps>`
      ${focusStyles}
    `;
    const { container } = renderWithTheme(<Button />);
    expect(container).toMatchSnapshot();
  });

  it("can set $hoverBackground", () => {
    const Button = styled.button<OakFocusStyleProps>`
      ${focusStyles}
    `;
    const { container } = renderWithTheme(
      // Note: We'd never use "text-error" but it makes for a good thing to assert
      <Button $hoverBackground="text-error" />,
    );
    const element = container.firstElementChild;
    expect(element).toBeDefined();
    const backgroundColor = getStylePropsForSelector(
      element!,
      "background-color",
      `:hover`,
    );
    expect(backgroundColor).toEqual("#dd0035");
    expect(element).toMatchSnapshot();
  });
});
