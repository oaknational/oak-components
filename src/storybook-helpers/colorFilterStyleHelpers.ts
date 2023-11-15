import { oakColorFilterTokens } from "@/styles/theme/color";

export const colorFilterArgTypes = {
  $colorFilter: {
    options: Object.keys(oakColorFilterTokens),
    control: { type: "select" },
  },
};
