import {
  oakFontTokens,
  oakTextDecorations,
  oakTextOverflows,
  oakWhiteSpaces,
  oakWordWraps,
} from "@/styles/theme/typography";

export const typographyArgTypes = {
  $font: {
    options: Object.keys(oakFontTokens),
    control: { type: "select" },
  },
  $textDecoration: {
    options: oakTextDecorations,
    control: { type: "select" },
  },
  $textAlign: {
    options: ["left", "center", "right", "justify"],
    control: { type: "select" },
  },
  $whiteSpace: {
    options: oakWhiteSpaces,
    control: { type: "select" },
  },
  $wordWrap: {
    options: oakWordWraps,
    control: { type: "select" },
  },
  $textOverflow: {
    options: oakTextOverflows,
    control: { type: "select" },
  },
};
