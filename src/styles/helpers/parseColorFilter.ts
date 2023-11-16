import {
  OakColorFilterToken,
  OakUiRoleToken,
  oakColorFilterTokens,
  oakUiRoleTokens,
} from "@/styles/theme/color";
import { OakCombinedColorToken } from "@/styles/theme";
import { PropsWithTheme } from "@/styles/theme/theme";

function parseColorFilter(
  value?: OakCombinedColorToken | null,
): (props: PropsWithTheme) => string;
function parseColorFilter(
  value?: OakCombinedColorToken | null,
): ((props: PropsWithTheme) => string) | undefined;
function parseColorFilter(value?: OakCombinedColorToken | null) {
  if (value === undefined || value === null) {
    return undefined;
  }
  if (value in oakColorFilterTokens) {
    return oakColorFilterTokens[value as OakColorFilterToken];
  }

  if (oakUiRoleTokens.includes(value as OakUiRoleToken)) {
    return ({ theme }: PropsWithTheme) => {
      const c = theme.uiColors[value as OakUiRoleToken];
      return oakColorFilterTokens[c as OakColorFilterToken];
    };
  }
}

export { parseColorFilter };
