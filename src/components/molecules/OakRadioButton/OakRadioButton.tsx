import React, { ReactNode, forwardRef, useContext } from "react";
import styled, { css } from "styled-components";

import { RadioContext } from "@/components/molecules/OakRadioGroup/OakRadioGroup";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { FlexStyleProps } from "@/styles/utils/flexStyle";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import {
  OakBox,
  OakBoxProps,
  OakLabel,
  OakLabelProps,
} from "@/components/atoms";
import {
  OakAllSpacingToken,
  OakBorderWidthToken,
  OakCombinedColorToken,
} from "@/styles";
import { InternalRadioWrapper } from "@/components/atoms/InternalRadioWrapper";
import { InternalRadio } from "@/components/atoms/InternalRadio/InternalRadio";

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

export type OakRadioButtonProps = {
  id: string;
  label: ReactNode;
  value: string;
  tabIndex?: number;
  "data-testid"?: string;
  disabled?: boolean;
  required?: boolean;
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
    const {
      id,
      label,
      value,
      tabIndex,
      disabled,
      required,
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
    const radioContext = useContext(RadioContext);
    const anyDisabled = disabled || radioContext.disabled;

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
          <InternalRadioWrapper
            disabled={anyDisabled}
            checked={value === radioContext.currentValue}
            disableFocusRing={disableFocusRing}
            radioInnerSize={radioInnerSize}
            radioOuterSize={radioOuterSize}
            radioBorderWidth={radioBorderWidth}
            size={radioOuterSize}
            radioBackground={radioBackground}
            checkedRadioBorderWidth={checkedRadioBorderWidth}
            internalRadio={
              <InternalRadio
                id={id}
                ref={ref}
                name={radioContext.name}
                disabled={anyDisabled}
                value={value}
                checked={value === radioContext.currentValue}
                onChange={radioContext.onValueUpdated}
                $ba={"border-solid-none"}
                {...rest}
              />
            }
          />
          {label}
        </RadioButtonLabel>
      </OakBox>
    );
  },
);

export type OakRadioButtonType = typeof OakRadioButton;
