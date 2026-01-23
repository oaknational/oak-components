import React, { ReactNode, forwardRef, useContext } from "react";
import styled, { css } from "styled-components";

import { RadioContext } from "@/components/form-elements/OakRadioGroup/OakRadioGroup";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { FlexStyleProps } from "@/styles/utils/flexStyle";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { OakBox, OakBoxProps } from "@/components/layout-and-structure/OakBox";
import { OakLabel, OakLabelProps } from "@/components/form-elements/OakLabel";
import {
  OakAllSpacingToken,
  OakBorderWidthToken,
  OakUiRoleToken,
} from "@/styles";
import { InternalRadioWrapper } from "@/components/internal-components/InternalRadioWrapper";
import { InternalRadio } from "@/components/internal-components/InternalRadio/InternalRadio";

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
  radioBackground?: OakUiRoleToken;
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
      $labelGap = "spacing-8",
      $labelAlignItems = "center",
      $font = "body-1",
      "data-testid": dataTestId,
      disableFocusRing = false,
      radioInnerSize = "spacing-16",
      radioOuterSize = "spacing-24",
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
