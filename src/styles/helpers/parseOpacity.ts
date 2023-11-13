import { OakOpacityToken, oakOpacityTokens } from "@/styles/theme/opacity";

export const parseOpacity = (variant?: OakOpacityToken | null) => {
  if (!variant) {
    return;
  }

  if (variant in oakOpacityTokens) {
    return oakOpacityTokens[variant as OakOpacityToken];
  }
};
