import { oakColorTokens } from "@/styles/theme/color";

const colorCtl = {
  options: Object.keys(oakColorTokens),
  control: { type: "select" },
};

export const colorArgTypes = {
  $color: colorCtl,
  $background: colorCtl,
};
