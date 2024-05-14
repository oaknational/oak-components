import {
  oakInnerPaddingTokens,
  oakSpaceBetweenTokens,
} from "@/styles/theme/spacing";

export const paddingCtl = {
  options: Object.keys(oakInnerPaddingTokens),
};

export const marginCtl = {
  options: Object.keys(oakSpaceBetweenTokens),
};

export const spacingArgTypes = {
  $pa: paddingCtl,
  $ph: paddingCtl,
  $pv: paddingCtl,
  $pl: paddingCtl,
  $pr: paddingCtl,
  $pt: paddingCtl,
  $pb: paddingCtl,
  $ma: marginCtl,
  $mh: marginCtl,
  $mv: marginCtl,
  $ml: marginCtl,
  $mr: marginCtl,
  $mt: marginCtl,
  $mb: marginCtl,
};
