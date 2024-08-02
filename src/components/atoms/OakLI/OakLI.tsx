import styled from "styled-components";

import { oakBoxCss } from "@/components/atoms/OakBox";
import { OakFlexProps } from "@/components/atoms/OakFlex";
import { DisplayStyleProps, displayStyle } from "@/styles/utils/displayStyle";
import { ListStyleProps, listStyle } from "@/styles/utils/listStyle";
import {
  TypographyStyleProps,
  typographyStyle,
} from "@/styles/utils/typographyStyle";
import { flexStyle } from "@/styles/utils/flexStyle";

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
  // FIXME - Flex props will only work when display is set to flex, can we conditionally apply this + props above ? 
  ${flexStyle}
`;

OakLI.defaultProps = {
  $display: "revert",
};
