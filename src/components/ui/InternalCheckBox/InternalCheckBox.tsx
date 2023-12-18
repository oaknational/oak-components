import React from "react";
import styled from "styled-components";

import {
  SubBaseCheckBoxProps,
  SubStyledCheckBox,
  SubStyledCheckBoxDecor,
} from "./SubStyledCheckBox";

import { OakBox, OakBoxProps, OakIcon } from "@/components/base";
import {
  OakAllSpacingToken,
  OakBorderRadiusToken,
  OakBorderWidthToken,
  OakCombinedColorToken,
  OakInnerPaddingToken,
} from "@/styles";
import { ResponsiveValues } from "@/styles/utils/responsiveStyle";

const StyledIconContainer = styled(OakBox)<
  OakBoxProps & { disabled?: boolean }
>`
  pointer-events: none;
  opacity: 0;

  input:checked + & {
    opacity: 1;
  }
`;

export type InternalCheckBoxProps = SubBaseCheckBoxProps & {
  size?: ResponsiveValues<OakAllSpacingToken>;
  decor?: SubStyledCheckBoxDecor;
  border?: ResponsiveValues<OakBorderWidthToken>;
  borderRadius?: ResponsiveValues<OakBorderRadiusToken>;
  borderColor?: OakCombinedColorToken;
  checkedBackground?: OakCombinedColorToken | null;
  checkedIcon?: React.JSX.Element;
  hoverBorderRadius?: OakBorderRadiusToken;
  iconPadding?: OakInnerPaddingToken;
};

const CheckBox = (props: InternalCheckBoxProps) => {
  const {
    size = "all-spacing-6",
    border = "border-solid-m",
    borderRadius = "border-radius-xs",
    borderColor = "text-primary",
    checkedBackground = "text-primary",
    iconPadding = "inner-padding-none",
    hoverBorderRadius = "border-radius-xs",
    ...rest
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

  return (
    <OakBox $position="relative" $width={size} $height={size}>
      <SubStyledCheckBox
        $width={size}
        $height={size}
        $ba={border}
        $borderRadius={borderRadius}
        $borderColor={borderColor}
        $checkedBackground={checkedBackground}
        $hoverBorderRadius={hoverBorderRadius}
        {...rest}
      />

      <StyledIconContainer
        $position={"absolute"}
        $top={"all-spacing-0"}
        $left={"all-spacing-0"}
        $pa={iconPadding}
        $width={size}
        $height={size}
      >
        {checkedIcon}
      </StyledIconContainer>
    </OakBox>
  );
};

export const InternalCheckBox = styled(CheckBox)``;
