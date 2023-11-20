import React from "react";
import styled, { css } from "styled-components";

import { OakBox, OakFlex, OakSpan } from "@/components/base";
import {
  InternalButton,
  InternalButtonProps,
} from "@/components/base/InternalButton";
import { OakIcon, OakIconName } from "@/components/base/OakIcon";
import { OakLoadingSpinner } from "@/components/ui/OakLoadingSpinner";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import {
  PositionStyleProps,
  positionStyle,
} from "@/styles/utils/positionStyle";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakCombinedColorToken } from "@/styles";

export type InternalRectButtonProps = Omit<
  InternalButtonProps,
  | "$pa"
  | "$ph"
  | "$pv"
  | "$ba"
  | "$borderRadius"
  | "$borderColor"
  | "$background"
  | "$color"
> & {
  iconName?: OakIconName;
  isTrailingIcon?: boolean;
  defaultTextColor: OakCombinedColorToken;
  defaultBackground: OakCombinedColorToken;
  defaultBorderColor: OakCombinedColorToken;
  hoverTextColor: OakCombinedColorToken;
  hoverBackground: OakCombinedColorToken;
  hoverBorderColor: OakCombinedColorToken;
  disabledBackground: OakCombinedColorToken;
  disabledBorderColor: OakCombinedColorToken;
  disabledTextColor: OakCombinedColorToken;
} & PositionStyleProps;

const StyledInternalButton = styled(InternalButton)<InternalRectButtonProps>`
  ${positionStyle}
  ${(props) => css`
    &:hover {
      text-decoration: underline;
      box-shadow: ${parseDropShadow("drop-shadow-yellow")};
      color: ${parseColor(props.hoverTextColor)};
      background: ${parseColor(props.hoverBackground)};
      border-color: ${parseColor(props.hoverBorderColor)};
    }

    &:focus-visible {
      box-shadow: ${parseDropShadow("drop-shadow-centered-yellow")};
    }
    &:active {
      box-shadow: ${parseDropShadow("drop-shadow-yellow")};
      background: ${parseColor(props.defaultBackground)};
      border-color: ${parseColor(props.defaultBorderColor)};
      color: ${parseColor(props.defaultTextColor)};
    }
    &:disabled {
      background: ${parseColor(props.disabledBackground)};
      border-color: ${parseColor(props.disabledBorderColor)};
      color: ${parseColor(props.disabledTextColor)};
    }
  `}
`;

const StyledOuterShadow = styled(OakBox)`
  .oak-secondary-button:focus-visible & {
    box-shadow: ${parseDropShadow("drop-shadow-centered-grey")};
  }
  .oak-secondary-button:active & {
    box-shadow: ${parseDropShadow("drop-shadow-grey")};
  }
`;

export const InternalRectButton = (props: InternalRectButtonProps) => {
  const { children, iconName, isTrailingIcon, isLoading, disabled, ...rest } =
    props;

  const icon = (
    <>
      {iconName && (
        <OakIcon
          iconName={iconName}
          $width={"all-spacing-6"}
          $height={"all-spacing-6"}
          $colorFilter={
            props.disabled ? props.disabledTextColor : props.defaultTextColor
          }
        />
      )}
    </>
  );

  const loader = (
    <OakBox $width={"all-spacing-6"} $height={"all-spacing-6"}>
      <OakLoadingSpinner $width={"all-spacing-6"} />
    </OakBox>
  );

  const iconLogic = <>{isLoading && !disabled ? loader : icon}</>;

  return (
    <StyledInternalButton
      className="oak-secondary-button"
      {...rest}
      $ba={"border-solid-m"}
      $color={props.defaultTextColor}
      $background={props.defaultBackground}
      $borderColor={props.defaultBorderColor}
      $pv={"inner-padding-xs"}
      $ph={"inner-padding-s"}
      $borderRadius={"border-radius-s"}
      $position={"relative"}
      disabled={disabled || isLoading}
    >
      <StyledOuterShadow
        $position={"absolute"}
        $top={"space-between-none"}
        $left={"space-between-none"}
        $width={"100%"}
        $height={"100%"}
        $borderRadius={"border-radius-s"}
        $zIndex={"behind"}
      ></StyledOuterShadow>
      <OakFlex
        $flexDirection={"row"}
        $alignItems={"center"}
        $gap="space-between-ssx"
      >
        {!isTrailingIcon && iconLogic}
        <OakSpan $font={"body-1-bold"}>{children}</OakSpan>
        {isTrailingIcon && iconLogic}
      </OakFlex>
    </StyledInternalButton>
  );
};
