import {
  OakAllTransitions,
  oakAllTransitions,
} from "@/styles/theme/transitions";

export const parseTransitions = (variant?: OakAllTransitions | null) => {
  if (!variant) {
    return;
  }

  if (variant in oakAllTransitions) {
    return oakAllTransitions[variant as OakAllTransitions];
  }
};
