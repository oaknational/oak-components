export const oakAllBorderWidthsPx = {
  "solid-S": 1,
  "solid-M": 2,
};

export const oakAllBorderRadiusPX = {
  "Border-square": 0,
  "Border-radius-S": 4,
  "Border-radius-M": 16,
  "Border-radius-L": 100,
};

export type OakAllBorderRadius = keyof typeof oakAllBorderRadiusPX;
export type OakAllBorderWidths = keyof typeof oakAllBorderWidthsPx;
