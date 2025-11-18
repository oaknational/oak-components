import React, { ChangeEventHandler, ReactNode } from "react";
import styled, { css } from "styled-components";

import { OakFlex, OakIcon } from "@/components/atoms";
import { OakCombinedColorToken, OakDropShadowToken } from "@/styles";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { borderStyle, BorderStyleProps } from "@/styles/utils/borderStyle";
import { DisplayStyleProps } from "@/styles/utils/displayStyle";
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
import { colorStyle, ColorStyleProps } from "@/styles/utils/colorStyle";

const IconUpWrapper = styled(OakFlex)`
  user-select: none;
`;
const IconDownWrapper = styled(OakFlex)`
  user-select: none;
`;

const StyledWrapper = styled(OakFlex)`
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
    ColorStyleProps &
    BorderStyleProps & {
      $focusRingDropShadows: OakDropShadowToken[];
      $hoverBackground?: OakCombinedColorToken;
      $readOnly?: boolean;
      $readOnlyBorderColor?: OakCombinedColorToken;
      $readOnlyColor?: OakCombinedColorToken;
      $disabledBackgroundColor?: OakCombinedColorToken;
      $disabledColor?: OakCombinedColorToken;
      $disabled?: boolean;
    }
>`
  border: none;
  outline: none;
  width: 100%;

  appearance: none;
  appearance: base-select;

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

  border-radius: ${parseBorderRadius("border-radius-s")};

  &:focus:not(:open) {
    box-shadow: ${(props) =>
      props.$focusRingDropShadows
        .map((dropShadow) => parseDropShadow(dropShadow))
        .join(",")};
  }

  &::picker(select) {
    appearance: none;
    appearance: base-select;
    border-bottom-left-radius: ${parseBorderRadius("border-radius-s")};
    border-bottom-right-radius: ${parseBorderRadius("border-radius-s")};
    overflow: visible;
    ${borderStyle};
    ${colorStyle};
    border-top: none;
  }

  ::picker(select) {
    top: calc(anchor(bottom) - 2px);
    left: anchor(0);
  }

  ::picker-icon {
    display: none;
  }

  ${paddingStyle};
  ${borderStyle};
  ${colorStyle};

  &:open {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;

    ::picker(select) {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
  }
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
};

const NativeOptGroup = styled("optgroup")<PaddingStyleProps>``;

const NativeOption = styled("option")<
  PaddingStyleProps & {
    $focusRingDropShadows?: OakDropShadowToken[];
    $asDefault?: boolean;
  }
>`
  cursor: pointer;
  border: none;
  color: ${parseColor("text-primary")};
  outline: none;
  font: ${(props) =>
    parseFontSize(props.$asDefault ? "body-2" : "body-2-bold")};
  font-weight: ${(props) =>
    parseFontWeight(props.$asDefault ? "body-2" : "body-2-bold")};
  border-radius: ${parseBorderRadius("border-radius-xs")};

  &:focus {
    box-shadow: ${(props) =>
      props.$focusRingDropShadows
        ?.map((dropShadow) => parseDropShadow(dropShadow))
        .join(",") ?? "none"};
  }

  &:disabled {
    background: ${parseColor("bg-neutral-stronger")};
    color: ${parseColor("text-subdued")};
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    background: initial;
  }

  &::checkmark {
    display: none;
  }

  ${NativeOptGroup} & {
    padding-left: ${parseSpacing("spacing-32")};
  }

  ${paddingStyle};
  ${colorStyle};
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
    <NativeOptGroup label={label} $ph={"spacing-16"} $pv={"spacing-8"}>
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
    <NativeLegend $ph={"spacing-16"} $pv={"spacing-8"}>
      {children}
    </NativeLegend>
  );
}

export type OakOptionProps = {
  children: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  value?: string;
  asDefault?: boolean;
  $focusRingDropShadows?: OakDropShadowToken[];
};
export function OakOption({
  selected,
  disabled,
  value,
  children,
  asDefault,
  $focusRingDropShadows = [
    "drop-shadow-centered-lemon",
    "drop-shadow-centered-grey",
  ],
}: OakOptionProps) {
  return (
    <NativeOption
      $asDefault={asDefault}
      value={value}
      disabled={disabled}
      selected={selected}
      $ph={"spacing-16"}
      $pv={"spacing-8"}
      $focusRingDropShadows={$focusRingDropShadows}
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
    <StyledWrapper
      $display={$display}
      $position={"relative"}
      $overflow={"hidden"}
      $alignItems="center"
      $gap="spacing-16"
    >
      <NativeSelect
        key={props.value}
        $pa={"spacing-16"}
        $background={finalBackgroundColor}
        $borderColor={finalBorderColor}
        $pr={"spacing-56"}
        $focusRingDropShadows={focusRingDropShadows}
        $ba="border-solid-m"
        disabled={!!props.disabled}
        $borderRadius="border-radius-s"
        $hoverBackground={hoverBackground}
        $disabledBackgroundColor={disabledBackgroundColor}
        $readOnlyBorderColor={finalReadOnlyBorderColor}
        $disabledColor={disabledColor}
        $readOnlyColor={readOnlyColor}
        $color={color}
        $disabled={!!props.disabled}
        $readOnly={!!props.readOnly}
      >
        <button>
          <selectedcontent></selectedcontent>
        </button>
        {children}
      </NativeSelect>
      <IconUpWrapper
        $position={"absolute"}
        $top={"spacing-0"}
        $bottom={"spacing-0"}
        $right={"spacing-12"}
        $pointerEvents={"none"}
        $alignContent={"center"}
      >
        <OakIcon iconName="chevron-up" />
      </IconUpWrapper>
      <IconDownWrapper
        $position={"absolute"}
        $top={"spacing-0"}
        $bottom={"spacing-0"}
        $right={"spacing-12"}
        $pointerEvents={"none"}
        $alignContent={"center"}
      >
        <OakIcon iconName="chevron-down" />
      </IconDownWrapper>
    </StyledWrapper>
  );
}
