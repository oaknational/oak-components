import { oakAllSpacingTokens } from "@/styles";

const scrollSnapCtl = {
  options: Object.keys(oakAllSpacingTokens),
};

export const scrollSnapArgTypes = {
  $scrollMarginTop: scrollSnapCtl,
  $scrollMarginLeft: scrollSnapCtl,
};
