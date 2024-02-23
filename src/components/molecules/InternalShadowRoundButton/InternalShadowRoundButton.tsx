import React, { ElementType } from "react";
import styled, { css } from "styled-components";

import { OakRoundIconProps } from "../OakRoundIcon";

import { PolymorphicPropsWithoutRef } from "@/components/utils/polymorphic";
import { OakBox, OakFlex, OakSpan } from "@/components/atoms";
import {
  InternalButton,
  InternalButtonProps,
} from "@/components/atoms/InternalButton";
import { OakIcon, OakIconName } from "@/components/atoms/OakIcon";
import { OakLoadingSpinner } from "@/components/molecules/OakLoadingSpinner";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import {
  PositionStyleProps,
  positionStyle,
} from "@/styles/utils/positionStyle";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakCombinedColorToken } from "@/styles";
import { SizeStyleProps, sizeStyle } from "@/styles/utils/sizeStyle";

export type InternalShadowRoundButtonProps = Omit<
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
  Omit<InternalShadowRoundButtonProps, "iconBackgroundSize" | "iconSize"> &
    SizeStyleProps
>`
  display: inline-block;
  ${positionStyle}
  ${sizeStyle}
  ${(props) => css`
    &:hover {
      text-decoration: underline;
      color: ${parseColor(props.$hoverTextColor)};
    }
    &:active {
      color: ${parseColor(props.$defaultTextColor)};
    }
    &:disabled {
      color: ${parseColor(props.$disabledTextColor)};
    }
  `}
`;

const StyledButtonWrapper = styled(OakBox)<{
  $disabledIconBackground: OakCombinedColorToken;
  $hoverIconBackground: OakCombinedColorToken;
  $defaultIconBackground: OakCombinedColorToken;
}>`
  > :first-child:focus-visible .shadow {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }
  > :first-child:hover .shadow {
    box-shadow: ${parseDropShadow("drop-shadow-lemon")};
  }
  > :first-child:active .shadow {
    box-shadow: ${parseDropShadow("drop-shadow-lemon")},
      ${parseDropShadow("drop-shadow-grey")};
  }
  ${(props) => css`
    > :first-child:disabled .icon-container {
      background: ${parseColor(props.$disabledIconBackground)};
    }
    > :first-child:hover .icon-container {
      background: ${parseColor(props.$hoverIconBackground)};
    }
    > :first-child:active .icon-container {
      background: ${parseColor(props.$defaultIconBackground)};
    }
  `}
`;

export const InternalShadowRoundButton = <C extends ElementType = "button">(
  props: InternalShadowRoundButtonProps & PolymorphicPropsWithoutRef<C>,
) => {
  const {
    element = "button",
    children,
    iconName,
    isTrailingIcon,
    isLoading,
    disabled,
    width = "max-content",
    maxWidth,
    iconBackgroundSize,
    iconSize,
    disabledIconBackground,
    disabledTextColor,
    defaultIconColor,
    hoverIconBackground,
    defaultIconBackground,
    disabledIconColor,
    defaultTextColor,
    hoverTextColor,
    className,
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
              ? disabledIconColor
              : defaultIconColor
                ? defaultIconColor
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
        $top="all-spacing-0"
      />

      {isLoading && !disabled ? loader : icon}
    </OakFlex>
  );

  return (
    <StyledButtonWrapper
      className={className}
      $position={"relative"}
      $width={width}
      $maxWidth={maxWidth}
      $disabledIconBackground={disabledIconBackground}
      $hoverIconBackground={hoverIconBackground}
      $defaultIconBackground={defaultIconBackground}
    >
      <StyledInternalButton
        element={element ?? "button"}
        {...rest}
        $hoverTextColor={hoverTextColor}
        $defaultTextColor={defaultTextColor}
        $disabledTextColor={disabledTextColor}
        $color={defaultTextColor}
        $position={"relative"}
        disabled={disabled || isLoading}
      >
        <OakFlex
          $flexDirection={"row"}
          $alignItems={"center"}
          $gap={children ? "space-between-xs" : "space-between-none"}
          $justifyContent="center"
        >
          {!isTrailingIcon && iconLogic}
          <OakSpan $font={"heading-7"}>{children}</OakSpan>
          {isTrailingIcon && iconLogic}
        </OakFlex>
      </StyledInternalButton>
    </StyledButtonWrapper>
  );
};