import React, { ComponentProps } from "react";

import { OakBox } from "@/components/layout-and-structure/OakBox";

export type OakJauntyAngleLabelProps = {
  label: string;
  // The following should only used when as="label"
  htmlFor?: string;
  required?: boolean;
} & ComponentProps<typeof OakBox>; // Adding div type for OakBox for aria features
export const OakJauntyAngleLabel = (props: OakJauntyAngleLabelProps) => {
  const { label, ...oakBoxProps } = props;
  return (
    <OakBox
      $borderRadius={"border-radius-m"}
      $ph={"spacing-8"}
      $pv={"spacing-4"}
      $font={["heading-7", "heading-6"]}
      $transform={"rotate(-1.5deg)"}
      {...oakBoxProps}
    >
      {label}
    </OakBox>
  );
};
