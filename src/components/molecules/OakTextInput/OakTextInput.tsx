import React, { ChangeEventHandler } from "react";
import styled, { css } from "styled-components";

import { parseColor } from "@/styles/helpers/parseColor";
import {
  InternalTextInput,
  InternalTextInputProps,
} from "@/components/atoms/InternalTextInput";
import { OakFlex, OakIcon, OakIconName } from "@/components/atoms";
import { OakCombinedColorToken, OakDropShadowToken } from "@/styles";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { SizeStyleProps } from "@/styles/utils/sizeStyle";

type StyledTextInputWrapperProps = {
  $color: OakCombinedColorToken;
  $hoverBackground: OakCombinedColorToken;
  $background: OakCombinedColorToken;
  $borderColor: OakCombinedColorToken;
  $focusRingDropShadows: OakDropShadowToken[];
  $disabledBackgroundColor: OakCombinedColorToken;
  $readOnlyBorderColor: OakCombinedColorToken;
  $disabledColor: OakCombinedColorToken;
  $readOnlyColor: OakCombinedColorToken;
  $disabled: boolean;
  $readOnly: boolean;
};

export type OakTextInputProps = {
  /**
   * Disables user input and updates the appearance accordingly.
   */
  disabled?: boolean;
  /**
   * Makes the input read-only. Preventing the user from changing the value.
   */
  readOnly?: boolean;
  /**
   * Sets the value. Use this in controlled components;
   */
  value?: string;
  /**
   * Sets the initial value. Use this for an uncontrolled component;
   */
  defaultValue?: string;
  /**
   * Used to target the input element in tests.
   */
  "data-testid"?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Alters the appearance of the input field to indicate whether the input is valid or invalid.
   */
  validity?: "valid" | "invalid";
  /**
   * Adds an icon to the input
   *
   * Defaults to the start of the input
   */
  iconName?: OakIconName;
  /**
   * Position the icon at the end of the input
   */
  isTrailingIcon?: boolean;
  /**
   * Give the field a highlight to draw attention to it
   */
  isHighlighted?: boolean;
  iconColor?: OakCombinedColorToken;
  validBorderColor?: OakCombinedColorToken;
  invalidBorderColor?: OakCombinedColorToken;
  validIconColor?: OakCombinedColorToken;
  invalidIconColor?: OakCombinedColorToken;
  color?: OakCombinedColorToken;
  hoverBackground?: OakCombinedColorToken;
  background?: OakCombinedColorToken;
  borderColor?: OakCombinedColorToken;
  focusRingDropShadows?: OakDropShadowToken[];
  disabledBackgroundColor?: OakCombinedColorToken;
  readOnlyBorderColor?: OakCombinedColorToken;
  disabledColor?: OakCombinedColorToken;
  readOnlyColor?: OakCombinedColorToken;
  highlightBackgroundColor?: OakCombinedColorToken;
  /**
   * The width of the surrounding div - the input and icon will fill this
   */
  wrapperWidth?: SizeStyleProps["$width"];
  wrapperMaxWidth?: SizeStyleProps["$maxWidth"];
  iconAlt?: string;
} & InternalTextInputProps;

const StyledTextInputWrapper = styled(OakFlex)<StyledTextInputWrapperProps>`
  &:hover {
    cursor: text;
  }

  &:focus-within {
    box-shadow: ${(props) =>
      props.$focusRingDropShadows
        .map((dropShadow) => parseDropShadow(dropShadow))
        .join(",")};
  }

  background: ${(props) => parseColor(props.$background)};

  ${(props) =>
    !props.$readOnly &&
    css`
      @media (hover: hover) {
        &:hover:not(:focus-within) {
          background: ${parseColor(props.$hoverBackground)};
        }
      }
    `}

  ${(props) =>
    props.$readOnly &&
    css`
      border-color: ${parseColor(props.$readOnlyBorderColor)};
      color: ${parseColor(props.$readOnlyColor)};
    `}

  ${(props) =>
    props.$disabled &&
    css`
      background: ${parseColor(props.$disabledBackgroundColor)};
      color: ${parseColor(props.$disabledColor)};
      &:hover {
        cursor: not-allowed;
      }
    `}
`;

/**
 * Default input which can be extended to create specialised inputs.
 */
export const OakTextInput = ({
  type = "text",
  borderColor = "border-primary",
  readOnlyBorderColor = "border-neutral",
  focusRingDropShadows = [
    "drop-shadow-centered-lemon",
    "drop-shadow-centered-grey",
  ],
  background = "bg-primary",
  hoverBackground = "bg-neutral",
  disabledBackgroundColor = "bg-neutral",
  highlightBackgroundColor = "bg-decorative5-main",
  color = "text-primary",
  disabledColor = "text-disabled",
  readOnlyColor = "text-subdued",
  validity,
  iconColor = "icon-inverted",
  validBorderColor = "border-success",
  invalidBorderColor = "border-error",
  validIconColor = "icon-success",
  invalidIconColor = "border-error",
  iconName,
  iconAlt,
  isTrailingIcon = false,
  isHighlighted = false,
  wrapperWidth,
  wrapperMaxWidth,
  ...props
}: OakTextInputProps) => {
  let finalBackgroundColor = background;
  let finalBorderColor = borderColor;
  let finalIconColor = iconColor;
  let finalReadOnlyBorderColor = readOnlyBorderColor;

  switch (true) {
    case validity === "valid":
      finalBorderColor = validBorderColor;
      finalIconColor = validIconColor;
      finalReadOnlyBorderColor = validBorderColor;
      break;
    case validity === "invalid":
      finalBorderColor = invalidBorderColor;
      finalIconColor = invalidIconColor;
      finalReadOnlyBorderColor = invalidBorderColor;
      break;
    case isHighlighted:
      finalBackgroundColor = highlightBackgroundColor;
      break;
  }

  return (
    <StyledTextInputWrapper
      $height="fit-content"
      $width={wrapperWidth}
      $maxWidth={wrapperMaxWidth}
      $borderRadius="border-radius-s"
      $ba="border-solid-m"
      $borderColor={finalBorderColor}
      $focusRingDropShadows={focusRingDropShadows}
      $background={finalBackgroundColor}
      $hoverBackground={hoverBackground}
      $disabledBackgroundColor={disabledBackgroundColor}
      $readOnlyBorderColor={finalReadOnlyBorderColor}
      $disabledColor={disabledColor}
      $readOnlyColor={readOnlyColor}
      $color={color}
      $alignItems="center"
      $position="relative"
      $gap="spacing-16"
      $ph="spacing-20"
      $disabled={!!props.disabled}
      $readOnly={!!props.readOnly}
      onClick={(event) => {
        event.currentTarget.querySelector("input")?.focus();
      }}
    >
      {!isTrailingIcon && iconName && (
        <OakIcon
          iconName={iconName}
          $colorFilter={finalIconColor}
          $pointerEvents="none"
          $width={"spacing-32"}
          alt={iconAlt}
        />
      )}
      <OakFlex $flexGrow={1}>
        <InternalTextInput
          type={type}
          $width={"100%"}
          $pv="spacing-20"
          $height="spacing-72"
          {...props}
        />
      </OakFlex>
      {isTrailingIcon && iconName && (
        <OakIcon
          iconName={iconName}
          $colorFilter={finalIconColor}
          $pointerEvents="none"
          $width={"spacing-32"}
          alt={iconAlt}
        />
      )}
    </StyledTextInputWrapper>
  );
};
