import React, { useRef } from "react";

import {
  BaseCheckBoxProps,
  InternalCheckBoxHoverFocus,
} from "@/components/base/InternalCheckBox/InternalCheckBox";
import {
  InternalCheckBoxLabel,
  InternalCheckBoxLabelProps,
} from "@/components/base/InternalCheckBoxLabel";
import { InternalCheckBoxWrapper } from "@/components/base/InternalCheckBoxWrapper";
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
  checkedIcon?: React.JSX.Element;
  checkedBackgroundFill?: boolean;
  hoverBorderRadius?: OakBorderRadiusToken;
  iconPadding?: OakInnerPaddingToken;
  defaultColor?: OakCombinedColorToken;
  disabledColor?: OakCombinedColorToken;
} & InternalCheckBoxLabelProps;

export const OakCheckBox = (props: OakCheckBoxProps) => {
  const {
    id,
    value,
    disabled = false,
    defaultChecked = false,
    onChange,
    onFocus,
    onBlur,
    onHovered,
    iconPadding = "inner-padding-none",
    hoverBorderRadius = "border-radius-xs",
    checkboxSize = "all-spacing-6",
    checkboxBorder = "border-solid-m",
    checkboxBorderRadius = "border-radius-xs",
    defaultColor = "text-primary",
    disabledColor = "text-disabled",
    labelGap = "space-between-s",
    labelAlignItems = "center",
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
            $borderColor={currentColor}
            $checkedBackground={checkedBackgroundFill ? currentColor : null}
            $hoverBorderRadius={hoverBorderRadius}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            defaultChecked={defaultChecked}
            disabled={disabled}
          />
        }
        checkedIcon={checkedIcon}
        iconPadding={iconPadding}
      />
      {value}
    </InternalCheckBoxLabel>
  );
};
