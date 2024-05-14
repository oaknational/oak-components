import { oakSpaceBetweenTokens } from "@/styles/theme/spacing";

const positionCtlJustify = {
  options: [
    "flex-start",
    "flex-end",
    "center",
    "between",
    "around",
    "stretch",
    "baseline",
    "auto",
  ],
};

const spacingCtl = {
  options: Object.keys(oakSpaceBetweenTokens),
};

export const flexArgTypes = {
  $flexDirection: {
    options: ["row", "row-reverse", "column", "column-reverse"],
  },
  $flexWrap: {
    options: ["nowrap", "wrap", "wrap-reverse"],
  },
  $alignItems: positionCtlJustify,
  $alignContent: positionCtlJustify,
  $justifyContent: positionCtlJustify,
  $alignSelf: positionCtlJustify,
  $flexGrow: { control: { type: "number" as const, min: 1, max: 4, step: 1 } },
  $flexShrink: {
    control: { type: "number" as const, min: 1, max: 4, step: 1 },
  },
  $order: { control: { type: "number" as const, min: -10, max: 10, step: 1 } },
  $flexBasis: spacingCtl,
  $gap: spacingCtl,
  $columnGap: spacingCtl,
  $rowGap: spacingCtl,
};
