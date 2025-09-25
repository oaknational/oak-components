import styled from "styled-components";

import { colorStyle, ColorStyleProps } from "@/styles/utils/colorStyle";
import { opacityStyle, OpacityStyleProps } from "@/styles/utils/opacityStyle";
import {
  marginStyle,
  MarginStyleProps,
  paddingStyle,
  PaddingStyleProps,
} from "@/styles/utils/spacingStyle";
import {
  typographyStyle,
  TypographyStyleProps,
} from "@/styles/utils/typographyStyle";
import { borderStyle, BorderStyleProps } from "@/styles/utils/borderStyle";
import {
  positionStyle,
  PositionStyleProps,
} from "@/styles/utils/positionStyle";

export type OakSpanProps = ColorStyleProps &
  OpacityStyleProps &
  MarginStyleProps &
  PaddingStyleProps &
  BorderStyleProps &
  TypographyStyleProps &
  PositionStyleProps;

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
  ${positionStyle}
`;
