import React, {
  DetailedHTMLProps,
  TextareaHTMLAttributes,
  forwardRef,
} from "react";
import styled, { css } from "styled-components";

import { sizeStyle, SizeStyleProps } from "@/styles/utils/sizeStyle";
import { borderStyle, BorderStyleProps } from "@/styles/utils/borderStyle";
import { spacingStyle, SpacingStyleProps } from "@/styles/utils/spacingStyle";
import {
  typographyStyle,
  TypographyStyleProps,
} from "@/styles/utils/typographyStyle";
import {
  positionStyle,
  PositionStyleProps,
} from "@/styles/utils/positionStyle";
import { colorStyle, ColorStyleProps } from "@/styles/utils/colorStyle";

export type OakTextAreaProps = Omit<
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  "ref"
> &
  StyledTextAreaProps;

type StyledTextAreaProps = SizeStyleProps &
  BorderStyleProps &
  SpacingStyleProps &
  TypographyStyleProps &
  PositionStyleProps &
  ColorStyleProps;

const textAreaCss = css<StyledTextAreaProps>`
  resize: none;
  outline: none;
  ${sizeStyle}
  ${borderStyle}
  ${spacingStyle}
  ${typographyStyle}
  ${positionStyle}
  ${colorStyle}
`;

const UnstyledOakTextArea = forwardRef(
  (props: OakTextAreaProps, ref?: React.Ref<HTMLTextAreaElement>) => {
    return <textarea ref={ref} {...props}></textarea>;
  },
);

/**
 *
 * A textarea that can be used for longer text inputs where text should wrap.
 *
 */
export const OakTextArea = styled(UnstyledOakTextArea)`
  ${textAreaCss}
`;
