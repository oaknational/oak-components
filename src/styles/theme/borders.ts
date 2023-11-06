export const oakAllBorderWidthsPx = {
  "border-solid-s": 1,
  "border-solid-m": 2,
};

export const oakAllBorderRadiusPx = {
  "border-square": 0,
  "border-radius-s": 4,
  "border-radius-m": 16,
  "border-radius-l": 100,
};

export type OakAllBorderRadius = keyof typeof oakAllBorderRadiusPx;
export type OakAllBorderWidths = keyof typeof oakAllBorderWidthsPx;
