import React, { ChangeEventHandler, ReactNode } from "react";
import styled, { css } from "styled-components";

import { OakFlex, OakIcon } from "@/components/atoms";
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
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import {
  parseFontSize,
  parseFontWeight,
} from "@/styles/helpers/parseTypography";

const IconUpWrapper = styled(OakFlex)`
  user-select: none;
`;
const IconDownWrapper = styled(OakFlex)`
  user-select: none;
`;

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

const NativeSelect = styled("select")<
  SpacingStyleProps &
    BorderStyleProps & { $focusRingDropShadows: OakDropShadowToken[] }
>`
  border: none;
  background: none;
  outline: none;
  width: 100%;

  appearance: none;
  appearance: base-select;

  &:focus-within:not(:open) {
    border-radius: ${parseBorderRadius("border-radius-s")};
    box-shadow: ${(props) =>
      props.$focusRingDropShadows
        .map((dropShadow) => parseDropShadow(dropShadow))
        .join(",")};
  }

  &::picker(select) {
    appearance: none;
    appearance: base-select;
    border: solid 2px ${parseColor("text-primary")};
    border-bottom-left-radius: ${parseBorderRadius("border-radius-s")};
    border-bottom-right-radius: ${parseBorderRadius("border-radius-s")};
    border-top: none;
    overflow: visible;
  }

  ::picker(select) {
    top: calc(anchor(bottom));
    left: anchor(0);
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

const NativeOption = styled("option")<
  PaddingStyleProps & { $focusRingDropShadows?: OakDropShadowToken[] }
>`
  cursor: pointer;
  border: none;
  color: ${parseColor("text-primary")};
  outline: none;

  &:focus {
    border-radius: ${parseBorderRadius("border-radius-xs")};
    box-shadow: ${(props) =>
      props.$focusRingDropShadows
        ?.map((dropShadow) => parseDropShadow(dropShadow))
        .join(",") ?? "none"};
  }

  &:disabled {
    background: ${parseColor("bg-neutral-stronger")};
    color: ${parseColor("text-subdued")};
    font: ${parseFontSize("body-2-bold")};
    font-weight: ${parseFontWeight("body-2-bold")};
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    background: initial;
  }

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
export function OakOptGroup({ label, children }: OakOptGroupProps) {
  return (
    <NativeOptGroup
      label={label}
      $ph={"inner-padding-m"}
      $pv={"inner-padding-xs"}
    >
      <OakOptGroupLegend>{label}</OakOptGroupLegend>
      {children}
    </NativeOptGroup>
  );
}

type OakOptGroupLegendProps = {
  children: ReactNode;
};
function OakOptGroupLegend({ children }: OakOptGroupLegendProps) {
  return (
    <NativeLegend $ph={"inner-padding-m"} $pv={"inner-padding-xs"}>
      {children}
    </NativeLegend>
  );
}

export type OakOptionProps = {
  children: ReactNode;
  disabled?: boolean;
};
export function OakOption({ disabled, children }: OakOptionProps) {
  return (
    <NativeOption
      disabled={disabled}
      $ph={"inner-padding-m"}
      $pv={"inner-padding-xs"}
      $focusRingDropShadows={[
        "drop-shadow-centered-lemon",
        "drop-shadow-centered-grey",
      ]}
    >
      {children}
    </NativeOption>
  );
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
        $focusRingDropShadows={focusRingDropShadows}
        disabled={!!props.disabled}
      >
        <button>
          <selectedcontent></selectedcontent>
        </button>
        {children}
      </NativeSelect>
      <IconUpWrapper
        $position={"absolute"}
        $top={"all-spacing-0"}
        $bottom={"all-spacing-0"}
        $right={"all-spacing-3"}
        $pointerEvents={"none"}
        $alignContent={"center"}
      >
        <OakIcon iconName="chevron-down" />
      </IconUpWrapper>
      <IconDownWrapper
        $position={"absolute"}
        $top={"all-spacing-0"}
        $bottom={"all-spacing-0"}
        $right={"all-spacing-3"}
        $pointerEvents={"none"}
        $alignContent={"center"}
      >
        <OakIcon iconName="chevron-up" />
      </IconDownWrapper>
    </StyledTextInputWrapper>
  );
}
