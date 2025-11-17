export const oakAllSpacingTokens = {
  "spacing-0": 0,
  "spacing-2": 2,
  "spacing-4": 4,
  "spacing-8": 8,
  "spacing-12": 12,
  "spacing-16": 16,
  "spacing-20": 20,
  "spacing-24": 24,
  "spacing-32": 32,
  "spacing-40": 40,
  "spacing-48": 48,
  "spacing-56": 56,
  "spacing-64": 64,
  "spacing-72": 72,
  "spacing-80": 80,
  "spacing-92": 92,
  "spacing-100": 100,
  "spacing-120": 120,
  "spacing-160": 160,
  "spacing-180": 180,
  "spacing-240": 240,
  "spacing-360": 360,
  "spacing-480": 480,
  "spacing-640": 640,
  "spacing-960": 960,
  "spacing-1280": 1280,
};

export type OakAllSpacingToken = keyof typeof oakAllSpacingTokens;

export const oakInnerPaddingTokens = {
  "spacing-0": "spacing-0",
  "spacing-4": "spacing-4",
  "spacing-8": "spacing-8",
  "spacing-12": "spacing-12",
  "spacing-16": "spacing-16",
  "spacing-20": "spacing-20",
  "spacing-24": "spacing-24",
  "spacing-32": "spacing-32",
  "spacing-40": "spacing-40",
  "spacing-48": "spacing-48",
  "spacing-56": "spacing-56",
  "spacing-64": "spacing-64",
  "spacing-72": "spacing-72",
  "spacing-80": "spacing-80",
};

export type OakInnerPaddingToken = keyof typeof oakInnerPaddingTokens;

export const oakSpaceBetweenTokens = {
  "spacing-0": "spacing-0",
  "spacing-4": "spacing-4",
  "spacing-8": "spacing-8",
  "spacing-12": "spacing-12",
  "spacing-16": "spacing-16",
  "spacing-24": "spacing-24",
  "spacing-32": "spacing-32",
  "spacing-48": "spacing-48",
  "spacing-56": "spacing-56",
  "spacing-72": "spacing-72",
  "spacing-80": "spacing-80",
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
