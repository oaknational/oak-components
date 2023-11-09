import styled from "styled-components";

import { oakBoxCss } from "../OakBox";
import { OakFlexProps } from "../OakFlex";

import { DisplayProps, flexStyle } from "@/styles";
import { ListItemProps, listItemStyle } from "@/styles/utils/listStyle";
import {
  TypographyProps,
  typographyStyle,
} from "@/styles/utils/typographyStyle";


type OakLIProps = OakFlexProps & TypographyProps & ListItemProps & DisplayProps;
/**
 * Styled `li` (list item) component.
 *
 * ## Usage
 *
 * Places where we directly want to style a list item
 *
 * */
const OakLI = styled.li<OakLIProps>`
  ${oakBoxCss}
  ${flexStyle}
  ${typographyStyle}
  ${listItemStyle}
`;

OakLI.defaultProps = {
  $display: "revert",
};

export default OakLI;
