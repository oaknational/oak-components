import styled from "styled-components";

import { colorStyle, OakColorProps } from "@/styles/utils/colorStyle";
import { opacityStyle, OakOpacityProps } from "@/styles/utils/opacityStyle";
import {
  marginStyle,
  OakMarginProps,
  paddingStyle,
  OakPaddingProps,
} from "@/styles/utils/spacingStyle";
import {
  typographyStyle,
  OakTypographyCssProps,
} from "@/styles/utils/typographyStyle";
import { borderStyle, OakBorderProps } from "@/styles/utils/borderStyle";

export type OakSpanProps = OakColorProps &
  OakOpacityProps &
  OakMarginProps &
  OakPaddingProps &
  OakBorderProps &
  OakTypographyCssProps;
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
  ${typographyStyle}
`;
