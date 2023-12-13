import React, { useRef } from "react";
import styled, { css } from "styled-components";

import {
  OakBox,
  OakBoxProps,
  OakFlex,
  OakIcon,
  OakLabel,
  OakLabelProps,
} from "@/components/base";
import { ColorStyleProps, colorStyle } from "@/styles/utils/colorStyle";
import { SpacingStyleProps, spacingStyle } from "@/styles/utils/spacingStyle";
import { BorderStyleProps, borderStyle } from "@/styles/utils/borderStyle";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { SizeStyleProps, sizeStyle } from "@/styles/utils/sizeStyle";
import { parseColor } from "@/styles/helpers/parseColor";
import {
  OakAllSpacingToken,
  OakBorderRadiusToken,
  OakBorderWidthToken,
  OakCombinedColorToken,
  OakInnerPaddingToken,
} from "@/styles";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { FlexStyleProps } from "@/styles/utils/flexStyle";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

type StyledCheckboxProps = ColorStyleProps &
  SpacingStyleProps &
  BorderStyleProps &
  SizeStyleProps & {
    disabled: boolean;
    checkedBackground: OakCombinedColorToken;
    hoverBorderRadius: OakBorderRadiusToken;
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
      background: ${parseColor(props.checkedBackground)};
    `};
  }

  &:hover:not(&:checked):not(&:disabled)::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 60%;
    transform: translate(-50%, -50%);
    border-radius: ${(props) => css`
      ${parseBorderRadius(props.hoverBorderRadius)}
    `};
    background: ${(props) => css`
      ${parseColor(props.checkedBackground)}
    `};
  }

  &:focus {
    box-shadow: ${parseDropShadow("drop-shadow-centered-yellow")};
  }

  &:disabled {
    pointer-events: none;
  }
`;

const StyledIconContainer = styled(OakBox)<
  OakBoxProps & { disabled?: boolean }
>`
  pointer-events: none;
  opacity: 0;

  ${StyledCheckbox}:checked + & {
    opacity: 1;
  }
`;

type CheckboxLabelProps = {
  labelAlignItems?: FlexStyleProps["$alignItems"];
  labelGap?: FlexStyleProps["$gap"];
  disabled?: boolean;
  "data-testid"?: string;
} & OakLabelProps;

const CheckboxLabel = styled(OakLabel)<CheckboxLabelProps>`
  display: flex;
  align-items: center;
  ${(props) =>
    props.disabled
      ? css`
          pointer-events: none;
        `
      : css`
          cursor: pointer;
        `}
  ${responsiveStyle("gap", (props) => props.labelGap, parseSpacing)}
  ${responsiveStyle("align-items", (props) => props.labelAlignItems)}
`;

export type OakCheckboxProps = {
  id: string;
  disabled?: boolean;
  value: string;
  defaultChecked?: boolean;
  checkboxSize?: OakAllSpacingToken;
  checkboxBorder?: OakBorderWidthToken;
  checkboxBorderRadius?: OakBorderRadiusToken;
  hoverBorderRadius?: OakBorderRadiusToken;
  iconPadding?: OakInnerPaddingToken;
  defaultColor?: OakCombinedColorToken;
  disabledColor?: OakCombinedColorToken;
  onHovered?: (value: string, id: string, duration: number) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
} & CheckboxLabelProps;

export const OakCheckbox = (props: OakCheckboxProps) => {
  const {
    id,
    value,
    disabled = false,
    defaultChecked = false,
    checkboxSize = "all-spacing-6",
    defaultColor = "text-primary",
    disabledColor = "text-disabled",
    onChange,
    onFocus,
    onBlur,
    onHovered,
    labelGap = "space-between-s",
    labelAlignItems = "center",
    checkboxBorder = "border-solid-m",
    checkboxBorderRadius = "border-radius-xs",
    iconPadding = "inner-padding-none",
    hoverBorderRadius = "border-radius-xs",
  } = props;

  const hoverStart = useRef(Date.now());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(event);
  };

  const handleMouseEnter = () => {
    hoverStart.current = Date.now();
  };

  const handleMouseLeave = () => {
    const delta = Date.now() - hoverStart.current;
    if (onHovered) {
      onHovered(value, id, delta);
    }
  };

  const currentColor = disabled ? disabledColor : defaultColor;

  return (
    <CheckboxLabel
      htmlFor={id}
      labelGap={labelGap}
      labelAlignItems={labelAlignItems}
      $color={currentColor}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <OakFlex $position="relative" $flexShrink={1}>
        <StyledCheckbox
          id={id}
          value={value}
          $width={checkboxSize}
          $height={checkboxSize}
          $ba={checkboxBorder}
          $borderRadius={checkboxBorderRadius}
          $borderColor={currentColor}
          checkedBackground={currentColor}
          hoverBorderRadius={hoverBorderRadius}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          defaultChecked={defaultChecked}
          disabled={disabled}
        />

        <StyledIconContainer
          $position={"absolute"}
          $pa={iconPadding}
          $width={checkboxSize}
          $height={checkboxSize}
        >
          <OakIcon
            iconName="tick"
            $width={"100%"}
            $height={"100%"}
            $colorFilter={"white"}
          />
        </StyledIconContainer>
      </OakFlex>
      {value}
    </CheckboxLabel>
  );
};
