import {
  oakBorderRadiusTokens,
  oakBorderWidthTokens,
} from "@/styles/theme/borders";
import { oakColorTokens, oakUiRoleTokens } from "@/styles/theme/color";
import { BorderStyleProps } from "@/styles/utils/borderStyle";

const borderWidthCtl = {
  options: [...Object.keys(oakBorderWidthTokens), null],
  control: { type: "select" },
};

const borderRadiusCtl = {
  options: Object.keys(oakBorderRadiusTokens),
  control: { type: "select" },
};

export const borderArgTypes: Partial<Record<keyof BorderStyleProps, object>> = {
  $ba: borderWidthCtl,
  $bb: borderWidthCtl,
  $bt: borderWidthCtl,
  $bl: borderWidthCtl,
  $br: borderWidthCtl,
  $bh: borderWidthCtl,
  $bv: borderWidthCtl,
  $borderRadius: borderRadiusCtl,
  $btlr: borderRadiusCtl,
  $btrr: borderRadiusCtl,
  $bblr: borderRadiusCtl,
  $bbrr: borderRadiusCtl,
  $btr: borderRadiusCtl,
  $bbr: borderRadiusCtl,
  $borderColor: {
    options: [...Object.keys(oakColorTokens), ...oakUiRoleTokens],
    control: { type: "select" },
  },
};
