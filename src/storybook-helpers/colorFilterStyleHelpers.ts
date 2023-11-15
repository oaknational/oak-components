import { oakColorFilterTokens } from "@/styles/theme/color";

export const colorFilterArgTypes = {
  $filter: {
    options: Object.keys(oakColorFilterTokens),
    control: { type: "select" },
  },
};
