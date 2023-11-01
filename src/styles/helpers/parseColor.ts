import {
  OakColor,
  OakParsableColor,
  OakUiRole,
  oakAllColorsHex,
  oakUiRoles,
} from "../theme/color";
import { PropsWithTheme } from "../theme/theme";

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
    return oakAllColorsHex[value as OakColor];
  }
  if (value in oakUiRoles) {
    return ({ theme }: PropsWithTheme) => theme.uiColors[value as OakUiRole];
  }
}
