import { oakAllSpacingTokens } from "@/styles/theme/spacing";

const sizeCtl = {
  options: [...Object.keys(oakAllSpacingTokens), "auto"],
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
