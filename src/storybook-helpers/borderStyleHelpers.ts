import {
  oakAllBorderRadiusPx,
  oakAllBorderWidthsPx,
} from "@/styles/theme/borders";

const borderWidthCtl = {
  options: [...Object.keys(oakAllBorderWidthsPx), null],
  control: { type: "select" },
};

export const borderArgTypes = {
  $ba: borderWidthCtl,
  $bb: borderWidthCtl,
  $bt: borderWidthCtl,
  $bl: borderWidthCtl,
  $br: borderWidthCtl,
  $borderRadius: {
    options: Object.keys(oakAllBorderRadiusPx),
    control: { type: "select" },
  },
};
