import React from "react";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakColorToken } from "@/styles";

export type OakToastProps = {
  message: React.ReactNode;
  background?: OakColorToken;
};

export const OakToast = ({ message, background }: OakToastProps) => {
  return (
    <OakFlex
      data-testid="oak-toast"
      $pa="inner-padding-m"
      $borderRadius="border-radius-m2"
      $background={background ?? "bg-decorative1-main"}
    >
      {message}
    </OakFlex>
  );
};
