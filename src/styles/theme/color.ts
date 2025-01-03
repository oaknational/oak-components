export const oakColorTokens = {
  white: "#ffffff",
  grey10: "#f9f9f9",
  grey20: "#f2f2f2",
  grey30: "#e4e4e4",
  grey40: "#cacaca",
  grey50: "#808080",
  grey60: "#575757",
  grey70: "#2d2d2d",
  grey80: "#1b1b1b",
  black: "#222222",
  oakGreen: "#287c34",
  mint: "#bef2bd",
  mint30: "#ebfbeb",
  mint50: "#dff9de",
  mint110: "#93e892",
  aqua: "#b0e2de",
  aqua30: "#e7f6f5",
  aqua50: "#cee7e5",
  aqua110: "#7cd8d0",
  lavender: "#a0b6f2",
  lavender30: "#e3e9fb",
  lavender50: "#c6d1ef",
  lavender110: "#7c9aec",
  pink: "#deb7d5",
  pink30: "#f5e9f2",
  pink50: "#e5d1e0",
  pink110: "#cf9cc3",
  lemon: "#ffe555",
  lemon30: "#fff7cc",
  lemon50: "#f6e8a0",
  lemon110: "#fbd60e",
  amber: "#ff934e",
  amber30: "#ffece0",
  amber50: "#ffc8a6",
  red: "#dd0035",
  red30: "#f8d8e0",
  red50: "#ee809a",
  navy: "#0d24c4",
  navy110: "#0a1d9d",
  navy120: "#081676",
  blue: "#374cf1",
  magenta: "#d02aa7",
  purple: "#845ad9",
  teal: "#037b7d",
  blackSemiTransparent: "#22222240",
  transparent: "transparent",
};

export type OakColorToken = keyof typeof oakColorTokens;

/**
 *
 *  Use this tool to convert Hex to color filter values https://codepen.io/sosuke/pen/Pjoqqp
 *
 */

export const oakColorFilterTokens = {
  black:
    "invert(10%) sepia(1%) saturate(236%) hue-rotate(314deg) brightness(95%) contrast(91%)",
  red: "invert(13%) sepia(78%) saturate(5255%) hue-rotate(337deg) brightness(88%) contrast(111%)",
  oakGreen:
    "invert(37%) sepia(16%) saturate(1947%) hue-rotate(77deg) brightness(100%) contrast(88%)",
  white:
    "invert(98%) sepia(98%) saturate(0%) hue-rotate(328deg) brightness(102%) contrast(102%)",
  grey40:
    "invert(92%) sepia(0%) saturate(581%) hue-rotate(147deg) brightness(94%) contrast(80%)",
  grey50:
    "invert(54%) sepia(0%) saturate(38%) hue-rotate(176deg) brightness(92%) contrast(91%)",
  grey60:
    "invert(34%) sepia(0%) saturate(698%) hue-rotate(158deg) brightness(95%) contrast(89%)",
  navy: "invert(21%) sepia(90%) saturate(3220%) hue-rotate(232deg) brightness(71%) contrast(127%)",
  navy110:
    "invert(16%) sepia(72%) saturate(7176%) hue-rotate(239deg) brightness(61%) contrast(109%)",
  navy120:
    "invert(12%) sepia(79%) saturate(3172%) hue-rotate(231deg) brightness(82%) contrast(114%)",
  amber:
    "brightness(0) saturate(100%) invert(57%) sepia(99%) saturate(395%) hue-rotate(330deg) brightness(102%) contrast(101%);",
  lemon:
    "invert(82%) sepia(25%) saturate(963%) hue-rotate(359deg) brightness(106%) contrast(101%)",
  pink: "brightness(0) saturate(100%) invert(91%) sepia(5%) saturate(2279%) hue-rotate(278deg) brightness(89%) contrast(94%)",
  pink50:
    "brightness(0) saturate(100%) invert(95%) sepia(3%) saturate(1596%) hue-rotate(279deg) brightness(95%) contrast(87%)",
  mint: "brightness(0) saturate(100%) invert(85%) sepia(7%) saturate(1206%) hue-rotate(70deg) brightness(110%) contrast(90%)",
  aqua: "brightness(0) saturate(100%) invert(100%) sepia(32%) saturate(3811%) hue-rotate(166deg) brightness(108%) contrast(77%)",
  lavender:
    "brightness(0) saturate(100%) invert(89%) sepia(20%) saturate(5630%) hue-rotate(186deg) brightness(95%) contrast(100%)",
};

export type OakColorFilterToken = keyof typeof oakColorFilterTokens;

const oakUiRoleTokensConst = [
  "text-primary",
  "text-subdued",
  "text-error",
  "text-disabled",
  "text-link-active",
  "text-link-hover",
  "text-link-visited",
  "text-link-pressed",
  "text-inverted",
  "text-success",
  "text-warning",
  "bg-primary",
  "bg-neutral",
  "bg-neutral-stronger",
  "bg-btn-primary",
  "bg-btn-primary-hover",
  "bg-btn-primary-disabled",
  "bg-btn-secondary",
  "bg-btn-secondary-hover",
  "bg-btn-secondary-disabled",
  "bg-icon",
  "bg-icon-hover",
  "bg-decorative1-main",
  "bg-decorative1-subdued",
  "bg-decorative1-very-subdued",
  "bg-decorative2-main",
  "bg-decorative2-subdued",
  "bg-decorative2-very-subdued",
  "bg-decorative3-main",
  "bg-decorative3-subdued",
  "bg-decorative3-very-subdued",
  "bg-decorative4-main",
  "bg-decorative4-subdued",
  "bg-decorative4-very-subdued",
  "bg-decorative5-main",
  "bg-decorative5-subdued",
  "bg-decorative5-very-subdued",
  "bg-correct",
  "bg-incorrect",
  "icon-main",
  "icon-inverted",
  "icon-disabled",
  "icon-brand",
  "icon-success",
  "icon-error",
  "icon-warning",
  "border-primary",
  "border-inverted",
  "border-neutral",
  "border-neutral-lighter",
  "border-brand",
  "border-success",
  "border-error",
  "border-warning",
  "border-decorative1",
  "border-decorative1-stronger",
  "border-decorative2",
  "border-decorative2-stronger",
  "border-decorative3",
  "border-decorative3-stronger",
  "border-decorative4",
  "border-decorative4-stronger",
  "border-decorative5",
  "border-decorative5-stronger",
  "border-decorative6",
  "border-decorative6-stronger",
  "transparent",
] as const;

export type OakUiRoleToken = (typeof oakUiRoleTokensConst)[number];

export const oakUiRoleTokens = [...oakUiRoleTokensConst];

export type UiRoleMap = Record<
  OakUiRoleToken,
  OakColorToken | null | undefined
>;

export type OakCombinedColorToken = OakColorToken | OakUiRoleToken;
