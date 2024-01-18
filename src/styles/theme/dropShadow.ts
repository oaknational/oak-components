export const oakDropShadowTokens = {
  "drop-shadow-standard": "0 0.5rem 0.5rem rgba(92, 92, 92, 20%)",
  "drop-shadow-lemon": `0.125rem 0.125rem 0 rgba(255, 229, 85, 100%)`,
  "drop-shadow-wide-lemon": `0.25rem 0.25rem 0 rgba(255, 229, 85, 100%)`,
  "drop-shadow-centered-lemon": `0 0 0 0.125rem rgba(255, 229, 85, 100%)`,
  "drop-shadow-grey": "0.25rem 0.25rem 0 rgba(87, 87, 87, 100%)",
  "drop-shadow-centered-grey": "0 0 0 0.3rem rgba(87, 87, 87, 100%)",
};

export type OakDropShadowToken = keyof typeof oakDropShadowTokens;
