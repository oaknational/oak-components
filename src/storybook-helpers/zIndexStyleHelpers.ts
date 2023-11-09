import { oakAllZIndex } from "@/styles/theme/zIndex";

export const zIndexArgTypes = {
  $zIndex: {
    options: Object.keys(oakAllZIndex),
    control: { type: "select" },
  },
};
