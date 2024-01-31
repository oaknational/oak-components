import {
  OakDropShadowToken,
  oakDropShadowTokens,
} from "@/styles/theme/dropShadow";

export const parseDropShadow = (variant?: OakDropShadowToken | null) => {
  if (variant === null) {
    return "none";
  }

  if (!variant) {
    return;
  }

  if (variant in oakDropShadowTokens) {
    return oakDropShadowTokens[variant as OakDropShadowToken];
  }
};
