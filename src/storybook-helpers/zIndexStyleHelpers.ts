import { oakZIndexTokens } from "@/styles/theme/zIndex";

export const zIndexArgTypes = {
  $zIndex: {
    options: Object.keys(oakZIndexTokens),
    control: { type: "select" },
  },
};
