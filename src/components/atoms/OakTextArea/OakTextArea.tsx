import React, {
  DetailedHTMLProps,
  //InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
//import styled, { css } from "styled-components";
import styled from "styled-components";

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

export type OakTextAreaProps = Omit<
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  "ref"
> &
  StyledTextAreaProps & { allowCarriageReturn?: boolean };

type StyledTextAreaProps = SizeStyleProps &
  BorderStyleProps &
  SpacingStyleProps &
  TypographyStyleProps &
  PositionStyleProps;

const StyledTextArea = styled("textarea")<StyledTextAreaProps>`
  resize: none;
  outline: none;
  ${sizeStyle}
  ${borderStyle}
  ${spacingStyle}
  ${typographyStyle}
  ${positionStyle}
`;

const UnstyledOakTextArea = (props: OakTextAreaProps) => {
  // const { allowCarriageReturn = false, ...rest } = props;

  const onEnterPressed = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !props.allowCarriageReturn) {
      e.preventDefault();
    }
  };

  return (
    <StyledTextArea
      onKeyDown={(e) => onEnterPressed(e)}
      {...props}
    ></StyledTextArea>
  );
};

/**
 *
 * A textarea that can be used for longer quiz answers
 *
 *
 * ### Callbacks
 * make sure to add descriptions and types for any callbacks for the component
 *
 * NB. We must export a styled component for it to be inheritable
 */
export const OakTextArea = styled(UnstyledOakTextArea)``;
