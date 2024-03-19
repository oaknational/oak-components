import React, { ReactNode, forwardRef, useContext } from "react";
import styled, { css } from "styled-components";

import { RadioContext } from "@/components/molecules/OakRadioGroup/OakRadioGroup";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { FlexStyleProps } from "@/styles/utils/flexStyle";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import {
  OakBox,
  OakBoxProps,
  OakFlex,
  OakFlexProps,
  OakLabel,
  OakLabelProps,
} from "@/components/atoms";
import {
  OakAllSpacingToken,
  OakBorderWidthToken,
  OakCombinedColorToken,
} from "@/styles";

type RadioButtonLabelProps = {
  $labelAlignItems?: FlexStyleProps["$alignItems"];
  $labelGap?: FlexStyleProps["$gap"];
  disabled?: boolean;
} & OakLabelProps;

const RadioButtonLabel = styled(OakLabel)<RadioButtonLabelProps>`
  ${(props) =>
    !props.disabled &&
    css`
      cursor: pointer;
    `}

  display: flex;
  ${responsiveStyle("gap", (props) => props.$labelGap, parseSpacing)}
  ${responsiveStyle("align-items", (props) => props.$labelAlignItems)}
`;

const HiddenRadioButtonInput = styled.input.attrs({
  type: "radio",
})`
  position: absolute;
  opacity: 0;
  ${(props) =>
    !props.disabled &&
    css`
      cursor: pointer;
    `}
`;

type VisibleRadioButtonInputProps = OakFlexProps & {
  $disableFocusRing: boolean;
  $radioInnerSize: OakAllSpacingToken;
  disabled?: boolean;
};

const VisibleRadioButtonInput = styled(OakFlex)<VisibleRadioButtonInputProps>`
  border-radius: 50%;

  ${(props) =>
    !props.$disableFocusRing &&
    css`
      ${HiddenRadioButtonInput}:focus-visible ~ &::before {
        content: "";
        height: ${parseSpacing("all-spacing-7")};
        width: ${parseSpacing("all-spacing-7")};
        background: "transparent"
        display: block;
        position: absolute;
        border-radius: 50%;
        border: ${parseBorder("border-solid-m")} ${parseColor("grey60")};
        box-shadow: ${`inset 0 0 0 0.13rem ${parseColor("lemon")}`};
      }`}

  ${HiddenRadioButtonInput}:checked ~ &::after {
    content: "";
    height: ${(props) => parseSpacing(props.$radioInnerSize)};
    width: ${(props) => parseSpacing(props.$radioInnerSize)};
    background: ${parseColor("black")};
    position: absolute;
    border-radius: 50%;
    border: ${parseBorder("border-solid-m")} ${parseColor("white")};
  }
`;

// This is a hack to force React to rerender when the disabled prop is changed. Otherwise the pseudo element is not updated.
const DisabledVisibleRadioButtonInput = styled(VisibleRadioButtonInput)`
  ${HiddenRadioButtonInput}:checked ~ &::after {
    content: "";
    height: ${(props) => parseSpacing(props.$radioInnerSize)};
    width: ${(props) => parseSpacing(props.$radioInnerSize)};
    background: ${parseColor("bg-btn-primary-disabled")};
    position: absolute;
    border-radius: 50%;
    border: ${parseBorder("border-solid-m")} ${parseColor("white")};
  }
`;

export type OakRadioButtonProps = {
  id: string;
  label: ReactNode;
  value: string;
  tabIndex?: number;
  "data-testid"?: string;
  disabled?: boolean;
  /**
   * Allows the focus ring to be disabled. This is useful when focus is indicated
   * by other means, such as a border or background color change.
   */
  disableFocusRing?: boolean;
  /**
   * Allows the size of the radio button to be customized.
   */
  radioOuterSize?: OakAllSpacingToken;
  /**
   * Allows the size of the inner "checked" circle of the radio button to be customized.
   */
  radioInnerSize?: OakAllSpacingToken;
  /**
   * Allows the width of the radio button border to be customized.
   */
  radioBorderWidth?: OakBorderWidthToken;
  /**
   * Allows the background color of the radio button to be customized.
   */
  radioBackground?: OakCombinedColorToken;
  /**
   * Allows the width of the radio button border to be customized when the radio button is checked.
   */
  checkedRadioBorderWidth?: OakBorderWidthToken;
} & OakBoxProps &
  RadioButtonLabelProps;

/**
 * A radio button component.
 *
 * Use within `OakRadioGroup` component.
 */
export const OakRadioButton = forwardRef<HTMLInputElement, OakRadioButtonProps>(
  (props, ref) => {
    const radioContext = useContext(RadioContext);
    const { currentValue, name, onValueUpdated } = radioContext;
    const {
      id,
      label,
      value,
      tabIndex,
      disabled,
      $labelGap = "space-between-ssx",
      $labelAlignItems = "center",
      $font = "body-1",
      "data-testid": dataTestId,
      disableFocusRing = false,
      radioInnerSize = "all-spacing-4",
      radioOuterSize = "all-spacing-6",
      radioBorderWidth = "border-solid-m",
      radioBackground = "bg-primary",
      checkedRadioBorderWidth = "border-solid-m",
      ...rest
    } = props;
    const checked = value === currentValue;
    const anyDisabled = disabled || radioContext.disabled;
    const finalRadioBorderWidth = checked
      ? checkedRadioBorderWidth
      : radioBorderWidth;

    return (
      <OakBox {...rest}>
        <RadioButtonLabel
          htmlFor={id}
          $labelAlignItems={$labelAlignItems}
          $labelGap={$labelGap}
          $font={$font}
          data-testid={dataTestId}
          disabled={anyDisabled}
        >
          <HiddenRadioButtonInput
            name={name}
            id={id}
            value={value}
            onChange={onValueUpdated}
            checked={value === currentValue}
            tabIndex={tabIndex}
            disabled={anyDisabled}
            ref={ref}
          />
          {!anyDisabled ? (
            <VisibleRadioButtonInput
              $height={radioOuterSize}
              $width={radioOuterSize}
              $ba={finalRadioBorderWidth}
              $borderColor={"black"}
              $flexGrow={0}
              $flexShrink={0}
              $alignItems={"center"}
              $justifyContent={"center"}
              $background={radioBackground}
              $disableFocusRing={!!disableFocusRing}
              $radioInnerSize={radioInnerSize}
            />
          ) : (
            <DisabledVisibleRadioButtonInput
              $height={radioOuterSize}
              $width={radioOuterSize}
              $ba={finalRadioBorderWidth}
              $borderColor={"bg-btn-primary-disabled"}
              $flexGrow={0}
              $flexShrink={0}
              $alignItems={"center"}
              $justifyContent={"center"}
              $background={radioBackground}
              $disableFocusRing={!!disableFocusRing}
              $radioInnerSize={radioInnerSize}
            />
          )}
          {label}
        </RadioButtonLabel>
      </OakBox>
    );
  },
);

export type OakRadioButtonType = typeof OakRadioButton;
