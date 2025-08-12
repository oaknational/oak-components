import React, { ComponentProps } from "react";

import { OakBox } from "@/components/atoms";

export type OakJauntyAngleLabelProps = {
  label: string;
  as?: string | React.ElementType;
  htmlFor?: string;
} & ComponentProps<typeof OakBox>; // Adding div type for OakBox for aria features
export const OakJauntyAngleLabel = (props: OakJauntyAngleLabelProps) => {
  const { label, ...oakBoxProps } = props;
  return (
    <OakBox
      $borderRadius={"border-radius-m"}
      $ph={"inner-padding-xs"}
      $pv={"inner-padding-ssx"}
      $font={["heading-7", "heading-6"]}
      $transform={"rotate(-1.5deg)"}
      {...oakBoxProps}
    >
      {label}
    </OakBox>
  );
};
