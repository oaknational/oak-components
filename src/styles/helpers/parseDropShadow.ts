import {
  OakAllDropShadows,
  oakAllDropShadows,
} from "@/styles/theme/dropShadow";

export const parseDropShadow = (variant?: OakAllDropShadows | null) => {
  if (!variant) {
    return;
  }

  if (variant in oakAllDropShadows) {
    return oakAllDropShadows[variant as OakAllDropShadows];
  }
};
