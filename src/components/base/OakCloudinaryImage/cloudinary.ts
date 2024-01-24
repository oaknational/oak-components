import { getCldImageUrl, type CldImageProps } from "next-cloudinary";

export function getCloudinaryIdFromUrl(
  src: string | URL,
  config?: CldImageProps["config"],
) {
  // When a private CDN is used, CldImage will only accept the image ID as the src
  // this appears to be a limitation of the library which appears to have been designed
  // with basic public CDN usage in mind.
  return src.toString().replace(getCloudinaryRootUrl(config), "");
}

// Attempts to build the stem of a cloudinary URL, this is used to extract the image id
function getCloudinaryRootUrl(config?: CldImageProps["config"]) {
  // `getCldImageUrl` handles all the logic to construct a cloudinary URL from the given config
  // (supporting private CDNs, custom CNAMES etc. so we don't have to)
  const canaryUrl = new URL(getCldImageUrl({ src: "canary.jpg" }, config));
  return canaryUrl.origin + "/image/upload/";
}
