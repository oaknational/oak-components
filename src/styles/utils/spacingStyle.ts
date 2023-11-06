import { css } from "styled-components";

import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";

import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { OakInnerPadding, OakSpaceBetween } from "@/styles/theme/spacing";

type PaddingValues = ResponsiveValues<OakInnerPadding | null | undefined>;
export type PaddingProps = {
  $pa?: PaddingValues;
  $ph?: PaddingValues;
  $pv?: PaddingValues;
  $pl?: PaddingValues;
  $pr?: PaddingValues;
  $pt?: PaddingValues;
  $pb?: PaddingValues;
};

type MarginValue = "auto" | OakSpaceBetween | null | undefined;
type MarginValues = ResponsiveValues<MarginValue>;
export type MarginProps = {
  $ma?: MarginValues;
  $mh?: MarginValues;
  $mv?: MarginValues;
  $ml?: MarginValues;
  $mr?: MarginValues;
  $mt?: MarginValues;
  $mb?: MarginValues;
};

const paddingAll = css<{ $pa?: PaddingValues }>`
  ${responsiveStyle("padding", (props) => props.$pa, parseSpacing)}
`;
const paddingHorizontal = css<{ $ph?: PaddingValues }>`
  ${responsiveStyle("padding-left", (props) => props.$ph, parseSpacing)}
  ${responsiveStyle("padding-right", (props) => props.$ph, parseSpacing)}
`;
const paddingVertical = css<{ $pv?: PaddingValues }>`
  ${responsiveStyle("padding-top", (props) => props.$pv, parseSpacing)}
  ${responsiveStyle("padding-bottom", (props) => props.$pv, parseSpacing)}
`;
const paddingLeft = css<{ $pl?: PaddingValues }>`
  ${responsiveStyle("padding-left", (props) => props.$pl, parseSpacing)}
`;
const paddingRight = css<{ $pr?: PaddingValues }>`
  ${responsiveStyle("padding-right", (props) => props.$pr, parseSpacing)}
`;
const paddingTop = css<{ $pt?: PaddingValues }>`
  ${responsiveStyle("padding-top", (props) => props.$pt, parseSpacing)}
`;
const paddingBottom = css<{ $pb?: PaddingValues }>`
  ${responsiveStyle("padding-bottom", (props) => props.$pb, parseSpacing)}
`;
const marginAll = css<{ $ma?: MarginValues }>`
  ${responsiveStyle("margin", (props) => props.$ma, parseSpacing)}
`;
const marginHorizontal = css<{ $mh?: MarginValues }>`
  ${responsiveStyle("margin-left", (props) => props.$mh, parseSpacing)}
  ${responsiveStyle("margin-right", (props) => props.$mh, parseSpacing)}
`;
const marginVertical = css<{ $mv?: MarginValues }>`
  ${responsiveStyle("margin-top", (props) => props.$mv, parseSpacing)}
  ${responsiveStyle("margin-bottom", (props) => props.$mv, parseSpacing)}
`;
const marginLeft = css<{ $ml?: MarginValues }>`
  ${responsiveStyle("margin-left", (props) => props.$ml, parseSpacing)}
`;
const marginRight = css<{ $mr?: MarginValues }>`
  ${responsiveStyle("margin-right", (props) => props.$mr, parseSpacing)}
`;
const marginTop = css<{ $mt?: MarginValues }>`
  ${responsiveStyle("margin-top", (props) => props.$mt, parseSpacing)}
`;
const marginBottom = css<{ $mb?: MarginValues }>`
  ${responsiveStyle("margin-bottom", (props) => props.$mb, parseSpacing)}
`;

export const marginStyle = css<MarginProps>`
  ${marginAll}
  ${marginHorizontal}
  ${marginVertical}
  ${marginLeft}
  ${marginRight}
  ${marginTop}
  ${marginBottom}
`;

export const paddingStyle = css<PaddingProps>`
  ${paddingAll}
  ${paddingHorizontal}
  ${paddingVertical}
  ${paddingLeft}
  ${paddingRight}
  ${paddingTop}
  ${paddingBottom}
`;

export type SpacingProps = PaddingProps & MarginProps;
export const spacingStyle = css<SpacingProps>`
  ${paddingStyle}
  ${marginStyle}
`;
