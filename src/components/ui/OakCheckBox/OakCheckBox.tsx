import React from "react";
import styled, { css } from "styled-components";

import { OakFlex } from "@/components/base";
import { ColorStyleProps, colorStyle } from "@/styles/utils/colorStyle";
import { SpacingStyleProps, spacingStyle } from "@/styles/utils/spacingStyle";
import { BorderStyleProps, borderStyle } from "@/styles/utils/borderStyle";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { SizeStyleProps, sizeStyle } from "@/styles/utils/sizeStyle";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakCombinedColorToken } from "@/styles";

type StyledCheckboxProps = ColorStyleProps &
  SpacingStyleProps &
  BorderStyleProps &
  SizeStyleProps & {
    disabled: boolean;
    checkedBackground: OakCombinedColorToken;
  };

const StyledCheckbox = styled.input.attrs({
  type: "checkbox",
})<StyledCheckboxProps>`
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  margin: 0;
  outline: none;
  ${borderStyle}
  ${colorStyle}
  ${spacingStyle}
  ${sizeStyle}

  &:checked {
    ${(props) => css`
      background: ${props.checkedBackground};
    `};
  }

  &:hover::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 65%;
    height: 65%;
    transform: translate(-50%, -50%);
    border-radius: ${parseBorderRadius("border-radius-xs")};
    background: ${parseColor("black")};
  }
`;

// https://blog.logrocket.com/building-custom-checkbox-react/

export type OakCheckboxProps = {
  disabled: boolean;
};

export const OakCheckbox = (props: OakCheckboxProps) => {
  const { disabled } = props;
  return (
    <OakFlex
      $pa={"inner-padding-l"}
      $ba={"border-solid-m"}
      $borderRadius={"border-radius-m"}
      $gap={"space-between-s"}
    >
      <OakFlex $position="relative" $flexShrink={1}>
        <StyledCheckbox
          $width={"all-spacing-7"}
          $height={"all-spacing-7"}
          $ba={"border-solid-m"}
          $borderRadius={"border-radius-xs"}
          $borderColor={"border-neutral"}
          checkedBackground="black"
          disabled={disabled}
        />
      </OakFlex>
    </OakFlex>
  );
};
