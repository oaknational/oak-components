import {
  oakInnerPaddingAllSpacing,
  oakSpaceBetweenAllSpacing,
} from "@/styles/theme/spacing";

const paddingCtl = {
  options: Object.keys(oakInnerPaddingAllSpacing),
  control: { type: "select" },
};

const marginCtl = {
  options: Object.keys(oakSpaceBetweenAllSpacing),
  control: { type: "select" },
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
