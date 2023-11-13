import styled from "styled-components";

import { oakBoxCss } from "../OakBox";
import { OakFlexProps } from "../OakFlex";

import { DisplayStyleProps, displayStyle } from "@/styles/utils/displayStyle";
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
  ${typographyStyle}
  ${listStyle}
  ${displayStyle}
`;

OakLI.defaultProps = {
  $display: "revert",
};
