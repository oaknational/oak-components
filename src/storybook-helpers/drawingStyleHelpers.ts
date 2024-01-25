import { oakBorderWidthTokens } from "@/styles/theme/borders";
import { oakColorTokens, oakUiRoleTokens } from "@/styles/theme/color";

const colorCtl = {
  options: [...Object.keys(oakColorTokens), ...oakUiRoleTokens, null],
  control: { type: "select" },
};
const strokeWidthCtl = {
  options: [...Object.keys(oakBorderWidthTokens), null],
  control: { type: "select" },
};

export const drawingArgTypes = {
  $fill: colorCtl,
  $stroke: colorCtl,
  $strokeWidth: strokeWidthCtl,
};
