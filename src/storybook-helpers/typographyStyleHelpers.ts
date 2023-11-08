import { oakHeadingTags } from "@/components/base/OakHeading/OakHeading";
import {
  oakAllFonts,
  oakAllTextDecoration,
  oakAllTextOverflow,
  oakAllWhiteSpaces,
  oakAllWordWrap,
} from "@/styles/theme/typography";

export const tagArgTypes = {
  tag: {
    options: oakHeadingTags,
    control: { type: "select" },
  },
};

export const typographyArgTypes = {
  $font: {
    options: Object.keys(oakAllFonts),
    control: { type: "select" },
  },
  $textDecoration: {
    options: oakAllTextDecoration,
    control: { type: "select" },
  },
  $textAlign: {
    options: ["left", "center", "right", "justify"],
    control: { type: "select" },
  },
  $whiteSpace: {
    options: oakAllWhiteSpaces,
    control: { type: "select" },
  },
  $wordWrap: {
    options: oakAllWordWrap,
    control: { type: "select" },
  },
  $textOverflow: {
    options: oakAllTextOverflow,
    control: { type: "select" },
  },
};
