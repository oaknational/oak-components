import React from "react";

import {
  InternalTooltip,
  InternalTooltipProps,
} from "@/components/base/InternalTooltip/InternalTooltip";

/**
 * A tooltip with oven-ready styling
 */
export const OakTooltip = ({
  ...props
}: Pick<InternalTooltipProps, "isOpen" | "tooltip" | "children">) => {
  return (
    <InternalTooltip
      $background="bg-decorative5-main"
      $color="text-primary"
      $pv="inner-padding-m"
      $ph="inner-padding-xl"
      $font="heading-light-7"
      $borderRadius="border-radius-m2"
      {...props}
    />
  );
};
