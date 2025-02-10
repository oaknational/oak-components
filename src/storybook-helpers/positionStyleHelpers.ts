import { oakSpaceBetweenTokens } from "@/styles/theme/spacing";

const positionCtl = {
  options: Object.keys(oakSpaceBetweenTokens),
};

const positionCtlScroll = {
  options: ["auto", "hidden", "scroll", "visible"],
};

export const positionArgTypes = {
  $position: {
    options: ["static", "relative", "absolute", "sticky", "fixed"],
  },
  $top: positionCtl,
  $right: positionCtl,
  $bottom: positionCtl,
  $left: positionCtl,
  $inset: positionCtl,
  $overflow: positionCtlScroll,
  $overflowX: positionCtlScroll,
  $overflowY: positionCtlScroll,
  $objectFit: {
    options: ["fill", "contain", "cover", "none", "scale-down"],
  },
  $pointerEvents: {
    options: ["auto", "none"],
  },
  $visibility: {
    options: ["visible", "hidden", "collapse"],
  },
  $verticalAlign: {
    options: [
      "baseline",
      "sub",
      "super",
      "text-top",
      "text-bottom",
      "middle",
      "top",
      "bottom",
    ],
  },
};
