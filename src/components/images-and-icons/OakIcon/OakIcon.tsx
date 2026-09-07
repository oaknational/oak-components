import React from "react";

import { generateOakIconURL, OakIconName } from "./helpers";

import { OakAllSpacingToken } from "@/styles";
import {
  OakImage,
  OakImageProps,
} from "@/components/images-and-icons/OakImage";

export * from "./helpers";
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
 * A wrapper around OakImage which uses the image-map.json file to map icon names to image paths.
 */
export const OakIcon = (props: OakIconProps) => {
  const {
    iconName,
    alt,
    iconWidth,
    iconHeight,
    $width = iconWidth ?? "spacing-32",
    $height = iconHeight ?? "spacing-32",
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
