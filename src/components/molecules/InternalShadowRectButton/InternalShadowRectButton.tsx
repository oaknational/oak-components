import React, { ElementType } from "react";
import styled, { css } from "styled-components";

import { OakBox, OakBoxProps, OakFlex, OakSpan } from "@/components/atoms";
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
import { OakCombinedColorToken, OakDropShadowToken } from "@/styles";
import { SizeStyleProps, sizeStyle } from "@/styles/utils/sizeStyle";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";

export type InternalShadowRectButtonProps = Omit<
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
  width?: SizeStyleProps["$width"];
  maxWidth?: SizeStyleProps["$maxWidth"];
  hoverShadow?: OakDropShadowToken | null;
} & PositionStyleProps;

const StyledInternalButton = styled(InternalButton)<
  SizeStyleProps & {
    $defaultTextColor: OakCombinedColorToken;
    $defaultBackground: OakCombinedColorToken;
    $defaultBorderColor: OakCombinedColorToken;
    $hoverTextColor: OakCombinedColorToken;
    $hoverBackground: OakCombinedColorToken;
    $hoverBorderColor: OakCombinedColorToken;
    $disabledBackground: OakCombinedColorToken;
    $disabledBorderColor: OakCombinedColorToken;
    $disabledTextColor: OakCombinedColorToken;
  }
>`
  ${positionStyle}
  ${sizeStyle}
  display: inline-block;
  ${(props) => css`
    &:hover {
      text-decoration: underline;
      color: ${parseColor(props.$hoverTextColor)};
      background: ${parseColor(props.$hoverBackground)};
      border-color: ${parseColor(props.$hoverBorderColor)};
    }
    &:active {
      background: ${parseColor(props.$defaultBackground)};
      border-color: ${parseColor(props.$defaultBorderColor)};
      color: ${parseColor(props.$defaultTextColor)};
    }
    &:disabled {
      background: ${parseColor(props.$disabledBackground)};
      border-color: ${parseColor(props.$disabledBorderColor)};
      color: ${parseColor(props.$disabledTextColor)};
    }
  `}
`;

const StyledButtonWrapper = styled(OakBox)<
  OakBoxProps & {
    $hoverShadow?: OakDropShadowToken | null;
  }
>`
  .grey-shadow:has(+ * + .internal-button:focus-visible) {
    box-shadow: ${parseDropShadow("drop-shadow-centered-grey")};
  }
  .yellow-shadow:has(+ .internal-button:focus-visible) {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")};
  }
  .yellow-shadow:has(+ .internal-button:hover),
  .yellow-shadow:has(+ .internal-button:hover:not(:focus-visible, :active)) {
    box-shadow: ${(props) => parseDropShadow(props.$hoverShadow)};
  }
  .grey-shadow:has(+ * + .internal-button:hover) {
    box-shadow: none;
  }
  .grey-shadow:has(+ * + .internal-button:active) {
    box-shadow: ${parseDropShadow("drop-shadow-grey")};
  }
  .yellow-shadow:has(+ .internal-button:active) {
    box-shadow: ${parseDropShadow("drop-shadow-lemon")};
  }
`;

/**
 *
 * A styled rectangular button, not intended to be used directly. 
 * Instead used by OakPrimaryButton and OakSecondaryButton.
 * 
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`

 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
export const InternalShadowRectButton = <C extends ElementType = "button">(
  props: InternalShadowRectButtonProps & PolymorphicPropsWithoutRef<C>,
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
    defaultBackground,
    defaultBorderColor,
    defaultTextColor,
    disabledTextColor,
    hoverTextColor,
    hoverBackground,
    hoverBorderColor,
    disabledBackground,
    disabledBorderColor,
    className,
    hoverShadow = "drop-shadow-lemon",
    ...rest
  } = props;

  const icon = (
    <>
      {iconName && (
        <OakIcon
          iconName={iconName}
          $width={"all-spacing-6"}
          $height={"all-spacing-6"}
          $colorFilter={props.disabled ? disabledTextColor : defaultTextColor}
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
    <StyledButtonWrapper
      className={className}
      $position={"relative"}
      $width={width}
      $maxWidth={maxWidth}
      $hoverShadow={hoverShadow}
    >
      <OakBox
        className="grey-shadow"
        $position={"absolute"}
        $borderRadius={"border-radius-s"}
        $width={"100%"}
        $height={"100%"}
        $top="all-spacing-0"
      />

      <OakBox
        className="yellow-shadow"
        $position={"absolute"}
        $borderRadius={"border-radius-s"}
        $width={"100%"}
        $height={"100%"}
        $top="all-spacing-0"
      />

      <StyledInternalButton
        element={element}
        className="internal-button"
        $ba={"border-solid-m"}
        $background={defaultBackground}
        $borderColor={defaultBorderColor}
        $color={defaultTextColor}
        $pv={"inner-padding-s"}
        $ph={"inner-padding-m"}
        $borderRadius={"border-radius-s"}
        $position={"relative"}
        disabled={disabled || isLoading}
        $width={"100%"}
        $height={"100%"}
        $hoverTextColor={hoverTextColor}
        $hoverBackground={hoverBackground}
        $hoverBorderColor={hoverBorderColor}
        $defaultTextColor={defaultTextColor}
        $defaultBackground={defaultBackground}
        $defaultBorderColor={defaultBorderColor}
        $disabledTextColor={disabledTextColor}
        $disabledBackground={disabledBackground}
        $disabledBorderColor={disabledBorderColor}
        {...rest}
      >
        <OakFlex
          $flexDirection={"row"}
          $alignItems={"center"}
          $gap="space-between-ssx"
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
