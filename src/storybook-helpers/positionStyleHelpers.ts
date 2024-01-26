import { oakSpaceBetweenTokens } from "@/styles/theme/spacing";

const positionCtl = {
  options: Object.keys(oakSpaceBetweenTokens),
  control: { type: "select" },
};

const positionCtlScroll = {
  options: ["auto", "hidden", "scroll", "visible"],
  control: { type: "select" },
};

export const positionArgTypes = {
  $position: {
    options: ["static", "relative", "absolute", "sticky", "fixed"],
    control: { type: "select" },
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
    control: { type: "select" },
  },
  $pointerEvents: {
    options: ["auto", "none"],
    control: { type: "select" },
  },
  $visibility: {
    options: ["visible", "hidden", "collapse"],
    control: { type: "select" },
  },
};
