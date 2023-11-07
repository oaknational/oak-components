export const oakAllFontSizes = {
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

export type OakAllFontSizes = keyof typeof oakAllFontSizes;
export type FontWeight = 300 | 400 | 600 | 700;
export type LineHeight = 16 | 20 | 24 | 28 | 32 | 40 | 48 | 56 | 64;
export type LetterSpacing = "0.0115em" | "-0.005em";
export type Font = readonly [
  OakAllFontSizes,
  LineHeight,
  FontWeight,
  LetterSpacing,
];
export const oakAllFonts = {
  "heading-1": ["font-size-10", 64, 600, "0.0115em"],
  "heading-2": ["font-size-9", 56, 600, "0.0115em"],
  "heading-3": ["font-size-8", 48, 600, "0.0115em"],
  "heading-4": ["font-size-7", 40, 600, "0.0115em"],
  "heading-5": ["font-size-6", 32, 600, "0.0115em"],
  "heading-6": ["font-size-5", 24, 600, "0.0115em"],
  "heading-7": ["font-size-3", 20, 600, "0.0115em"],
  "heading-light-1": ["font-size-10", 64, 400, "0.0115em"],
  "heading-light-2": ["font-size-9", 56, 400, "0.0115em"],
  "heading-light-3": ["font-size-8", 48, 400, "0.0115em"],
  "heading-light-4": ["font-size-7", 40, 400, "0.0115em"],
  "heading-light-5": ["font-size-6", 32, 400, "0.0115em"],
  "heading-light-6": ["font-size-5", 24, 400, "0.0115em"],
  "heading-light-7": ["font-size-3", 20, 400, "0.0115em"],
  "body-1": ["font-size-3", 28, 300, "-0.005em"],
  "body-2": ["font-size-3", 24, 300, "-0.005em"],
  "body-3": ["font-size-2", 20, 300, "-0.005em"],
  "body-4": ["font-size-1", 16, 300, "-0.005em"],
  "body-1-bold": ["font-size-3", 28, 700, "-0.005em"],
  "body-2-bold": ["font-size-3", 24, 700, "-0.005em"],
  "body-3-bold": ["font-size-2", 20, 700, "-0.005em"],
  "list-item-1": ["font-size-3", 32, 300, "-0.005em"],
  "list-item-2": ["font-size-3", 24, 300, "-0.005em"],
} as const;

export type OakAllFonts = keyof typeof oakAllFonts;

export const oakAllTextDecoration = [
  "underline",
  "overline",
  "line-through",
  "none",
] as const;

export const oakAllWhiteSpaces = [
  "normal",
  "nowrap",
  "pre",
  "pre-wrap",
  "pre-line",
  "break-spaces",
] as const;

export const oakAllWordWrap = [
  "normal",
  "break-word",
  "initial",
  "inherit",
] as const;

const oakAllTextOverflow = ["clip", "ellipsis"] as const;

export type OakAllTextDecoration = (typeof oakAllTextDecoration)[number];
export type OakAllWhiteSpaces = (typeof oakAllWhiteSpaces)[number];
export type OakAllWordWrap = (typeof oakAllWordWrap)[number];
export type OakAllTextOverflow = (typeof oakAllTextOverflow)[number];
