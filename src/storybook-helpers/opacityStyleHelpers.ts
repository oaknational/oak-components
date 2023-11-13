import { oakOpacityTokens } from "@/styles/theme/opacity";

export const opacityArgTypes = {
  $opacity: {
    options: Object.keys(oakOpacityTokens),
    control: { type: "select" },
  },
};
