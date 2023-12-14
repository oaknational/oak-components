import React, { useRef } from "react";

import {
  InternalCheckBoxLabel,
  InternalCheckBoxLabelProps,
} from "@/components/ui/InternalCheckBoxLabel";
import { InternalCheckBox } from "@/components/ui/InternalCheckBox";
import {
  OakAllSpacingToken,
  OakBorderRadiusToken,
  OakBorderWidthToken,
  OakCombinedColorToken,
  OakInnerPaddingToken,
} from "@/styles";

export type OakCheckBoxProps = {
  id: string;
  disabled?: boolean;
  value: string;
  defaultChecked?: boolean;
  checkboxSize?: OakAllSpacingToken;
  checkboxBorder?: OakBorderWidthToken;
  checkboxBorderRadius?: OakBorderRadiusToken;
  checkedIcon?: React.JSX.Element;
  hoverCenterFill?: boolean;
  checkedBackgroundFill?: boolean;
  hoverBorderRadius?: OakBorderRadiusToken;
  iconPadding?: OakInnerPaddingToken;
  defaultColor?: OakCombinedColorToken;
  disabledColor?: OakCombinedColorToken;
  onHovered?: (value: string, id: string, duration: number) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  "data-testid"?: string;
} & InternalCheckBoxLabelProps;

export const OakCheckBox = (props: OakCheckBoxProps) => {
  const {
    id,
    value,
    disabled = false,
    defaultChecked = false,
    checkboxSize = "all-spacing-6",
    defaultColor = "text-primary",
    disabledColor = "text-disabled",
    onChange,
    onFocus,
    onBlur,
    onHovered,
    labelGap = "space-between-s",
    labelAlignItems = "center",
    checkboxBorder = "border-solid-m",
    checkboxBorderRadius = "border-radius-xs",
    iconPadding = "inner-padding-none",
    hoverBorderRadius = "border-radius-xs",
    hoverCenterFill = true,
    checkedBackgroundFill = true,
    checkedIcon,
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

  return (
    <InternalCheckBoxLabel
      htmlFor={id}
      labelGap={labelGap}
      labelAlignItems={labelAlignItems}
      $color={currentColor}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-testid={props["data-testid"]}
    >
      <InternalCheckBox
        id={id}
        value={value}
        $size={checkboxSize}
        $border={checkboxBorder}
        $borderRadius={checkboxBorderRadius}
        borderColor={currentColor}
        checkedBackground={checkedBackgroundFill ? currentColor : null}
        hoverBorderRadius={hoverBorderRadius}
        hoverCenterFill={hoverCenterFill}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        defaultChecked={defaultChecked}
        disabled={disabled}
        checkedIcon={checkedIcon}
        iconPadding={iconPadding}
      />
      {value}
    </InternalCheckBoxLabel>
  );
};
