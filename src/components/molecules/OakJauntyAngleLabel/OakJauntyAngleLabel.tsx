import React from "react";

import { OakBox } from "@/components/atoms";

export type OakJauntyAngleLabelProps = {
  label: string;
  type: "starter" | "exit";
};
export const OakJauntyAngleLabel = (props: OakJauntyAngleLabelProps) => {
  const { label, type } = props;
  return (
    <OakBox
      $borderRadius={"border-radius-m"}
      $ph={"inner-padding-xs"}
      $pv={"inner-padding-ssx"}
      $font={["heading-7", "heading-6"]}
      $background={
        "starter" === type ? "bg-decorative1-main" : "bg-decorative5-main"
      }
      $transform={"rotate(-1.5deg)"}
    >
      {label}
    </OakBox>
  );
};
