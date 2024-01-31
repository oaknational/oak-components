import React from "react";

import { IconName, icons } from "../../../image-map";

import { OakImage, OakImageProps } from "@/components/base/OakImage";

export const oakIconNames = Object.keys(icons) as IconName[];

export type OakIconName = IconName;

export type OakIconProps = Omit<OakImageProps, "alt" | "src"> & {
  iconName: OakIconName;
  alt?: string;
};

/**
 * returns true if the given string is a valid `OakIconName`
 */
export function isValidIconName(iconName: string): iconName is OakIconName {
  return oakIconNames.includes(iconName as OakIconName);
}

export const OakIcon = (props: OakIconProps) => {
  const {
    iconName,
    alt,
    $width = "all-spacing-7",
    $height = "all-spacing-7",
    imageProps,
    ...rest
  } = props;

  return (
    <OakImage
      src={`https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/${icons[iconName]}`}
      alt={alt ?? iconName}
      $width={$width}
      $height={$height}
      placeholder="empty"
      // Icons should not be optimised since the SVG is already as small as it can be and should be served directly
      unoptimized
      {...rest}
    />
  );
};
