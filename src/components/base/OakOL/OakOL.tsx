import styled from "styled-components";

import { ColorProps, MarginProps, colorStyle, marginStyle } from "@/styles";
import { defaultOLStyle } from "@/styles/utils/olStyles";

export type OakOLProps = MarginProps & ColorProps;
/**
 * Styled `ol` (ordered list) component.
 *
 * ## Usage
 *
 * Use where we have an ordered list to ensure numbers are styled
 *
 * */

const OakOL = styled.ol<OakOLProps>`
  ${marginStyle}
  ${colorStyle}
  ${defaultOLStyle}
`;

export default OakOL;
