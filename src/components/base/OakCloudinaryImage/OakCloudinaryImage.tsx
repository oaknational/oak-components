import React, { createContext, useContext } from "react";
import { CldImage, CldImageProps } from "next-cloudinary";

import { OakImage, OakImageProps } from "../OakImage";

import { getCloudinaryIdFromUrl } from "./cloudinary";

export type OakCloudinaryImageProps = Omit<
  OakImageProps<typeof CldImage>,
  "src" | "imageProps"
> & {
  /**
   * The cloudinary image id or the full cloudinary URL
   *
   * Usually in the format `v1234567890/image.jpg`
   */
  cloudinaryId: string;
};

const cloudinaryConfigContext = createContext<
  CldImageProps["config"] | undefined
>(undefined);

/**
 * Provides a Cloudinary config to all descendent `OakCloudinaryImage` elements.
 *
 * See https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters
 * for documentation of the config object.
 */
export const OakCloudinaryConfigProvider = cloudinaryConfigContext.Provider;

/**
 * OakCloudinaryImage wraps OakImage providing responsive images from Cloudinary
 * based on the `sizes` prop.
 *
 * Cloudinary cloud name can be set globally with `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` or a config
 * can be passed with `OakCloudinaryConfigProvider`.
 */
export const OakCloudinaryImage = ({
  cloudinaryId,
  unoptimized = false || cloudinaryId.endsWith(".svg"),
  ...props
}: OakCloudinaryImageProps) => {
  const config = useContext(cloudinaryConfigContext);
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
