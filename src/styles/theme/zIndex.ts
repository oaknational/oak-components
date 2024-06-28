// For help with defining z-index values, refer to this article:
// https://www.smashingmagazine.com/2021/02/css-z-index-large-projects/#a-new-solution
const behind = -1;
const modalDialog = 300;
const banner = behind + modalDialog;

export const oakZIndexTokens = {
  behind,
  neutral: 0,
  "in-front": 1,
  "mobile-filters": 2,
  "fixed-header": 100,
  "modal-close-button": 150,
  "modal-dialog": modalDialog,
  banner,
} as const;

export type OakZIndexToken = keyof typeof oakZIndexTokens | null;
