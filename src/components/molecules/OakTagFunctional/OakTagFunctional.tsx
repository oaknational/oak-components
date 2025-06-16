import React from "react";

import {
  OakBoxProps,
  OakFlex,
  OakIcon,
  OakIconName,
  OakLabel,
} from "@/components/atoms";

export type OakTagFunctionalProps = {
  label: string;
  iconName?: OakIconName;
  isTrailingIcon?: boolean;
} & Omit<OakBoxProps, "onClick" | "label">;
export const OakTagFunctional = (props: OakTagFunctionalProps) => {
  const { label, ...oakBoxProps } = props;
  const icon = props.iconName && (
    <OakIcon
      $height={"all-spacing-5"}
      $width={"all-spacing-5"}
      iconName={props.iconName}
    />
  );

  const trailingIcon = props.isTrailingIcon && icon;
  const leadingIcon = !props.isTrailingIcon && icon;
  return (
    <OakFlex
      $borderRadius={"border-radius-m"}
      $ph={"inner-padding-xs"}
      $pv={"inner-padding-ssx"}
      $font={["heading-light-7"]}
      $gap={"space-between-ssx"}
      {...oakBoxProps}
    >
      {leadingIcon}
      <OakLabel>{label}</OakLabel>
      {trailingIcon}
    </OakFlex>
  );
};
