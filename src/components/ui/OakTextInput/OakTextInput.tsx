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

export type OakTextInputProps = Pick<
  InternalTextInputProps,
  "$width" | "$maxWidth" | "onInitialFocus"
> &
  Partial<StyledTextInputWrapperProps> & {
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
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Alters the appearance of the input field to indicate whether the input is valid or invalid.
     */
    validity?: "valid" | "invalid";
    $iconColor?: OakCombinedColorToken;
    $validBorderColor?: OakCombinedColorToken;
    $invalidBorderColor?: OakCombinedColorToken;
    $validIconColor?: OakCombinedColorToken;
    $invalidIconColor?: OakCombinedColorToken;
    startEnhancerIconName?: OakIconName;
    endEnhancerIconName?: OakIconName;
  };

const StyledTextInputWrapper = styled(OakFlex)<StyledTextInputWrapperProps>`
  cursor: default;

  &:focus-within:not(:has(input:disabled, input:read-only)) {
    cursor: text;
    box-shadow: ${(props) =>
      props.$focusRingDropShadows
        .map((dropShadow) => parseDropShadow(dropShadow))
        .join(",")};
  }

  background: ${(props) => parseColor(props.$background)};

  @media (hover: hover) {
    &:hover:not(:focus-within, :has(input:read-only)) {
      cursor: text;
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
  $borderColor = "border-primary",
  $readOnlyBorderColor = "border-neutral",
  $focusRingDropShadows = [
    "drop-shadow-centered-yellow",
    "drop-shadow-centered-grey",
  ],
  $background = "bg-primary",
  $hoverBackground = "bg-neutral",
  $disabledBackgroundColor = "bg-neutral",
  $color = "text-primary",
  $disabledColor = "text-disabled",
  $readOnlyColor = "text-subdued",
  validity,
  $iconColor = "icon-inverted",
  $validBorderColor = "border-success",
  $invalidBorderColor = "border-error",
  $validIconColor = "icon-success",
  $invalidIconColor = "border-error",
  startEnhancerIconName,
  endEnhancerIconName,
  ...props
}: OakTextInputProps) => {
  let borderColor: OakCombinedColorToken;
  let iconColor: OakCombinedColorToken;

  switch (validity) {
    case "valid":
      borderColor = $validBorderColor;
      iconColor = $validIconColor;
      break;
    case "invalid":
      borderColor = $invalidBorderColor;
      iconColor = $invalidIconColor;
      break;
    default:
      borderColor = $borderColor;
      iconColor = $iconColor;
      break;
  }

  return (
    <StyledTextInputWrapper
      $width="fit-content"
      $height="fit-content"
      $borderStyle="solid"
      $borderRadius="border-radius-s"
      $ba="border-solid-m"
      $borderColor={borderColor}
      $focusRingDropShadows={$focusRingDropShadows}
      $background={$background}
      $hoverBackground={$hoverBackground}
      $disabledBackgroundColor={$disabledBackgroundColor}
      $readOnlyBorderColor={$readOnlyBorderColor}
      $disabledColor={$disabledColor}
      $readOnlyColor={$readOnlyColor}
      $color={$color}
      $alignItems="center"
      $position="relative"
      $gap="space-between-s"
      $ph="inner-padding-s"
      onClick={(event) => {
        event.currentTarget.querySelector("input")?.focus();
      }}
    >
      {startEnhancerIconName && (
        <OakIcon
          iconName={startEnhancerIconName}
          $colorFilter={iconColor}
          $pointerEvents="none"
        />
      )}
      <InternalTextInput
        type={type}
        {...props}
        $pv="inner-padding-l"
        $height="all-spacing-12"
      />
      {endEnhancerIconName && (
        <OakIcon
          iconName={endEnhancerIconName}
          $colorFilter={iconColor}
          $pointerEvents="none"
        />
      )}
    </StyledTextInputWrapper>
  );
};
