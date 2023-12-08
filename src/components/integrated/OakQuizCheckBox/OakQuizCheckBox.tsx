import React from "react";
import styled from "styled-components";

import { OakFlex, OakSpan } from "@/components/base";
import { ColorStyleProps, colorStyle } from "@/styles/utils/colorStyle";
import { SpacingStyleProps, spacingStyle } from "@/styles/utils/spacingStyle";
import { BorderStyleProps, borderStyle } from "@/styles/utils/borderStyle";
import { SizeStyleProps, sizeStyle } from "@/styles/utils/sizeStyle";

type StyledCheckboxProps = ColorStyleProps &
  SpacingStyleProps &
  BorderStyleProps &
  SizeStyleProps & {
    disabled: boolean;
  };

const StyledCheckbox = styled.input.attrs({
  type: "checkbox",
})<StyledCheckboxProps>`
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none;
  ${borderStyle}
  ${colorStyle}
  ${spacingStyle}
  ${sizeStyle}
`;

// https://blog.logrocket.com/building-custom-checkbox-react/

export type OakQuizCheckboxProps = {
  disabled: boolean;
};

export const OakQuizCheckbox = (props: OakQuizCheckboxProps) => {
  const { disabled } = props;
  return (
    <OakFlex
      $pa={"inner-padding-l"}
      $ba={"border-solid-m"}
      $borderRadius={"border-radius-m"}
      $gap={"space-between-s"}
    >
      <StyledCheckbox
        $width={"all-spacing-7"}
        $height={"all-spacing-7"}
        $ba={"border-solid-m"}
        $borderRadius={"border-radius-s"}
        disabled={disabled}
      />

      <OakSpan $font={"body-1"} $color={"text-primary"}>
        Answer
      </OakSpan>
    </OakFlex>
  );
};
