import React, { ElementType } from "react";
import styled, { css } from "styled-components";

import { OakRoundIconProps } from "@/components/molecules/OakRoundIcon";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";
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
import { FlexStyleProps } from "@/styles/utils/flexStyle";

export type InternalShadowIconButtonProps = Omit<
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
  hoverIconColor?: OakCombinedColorToken;
  defaultIconColor?: OakRoundIconProps["$colorFilter"];
  disabledIconColor?: OakRoundIconProps["$colorFilter"];
  width?: SizeStyleProps["$width"];
  maxWidth?: SizeStyleProps["$maxWidth"];
} & PositionStyleProps &
  FlexStyleProps;

const StyledInternalButton = styled(InternalButton)<
  InternalShadowIconButtonProps & SizeStyleProps
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

const StyledButtonWrapper = styled(OakFlex)`
  > :first-child:hover .highlight {
    display: block;
  }
  > :first-child:active .highlight {
    display: block;
  }
  > :first-child:active .shadow {
    display: block;
  }
  > :first-child:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
    background: white;
  }
`;

/**
 *
 * A styled button with round icons, not intended to be used directly. 
 * Instead used by OakSmallTertiaryInvertedButton.
 * 
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`

 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
export const InternalShadowIconButton = <C extends ElementType = "button">(
  props: InternalShadowIconButtonProps & PolymorphicPropsWithoutRef<C>,
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
    hoverIconColor,
    disabledTextColor,
    defaultIconColor,
    disabledIconColor,
    defaultTextColor,
    hoverTextColor,
    className,
    $justifyContent,
    ...rest
  } = props;

  const icon = iconName && (
    <OakBox $position="relative">
      <OakIcon
        iconName={iconName}
        $width={"all-spacing-6"}
        $height={"all-spacing-6"}
        $colorFilter={props.disabled ? disabledIconColor : "grey60"}
        $position="absolute"
        $top="all-spacing-1"
        $left="all-spacing-1"
        $display="none"
        className="shadow"
      />
      <OakIcon
        iconName={iconName}
        $width={"all-spacing-6"}
        $height={"all-spacing-6"}
        $colorFilter={props.disabled ? disabledIconColor : "lemon"}
        $position="absolute"
        $display="none"
        $top="all-spacing-05"
        $left="all-spacing-05"
        className="highlight"
      />
      <OakIcon
        iconName={iconName}
        $width={"all-spacing-6"}
        $height={"all-spacing-6"}
        $colorFilter={
          props.disabled
            ? disabledIconColor
            : defaultIconColor
              ? defaultIconColor
              : null
        }
        data-icon-for="button"
      />
    </OakBox>
  );
  const loader = (
    <OakBox $width={"all-spacing-6"} $height={"all-spacing-6"}>
      <OakLoadingSpinner $width={"all-spacing-6"} $color={"text-disabled"} />
    </OakBox>
  );

  const iconLogic = (isLoading || icon) && (
    <OakFlex
      className={"icon-container"}
      $background={props.defaultIconBackground}
      $color={props.defaultTextColor}
      $borderRadius={"border-radius-circle"}
      $position={"relative"}
      $alignItems={"center"}
      $justifyContent={"center"}
    >
      {isLoading && !disabled ? loader : icon}
    </OakFlex>
  );

  return (
    <StyledButtonWrapper
      className={className}
      $position={"relative"}
      $width={width}
      $maxWidth={maxWidth}
      $justifyContent={$justifyContent}
    >
      <StyledInternalButton
        element={element ?? "button"}
        {...rest}
        $hoverTextColor={hoverTextColor}
        $hoverIconColor={hoverIconColor}
        $defaultTextColor={defaultTextColor}
        $disabledTextColor={disabledTextColor}
        $color={defaultTextColor}
        $position={"relative"}
        $borderRadius="border-radius-s"
        disabled={disabled || isLoading}
      >
        <OakFlex
          $flexDirection={"row"}
          $alignItems={"center"}
          $gap={children ? "space-between-sssx" : "space-between-none"}
          $justifyContent="center"
          $pl={isTrailingIcon ? "inner-padding-xs" : "inner-padding-none"}
          $pr={isTrailingIcon ? "inner-padding-none" : "inner-padding-xs"}
        >
          {!isTrailingIcon && iconLogic}
          <OakSpan $font={"heading-light-7"}>{children}</OakSpan>
          {isTrailingIcon && iconLogic}
        </OakFlex>
      </StyledInternalButton>
    </StyledButtonWrapper>
  );
};
