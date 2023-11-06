import { OakAllTransitions, oakAllTransitions } from "../theme/transitions";

export const parseTransitions = (variant?: OakAllTransitions | null) => {
  if (!variant) {
    return;
  }

  if (variant in oakAllTransitions) {
    return oakAllTransitions[variant as OakAllTransitions];
  }
};
