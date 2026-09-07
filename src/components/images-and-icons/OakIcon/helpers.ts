import { IconName, icons } from "@/image-map";

export type OakIconName = IconName;
export const oakIconNames = Object.keys(icons) as IconName[];

/*
 * NOTE: This file is separated from OakIcon to allow server side usage in next.js apps
 */

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
