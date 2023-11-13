import {
  oakBorderRadiusTokens,
  oakBorderWidthTokens,
} from "@/styles/theme/borders";

const borderWidthCtl = {
  options: [...Object.keys(oakBorderWidthTokens), null],
  control: { type: "select" },
};

export const borderArgTypes = {
  $ba: borderWidthCtl,
  $bb: borderWidthCtl,
  $bt: borderWidthCtl,
  $bl: borderWidthCtl,
  $br: borderWidthCtl,
  $borderRadius: {
    options: Object.keys(oakBorderRadiusTokens),
    control: { type: "select" },
  },
};
