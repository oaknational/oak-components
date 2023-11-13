export const oakZIndexTokens = {
  behind: -1,
  neutral: 0,
  "in-front": 1,
  "mobile-filters": 2,
  "fixed-header": 100,
  "modal-close-button": 150,
  "modal-dialog": 300,
} as const;

export type OakZIndexToken = keyof typeof oakZIndexTokens | null;
