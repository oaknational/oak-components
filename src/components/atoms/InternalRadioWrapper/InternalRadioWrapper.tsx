import React from "react";
import styled, { css } from "styled-components";

import { InternalRadio } from "@/components/atoms/InternalRadio";
import { OakFlex, OakFlexProps } from "@/components/atoms/OakFlex";
import {
  OakAllSpacingToken,
  OakBorderWidthToken,
  OakCombinedColorToken,
} from "@/styles";
import { ResponsiveValues } from "@/styles/utils/responsiveStyle";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseColor } from "@/styles/helpers/parseColor";

export type InternalRadioWrapperProps = {
  size?: ResponsiveValues<OakAllSpacingToken>;
  internalRadio: React.JSX.Element;
  checked?: boolean;
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
  /**
   * Allows the borderColor of the radio button border to be customized.
   */
  radioBorderColor?: OakCombinedColorToken;
};

type VisibleRadioButtonInputProps = OakFlexProps & {
  $disableFocusRing: boolean;
  $radioInnerSize: OakAllSpacingToken;
  disabled?: boolean;
};

// Extracted from <./src/components/molecules/OakRadioButton/OakRadioButton.tsx>
const VisibleRadioButtonInput = styled(OakFlex)<VisibleRadioButtonInputProps>`
  border-radius: 50%;

  ${(props) =>
    !props.$disableFocusRing &&
    css`
      ${InternalRadio}:focus-visible ~ &::before {
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

  ${InternalRadio}:checked ~ &::after {
    content: "";
    height: ${(props) => parseSpacing(props.$radioInnerSize)};
    width: ${(props) => parseSpacing(props.$radioInnerSize)};
    background: ${parseColor("black")};
    position: absolute;
    border-radius: 50%;
    border: ${parseBorder("border-solid-m")} ${parseColor("white")};
  }
`;

// Extracted from <./src/components/molecules/OakRadioButton/OakRadioButton.tsx>
// This is a hack to force React to rerender when the disabled prop is changed. Otherwise the pseudo element is not updated.
const DisabledVisibleRadioButtonInput = styled(VisibleRadioButtonInput)`
  ${InternalRadio}:checked ~ &::after {
    content: "";
    height: ${(props) => parseSpacing(props.$radioInnerSize)};
    width: ${(props) => parseSpacing(props.$radioInnerSize)};
    background: ${parseColor("bg-btn-primary-disabled")};
    position: absolute;
    border-radius: 50%;
    border: ${parseBorder("border-solid-m")} ${parseColor("white")};
  }
`;

/**
 *
 * This component is a wrapper for the InternalRadio component. It allows for customisable icons.
 *
 * NB. size must have the same value as the InternalRadio width and height
 *
 *
 */
export const InternalRadioWrapper = (props: InternalRadioWrapperProps) => {
  const {
    size = "all-spacing-6",
    internalRadio,
    disabled,
    disableFocusRing = false,
    radioInnerSize = "all-spacing-4",
    radioOuterSize = "all-spacing-6",
    radioBorderWidth = "border-solid-m",
    radioBorderColor = "black",
    radioBackground = "bg-primary",
    checkedRadioBorderWidth = "border-solid-m",
    checked,
  } = props;
  const finalRadioBorderWidth = checked
    ? checkedRadioBorderWidth
    : radioBorderWidth;

  return (
    <OakFlex $position="relative" $width={size} $height={size} $flexShrink={0}>
      {internalRadio}
      {!disabled ? (
        <VisibleRadioButtonInput
          $height={radioOuterSize}
          $width={radioOuterSize}
          $ba={finalRadioBorderWidth}
          $borderColor={radioBorderColor}
          $flexGrow={0}
          $flexShrink={0}
          $alignItems={"center"}
          $justifyContent={"center"}
          $background={radioBackground}
          $disableFocusRing={!!disableFocusRing}
          $radioInnerSize={radioInnerSize}
          $position={"absolute"}
          $top={"all-spacing-0"}
          $left={"all-spacing-0"}
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
          $position={"absolute"}
          $top={"all-spacing-0"}
          $left={"all-spacing-0"}
        />
      )}
    </OakFlex>
  );
};
