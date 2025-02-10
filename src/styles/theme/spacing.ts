export const oakAllSpacingTokens = {
  "all-spacing-0": 0,
  "all-spacing-05": 2,
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
  "all-spacing-17": 160,
  "all-spacing-18": 180,
  "all-spacing-19": 240,
  "all-spacing-20": 360,
  "all-spacing-21": 480,
  "all-spacing-22": 640,
  "all-spacing-23": 960,
  "all-spacing-24": 1280,
};

export type OakAllSpacingToken = keyof typeof oakAllSpacingTokens;

export const oakInnerPaddingTokens = {
  "inner-padding-none": "all-spacing-0",
  "inner-padding-ssx": "all-spacing-1",
  "inner-padding-xs": "all-spacing-2",
  "inner-padding-s": "all-spacing-3",
  "inner-padding-m": "all-spacing-4",
  "inner-padding-l": "all-spacing-5",
  "inner-padding-xl": "all-spacing-6",
  "inner-padding-xl2": "all-spacing-7",
  "inner-padding-xl3": "all-spacing-8",
  "inner-padding-xl4": "all-spacing-9",
  "inner-padding-xl5": "all-spacing-10",
  "inner-padding-xl6": "all-spacing-11",
  "inner-padding-xl7": "all-spacing-12",
  "inner-padding-xl8": "all-spacing-13",
};

export type OakInnerPaddingToken = keyof typeof oakInnerPaddingTokens;

export const oakSpaceBetweenTokens = {
  "space-between-none": "all-spacing-0",
  "space-between-sssx": "all-spacing-1",
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

export type OakSpaceBetweenToken = keyof typeof oakSpaceBetweenTokens;

type AdditionalSpacingTypes =
  | "100%"
  | 0
  | "100vh"
  | "100vw"
  | "auto"
  | "fit-content"
  | "max-content"
  | "min-content"
  | "inherit"
  | "initial"
  | "unset";

export type OakCombinedSpacingToken =
  | OakAllSpacingToken
  | OakInnerPaddingToken
  | OakSpaceBetweenToken
  | AdditionalSpacingTypes;
