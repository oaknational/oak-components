import {
  OakColor,
  OakParsableColor,
  OakUiRole,
  oakAllColorsHex,
  oakUiRoles,
} from "@/styles/theme/color";
import { PropsWithTheme } from "@/styles/theme/theme";

/**
 * - takes any of color token
 * - if an OakColor derives and returns the corresponding css value
 * - if an OakUiRole derives returns a function that takes the current theme and returns the corresponding css value
 */
export function parseColor(value?: OakParsableColor | null) {
  if (value === undefined || value === null) {
    return undefined;
  }
  if (value in oakAllColorsHex) {
    return `#${oakAllColorsHex[value as OakColor]}`;
  }

  if (oakUiRoles.includes(value as OakUiRole)) {
    return ({ theme }: PropsWithTheme) => {
      const c = theme.uiColors[value as OakUiRole];
      return `#${oakAllColorsHex[c as OakColor]}`;
    };
  }
}
