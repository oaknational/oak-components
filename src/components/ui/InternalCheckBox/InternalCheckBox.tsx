import React, { useRef } from "react";
import styled, { css } from "styled-components";

import { OakBox, OakBoxProps, OakIcon } from "@/components/base";
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
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { ResponsiveValues } from "@/styles/utils/responsiveStyle";

type StyledCheckboxProps = ColorStyleProps &
  SpacingStyleProps &
  BorderStyleProps &
  SizeStyleProps & {
    disabled: boolean;
    checkedBackground: OakCombinedColorToken | null;
    hoverBorderRadius: OakBorderRadiusToken;
    hoverCenterFill: boolean;
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

  /* @media wrapper is required to prevent hover effect on iOS Safari */

  @media (hover: hover) {
    &:hover:not(&:checked):not(&:disabled)::after {
      content: "";
      display: ${(props) => (props.hoverCenterFill ? "block" : "none")};
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
  }

  &:focus-visible {
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

export type InternalCheckBoxProps = {
  id: string;
  disabled?: boolean;
  value: string;
  defaultChecked?: boolean;
  $size?: ResponsiveValues<OakAllSpacingToken>;
  $border?: ResponsiveValues<OakBorderWidthToken>;
  $borderRadius?: ResponsiveValues<OakBorderRadiusToken>;
  borderColor?: OakCombinedColorToken;
  checkedBackground?: OakCombinedColorToken | null;
  checkedIcon?: React.JSX.Element;
  hoverCenterFill?: boolean;
  hoverBorderRadius?: OakBorderRadiusToken;
  iconPadding?: OakInnerPaddingToken;
  onHovered?: (value: string, id: string, duration: number) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  "data-testid"?: string;
};

export const InternalCheckBox = (props: InternalCheckBoxProps) => {
  const {
    id,
    value,
    disabled = false,
    defaultChecked = false,
    $size = "all-spacing-6",
    onChange,
    onFocus,
    onBlur,
    onHovered,
    $border = "border-solid-m",
    $borderRadius = "border-radius-xs",
    borderColor = "text-primary",
    checkedBackground = "text-primary",
    iconPadding = "inner-padding-none",
    hoverBorderRadius = "border-radius-xs",
    hoverCenterFill = true,
  } = props;

  const {
    checkedIcon = (
      <OakIcon
        iconName="tick"
        $width={"100%"}
        $height={"100%"}
        $colorFilter={"white"}
      />
    ),
  } = props;

  const hoverStart = useRef(Date.now());

  const handleMouseEnter = () => {
    hoverStart.current = Date.now();
  };

  const handleMouseLeave = () => {
    const delta = Date.now() - hoverStart.current;
    if (onHovered) {
      onHovered(value, id, delta);
    }
  };

  return (
    <OakBox $position="relative" $width={$size} $height={$size}>
      <StyledCheckbox
        id={id}
        value={value}
        $width={$size}
        $height={$size}
        $ba={$border}
        $borderRadius={$borderRadius}
        $borderColor={borderColor}
        checkedBackground={checkedBackground}
        hoverBorderRadius={hoverBorderRadius}
        hoverCenterFill={hoverCenterFill}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        defaultChecked={defaultChecked}
        disabled={disabled}
        name={id}
      />

      <StyledIconContainer
        $position={"absolute"}
        $top={"all-spacing-0"}
        $left={"all-spacing-0"}
        $pa={iconPadding}
        $width={$size}
        $height={$size}
      >
        {checkedIcon}
      </StyledIconContainer>
    </OakBox>
  );
};
