import styled from "styled-components";

import { PaddingStyleProps } from "@/styles/utils/spacingStyle";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";

export type OakAnchorTargetProps = PaddingStyleProps;

/**
 *  * AnchorTarget is a component to enable in-page linking to a particular section
 *
 * Styled `span` component.
 *
 * ## Usage
 *
 * Drop AnchorTarget inside a relative or absolulely positioned element without content, passing
 * it a unique 'id'. Then link it elsewhere using `<a href='#${id}' />`.
 *
 * */
export const OakAnchorTarget = styled.span<OakAnchorTargetProps>`
  position: absolute;
  top: 0;
  ${responsiveStyle("scroll-margin-top", (props) => props.$pt, parseSpacing)}
`;
