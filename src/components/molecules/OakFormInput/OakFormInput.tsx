import React, { ChangeEventHandler } from "react";
import styled, { css } from "styled-components";

import { parseColor } from "@/styles/helpers/parseColor";
import {
  InternalTextInput,
  InternalTextInputProps,
} from "@/components/atoms/InternalTextInput";
import { OakFlex } from "@/components/atoms";
import { OakCombinedColorToken } from "@/styles";
import { SizeStyleProps } from "@/styles/utils/sizeStyle";

type StyledTextInputWrapperProps = {
  $disabled: boolean;
  $color: OakCombinedColorToken;
  $background: OakCombinedColorToken;
  $borderColor: OakCombinedColorToken;
  $hoverBackground: OakCombinedColorToken;
  $hoverBorderColor: OakCombinedColorToken;
  $focusBorderColor: OakCombinedColorToken;
  $focusBackgroundColor: OakCombinedColorToken;
  $disabledColor: OakCombinedColorToken;
  $disabledBorderColor: OakCombinedColorToken;
  $disabledBackgroundColor: OakCombinedColorToken;
};

export type OakFormInputProps = {
  /**
   * Disables user input and updates the appearance accordingly.
   */
  disabled?: boolean;

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
  /**
   * Callback function that is called when the input value changes.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Alters the appearance of the input field to indicate when the input is invalid.
   */
  invalid?: boolean;
  /**
   * Give the field a highlight to draw attention to it
   */
  invalidBorderColor?: OakCombinedColorToken;
  color?: OakCombinedColorToken;
  background?: OakCombinedColorToken;
  borderColor?: OakCombinedColorToken;
  hoverBackground?: OakCombinedColorToken;
  hoverBorderColor?: OakCombinedColorToken;
  focusBorderColor?: OakCombinedColorToken;
  focusBackgroundColor?: OakCombinedColorToken;
  disabledColor?: OakCombinedColorToken;
  disabledBorderColor?: OakCombinedColorToken;
  disabledBackgroundColor?: OakCombinedColorToken;
  /**
   * The width of the surrounding div - the input will fill this with padding.
   */
  wrapperWidth?: SizeStyleProps["$width"];
  wrapperMaxWidth?: SizeStyleProps["$maxWidth"];
} & InternalTextInputProps;

const StyledTextInputWrapper = styled(OakFlex)<StyledTextInputWrapperProps>`
  &:hover {
    cursor: text;
  }

  background: ${(props) => parseColor(props.$background)};

  &:focus-within {
    border-color: ${(props) => parseColor(props.$focusBorderColor)};
    background: ${(props) => parseColor(props.$focusBackgroundColor)};
  }

  ${(props) => css`
    @media (hover: hover) {
      &:hover:not(:focus-within) {
        background: ${parseColor(props.$hoverBackground)};
        border-color: ${parseColor(props.$hoverBorderColor)};
      }
    }
  `}

  ${(props) =>
    props.$disabled &&
    css`
      background: ${parseColor(props.$disabledBackgroundColor)};
      border-color: ${parseColor(props.$disabledBorderColor)};
      color: ${parseColor(props.$disabledColor)};
      &:hover {
        cursor: not-allowed;
      }
    `}
`;

/**
 * Default input which can be extended to create specialised inputs.
 */
export const OakFormInput = ({
  type = "text",
  borderColor = "border-neutral-lighter",
  focusBorderColor = "border-primary",
  focusBackgroundColor = "bg-primary",
  background = "bg-primary",
  hoverBackground = "bg-neutral",
  hoverBorderColor = "border-neutral",
  disabledBackgroundColor = "bg-neutral",
  color = "text-primary",
  disabledBorderColor = "border-neutral-lighter",
  disabledColor = "text-disabled",
  invalid = false,
  invalidBorderColor = "border-error",
  wrapperWidth,
  wrapperMaxWidth,
  ...props
}: OakFormInputProps) => {
  return (
    <StyledTextInputWrapper
      $height="fit-content"
      $width={wrapperWidth}
      $maxWidth={wrapperMaxWidth}
      $borderRadius="border-radius-m"
      $ba="border-solid-m"
      $alignItems="center"
      $position="relative"
      $pa="inner-padding-xs"
      $font="body-2"
      $color={color}
      $borderColor={invalid ? invalidBorderColor : borderColor}
      $background={background}
      $hoverBackground={hoverBackground}
      $hoverBorderColor={hoverBorderColor}
      $disabledColor={disabledColor}
      $disabledBackgroundColor={disabledBackgroundColor}
      $disabledBorderColor={disabledBorderColor}
      $focusBorderColor={focusBorderColor}
      $focusBackgroundColor={focusBackgroundColor}
      $disabled={!!props.disabled}
      onClick={(event) => {
        event.currentTarget.querySelector("input")?.focus();
      }}
    >
      <InternalTextInput
        type={type}
        $width={"100%"}
        aria-invalid={invalid}
        {...props}
      />
    </StyledTextInputWrapper>
  );
};
