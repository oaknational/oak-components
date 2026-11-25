export const oakDropShadowTokens = {
  "drop-shadow-standard": "0 0.5rem 0.5rem",
  "drop-shadow-lemon": `0.125rem 0.125rem 0`,
  "drop-shadow-wide-lemon": `0.25rem 0.25rem 0`,
  "drop-shadow-centered-lemon": `0 0 0 0.125rem`,
  "drop-shadow-grey": "0.25rem 0.25rem 0",
  "drop-shadow-centered-grey": "0 0 0 0.3rem",
  "drop-shadow-black": "0.063rem 0.125rem 0",
  "drop-shadow-centred-standard": `0 0 0.5rem`,
  "drop-shadow-none": `none`,
};

export type OakDropShadowToken = keyof typeof oakDropShadowTokens;
