import React from "react";

import * as imageMap from "../../../image-map.json";

import { OakImage, OakImageProps } from "@/components/base/OakImage";

export const oakIconNames = [
  "home",
  "send",
  "rocket",
  "video",
  "edit",
  "hamburger",
  "cross",
  "bell",
  "twitter",
  "worksheet",
  "facebook",
  "share",
  "arrow-right",
  "worksheet-3",
  "chevron-right",
  "save",
  "quiz-3",
  "chevron-down",
  "linkedin",
  "magic-carpet",
  "books",
  "supervision-level",
  "quiz-white",
  "arrow-left",
  "additional-material",
  "slide-deck-3",
  "sign-language",
  "external",
  "equipment-required",
  "chevron-left",
  "download",
  "search",
  "chevron-up",
  "go",
  "copyright",
  "arrow-down",
  "project",
  "quiz",
  "slide-deck",
  "content-guidance",
  "tick",
  "instagram",
  "dot",
  "dot-png",
  "warning",
  "lightbulb",
  "lightbulb-yellow",
  "signed-video-4",
  "video-3",
  "quiz-6",
] as const;

export type OakIconName = (typeof oakIconNames)[number];

export type OakIconProps = Omit<OakImageProps, "alt" | "src"> & {
  iconName: OakIconName;
  alt?: string;
};

const typedImageMap = imageMap as Record<string, Record<OakIconName, string>>;

export const OakIcon = (props: OakIconProps) => {
  const {
    iconName,
    alt,
    $width = "all-spacing-7",
    $height = "all-spacing-7",
    ...rest
  } = props;

  const _alt = alt ?? iconName;
  const imagePath = typedImageMap?.["icons"]?.[iconName];

  return (
    <OakImage
      src={`https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/${imagePath}`}
      alt={_alt}
      $width={$width}
      $height={$height}
      sizes="5vw"
      {...rest}
    />
  );
};
