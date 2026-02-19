import React, { ElementType } from "react";
import styled, { css } from "styled-components";

import { parseColorFilter } from "@/styles/helpers/parseColorFilter";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakSpan } from "@/components/typography/OakSpan";
import {
  InternalButton,
  InternalButtonProps,
} from "@/components/internal-components/InternalButton";
import { OakIcon, OakIconName } from "@/components/images-and-icons/OakIcon";
import { OakLoadingSpinner } from "@/components/messaging-and-feedback/OakLoadingSpinner";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import {
  PositionStyleProps,
  positionStyle,
} from "@/styles/utils/positionStyle";
import { FlexStyleProps } from "@/styles/utils/flexStyle";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakUiRoleToken, OakDropShadowToken } from "@/styles";
import { SizeStyleProps, sizeStyle } from "@/styles/utils/sizeStyle";
import { OakLoadingSpinnerTokenSubset } from "@/styles/theme/spacing";

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
  defaultTextColor: OakUiRoleToken;
  defaultIconColor?: OakUiRoleToken;
  defaultIconBackground: OakUiRoleToken;
  defaultIconBorderColor?: OakUiRoleToken;
  hoverTextColor: OakUiRoleToken;
  hoverIconColor?: OakUiRoleToken;
  hoverIconBackground: OakUiRoleToken;
  hoverIconBorderColor?: OakUiRoleToken;
  disabledTextColor: OakUiRoleToken;
  disabledIconColor?: OakUiRoleToken;
  disabledIconBackground: OakUiRoleToken;
  disabledIconBorderColor?: OakUiRoleToken;
  iconName?: OakIconName;
  isTrailingIcon?: boolean;
  width?: SizeStyleProps["$width"];
  maxWidth?: SizeStyleProps["$maxWidth"];
  iconBackgroundSize: SizeStyleProps["$width"];
  iconSize: SizeStyleProps["$width"];
  iconGap?: FlexStyleProps["$gap"];
  loadingSpinnerSize?: OakLoadingSpinnerTokenSubset;
  hoverDropShadow?: OakDropShadowToken | null;
} & PositionStyleProps;

const StyledInternalButton = styled(InternalButton)<
  InternalShadowRoundButtonProps & SizeStyleProps
>`
  display: inline-block;
  ${positionStyle}
  ${sizeStyle}
  ${(props) => css`
    &:hover {
      text-decoration: underline;
      color: ${parseColor(props.$hoverTextColor)};

      &:not(:active) [data-icon-for="button"] img {
        filter: ${props.$hoverIconColor
          ? parseColorFilter(props.$hoverIconColor)
          : undefined};
      }
    }
    &:active {
      color: ${parseColor(props.$defaultTextColor)};
    }
    &:disabled {
      color: ${parseColor(props.$disabledTextColor)};
    }
  `}
`;

const StyledButtonWrapper = styled(OakFlex)<{
  $defaultIconBackground: OakUiRoleToken;
  $defaultIconBorderColor: OakUiRoleToken;
  $hoverIconBackground: OakUiRoleToken;
  $hoverIconBorderColor: OakUiRoleToken;
  $disabledIconBackground: OakUiRoleToken;
  $hoverDropShadow: OakDropShadowToken | null;
}>`
  ${(props) => css`
    > :first-child:focus-visible .shadow {
      box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
        ${parseDropShadow("drop-shadow-centered-grey")};
    }
    > :first-child:hover .shadow {
      box-shadow: ${parseDropShadow(
        props.$hoverDropShadow /*"drop-shadow-lemon"*/,
      )};
    }
    > :first-child:active .shadow {
      box-shadow: ${parseDropShadow("drop-shadow-lemon")},
        ${parseDropShadow("drop-shadow-grey")};
    }
  `}
  ${(props) => css`
    > :first-child:disabled .icon-container {
      background: ${parseColor(props.$disabledIconBackground)};
    }
    > :first-child:hover .icon-container {
      background: ${parseColor(props.$hoverIconBackground)};
    }
    > :first-child:hover .icon-container div {
      border-color: ${parseColor(props.$hoverIconBorderColor)};
    }
    > :first-child:active .icon-container {
      background: ${parseColor(props.$defaultIconBackground)};
    }
    > :first-child:active .icon-container div {
      border-color: ${parseColor(props.$defaultIconBorderColor)};
    }
  `}
`;

/**
 *
 * A styled button with round icons, not intended to be used directly. 
 * Instead used by OakTertiaryButton and OakHintButton.
 * 
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`

 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
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
    iconGap = "spacing-12",
    loadingSpinnerSize = iconSize,
    defaultTextColor,
    defaultIconColor,
    defaultIconBackground,
    defaultIconBorderColor,
    hoverTextColor,
    hoverIconColor,
    hoverIconBackground,
    hoverIconBorderColor = defaultIconBorderColor,
    disabledTextColor,
    disabledIconColor = "icon-inverted",
    disabledIconBackground,
    disabledIconBorderColor,
    hoverDropShadow = "drop-shadow-lemon",
    className,
    ...rest
  } = props;

  const icon = iconName && (
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
      data-icon-for="button"
    />
  );
  const loader = (
    <OakBox $width={loadingSpinnerSize} $height={loadingSpinnerSize}>
      <OakLoadingSpinner
        $width={loadingSpinnerSize}
        loaderColor={disabledIconColor}
      />
    </OakBox>
  );

  const iconBorderColor =
    disabled || isLoading ? disabledIconBorderColor : defaultIconBorderColor;

  const iconLogic = (isLoading || icon) && (
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
        $borderColor={iconBorderColor}
        $ba={iconBorderColor ? "border-solid-m" : undefined}
        $width={"100%"}
        $height={"100%"}
        $top="spacing-0"
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
      $defaultIconBackground={defaultIconBackground}
      $defaultIconBorderColor={defaultIconBorderColor ?? defaultIconBackground}
      $hoverIconBackground={hoverIconBackground}
      $hoverIconBorderColor={hoverIconBorderColor ?? hoverIconBackground}
      $disabledIconBackground={disabledIconBackground}
      $hoverDropShadow={hoverDropShadow}
    >
      <StyledInternalButton
        element={element ?? "button"}
        {...rest}
        $defaultTextColor={defaultTextColor}
        $hoverTextColor={hoverTextColor}
        $hoverIconColor={hoverIconColor}
        $disabledTextColor={disabledTextColor}
        $color={defaultTextColor}
        $position={"relative"}
        disabled={disabled || isLoading}
      >
        <OakFlex
          $flexDirection={"row"}
          $alignItems={"center"}
          $gap={children ? iconGap : "spacing-0"}
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
