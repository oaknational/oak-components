import {
  OakColorFilterToken,
  OakUiRoleToken,
  oakColorFilterTokens,
  oakUiRoleTokens,
} from "@/styles/theme/color";
import { OakColorToken } from "@/styles/theme";
import { PropsWithTheme } from "@/styles/theme/theme";

function parseColorFilter(
  value?: OakColorToken | OakUiRoleToken | null,
): (props: PropsWithTheme) => string;
function parseColorFilter(
  value?: OakColorToken | OakUiRoleToken | null,
): ((props: PropsWithTheme) => string) | undefined;
function parseColorFilter(value?: OakColorToken | OakUiRoleToken | null) {
  if (value === undefined || value === null) {
    return undefined;
  }
  if (value in oakColorFilterTokens) {
    return oakColorFilterTokens[value as OakColorFilterToken];
  }

  if (oakUiRoleTokens.includes(value as OakUiRoleToken)) {
    return ({ theme }: PropsWithTheme) => {
      const c = theme.uiColors[value as OakUiRoleToken];
      if (c && c in oakColorFilterTokens) {
        return oakColorFilterTokens[c as OakColorFilterToken];
      }
      return undefined;
    };
  }
}

export { parseColorFilter };
