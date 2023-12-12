export const oakBorderWidthTokens = {
  "border-solid-none": 0,
  "border-solid-s": 1,
  "border-solid-m": 2,
  "border-solid-l": 3,
  "border-solid-xl": 4,
};

export const oakBorderRadiusTokens = {
  "border-radius-square": 0,
  "border-radius-xs": 2,
  "border-radius-s": 4,
  "border-radius-m": 6,
  "border-radius-m2": 8,
  "border-radius-l": 16,
  "border-radius-xl": 24,
  "border-radius-circle": 100,
};

export type OakBorderRadiusToken = keyof typeof oakBorderRadiusTokens;
export type OakBorderWidthToken = keyof typeof oakBorderWidthTokens;
