import {
  OakColorToken,
  OakCombinedColorToken,
  OakUiRoleToken,
  oakColorTokens,
  oakUiRoleTokens,
} from "@/styles/theme/color";
import { PropsWithTheme } from "@/styles/theme/theme";

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
