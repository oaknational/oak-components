import { oakColorTokens, oakUiRoleTokens } from "@/styles/theme/color";

const colorCtl = {
  options: [...Object.keys(oakColorTokens), ...oakUiRoleTokens, null],
  control: { type: "select" },
};

export const colorArgTypes = {
  $color: colorCtl,
  $background: colorCtl,
};
