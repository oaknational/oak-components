import styled from "styled-components";

import { colorStyle, ColorStyleProps } from "@/styles/utils/colorStyle";
import { marginStyle, MarginStyleProps } from "@/styles/utils/spacingStyle";
import {
  typographyStyle,
  TypographyStyleProps,
} from "@/styles/utils/typographyStyle";

export type OakPProps = MarginStyleProps &
  TypographyStyleProps &
  ColorStyleProps;

/**
 * Styled `p` (paragraph) component.
 * ## Usage
 * In general, using a `p` as a descendant of `<Body>` should suffice.
 * However, if you want different styles for a particular paragraph,
 * you can use this component to apply additional styles.
 */
export const OakP = styled.p<OakPProps>`
  ${typographyStyle}
  ${colorStyle}
  ${marginStyle}
`;
