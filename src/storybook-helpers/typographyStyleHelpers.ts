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
  },
  $textDecoration: {
    options: oakTextDecorations,
  },
  $textAlign: {
    options: ["left", "center", "right", "justify"],
  },
  $whiteSpace: {
    options: oakWhiteSpaces,
  },
  $wordWrap: {
    options: oakWordWraps,
  },
  $textOverflow: {
    options: oakTextOverflows,
  },
};
