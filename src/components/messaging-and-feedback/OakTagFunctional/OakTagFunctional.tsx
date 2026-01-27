import React from "react";

import {
  OakFlex,
  OakFlexProps,
} from "@/components/layout-and-structure/OakFlex";
import { OakIcon, OakIconName } from "@/components/images-and-icons/OakIcon";
import { OakLabel } from "@/components/form-elements/OakLabel";

export type OakTagFunctionalProps = {
  label: string;
  iconName?: OakIconName;
  isTrailingIcon?: boolean;
  useSpan?: boolean;
} & Omit<OakFlexProps, "onClick" | "label">;
export const OakTagFunctional = (props: OakTagFunctionalProps) => {
  const { label, useSpan, ...oakFlexProps } = props;
  const icon = props.iconName && (
    <OakIcon
      $height={"spacing-20"}
      $width={"spacing-20"}
      iconName={props.iconName}
    />
  );

  const trailingIcon = props.isTrailingIcon && icon;
  const leadingIcon = !props.isTrailingIcon && icon;
  return (
    <OakFlex
      $borderRadius={"border-radius-m"}
      $ph={"spacing-8"}
      $pv={"spacing-4"}
      $font={"heading-light-7"}
      $gap={"spacing-8"}
      {...oakFlexProps}
    >
      {leadingIcon}
      <OakLabel as={useSpan ? "span" : undefined}>{label}</OakLabel>
      {trailingIcon}
    </OakFlex>
  );
};
