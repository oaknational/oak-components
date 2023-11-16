import { oakColorTokens } from "@/styles/theme/color";

const colorCtl = {
  options: [...Object.keys(oakColorTokens), null],
  control: { type: "select" },
};

export const colorArgTypes = {
  $color: colorCtl,
  $background: colorCtl,
};
