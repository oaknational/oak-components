import styled, { css } from "styled-components";

import { OakBoxProps, oakBoxCss } from "@/components/atoms/OakBox";

export type OakULProps = OakBoxProps & {
  $reset?: boolean;
};

/**
 * Styled `ul` (unordered list) component.
 *
 * ## Usage
 *
 * Resets browser spacing and other styles, accepts BoxProps' style props.
 *
 * */

export const OakUL = styled.ul<OakULProps>`
  ${(props) =>
    props.$reset &&
    css`
      list-style: none;
      padding: 0;
    `}
  margin: 0;
  ${oakBoxCss}
`;
