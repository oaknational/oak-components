import { oakAllColorsHex } from "@/styles/theme/color";

const colorCtl = {
  options: Object.keys(oakAllColorsHex),
  control: { type: "select" },
};

export const colorArgTypes = {
  $color: colorCtl,
  $background: colorCtl,
};
