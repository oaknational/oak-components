import React from "react";

import { OakHandDrawnCardProps, OakHandDrawnCard } from "../OakHandDrawnCard";

import { OakIcon, OakIconProps } from "@/components/base";

export type OakHandDrawnBoxWithIconProps = Omit<
  OakHandDrawnCardProps,
  "children"
> & {
  iconName: OakIconProps["iconName"];
  alt?: OakIconProps["alt"];
  iconColor?: OakIconProps["$colorFilter"];
  iconWidth?: OakIconProps["$width"];
  iconHeight?: OakIconProps["$height"];
};

/**
 * A hand-drawn card with an icon in the center
 */
export const OakHandDrawnCardWithIcon = ({
  iconName,
  iconColor = "text-primary",
  iconWidth = ["all-spacing-11", "all-spacing-16"],
  iconHeight = ["all-spacing-11", "all-spacing-16"],
  alt,
  $width = ["all-spacing-13", "all-spacing-17"],
  $height = ["all-spacing-13", "all-spacing-17"],
  $alignItems = "center",
  $justifyContent = "center",
  ...props
}: OakHandDrawnBoxWithIconProps) => {
  return (
    <OakHandDrawnCard
      $width={$width}
      $height={$height}
      $alignItems={$alignItems}
      $justifyContent={$justifyContent}
      {...props}
    >
      <OakIcon
        iconName={iconName}
        alt={alt}
        $height={iconHeight}
        $width={iconWidth}
        $colorFilter={iconColor}
      />
    </OakHandDrawnCard>
  );
};
