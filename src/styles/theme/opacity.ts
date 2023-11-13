export const oakOpacityTokens = {
  transparent: 0,
  "semi-transparent": 0.25,
  "semi-opaque": 0.5,
  opaque: 1,
};

export type OakOpacityToken = keyof typeof oakOpacityTokens;
