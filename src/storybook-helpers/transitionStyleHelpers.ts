import { oakTransitionTokens } from "@/styles/theme/transitions";

export const transitionArgTypes = {
  $transition: {
    options: Object.keys(oakTransitionTokens),
    control: { type: "select" },
  },
};
