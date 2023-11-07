import { oakSpaceBetweenAllSpacing } from "@/styles/theme/spacing";

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
  control: { type: "select" },
};

const spacingCtl = {
  options: Object.keys(oakSpaceBetweenAllSpacing),
  control: { type: "select" },
};

export const flexArgTypes = {
  $flexDirection: {
    options: ["row", "row-reverse", "column", "column-reverse"],
    control: { type: "select" },
  },
  $flexWrap: {
    options: ["nowrap", "wrap", "wrap-reverse"],
    control: { type: "select" },
  },
  $alignItems: positionCtlJustify,
  $alignContent: positionCtlJustify,
  $justifyContent: positionCtlJustify,
  $alignSelf: positionCtlJustify,
  $flexGrow: { control: { type: "number", min: 1, max: 4, step: 1 } },
  $flexShrink: { control: { type: "number", min: 1, max: 4, step: 1 } },
  $order: { control: { type: "number", min: -10, max: 10, step: 1 } },
  $flexBasis: spacingCtl,
  $gap: spacingCtl,
  $columnGap: spacingCtl,
  $rowGap: spacingCtl,
};
