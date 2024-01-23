import React from "react";
import { CldImage, CldImageProps } from "next-cloudinary";

import { OakImage, OakImageProps } from "../OakImage";

import { getCloudinaryConfig, getCloudinaryIdFromUrl } from "./cloudinary";

export type OakCloudinaryImageProps = Omit<
  OakImageProps<typeof CldImage>,
  "src" | "imageProps"
> & {
  /**
   * Override the global cloudinary config set with `setCloudinaryConfig` for this image
   */
  config?: CldImageProps["config"];
  /**
   * The cloudinary image id or the full cloudinary URL
   *
   * Usually in the format `v1234567890/image.jpg`
   */
  cloudinaryId: string;
};

/**
 * OakCloudinaryImage wraps OakImage providing responsive images from Cloudinary
 * based on the `sizes` prop.
 *
 * Cloudinary config can be set globally with `setCloudinaryConfig` or per image with the `config` prop.
 */
export const OakCloudinaryImage = ({
  config: incomingConfig,
  cloudinaryId,
  unoptimized = false || cloudinaryId.endsWith(".svg"),
  ...props
}: OakCloudinaryImageProps) => {
  const config = incomingConfig ?? getCloudinaryConfig();
  const src = getCloudinaryIdFromUrl(cloudinaryId, config);

  return (
    <OakImage
      as={CldImage}
      src={src}
      imageProps={{
        config,
      }}
      unoptimized={unoptimized}
      {...props}
    />
  );
};
