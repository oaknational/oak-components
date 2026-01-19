import React, { useRef } from "react";

import {
  BaseCheckBoxProps,
  InternalCheckBoxHoverFocus,
} from "@/components/internal-components/InternalCheckBox/InternalCheckBox";
import {
  InternalCheckBoxLabel,
  InternalCheckBoxLabelProps,
} from "@/components/internal-components/InternalCheckBoxLabel";
import { InternalCheckBoxWrapper } from "@/components/internal-components/InternalCheckBoxWrapper";
import {
  OakAllSpacingToken,
  OakBorderRadiusToken,
  OakBorderWidthToken,
  OakCombinedColorToken,
  OakInnerPaddingToken,
} from "@/styles";

export type OakCheckBoxProps = BaseCheckBoxProps & {
  checkboxSize?: OakAllSpacingToken;
  checkboxBorder?: OakBorderWidthToken;
  checkboxBorderRadius?: OakBorderRadiusToken;
  checkedBorderColor?: OakCombinedColorToken;
  uncheckedBorderColor?: OakCombinedColorToken;
  checkedIcon?: React.JSX.Element;
  checkedBackgroundFill?: boolean;
  hoverBorderRadius?: OakBorderRadiusToken;
  iconPadding?: OakInnerPaddingToken;
  defaultColor?: OakCombinedColorToken;
  disabledColor?: OakCombinedColorToken;
  displayValue?: string;
} & InternalCheckBoxLabelProps;

/**
 *
 * Default checkbox which can be extended to create specialised checkboxes.
 * - if provided, displayValue is used to display a different value to the value prop.
 *
 *
 * ## Events
 * The following callbacks are available for tracking focus events:
 *
 * ### onChange
 * onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 *
 * ### onFocus
 *   onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onBlur
 *    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onHovered
 *  `onHovered?: (id, value, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 *
 *
 */
export const OakCheckBox = (props: OakCheckBoxProps) => {
  const {
    id,
    value,
    displayValue = value,
    disabled = false,
    defaultChecked,
    checked,
    onChange,
    onFocus,
    onBlur,
    onHovered,
    iconPadding = "spacing-0",
    hoverBorderRadius = "border-radius-xs",
    checkboxSize = "spacing-24",
    checkboxBorder = "border-solid-m",
    checkboxBorderRadius = "border-radius-xs",
    defaultColor = "text-primary",
    /**
     * The outer border color of the checkbox when unchecked.
     */
    uncheckedBorderColor = "border-neutral",
    /**
     * The outer border color of the checkbox when checked.
     */
    checkedBorderColor = "border-primary",
    disabledColor = "text-disabled",
    labelGap = "spacing-16",
    labelAlignItems = "center",
    checkedBackgroundFill = true,
    checkedIcon,
    "data-testid": dataTestId,
    ...rest
  } = props;

  const hoverStart = useRef(Date.now());

  const handleMouseEnter = () => {
    hoverStart.current = Date.now();
  };

  const handleMouseLeave = () => {
    const delta = Date.now() - hoverStart.current;
    if (onHovered) {
      onHovered(value, id, delta);
    }
  };

  const currentColor = disabled ? disabledColor : defaultColor;
  const currentCheckedBackgroundFill = disabled
    ? disabledColor
    : checkedBorderColor;
  const currentCheckedBorderColor = disabled
    ? disabledColor
    : checkedBorderColor;

  return (
    <InternalCheckBoxLabel
      htmlFor={id}
      labelGap={labelGap}
      labelAlignItems={labelAlignItems}
      $color={currentColor}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <InternalCheckBoxWrapper
        size={checkboxSize}
        internalCheckbox={
          <InternalCheckBoxHoverFocus
            id={id}
            value={value}
            $width={checkboxSize}
            $height={checkboxSize}
            $ba={checkboxBorder}
            $borderRadius={checkboxBorderRadius}
            $borderColor={defaultColor}
            $checkedBackground={
              checkedBackgroundFill ? currentCheckedBackgroundFill : null
            }
            $checkedBorderColor={currentCheckedBorderColor}
            $uncheckedBorderColor={uncheckedBorderColor}
            $hoverBorderRadius={hoverBorderRadius}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            defaultChecked={defaultChecked}
            checked={checked}
            disabled={disabled}
            data-testid={dataTestId}
            {...rest}
          />
        }
        checkedIcon={checkedIcon}
        iconPadding={iconPadding}
      />
      {displayValue}
    </InternalCheckBoxLabel>
  );
};
