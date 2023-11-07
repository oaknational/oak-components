import { oakAllOpacity } from "@/styles/theme/opacity";

export const opacityArgTypes = {
  $opacity: {
    options: Object.keys(oakAllOpacity),
    control: { type: "select" },
  },
};
