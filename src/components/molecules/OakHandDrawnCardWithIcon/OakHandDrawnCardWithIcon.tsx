import React from "react";

import {
  OakHandDrawnCardProps,
  OakHandDrawnCard,
} from "@/components/molecules/OakHandDrawnCard";
import { OakIcon, OakIconProps } from "@/components/atoms";

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
  iconWidth = ["spacing-64", "spacing-120"],
  iconHeight = ["spacing-64", "spacing-120"],
  alt,
  $width = ["spacing-80", "spacing-160"],
  $height = ["spacing-80", "spacing-160"],
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
