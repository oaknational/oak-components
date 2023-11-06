import { OakAllOpacity, oakAllOpacity } from "../theme/opacity";

export const parseOpacity = (variant?: OakAllOpacity | null) => {
  if (!variant) {
    return;
  }

  if (variant in oakAllOpacity) {
    return oakAllOpacity[variant as OakAllOpacity];
  }
};
