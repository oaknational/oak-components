import {
  OakColorToken,
  OakUiRoleToken,
  oakColorTokens,
  oakUiRoleTokens,
} from "@/styles/theme/color";
import { PropsWithTheme } from "@/styles/theme/theme";

/**
 * - takes OakColorToken, OakUiRoleToken, null or undefined
 * - if OakColorToken is passed, returns corresponding css value
 * - if OakUiRoleToken is passed, returns a function that takes the current theme and returns the corresponding css value
 * - if null or undefined is passed, returns undefined
 */
function parseColor(): undefined;
function parseColor(
  value?: OakColorToken | OakUiRoleToken | null,
): (props: PropsWithTheme) => string;
function parseColor(
  value?: OakUiRoleToken | null,
): ((props: PropsWithTheme) => string) | undefined;
function parseColor(value?: OakColorToken | OakUiRoleToken | null) {
  if (value === undefined || value === null) {
    return undefined;
  }
  if (value in oakColorTokens) {
    return oakColorTokens[value as OakColorToken];
  }
  if (oakUiRoleTokens.includes(value as OakUiRoleToken)) {
    return ({ theme }: PropsWithTheme) => {
      const c = theme.uiColors[value as OakUiRoleToken];
      return oakColorTokens[c as OakColorToken];
    };
  }
}

export { parseColor };
