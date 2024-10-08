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

export type OakFieldsetProps = ColorStyleProps &
  OpacityStyleProps &
  MarginStyleProps &
  PaddingStyleProps &
  BorderStyleProps &
  TypographyStyleProps;

/**
 * OakFieldset renders a custom `fieldset` (inline text) component, exposing all the typography props.
 * ## Usage
 */
export const OakFieldset = styled.fieldset<OakFieldsetProps>`
  border: 0px;
  margin: 0;
  padding: 0;
  ${colorStyle}
  ${opacityStyle}
  ${marginStyle}
  ${paddingStyle}
  ${borderStyle}
  ${typographyStyle}
`;
