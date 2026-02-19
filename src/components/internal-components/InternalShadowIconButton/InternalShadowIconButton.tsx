import React, { ElementType } from "react";
import styled, { css } from "styled-components";

import { OakRoundIconProps } from "@/components/images-and-icons/OakRoundIcon";
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
import { parseColor } from "@/styles/helpers/parseColor";
import { OakUiRoleToken } from "@/styles";
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
  defaultTextColor: OakUiRoleToken;
  hoverTextColor: OakUiRoleToken;
  disabledTextColor: OakUiRoleToken;
  hoverIconColor?: OakUiRoleToken;
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
    disabledTextColor,
    defaultIconColor,
    disabledIconColor,
    defaultTextColor,
    hoverTextColor,
    hoverIconColor = defaultIconColor,
    className,
    $justifyContent,
    ...rest
  } = props;

  const icon = iconName && (
    <OakBox $position="relative">
      <OakIcon
        iconName={iconName}
        $width={"spacing-24"}
        $height={"spacing-24"}
        $colorFilter={props.disabled ? disabledIconColor : "icon-subdued"}
        $position="absolute"
        $top="spacing-4"
        $left="spacing-4"
        $display="none"
        className="shadow"
        alt=""
      />
      <OakIcon
        iconName={iconName}
        $width={"spacing-24"}
        $height={"spacing-24"}
        $colorFilter={props.disabled ? disabledIconColor : "icon-promo"}
        $position="absolute"
        $display="none"
        $top="spacing-2"
        $left="spacing-2"
        className="highlight"
        alt=""
      />
      <OakIcon
        iconName={iconName}
        $width={"spacing-24"}
        $height={"spacing-24"}
        $colorFilter={
          props.disabled
            ? disabledIconColor
            : defaultIconColor
              ? defaultIconColor
              : null
        }
        data-icon-for="button"
        alt=""
      />
    </OakBox>
  );
  const loader = (
    <OakBox $width={"spacing-24"} $height={"spacing-24"}>
      <OakLoadingSpinner $width={"spacing-24"} $color={"text-disabled"} />
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
        $hoverIconColor={hoverIconColor ?? defaultIconColor}
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
          $gap={children ? "spacing-4" : "spacing-0"}
          $justifyContent="center"
          $pl={isTrailingIcon ? "spacing-8" : "spacing-0"}
          $pr={isTrailingIcon ? "spacing-0" : "spacing-8"}
        >
          {!isTrailingIcon && iconLogic}
          <OakSpan $font={"heading-light-7"}>{children}</OakSpan>
          {isTrailingIcon && iconLogic}
        </OakFlex>
      </StyledInternalButton>
    </StyledButtonWrapper>
  );
};
