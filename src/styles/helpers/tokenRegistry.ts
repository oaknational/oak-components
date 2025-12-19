/**
 * Token Registry - Plugin system for extending Oak color tokens.
 *
 * Allows external packages to register custom token parsers
 * that integrate with parseColor().
 */

type TokenParser = (value: string) => string | undefined;

const registry = new Map<string, TokenParser>();

/**
 * Register a token prefix with its parser.
 * Parsers are checked in registration order.
 *
 * @example
 * registerTokenPrefix("custom-", (value) => `var(--${value})`);
 */
export function registerTokenPrefix(prefix: string, parser: TokenParser): void {
  registry.set(prefix, parser);
}

/**
 * Parse a token using registered parsers.
 * Returns undefined if no parser matches.
 */
export function parseRegisteredToken(value: string): string | undefined {
  for (const [prefix, parser] of registry) {
    if (value.startsWith(prefix)) {
      return parser(value);
    }
  }
  return undefined;
}
