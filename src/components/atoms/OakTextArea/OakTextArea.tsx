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
  StyledTextAreaProps & {
    /**
     * Whether to allow carriage return (new line) when the Enter key is pressed.
     */
    allowCarriageReturn?: boolean;
  };

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
    const { allowCarriageReturn = false, ...rest } = props;

    const onEnterPressed = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !allowCarriageReturn) {
        e.preventDefault();
      }
    };

    return (
      <textarea
        ref={ref}
        onKeyDown={(e) => onEnterPressed(e)}
        {...rest}
      ></textarea>
    );
  },
);

/**
 *
 * A textarea that can be used for longer text inputs where text should wrap.
 * allowCarriageReturn can be used to simulate the behaviour of an input field.
 *
 */
export const OakTextArea = styled(UnstyledOakTextArea)`
  ${textAreaCss}
`;
