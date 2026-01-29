import {
  OakColorFilterToken,
  OakUiRoleToken,
  oakColorFilterTokens,
  oakUiRoleTokens,
} from "@/styles/theme/color";
import { PropsWithTheme } from "@/styles/theme/theme";

/**
 * - takes any of OakUiRoleToken or null/undefined
 * - returns a function that takes the current theme and returns the corresponding css filter style for that token
 * - returns undefined if no filter is found for the token
 */
function parseColorFilter(
  value?: OakUiRoleToken | null,
): (props: PropsWithTheme) => string;
function parseColorFilter(
  value?: OakUiRoleToken | null,
): ((props: PropsWithTheme) => string) | undefined;
function parseColorFilter(value?: OakUiRoleToken | null) {
  if (value === undefined || value === null) {
    return undefined;
  }

  if (oakUiRoleTokens.includes(value)) {
    return ({ theme }: PropsWithTheme) => {
      const c = theme.uiColors[value];
      if (c && c in oakColorFilterTokens) {
        return oakColorFilterTokens[c as OakColorFilterToken];
      }
      return undefined;
    };
  }
}

export { parseColorFilter };
