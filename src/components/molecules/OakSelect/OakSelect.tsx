import React, { ChangeEventHandler, ReactNode } from "react";
import styled, { css } from "styled-components";

import { OakBox, OakFlex, OakIcon } from "@/components/atoms";
import { InternalTextInputProps } from "@/components/atoms/InternalTextInput";
import { OakCombinedColorToken, OakDropShadowToken } from "@/styles";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { borderStyle, BorderStyleProps } from "@/styles/utils/borderStyle";
import { DisplayStyleProps } from "@/styles/utils/displayStyle";
import { SizeStyleProps } from "@/styles/utils/sizeStyle";
import {
  paddingStyle,
  PaddingStyleProps,
  SpacingStyleProps,
} from "@/styles/utils/spacingStyle";

const IconUpWrapper = styled(OakBox)``;
const IconDownWrapper = styled(OakBox)``;

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
   * Position the icon at the end of the input
   */
  isTrailingIcon?: boolean;
  /**
   * Give the field a highlight to draw attention to it
   */
  isHighlighted?: boolean;
  validBorderColor?: OakCombinedColorToken;
  invalidBorderColor?: OakCombinedColorToken;
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

    select ~ ${IconDownWrapper} {
    display: block;
  }

  select:open ~ ${IconDownWrapper} {
    display: none;
  }

  select ~ ${IconUpWrapper} {
    display: none;
  }

  select:open ~ ${IconUpWrapper} {
    display: block;
  }
`;

const NativeSelect = styled("select")<SpacingStyleProps & BorderStyleProps>`
  border: none;
  background: none;
  outline: none;
  width: 100%;

  appearance: none;
  appearance: base-select;

  &::picker(select) {
    appearance: none;
    appearance: base-select;
    border: solid 2px #ccc;
  }

  ::picker-icon {
    display: none;
  }

  ${paddingStyle};
  ${borderStyle};
`;

export type OakSelectProps = {
  id?: string;
  children: ReactNode;
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
   * Used to target the input element in tests.
   */
  "data-testid"?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Alters the appearance of the input field to indicate whether the input is valid or invalid.
   */
  validity?: "valid" | "invalid";
  /**
   * Give the field a highlight to draw attention to it
   */
  isHighlighted?: boolean;
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
  $display: DisplayStyleProps["$display"];
  /**
   * The width of the surrounding div - the input and icon will fill this
   */
  wrapperWidth?: SizeStyleProps["$width"];
  wrapperMaxWidth?: SizeStyleProps["$maxWidth"];
};

const NativeOptGroup = styled("optgroup")<PaddingStyleProps>``;

const NativeOption = styled("option")<PaddingStyleProps>`
  cursor: pointer;
  border: none;
  color: ${parseColor("text-primary")};

  &::checkmark {
    display: none;
  }

  ${NativeOptGroup} & {
    padding-left: ${parseSpacing("inner-padding-xl2")};
  }

  ${paddingStyle};
`;

const NativeLegend = styled("legend")<PaddingStyleProps>`
  cursor: pointer;
  border: none;
  color: ${parseColor("text-subdued")};

  &::checkmark {
    display: none;
  }

  ${paddingStyle};
`;

export type OakOptGroupProps = {
  label: string;
  children: ReactNode;
};
export function OakOptGroup({ children }: OakOptionProps) {
  return <NativeOptGroup $pa={"inner-padding-m"}>{children}</NativeOptGroup>;
}

export type OakOptGroupLegendProps = {
  label: string;
  children: ReactNode;
};
export function OakOptGroupLegend({ children }: OakOptionProps) {
  return <NativeLegend $pa={"inner-padding-m"}>{children}</NativeLegend>;
}

export type OakOptionProps = {
  children: ReactNode;
};
export function OakOption({ children }: OakOptionProps) {
  return <NativeOption $pa={"inner-padding-m"}>{children}</NativeOption>;
}

export default function OakSelect({
  id,
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
  validBorderColor = "border-success",
  invalidBorderColor = "border-error",
  isHighlighted = false,
  wrapperWidth,
  wrapperMaxWidth,
  $display = "inline-block",
  children,
  ...props
}: OakSelectProps) {
  let finalBackgroundColor = background;
  let finalBorderColor = borderColor;
  let finalReadOnlyBorderColor = readOnlyBorderColor;

  switch (true) {
    case validity === "valid":
      finalBorderColor = validBorderColor;
      finalReadOnlyBorderColor = validBorderColor;
      break;
    case validity === "invalid":
      finalBorderColor = invalidBorderColor;
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
      $gap="space-between-s"
      $disabled={!!props.disabled}
      $readOnly={!!props.readOnly}
      $display={$display}
      onClick={(event) => {
        event.currentTarget.querySelector("input")?.focus();
      }}
    >
      <NativeSelect
        key={props.value}
        $pa={"inner-padding-m"}
        // $ba={"border-solid-m"}
        $borderColor={"black"}
        // $borderRadius={"border-radius-m"}
        $pr={"inner-padding-xl5"}
      >
        <button>
          <selectedcontent></selectedcontent>
        </button>
        {children}
      </NativeSelect>
      <IconUpWrapper
        $position={"absolute"}
        $top={"all-spacing-4"}
        $right={"all-spacing-3"}
        $pointerEvents={"none"}
      >
        <OakIcon iconName="chevron-down" />
      </IconUpWrapper>
      <IconDownWrapper
        $position={"absolute"}
        $top={"all-spacing-4"}
        $right={"all-spacing-3"}
        $pointerEvents={"none"}
      >
        <OakIcon iconName="chevron-up" />
      </IconDownWrapper>
    </StyledTextInputWrapper>
  );
}
