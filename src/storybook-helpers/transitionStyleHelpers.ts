import { oakAllTransitions } from "@/styles/theme/transitions";

export const transitionArgTypes = {
  $transition: {
    options: Object.keys(oakAllTransitions),
    control: { type: "select" },
  },
};
