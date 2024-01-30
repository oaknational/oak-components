import React from "react";
import styled, { css } from "styled-components";

import { OakRoundIconProps } from "../OakRoundIcon";

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
import { SizeStyleProps, sizeStyle } from "@/styles/utils/sizeStyle";

export type InternalRoundButtonProps = Omit<
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
  hoverTextColor: OakCombinedColorToken;
  disabledTextColor: OakCombinedColorToken;
  defaultIconBackground: OakCombinedColorToken;
  hoverIconBackground: OakCombinedColorToken;
  disabledIconBackground: OakCombinedColorToken;
  defaultIconColor?: OakRoundIconProps["$colorFilter"];
  disabledIconColor?: OakRoundIconProps["$colorFilter"];
  width?: SizeStyleProps["$width"];
  maxWidth?: SizeStyleProps["$maxWidth"];
  iconBackgroundSize: SizeStyleProps["$width"];
  iconSize: SizeStyleProps["$width"];
} & PositionStyleProps;

const StyledInternalButton = styled(InternalButton)<
  Omit<InternalRoundButtonProps, "iconBackgroundSize" | "iconSize"> &
    SizeStyleProps
>`
  ${positionStyle}
  ${sizeStyle}
  ${(props) => css`
    &:hover {
      text-decoration: underline;
      color: ${parseColor(props.hoverTextColor)};
    }
    &:active {
      color: ${parseColor(props.defaultTextColor)};
    }
    &:disabled {
      color: ${parseColor(props.disabledTextColor)};
    }
  `}
`;

const StyledButtonWrapper = styled(OakBox)<{
  disabledIconBackground: OakCombinedColorToken;
  hoverIconBackground: OakCombinedColorToken;
  defaultIconBackground: OakCombinedColorToken;
}>`
  button:focus-visible .shadow {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }
  button:hover .shadow {
    box-shadow: ${parseDropShadow("drop-shadow-lemon")};
  }
  button:active .shadow {
    box-shadow: ${parseDropShadow("drop-shadow-lemon")},
      ${parseDropShadow("drop-shadow-grey")};
  }
  ${(props) => css`
    button:disabled .icon-container {
      background: ${parseColor(props.disabledIconBackground)};
    }
    button:hover .icon-container {
      background: ${parseColor(props.hoverIconBackground)};
    }
    button:active .icon-container {
      background: ${parseColor(props.defaultIconBackground)};
    }
  `}
`;

const _InternalRoundButton = (props: InternalRoundButtonProps) => {
  const {
    children,
    iconName,
    isTrailingIcon,
    isLoading,
    disabled,
    width,
    maxWidth,
    iconBackgroundSize,
    iconSize,
    ...rest
  } = props;

  const icon = (
    <>
      {iconName && (
        <OakIcon
          iconName={iconName}
          $width={iconSize}
          $height={iconSize}
          $colorFilter={
            props.disabled
              ? props.disabledIconColor
              : props.defaultIconColor
                ? props.defaultIconColor
                : null
          }
        />
      )}
    </>
  );
  const loader = (
    <OakBox $width={iconSize} $height={iconSize}>
      <OakLoadingSpinner $width={iconSize} loaderColor="white" />
    </OakBox>
  );
  const iconLogic = (
    <OakFlex
      className={"icon-container"}
      $background={props.defaultIconBackground}
      $color={props.defaultTextColor}
      $borderRadius={"border-radius-circle"}
      $position={"relative"}
      $width={iconBackgroundSize}
      $height={iconBackgroundSize}
      $alignItems={"center"}
      $justifyContent={"center"}
      $minWidth={iconBackgroundSize}
    >
      <OakBox
        className="shadow"
        $position={"absolute"}
        $borderRadius={"border-radius-circle"}
        $width={"100%"}
        $height={"100%"}
      />

      {isLoading && !disabled ? loader : icon}
    </OakFlex>
  );

  return (
    <StyledButtonWrapper
      className="button-wrapper"
      $position={"relative"}
      $width={width}
      $maxWidth={maxWidth}
      disabledIconBackground={props.disabledIconBackground}
      hoverIconBackground={props.hoverIconBackground}
      defaultIconBackground={props.defaultIconBackground}
    >
      <StyledInternalButton
        {...rest}
        $color={props.defaultTextColor}
        // $pv={"inner-padding-xs"}
        // $ph={"inner-padding-s"}
        $position={"relative"}
        disabled={disabled || isLoading}
      >
        <OakFlex
          $flexDirection={"row"}
          $alignItems={"center"}
          $gap="space-between-xs"
          $justifyContent="center"
        >
          {!isTrailingIcon && iconLogic}
          <OakSpan $font={"body-1-bold"}>{children}</OakSpan>
          {isTrailingIcon && iconLogic}
        </OakFlex>
      </StyledInternalButton>
    </StyledButtonWrapper>
  );
};

export const InternalRoundButton = styled(_InternalRoundButton)``;
