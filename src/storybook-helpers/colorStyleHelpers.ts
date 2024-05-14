import { oakColorTokens, oakUiRoleTokens } from "@/styles/theme/color";

const colorCtl = {
  options: [...Object.keys(oakColorTokens), ...oakUiRoleTokens, null],
};

export const colorArgTypes = {
  $color: colorCtl,
  $background: colorCtl,
};
