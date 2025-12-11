import React, { ElementType } from "react";
import styled, { css } from "styled-components";

import {
  OakBox,
  OakBoxProps,
  OakFlex,
  OakSpan,
  OakSvg,
} from "@/components/atoms";
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
import {
  OakAllSpacingToken,
  OakUiRoleToken,
  OakDropShadowToken,
} from "@/styles";
import { SizeStyleProps, sizeStyle } from "@/styles/utils/sizeStyle";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";
import { SpacingStyleProps } from "@/styles/utils/spacingStyle";
import { FlexStyleProps } from "@/styles/utils/flexStyle";
import { TypographyStyleProps } from "@/styles/utils/typographyStyle";

type OakLoadingSpinnerTokenSubset = Extract<
  OakAllSpacingToken,
  "spacing-20" | "spacing-24"
>;

export type InternalShadowRectButtonProps = Omit<
  InternalButtonProps,
  | "$pa"
  | "$ph"
  | "$pv"
  | "$pt"
  | "$pb"
  | "$ba"
  | "$borderRadius"
  | "$borderColor"
  | "$background"
  | "$color"
> & {
  iconName?: OakIconName;
  iconAriaHidden?: boolean;
  /**
   *  we can set a custom icon if we want different sizes and padding
   */
  iconOverride?: React.ReactNode;
  isTrailingIcon?: boolean;
  /**
   *  we can arrange the icon vertically or horizontally
   */
  iconLayout?: FlexStyleProps["$flexDirection"];
  /**
   *  we can adjust the gap between the icon and the text
   */
  loadingSpinnerSize?: OakLoadingSpinnerTokenSubset;
  /**
   * whether the button should show a selected state
   */
  selected?: boolean;
  iconGap?: FlexStyleProps["$gap"];
  defaultTextColor: OakUiRoleToken;
  defaultBackground: OakUiRoleToken;
  defaultBorderColor: OakUiRoleToken;
  hoverTextColor: OakUiRoleToken;
  hoverBackground: OakUiRoleToken;
  hoverBorderColor: OakUiRoleToken;
  hoverUnderline?: boolean;
  disabledBackground: OakUiRoleToken;
  disabledBorderColor: OakUiRoleToken;
  disabledTextColor: OakUiRoleToken;
  width?: SizeStyleProps["$width"];
  maxWidth?: SizeStyleProps["$maxWidth"];
  hoverShadow?: OakDropShadowToken | null;
  pv?: SpacingStyleProps["$pv"];
  ph?: SpacingStyleProps["$ph"];
  font?: TypographyStyleProps["$font"];
  innerWidth?: SizeStyleProps["$width"];
  textAlign?: TypographyStyleProps["$textAlign"];
} & PositionStyleProps;

const StyledInternalButton = styled(InternalButton)<
  SizeStyleProps & {
    $defaultTextColor: OakUiRoleToken;
    $defaultBackground: OakUiRoleToken;
    $defaultBorderColor: OakUiRoleToken;
    $hoverTextColor: OakUiRoleToken;
    $hoverBackground: OakUiRoleToken;
    $hoverBorderColor: OakUiRoleToken;
    $hoverUnderline?: boolean;
    $disabledBackground: OakUiRoleToken;
    $disabledBorderColor: OakUiRoleToken;
    $disabledTextColor: OakUiRoleToken;
  }
>`
  ${positionStyle}
  ${sizeStyle}
  display: inline-block;
  ${(props) => css`
    &:hover {
      text-decoration: ${props.$hoverUnderline ? "underline" : "none"};
      color: ${parseColor(props.$hoverTextColor)};
      background: ${parseColor(props.$hoverBackground)};
      border-color: ${parseColor(props.$hoverBorderColor)};
      [data-state="selected"] {
        display: none;
      }
    }
    &:active {
      background: ${parseColor(props.$defaultBackground)};
      border-color: ${parseColor(props.$defaultBorderColor)};
      color: ${parseColor(props.$defaultTextColor)};
      [data-state="selected"] {
        display: none;
      }
    }
    &:disabled {
      background: ${parseColor(props.$disabledBackground)};
      border-color: ${parseColor(props.$disabledBorderColor)};
      color: ${parseColor(props.$disabledTextColor)};
      [data-state="selected"] {
        display: none;
      }
    }
  `}
`;

const StyledOakSvg = styled(OakSvg)`
  bottom: -3px;
  left: 0px;
  position: absolute;
  height: 5px;
  color: ${parseColor("border-decorative1")};
`;

export const StyledButtonWrapper = styled(OakBox)<
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
    iconAriaHidden,
    isTrailingIcon,
    isLoading,
    disabled,
    width = "max-content",
    maxWidth,
    innerWidth,
    defaultBackground,
    defaultBorderColor,
    defaultTextColor,
    disabledTextColor,
    hoverTextColor,
    hoverBackground,
    hoverBorderColor,
    hoverUnderline,
    disabledBackground,
    disabledBorderColor,
    className,
    hoverShadow = "drop-shadow-lemon",
    pv = "spacing-12",
    ph = "spacing-16",
    pt,
    pb,
    iconLayout = "row",
    iconGap = "spacing-8",
    iconOverride,
    font = "heading-7",
    textAlign = "left",
    loadingSpinnerSize = "spacing-24",
    selected,
    ...rest
  } = props;

  const icon = iconOverride ?? (
    <>
      {iconName && (
        <OakIcon
          iconName={iconName}
          $width={"spacing-24"}
          $height={"spacing-24"}
          $colorFilter={props.disabled ? disabledTextColor : defaultTextColor}
          aria-hidden={iconAriaHidden}
        />
      )}
    </>
  );

  const loader = (
    <OakBox $width={loadingSpinnerSize} $height={loadingSpinnerSize}>
      <OakLoadingSpinner $width={loadingSpinnerSize} />
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
        $top="spacing-0"
      />
      <OakBox
        className="yellow-shadow"
        $position={"absolute"}
        $borderRadius={"border-radius-s"}
        $width={"100%"}
        $height={"100%"}
        $top="spacing-0"
      />
      <StyledInternalButton
        element={element}
        className="internal-button"
        $ba={"border-solid-m"}
        $background={defaultBackground}
        $borderColor={defaultBorderColor}
        $color={defaultTextColor}
        $pv={pv}
        $ph={ph}
        $pt={pt}
        $pb={pb}
        $borderRadius={"border-radius-s"}
        $position={"relative"}
        disabled={disabled || isLoading}
        $width={"100%"}
        $height={"100%"}
        $hoverTextColor={hoverTextColor}
        $hoverBackground={hoverBackground}
        $hoverBorderColor={hoverBorderColor}
        $hoverUnderline={hoverUnderline}
        $defaultTextColor={defaultTextColor}
        $defaultBackground={defaultBackground}
        $defaultBorderColor={defaultBorderColor}
        $disabledTextColor={disabledTextColor}
        $disabledBackground={disabledBackground}
        $disabledBorderColor={disabledBorderColor}
        {...rest}
      >
        <OakFlex
          $flexDirection={iconLayout}
          $alignItems={"center"}
          $gap={iconGap}
          $justifyContent={"center"}
          $width={innerWidth}
        >
          {!isTrailingIcon && iconLogic}
          <OakBox $position={"relative"}>
            <OakSpan $font={font} $textAlign={textAlign}>
              {children}
            </OakSpan>
            {selected && (
              <StyledOakSvg name="underline" data-state="selected" />
            )}
          </OakBox>
          {isTrailingIcon && iconLogic}
        </OakFlex>
      </StyledInternalButton>
    </StyledButtonWrapper>
  );
};
