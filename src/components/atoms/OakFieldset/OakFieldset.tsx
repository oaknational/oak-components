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
import { sizeStyle, SizeStyleProps } from "@/styles/utils/sizeStyle";

export type OakFieldsetProps = ColorStyleProps &
  SizeStyleProps &
  OpacityStyleProps &
  MarginStyleProps &
  PaddingStyleProps &
  BorderStyleProps &
  TypographyStyleProps;

/**
 * OakFieldset renders a custom `fieldset` component, removes default styling of fieldset.
  color, opacity, margin, padding, border and typography styles can be passed in also.
 */
export const OakFieldset = styled.fieldset<OakFieldsetProps>`
  border: 0px;
  margin: 0;
  padding: 0;
  ${colorStyle}
  ${sizeStyle}
  ${opacityStyle}
  ${marginStyle}
  ${paddingStyle}
  ${borderStyle}
  ${typographyStyle}
`;
