/**
 * Canonical set of custom semantic tokens.
 * Types are derived from this constant for strict type safety.
 *
 * @remarks
 * Token names follow the pattern `custom-{category}-{name}`.
 * These are recognized by `parseColor` and output CSS var references.
 */
export const customSemanticTokenSpec = {
  surface: ["primary", "secondary", "accent", "inverse"],
  text: ["primary", "muted", "inverse", "accent"],
  border: ["subtle", "strong", "accent"],
  interactive: ["primary", "hover", "focus"],
  shadow: ["subtle", "strong"],
} as const;

/**
 * Derives token names from the spec: "custom-surface-primary", "custom-text-muted", etc.
 */
type TokenNames<T extends Record<string, readonly string[]>> = {
  [K in keyof T]: `custom-${K & string}-${T[K][number]}`;
}[keyof T];

/**
 * Union type of all valid custom semantic token names.
 *
 * @example
 * const token: CustomSemanticToken = "custom-surface-primary"; // ✅
 * const invalid: CustomSemanticToken = "custom-foo-bar"; // ❌ Type error
 */
export type CustomSemanticToken = TokenNames<typeof customSemanticTokenSpec>;

/**
 * Array of all custom semantic token names for runtime checks.
 */
export const customSemanticTokens: readonly CustomSemanticToken[] =
  Object.entries(customSemanticTokenSpec).flatMap(([category, names]) =>
    names.map((name) => `custom-${category}-${name}` as CustomSemanticToken),
  );

/**
 * Type guard for custom semantic tokens.
 *
 * @param value - String to check
 * @returns True if value is a valid CustomSemanticToken
 *
 * @example
 * if (isCustomSemanticToken(value)) {
 *   // value is narrowed to CustomSemanticToken
 *   return `var(--${value})`;
 * }
 */
export function isCustomSemanticToken(
  value: string,
): value is CustomSemanticToken {
  return (
    value.startsWith("custom-") &&
    customSemanticTokens.includes(value as CustomSemanticToken)
  );
}
