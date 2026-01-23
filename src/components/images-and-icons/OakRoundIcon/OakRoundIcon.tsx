import React from "react";

import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakIcon, OakIconProps } from "@/components/images-and-icons/OakIcon";
import {
  OakImage,
  OakImageProps,
} from "@/components/images-and-icons/OakImage";

type ImageProps = OakImageProps & {
  iconName?: undefined;
};

type IconProps = OakIconProps & {
  src?: undefined;
};

export type OakRoundIconProps = IconProps | ImageProps;

/**
 * A wrapper around `OakIcon` which applies a rounded background.
 * Supports either an icon name or an image src
 */
export const OakRoundIcon = ({
  $background = "bg-decorative5-main",
  $borderRadius = "border-radius-circle",
  $width = "spacing-48",
  $height = "spacing-48",
  $pa = "spacing-4",
  className,
  ...rest
}: OakRoundIconProps) => {
  const icon = rest.iconName ? (
    <OakIcon {...rest} $height="100%" $width="100%" />
  ) : (
    <OakImage {...rest} $height="100%" $width="100%" />
  );

  return (
    <OakBox
      className={className}
      $background={$background}
      $borderRadius={$borderRadius}
      $width={$width}
      $height={$height}
      $pa={$pa}
    >
      {icon}
    </OakBox>
  );
};
