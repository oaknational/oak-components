import styled from "styled-components";

import { OakBoxProps, oakBoxCss } from "../OakBox";

import { FlexCssProps, flexStyle } from "@/styles";
import { OakDefaultULProps, defaultULStyle } from "@/styles/utils/ulStyles";

export type OakULProps = OakBoxProps & OakDefaultULProps;
/**
 * Styled `ul` (unordered list) component.
 *
 * ## Usage
 *
 * Resets browser spacing and other styles, accepts BoxProps' style props.
 *
 * */

const OakUL = styled.ul<OakULProps>`
  ${defaultULStyle}
  ${oakBoxCss}
`;

/**
 * Styled 'ul' extended with properties of Flex
 */
export const OakFlexList = styled(OakUL)<OakULProps & FlexCssProps>`
  ${flexStyle}
`;

export default OakUL;
