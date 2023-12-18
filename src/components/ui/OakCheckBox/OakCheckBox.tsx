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
import {
  SubBaseCheckBoxProps,
  SubStyledCheckBoxDecor,
} from "@/components/ui/InternalCheckBox/SubStyledCheckBox";

export type OakCheckBoxProps = SubBaseCheckBoxProps & {
  decor?: SubStyledCheckBoxDecor;
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
    decor,
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
      <InternalCheckBox
        id={id}
        value={value}
        size={checkboxSize}
        decor={decor}
        border={checkboxBorder}
        borderRadius={checkboxBorderRadius}
        borderColor={currentColor}
        checkedBackground={checkedBackgroundFill ? currentColor : null}
        hoverBorderRadius={hoverBorderRadius}
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
