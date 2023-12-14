export const oakFontSizeTokens = {
  "font-size-1": 12,
  "font-size-2": 14,
  "font-size-3": 16,
  "font-size-4": 18,
  "font-size-5": 20,
  "font-size-6": 24,
  "font-size-7": 32,
  "font-size-8": 40,
  "font-size-9": 48,
  "font-size-10": 56,
};
export type OakFontSizeToken = keyof typeof oakFontSizeTokens;

const fontWeights = [300, 400, 600, 700] as const;
type FontWeight = (typeof fontWeights)[number];
const lineHeights = [16, 20, 24, 28, 32, 40, 48, 56, 64] as const;
type LineHeight = (typeof lineHeights)[number];
const letterSpacings = ["0.0115rem", "-0.005rem"] as const;
type LetterSpacing = (typeof letterSpacings)[number];

type FontParameters = readonly [
  OakFontSizeToken,
  LineHeight,
  FontWeight,
  LetterSpacing,
];

export const oakFontTokens: Record<string, FontParameters> = {
  "heading-1": ["font-size-10", 64, 600, "0.0115rem"],
  "heading-2": ["font-size-9", 56, 600, "0.0115rem"],
  "heading-3": ["font-size-8", 48, 600, "0.0115rem"],
  "heading-4": ["font-size-7", 40, 600, "0.0115rem"],
  "heading-5": ["font-size-6", 32, 600, "0.0115rem"],
  "heading-6": ["font-size-5", 24, 600, "0.0115rem"],
  "heading-7": ["font-size-3", 20, 600, "0.0115rem"],
  "heading-light-1": ["font-size-10", 64, 400, "0.0115rem"],
  "heading-light-2": ["font-size-9", 56, 400, "0.0115rem"],
  "heading-light-3": ["font-size-8", 48, 400, "0.0115rem"],
  "heading-light-4": ["font-size-7", 40, 400, "0.0115rem"],
  "heading-light-5": ["font-size-6", 32, 400, "0.0115rem"],
  "heading-light-6": ["font-size-5", 24, 400, "0.0115rem"],
  "heading-light-7": ["font-size-3", 20, 400, "0.0115rem"],
  "body-1": ["font-size-4", 28, 300, "-0.005rem"],
  "body-2": ["font-size-3", 24, 300, "-0.005rem"],
  "body-3": ["font-size-2", 20, 300, "-0.005rem"],
  "body-4": ["font-size-1", 16, 300, "-0.005rem"],
  "body-1-bold": ["font-size-4", 28, 700, "-0.005rem"],
  "body-2-bold": ["font-size-3", 24, 700, "-0.005rem"],
  "body-3-bold": ["font-size-2", 20, 700, "-0.005rem"],
  "list-item-1": ["font-size-4", 32, 300, "-0.005rem"],
  "list-item-2": ["font-size-3", 24, 300, "-0.005rem"],
} as const;

export type OakFontToken = keyof typeof oakFontTokens;

export const oakTextDecorations = [
  "underline",
  "overline",
  "line-through",
  "none",
] as const;

export const oakWhiteSpaces = [
  "normal",
  "nowrap",
  "pre",
  "pre-wrap",
  "pre-line",
  "break-spaces",
] as const;

export const oakWordWraps = [
  "normal",
  "break-word",
  "initial",
  "inherit",
] as const;

export const oakTextOverflows = ["clip", "ellipsis"] as const;

export type OakTextDecoration = (typeof oakTextDecorations)[number];
export type OakWhiteSpace = (typeof oakWhiteSpaces)[number];
export type OakWordWrap = (typeof oakWordWraps)[number];
export type OakTextOverflow = (typeof oakTextOverflows)[number];
