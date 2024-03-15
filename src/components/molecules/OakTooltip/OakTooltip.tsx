import React from "react";

import {
  InternalTooltip,
  InternalTooltipProps,
} from "@/components/atoms/InternalTooltip/InternalTooltip";

/**
 * A tooltip with oven-ready styling
 */
export const OakTooltip = ({
  tooltipPosition,
  ...props
}: Pick<
  InternalTooltipProps,
  "isOpen" | "tooltip" | "children" | "tooltipPosition"
>) => {
  const squaredCornerRadiusProp: keyof InternalTooltipProps = (() => {
    switch (tooltipPosition) {
      case "bottom-right":
        return "$btrr";
      case "top-right":
        return "$bbrr";
      case "top-left":
        return "$bblr";
      default:
        return "$btlr";
    }
  })();

  const borderRadiusProps: Partial<InternalTooltipProps> = {
    $borderRadius: "border-radius-m",
    [squaredCornerRadiusProp]: "border-radius-square",
  };

  return (
    <InternalTooltip
      $background="bg-decorative5-main"
      $color="text-primary"
      $pv="inner-padding-m"
      $ph="inner-padding-xl"
      $font="heading-light-7"
      tooltipPosition={tooltipPosition}
      {...props}
      {...borderRadiusProps}
    />
  );
};
