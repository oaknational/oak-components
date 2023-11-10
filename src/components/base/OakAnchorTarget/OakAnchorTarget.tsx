import styled from "styled-components";

import { OakPaddingProps } from "@/styles";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";

/**
 * Styled `span` component.
 *
 * ## Usage
 *
 * Use as an anchor target for links to scroll to.
 *
 * */

export type AnchorTargetProps = OakPaddingProps;

export const OakAnchorTarget = styled.span<AnchorTargetProps>`
  position: absolute;
  top: 0;
  ${responsiveStyle("scroll-margin-top", (props) => props.$pt, parseSpacing)}
`;
