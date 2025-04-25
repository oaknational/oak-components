import React from "react";

import { OakAllSpacingToken } from "@/styles";
import { IconName, icons } from "@/image-map";
import { OakImage, OakImageProps } from "@/components/atoms/OakImage";

export const oakIconNames = Object.keys(icons) as IconName[];

export type OakIconName = IconName;

export type OakIconProps = Omit<OakImageProps, "alt" | "src"> & {
  /**
   * The name of the icon to display
   *
   * Accepts an icon name token
   */
  iconName: OakIconName;
  alt?: string;
  iconWidth?: OakAllSpacingToken;
  iconHeight?: OakAllSpacingToken;
};

/**
 * returns true if the given string is a valid `OakIconName`
 */
export function isValidIconName(iconName: string): iconName is OakIconName {
  return oakIconNames.includes(iconName as OakIconName);
}

/**
 * returns a Icon URL from Cloudinary if is a valid icon, otherwise returns undefined
 */
export function generateOakIconURL(iconName: string) {
  const urlPath = `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}`;
  if (isValidIconName(iconName)) {
    return `${urlPath}/${icons[iconName]}`;
  } else if (iconName.includes("subject")) {
    return `${urlPath}/${icons["books"]}`;
  } else {
    return `${urlPath}/${icons["question-mark"]}`;
  }
}

/**
 * A wrapper around OakImage which uses the image-map.json file to map icon names to image paths.
 */
export const OakIcon = (props: OakIconProps) => {
  const {
    iconName,
    alt,
    iconWidth,
    iconHeight,
    $width = iconWidth ?? "all-spacing-7",
    $height = iconHeight ?? "all-spacing-7",
    $minHeight = $height,
    $minWidth = $width,
    imageProps,
    ...rest
  } = props;

  return (
    <OakImage
      src={generateOakIconURL(iconName)}
      alt={alt ?? ""}
      $width={$width}
      $height={$height}
      $minHeight={$minHeight}
      $minWidth={$minWidth}
      placeholder="empty"
      // Icons should not be optimised since the SVG is already as small as it can be and should be served directly
      unoptimized
      {...rest}
    />
  );
};
