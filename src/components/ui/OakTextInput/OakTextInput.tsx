import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

import { parseColor } from "@/styles/helpers/parseColor";
import {
  InternalTextInput,
  InternalTextInputProps,
} from "@/components/base/InternalTextInput";
import { OakFlex } from "@/components/base";
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
     * Disables input updating the appearance accordingly.
     */
    disabled?: boolean;
    /**
     * Marks the input as read-only. Preventing the user from changing the value.
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
  };

const StyledTextInputWrapper = styled(OakFlex)<StyledTextInputWrapperProps>`
  &:focus-within:not(:has(:disabled, :read-only)) {
    box-shadow: ${(props) =>
      props.$focusRingDropShadows
        .map((dropShadow) => parseDropShadow(dropShadow))
        .join(",")};
  }

  background: ${(props) => parseColor(props.$background)};

  @media (hover: hover) {
    &:hover:not(:focus-within, :has(:read-only)) {
      background: ${(props) => parseColor(props.$hoverBackground)};
    }
  }

  &:has(:read-only) {
    border-color: ${(props) => parseColor(props.$readOnlyBorderColor)};
    color: ${(props) => parseColor(props.$readOnlyColor)};
  }

  &:has(:disabled) {
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
  ...props
}: OakTextInputProps) => {
  return (
    <StyledTextInputWrapper
      $width="fit-content"
      $height="fit-content"
      $borderStyle="solid"
      $borderRadius="border-radius-s"
      $ba="border-solid-m"
      $borderColor={$borderColor}
      $focusRingDropShadows={$focusRingDropShadows}
      $background={$background}
      $hoverBackground={$hoverBackground}
      $disabledBackgroundColor={$disabledBackgroundColor}
      $readOnlyBorderColor={$readOnlyBorderColor}
      $disabledColor={$disabledColor}
      $readOnlyColor={$readOnlyColor}
      $color={$color}
    >
      <InternalTextInput
        type={type}
        {...props}
        $pa="inner-padding-l"
        $height="all-spacing-12"
      />
    </StyledTextInputWrapper>
  );
};
