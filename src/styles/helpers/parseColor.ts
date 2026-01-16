import {
  OakColorToken,
  OakCombinedColorToken,
  OakUiRoleToken,
  oakColorTokens,
  oakUiRoleTokens,
} from "@/styles/theme/color";
import { parseRegisteredToken } from "@/styles/helpers/tokenRegistry";
import { PropsWithTheme } from "@/styles/theme/theme";

/**
 * Get a registered extension token value
 * @param value - the token name
 * @returns the token value or undefined if not found
 */
function getRegistered(value: string | null | undefined): string | undefined {
  if (!value) return undefined;
  const registered = parseRegisteredToken(value);
  if (registered) return registered;
}

/**
 * - takes any of color token
 * - if an OakColor derives and returns the corresponding css value
 * - if an OakUiRole derives returns a function that takes the current theme and returns the corresponding css value
 */
function parseColor(): undefined;
function parseColor(
  value?: OakCombinedColorToken | null,
): (props: PropsWithTheme) => string;
function parseColor(
  value?: OakCombinedColorToken | null,
): ((props: PropsWithTheme) => string) | undefined;
function parseColor(value?: OakCombinedColorToken | null) {
  if (value === undefined || value === null) {
    return undefined;
  }

  // Oak color tokens (mint, navy, etc.) - highest priority
  if (value in oakColorTokens) {
    return oakColorTokens[value as OakColorToken];
  }

  // Oak UI role tokens (bg-decorative1-main, etc.)
  if (oakUiRoleTokens.includes(value as OakUiRoleToken)) {
    return ({ theme }: PropsWithTheme) => {
      const c = theme.uiColors[value as OakUiRoleToken];

      // Check if a registered extension token has been requested
      const registered = getRegistered(c);

      // Return the registered token or the default Oak color token
      return registered || oakColorTokens[c as OakColorToken];
    };
  }

  // Plugin-registered tokens (e.g., custom-* from external packages) - last
  if (typeof value === "string") {
    return getRegistered(value);
  }
}

export { parseColor };
