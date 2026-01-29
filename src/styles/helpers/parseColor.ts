import {
  OakColorToken,
  OakUiRoleToken,
  oakColorTokens,
  oakUiRoleTokens,
} from "@/styles/theme/color";
import { PropsWithTheme } from "@/styles/theme/theme";

/**
 * - takes any of OakUiRoleToken or null/undefined
 * - returns a function that takes the current theme and returns the corresponding css value
 */
function parseColor(): undefined;
function parseColor(
  value?: OakUiRoleToken | null,
): (props: PropsWithTheme) => string;
function parseColor(
  value?: OakUiRoleToken | null,
): ((props: PropsWithTheme) => string) | undefined;
function parseColor(value?: OakUiRoleToken | null) {
  if (value === undefined || value === null) {
    return undefined;
  }
  if (oakUiRoleTokens.includes(value)) {
    return ({ theme }: PropsWithTheme) => {
      const c = theme.uiColors[value];
      return oakColorTokens[c as OakColorToken];
    };
  }
}

export { parseColor };
