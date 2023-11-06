import { oakAllSpacingPx } from "@/styles/theme/spacing";

const sizeCtl = {
  options: Object.keys(oakAllSpacingPx),
  control: { type: "select" },
};

export const sizeArgTypes = {
  $width: sizeCtl,
  $height: sizeCtl,
  $minWidth: sizeCtl,
  $maxWidth: sizeCtl,
  $minHeight: sizeCtl,
  $maxHeight: sizeCtl,
};
