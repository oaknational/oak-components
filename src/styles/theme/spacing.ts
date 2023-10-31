export const oakAllSpacingPx = {
  "all-spacing-1": 4,
  "all-spacing-2": 8,
  "all-spacing-3": 12,
  "all-spacing-4": 16,
  "all-spacing-5": 20,
  "all-spacing-6": 24,
  "all-spacing-7": 32,
  "all-spacing-8": 40,
  "all-spacing-9": 48,
  "all-spacing-10": 56,
  "all-spacing-11": 64,
  "all-spacing-12": 72,
  "all-spacing-13": 80,
  "all-spacing-14": 92,
  "all-spacing-15": 100,
  "all-spacing-16": 120,
};

export type OakAllSpacing = keyof typeof oakAllSpacingPx;

export const oakInnerPaddingAllSpacing = {
  "inner-padding-xs": "all-spacing-2",
  "inner-padding-s": "all-spacing-3",
  "inner-padding-m": "all-spacing-4",
  "inner-padding-l": "all-spacing-5",
  "inner-padding-xl": "all-spacing-6",
};

export type OakInnerPadding = keyof typeof oakInnerPaddingAllSpacing;

export const oakSpaceBetweenAllSpacing = {
  "space-between-ssx": "all-spacing-2",
  "space-between-xs": "all-spacing-3",
  "space-between-s": "all-spacing-4",
  "space-between-m": "all-spacing-6",
  "space-between-m2": "all-spacing-7",
  "space-between-l": "all-spacing-9",
  "space-between-xl": "all-spacing-10",
  "space-between-xxl": "all-spacing-12",
  "space-between-xxxl": "all-spacing-13",
};

export type OakSpaceBetween = keyof typeof oakSpaceBetweenAllSpacing;

type AdditionalSpacingTypes =
  | "100%"
  | 0
  | "100vh"
  | "100vw"
  | "auto"
  | "fit-content"
  | "inherit"
  | "initial"
  | "unset";

export type OakParsableSpacing =
  | OakAllSpacing
  | OakInnerPadding
  | OakSpaceBetween
  | AdditionalSpacingTypes;
