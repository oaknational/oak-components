import styled from "styled-components";

import { colorStyle, ColorProps } from "@/styles/utils/colorStyle";
import { opacityStyle, OpacityProps } from "@/styles/utils/opacityStyle";
import {
  marginStyle,
  MarginProps,
  paddingStyle,
  PaddingProps,
} from "@/styles/utils/spacingStyle";
// TODO: import as soon as ben is done with typography
// import {
//   typographyStyle,
//   TypographyProps,
// } from "@/styles/utils/typographyStyle";
import { borderStyle, BorderProps } from "@/styles/utils/borderStyle";

export type OakSpanProps = ColorProps &
  OpacityProps &
  MarginProps &
  PaddingProps &
  BorderProps;
/**
 * Span renders a `span` (inline text) component, exposing all the typography props.
 * ## Usage
 * Use this component when you want to apply styles to a piece of inline text.
 */
export const OakSpan = styled.span<OakSpanProps>`
  ${colorStyle}
  ${opacityStyle}
  ${marginStyle}
  ${paddingStyle}
  ${borderStyle}
`;
