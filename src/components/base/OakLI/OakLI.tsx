import styled from "styled-components";

import { oakBoxCss } from "../OakBox";
import { OakFlexProps } from "../OakFlex";

import { DisplayStyleProps, flexStyle } from "@/styles";
import { ListStyleProps, listStyle } from "@/styles/utils/listStyle";
import {
  TypographyStyleProps,
  typographyStyle,
} from "@/styles/utils/typographyStyle";

export type OakLIProps = OakFlexProps &
  TypographyStyleProps &
  ListStyleProps &
  DisplayStyleProps;

/**
 * Styled `li` (list item) component.
 *
 * ## Usage
 *
 * Places where we directly want to style a list item
 *
 **/

export const OakLI = styled.li<OakLIProps>`
  ${oakBoxCss}
  ${flexStyle}
  ${typographyStyle}
  ${listStyle}
`;

OakLI.defaultProps = {
  $display: "revert",
};
