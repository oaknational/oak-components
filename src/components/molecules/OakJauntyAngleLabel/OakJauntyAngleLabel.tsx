import React from "react";

import { OakBox, OakBoxProps } from "@/components/atoms";

export type OakJauntyAngleLabelProps = {
  label: string;
  id?: string;
} & Omit<OakBoxProps, "onClick" | "label">;
export const OakJauntyAngleLabel = (props: OakJauntyAngleLabelProps) => {
  const { label, id, ...oakBoxProps } = props;
  return (
    <OakBox
      id={id}
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
