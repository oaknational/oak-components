import React from "react";

import { OakBox, OakBoxProps, OakLabel } from "@/components/atoms";

export type OakTagFunctionalProps = {
  label: string;
} & Omit<OakBoxProps, "onClick" | "label">;
export const OakTagFunctional = (props: OakTagFunctionalProps) => {
  const { label, ...oakBoxProps } = props;
  return (
    <OakBox
      $borderRadius={"border-radius-m"}
      $ph={"inner-padding-xs"}
      $pv={"inner-padding-ssx"}
      $font={["heading-light-7"]}
      {...oakBoxProps}
    >
      <OakLabel>{label}</OakLabel>
    </OakBox>
  );
};
