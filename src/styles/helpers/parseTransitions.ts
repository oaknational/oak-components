import {
  OakTransitionToken,
  oakTransitionTokens,
} from "@/styles/theme/transitions";

export const parseTransitions = (variant?: OakTransitionToken | null) => {
  if (!variant) {
    return;
  }

  if (variant in oakTransitionTokens) {
    return oakTransitionTokens[variant];
  }
};
