export const oakAllBorderWidthsPx = {
  "border-width-1": 1,
  "border-width-2": 2,
  "border-width-3": 3,
  "border-width-4": 5,
  "border-width-5": 8,
};

export const oakAllBorderRadiusPX = {
  "border-radius-1": 10,
  "border-radius-2": 20,
  "border-radius-3": 30,
  "border-radius-4": 50,
  "border-radius-5": 100,
};

export type OakAllBorderRadius = keyof typeof oakAllBorderRadiusPX;
export type OakAllBorderWidths = keyof typeof oakAllBorderWidthsPx;
