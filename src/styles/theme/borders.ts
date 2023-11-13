export const oakBorderWidthTokens = {
  "border-solid-s": 1,
  "border-solid-m": 2,
};

export const oakBorderRadiusTokens = {
  "border-square": 0,
  "border-radius-s": 4,
  "border-radius-m": 16,
  "border-radius-l": 100,
};

export type OakBorderRadiusToken = keyof typeof oakBorderRadiusTokens;
export type OakBorderWidthToken = keyof typeof oakBorderWidthTokens;
