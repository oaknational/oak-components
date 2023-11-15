export const oakColorTokens = {
  white: "#ffffff",
  grey20: "#f2f2f2",
  grey30: "#e4e4e4",
  grey40: "#cacaca",
  grey50: "#808080",
  grey60: "#575757",
  grey70: "#2d2d2d",
  black: "#222222",
  oakGreen: "#287c34",
  mint: "#bef2bd",
  mint30: "#ebfbeb",
  mint50: "#dff9de",
  aqua: "#b0e2de",
  aqua30: "#e7f6f5",
  aqua50: "#cee7e5",
  lavender: "#a0b6f2",
  lavender30: "#e3e9fb",
  lavender50: "#c6d1ef",
  pink: "#deb7d5",
  pink30: "#f5e9f2",
  pink50: "#e5d1e0",
  lemon: "#ffe555",
  lemon30: "#fff7cc",
  lemon50: "#f6e8a0",
  amber: "#ff934e",
  amber30: "#ffdfca",
  amber50: "#ffc8a6",
  red: "#dd0035",
  navy: "#0d24c4",
  navy110: "#0a1d9d",
  navy120: "#081676",
  blue: "#374cf1",
  magenta: "#d02aa7",
  purple: "#845ad9",
  teal: "#037b7d",
};

export type OakColorToken = keyof typeof oakColorTokens;

export const oakColorFilterTokens = {
  black:
    "invert(10%) sepia(1%) saturate(236%) hue-rotate(314deg) brightness(95%) contrast(91%)",
  red: "invert(13%) sepia(78%) saturate(5255%) hue-rotate(337deg) brightness(88%) contrast(111%)",
  white:
    "invert(98%) sepia(98%) saturate(0%) hue-rotate(328deg) brightness(102%) contrast(102%)",
};

export type OakColorFilterToken = keyof typeof oakColorFilterTokens;

export const oakUiRoleTokens = [
  "text-primary",
  "text-subdued",
  "text-error",
  "text-disabled",
  "text-link-active",
  "text-link-hover",
  "text-link-visited",
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
  "bg-decorative1–main",
  "bg-decorative1-subdued",
  "bg-decorative1-very subdued",
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
  "icon-main",
  "icon-inverted",
  "border-primary",
  "border-inverted",
  "border-neutral",
  "border-decorative1",
  "border-decorative2",
  "border-decorative3",
  "border-decorative4",
  "border-decorative5",
  "border-decorative6",
] as const;

export type OakUiRoleToken = (typeof oakUiRoleTokens)[number];

export type UiRoleMap = Record<
  OakUiRoleToken,
  OakColorToken | null | undefined
>;

export type OakCombinedColorToken = OakColorToken | OakUiRoleToken;
