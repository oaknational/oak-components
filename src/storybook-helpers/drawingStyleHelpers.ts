import { oakBorderWidthTokens } from "@/styles/theme/borders";
import { oakColorTokens, oakUiRoleTokens } from "@/styles/theme/color";

const colorCtl = {
  options: [...Object.keys(oakColorTokens), ...oakUiRoleTokens, null],
};
const strokeWidthCtl = {
  options: [...Object.keys(oakBorderWidthTokens), null],
};

export const drawingArgTypes = {
  $fill: colorCtl,
  $stroke: colorCtl,
  $strokeWidth: strokeWidthCtl,
};
