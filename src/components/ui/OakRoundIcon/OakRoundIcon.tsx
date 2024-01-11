import React from "react";

import {
  OakBox,
  OakIcon,
  OakIconProps,
  OakImage,
  OakImageProps,
} from "@/components/base";

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
  $width = "all-spacing-9",
  $height = "all-spacing-9",
  $pa = "inner-padding-ssx",
  ...rest
}: OakRoundIconProps) => {
  const icon = rest.iconName ? (
    <OakIcon {...rest} $height="100%" $width="100%" />
  ) : (
    <OakImage {...rest} $height="100%" $width="100%" />
  );

  return (
    <OakBox
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
