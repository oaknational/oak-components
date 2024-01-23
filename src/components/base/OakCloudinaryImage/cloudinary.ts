import { getCldImageUrl, type CldImageProps } from "next-cloudinary";

let cloudinaryConfig: CldImageProps["config"] = undefined;

export function setCloudinaryConfig(config: CldImageProps["config"]) {
  cloudinaryConfig = Object.freeze({ ...config });
}

export function getCloudinaryConfig() {
  if (!cloudinaryConfig) {
    throw new Error(
      "Cloudinary config is not set for `OakCloudinaryImage`, use `setCloudinaryConfig` to set it.",
    );
  }
  return cloudinaryConfig;
}

export function getCloudinaryIdFromUrl(
  src: string | URL,
  config: CldImageProps["config"] = getCloudinaryConfig(),
) {
  // When a private CDN is used, CldImage will only accept the image ID as the src
  // this appears to be a limitation of the library which appears to have been designed
  // with basic public CDN usage in mind.
  return src.toString().replace(getCloudinaryRootUrl(config), "");
}

// Attempts to build the stem of a cloudinary URL, this is used to extract the image id
function getCloudinaryRootUrl(
  config: CldImageProps["config"] = getCloudinaryConfig(),
) {
  const canaryUrl = new URL(getCldImageUrl({ src: "canary.jpg" }, config));
  return canaryUrl.origin + "/image/upload/";
}
