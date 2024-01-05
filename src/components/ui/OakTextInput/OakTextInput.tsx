import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

import { parseColor } from "@/styles/helpers/parseColor";
import {
  InternalTextInput,
  InternalTextInputProps,
} from "@/components/base/InternalTextInput";
import { OakFlex, OakIcon, OakIconName } from "@/components/base";
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
};

export type OakTextInputProps = {
  id?: string;
  type?: "text" | "password" | "number" | "email" | "tel";
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
  width?: SizeStyleProps["$width"];
  maxWidth?: SizeStyleProps["$maxWidth"];
} & Pick<InternalTextInputProps, "onInitialFocus" | "placeholder">;

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

  @media (hover: hover) {
    &:hover:not(:focus-within) {
      background: ${(props) => parseColor(props.$hoverBackground)};
    }
  }

  &:has(input:read-only) {
    border-color: ${(props) => parseColor(props.$readOnlyBorderColor)};
    color: ${(props) => parseColor(props.$readOnlyColor)};
  }

  &:has(input:disabled) {
    background: ${(props) => parseColor(props.$disabledBackgroundColor)};
    color: ${(props) => parseColor(props.$disabledColor)};
  }
`;

/**
 * Default input which can be extended to create specialised inputs.
 */
export const OakTextInput = ({
  type = "text",
  borderColor = "border-primary",
  readOnlyBorderColor = "border-neutral",
  focusRingDropShadows = [
    "drop-shadow-centered-yellow",
    "drop-shadow-centered-grey",
  ],
  background = "bg-primary",
  hoverBackground = "bg-neutral",
  disabledBackgroundColor = "bg-neutral",
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
  isTrailingIcon = false,
  width,
  maxWidth,
  ...props
}: OakTextInputProps) => {
  let finalBorderColor: OakCombinedColorToken;
  let finalIconColor: OakCombinedColorToken;
  let finalReadOnlyBorderColor: OakCombinedColorToken;

  switch (validity) {
    case "valid":
      finalBorderColor = validBorderColor;
      finalIconColor = validIconColor;
      finalReadOnlyBorderColor = validBorderColor;
      break;
    case "invalid":
      finalBorderColor = invalidBorderColor;
      finalIconColor = invalidIconColor;
      finalReadOnlyBorderColor = invalidBorderColor;
      break;
    default:
      finalBorderColor = borderColor;
      finalIconColor = iconColor;
      finalReadOnlyBorderColor = readOnlyBorderColor;
      break;
  }

  return (
    <StyledTextInputWrapper
      $width="fit-content"
      $height="fit-content"
      $borderStyle="solid"
      $borderRadius="border-radius-s"
      $ba="border-solid-m"
      $borderColor={finalBorderColor}
      $focusRingDropShadows={focusRingDropShadows}
      $background={background}
      $hoverBackground={hoverBackground}
      $disabledBackgroundColor={disabledBackgroundColor}
      $readOnlyBorderColor={finalReadOnlyBorderColor}
      $disabledColor={disabledColor}
      $readOnlyColor={readOnlyColor}
      $color={color}
      $alignItems="center"
      $position="relative"
      $gap="space-between-s"
      $ph="inner-padding-l"
      onClick={(event) => {
        event.currentTarget.querySelector("input")?.focus();
      }}
    >
      {!isTrailingIcon && iconName && (
        <OakIcon
          iconName={iconName}
          $colorFilter={finalIconColor}
          $pointerEvents="none"
        />
      )}
      <InternalTextInput
        type={type}
        {...props}
        $width={width}
        $maxWidth={maxWidth}
        $pv="inner-padding-l"
        $height="all-spacing-12"
      />
      {isTrailingIcon && iconName && (
        <OakIcon
          iconName={iconName}
          $colorFilter={finalIconColor}
          $pointerEvents="none"
        />
      )}
    </StyledTextInputWrapper>
  );
};
