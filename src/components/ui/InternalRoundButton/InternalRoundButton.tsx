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
  defaultIconBackground: OakCombinedColorToken;
  defaultIconColor?: OakRoundIconProps["$colorFilter"];
  hoverTextColor: OakCombinedColorToken;
  hoverIconBackground: OakCombinedColorToken;
  disabledIconBackground: OakCombinedColorToken;
  disabledTextColor: OakCombinedColorToken;
  width?: SizeStyleProps["$width"];
  maxWidth?: SizeStyleProps["$maxWidth"];
  disabledIconColor?: OakRoundIconProps["$colorFilter"];
  noHoverShadow?: boolean;
} & PositionStyleProps;

const StyledInternalButton = styled(InternalButton)<
  InternalRoundButtonProps & SizeStyleProps
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
  noHoverShadow?: boolean;
}>`
  .internal-button:focus-visible .grey-shadow {
    box-shadow: ${parseDropShadow("drop-shadow-centered-grey")};
  }
  .internal-button:hover .grey-shadow {
    box-shadow: none;
  }
  .internal-button:active .grey-shadow {
    box-shadow: ${parseDropShadow("drop-shadow-grey")};
  }
  .internal-button:focus-visible .yellow-shadow {
    box-shadow: ${parseDropShadow("drop-shadow-centered-yellow")};
  }
  ${(props) => css`
    .internal-button:hover .yellow-shadow {
      box-shadow: ${props.noHoverShadow === true
        ? "none"
        : parseDropShadow("drop-shadow-yellow")};
    }
  `}
  .internal-button:active .yellow-shadow {
    box-shadow: ${parseDropShadow("drop-shadow-yellow")};
  }

  ${(props) => css`
    .internal-button:disabled .icon-container {
      background: ${parseColor(props.disabledIconBackground)};
    }
    .internal-button:hover .icon-container {
      background: ${parseColor(props.hoverIconBackground)};
    }
    .internal-button:active .icon-container {
      background: ${parseColor(props.defaultIconBackground)};
    }
  `}
`;

export const InternalRoundButton = (props: InternalRoundButtonProps) => {
  const {
    children,
    iconName,
    isTrailingIcon,
    isLoading,
    disabled,
    width,
    maxWidth,
    ...rest
  } = props;

  const icon = (
    <>
      {iconName && (
        <OakIcon
          iconName={iconName}
          $width={"all-spacing-6"}
          $height={"all-spacing-6"}
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
    <OakBox $width={"all-spacing-6"} $height={"all-spacing-6"}>
      <OakLoadingSpinner $width={"all-spacing-6"} loaderColor="white" />
    </OakBox>
  );
  const iconLogic = (
    <OakFlex
      className={"icon-container"}
      $background={props.defaultIconBackground}
      $color={props.defaultTextColor}
      $borderRadius={"border-radius-circle"}
      $position={"relative"}
      $width={"all-spacing-8"}
      $height={"all-spacing-8"}
      $alignItems={"center"}
      $justifyContent={"center"}
      $minWidth={"all-spacing-8"}
    >
      <OakBox
        className="grey-shadow"
        $position={"absolute"}
        $borderRadius={"border-radius-circle"}
        $width={"100%"}
        $height={"100%"}
      />

      <OakBox
        className="yellow-shadow"
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
      noHoverShadow={props.noHoverShadow}
      hoverIconBackground={props.hoverIconBackground}
      defaultIconBackground={props.defaultIconBackground}
    >
      <StyledInternalButton
        className="internal-button"
        {...rest}
        $color={props.defaultTextColor}
        $pv={"inner-padding-xs"}
        $ph={"inner-padding-s"}
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
